"use client";

import { useState, useEffect } from "react";
import { 
  Users, 
  Filter, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  AlertCircle
} from "lucide-react";

interface Lead {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  serviceInterest: "GENERAL" | "NBFC_FINANCE" | "INSURANCE" | "PROPERTY_INVESTMENT" | "MUTUAL_FUND" | "PARTNERSHIP";
  preferredContactMethod: "PHONE" | "WHATSAPP" | "EMAIL";
  message: string;
  status: "NEW" | "CONTACTED" | "IN_PROGRESS" | "CONVERTED" | "CLOSED";
  createdAt: string;
}

const statusColors = {
  NEW: "bg-blue-100 text-blue-800 border-blue-200",
  CONTACTED: "bg-amber-100 text-amber-800 border-amber-200",
  IN_PROGRESS: "bg-purple-100 text-purple-800 border-purple-200",
  CONVERTED: "bg-emerald-100 text-emerald-800 border-emerald-200",
  CLOSED: "bg-gray-100 text-gray-800 border-gray-200",
};

const serviceLabels = {
  GENERAL: "General Inquiry",
  NBFC_FINANCE: "NBFC Lending",
  INSURANCE: "Insurance Plan",
  PROPERTY_INVESTMENT: "Property Advisory",
  MUTUAL_FUND: "Mutual Fund",
  PARTNERSHIP: "Partnership Desk",
};

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [filterInterest, setFilterInterest] = useState<string>("ALL");
  const [filterStatus, setFilterStatus] = useState<string>("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/inquiries`
      );
      if (response.ok) {
        const resData = await response.json();
        setLeads(resData.data);
        setFilteredLeads(resData.data);
      } else {
        setError("Failed to fetch lead data from the server.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to the backend API server. Make sure it is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Filter leads whenever data or filter state changes
  useEffect(() => {
    let result = leads;
    if (filterInterest !== "ALL") {
      result = result.filter(lead => lead.serviceInterest === filterInterest);
    }
    if (filterStatus !== "ALL") {
      result = result.filter(lead => lead.status === filterStatus);
    }
    setFilteredLeads(result);
  }, [leads, filterInterest, filterStatus]);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    setSuccessMsg("");
    setError("");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/inquiries/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (response.ok) {
        setLeads(prev =>
          prev.map(lead => (lead.id === id ? { ...lead, status: newStatus as any } : lead))
        );
        setSuccessMsg("Lead status updated successfully.");
      } else {
        setError("Failed to update lead status.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error updating lead status.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!window.confirm("Are you sure you want to permanently delete this lead?")) return;

    setSuccessMsg("");
    setError("");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/inquiries/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setLeads(prev => prev.filter(lead => lead.id !== id));
        setSuccessMsg("Lead inquiry deleted successfully.");
      } else {
        setError("Failed to delete lead from database.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error deleting lead.");
    }
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gold/15 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-navy font-bold">
            <Users className="h-6 w-6 text-gold" />
            <h1 className="text-3xl font-serif">Inquiry & Lead Management</h1>
          </div>
          <p className="text-xs text-charcoal/60 uppercase tracking-widest font-semibold">
            Suasion Group Administration Portal
          </p>
        </div>
        <button
          onClick={fetchLeads}
          className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-gold hover:text-navy transition-colors shadow-sm"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Refresh Leads
        </button>
      </div>

      {/* Alert states */}
      {error && (
        <div className="flex gap-2.5 bg-red-50 p-4 rounded border border-red-200 text-xs text-red-800">
          <AlertCircle className="h-4.5 w-4.5 text-red-600 shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      {successMsg && (
        <div className="flex gap-2.5 bg-emerald-50 p-4 rounded border border-emerald-200 text-xs text-emerald-800">
          <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
          <p>{successMsg}</p>
        </div>
      )}

      {/* Filters Bar */}
      <div className="bg-white rounded-lg border border-gold/15 p-4 flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-wider">
          <Filter className="h-4 w-4 text-gold" />
          <span>Filters:</span>
        </div>

        {/* Service filter */}
        <div className="flex items-center gap-1.5 text-xs text-charcoal/80">
          <span>Vertical:</span>
          <select
            value={filterInterest}
            onChange={(e) => setFilterInterest(e.target.value)}
            className="border border-gold/20 rounded px-2.5 py-1.5 focus:outline-none focus:border-navy bg-ivory/20"
          >
            <option value="ALL">All Services</option>
            <option value="GENERAL">General Inquiry</option>
            <option value="NBFC_FINANCE">NBFC Lending</option>
            <option value="INSURANCE">Insurance Plan</option>
            <option value="PROPERTY_INVESTMENT">Property Advisory</option>
            <option value="MUTUAL_FUND">Mutual Fund</option>
            <option value="PARTNERSHIP">Partnership Desk</option>
          </select>
        </div>

        {/* Status filter */}
        <div className="flex items-center gap-1.5 text-xs text-charcoal/80">
          <span>Status:</span>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gold/20 rounded px-2.5 py-1.5 focus:outline-none focus:border-navy bg-ivory/20"
          >
            <option value="ALL">All Statuses</option>
            <option value="NEW">New</option>
            <option value="CONTACTED">Contacted</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="CONVERTED">Converted</option>
            <option value="CLOSED">Closed</option>
          </select>
        </div>

        <div className="ml-auto text-xs text-charcoal/60 font-numbers">
          Showing {filteredLeads.length} of {leads.length} inquiries
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl border border-gold/15 overflow-hidden shadow-sm">
        
        {loading ? (
          <div className="text-center py-20 text-sm text-charcoal/60 flex flex-col justify-center items-center gap-3">
            <RefreshCw className="h-8 w-8 text-gold animate-spin" />
            <span>Retrieving consultation requests...</span>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-20 text-sm text-charcoal/50">
            No inquiries match the active filter criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy text-white text-xs uppercase tracking-wider">
                  <th className="p-4 font-semibold font-serif">Date & Client</th>
                  <th className="p-4 font-semibold font-serif">Contact Info</th>
                  <th className="p-4 font-semibold font-serif">Inquiry Vertical</th>
                  <th className="p-4 font-semibold font-serif">Details</th>
                  <th className="p-4 font-semibold font-serif">Status</th>
                  <th className="p-4 font-semibold font-serif text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/10 text-xs text-charcoal/80">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-ivory/20 transition-colors">
                    
                    {/* Date & Name */}
                    <td className="p-4 space-y-1">
                      <span className="block font-bold text-navy text-sm">{lead.fullName}</span>
                      <span className="block text-[10px] text-charcoal/50 font-numbers">
                        {new Date(lead.createdAt).toLocaleString("en-IN")}
                      </span>
                    </td>

                    {/* Contact details */}
                    <td className="p-4 space-y-1">
                      <span className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-gold" />
                        <a href={`tel:${lead.phone}`} className="hover:underline">{lead.phone}</a>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-gold" />
                        <a href={`mailto:${lead.email}`} className="hover:underline">{lead.email}</a>
                      </span>
                      <span className="flex items-center gap-1.5 text-charcoal/60">
                        <MapPin className="h-3.5 w-3.5 text-gold" />
                        <span>{lead.city}</span>
                      </span>
                    </td>

                    {/* Service Category */}
                    <td className="p-4">
                      <span className="font-bold text-navy bg-navy/5 px-2.5 py-1 rounded border border-navy/10">
                        {serviceLabels[lead.serviceInterest]}
                      </span>
                    </td>

                    {/* Message details */}
                    <td className="p-4 max-w-xs">
                      <div className="flex gap-1.5 bg-ivory/40 p-2.5 rounded border border-gold/10">
                        <MessageSquare className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <p className="line-clamp-3 text-[11px] leading-relaxed text-wrap">
                          {lead.message}
                        </p>
                      </div>
                      <div className="mt-1.5 flex gap-2 text-[10px] text-charcoal/50">
                        <span>Preferred channel: <strong>{lead.preferredContactMethod}</strong></span>
                      </div>
                    </td>

                    {/* Lead Status */}
                    <td className="p-4">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        disabled={updatingId === lead.id}
                        className={`text-[11px] font-bold border rounded px-2.5 py-1 focus:outline-none ${statusColors[lead.status]}`}
                      >
                        <option value="NEW">NEW</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="CONVERTED">CONVERTED</option>
                        <option value="CLOSED">CLOSED</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="p-4 text-right">
                      <button
                        onClick={() => handleDeleteLead(lead.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded border border-transparent hover:border-red-200 transition-colors"
                        title="Delete inquiry"
                        aria-label="Delete inquiry"
                      >
                        <Trash2 className="h-4.5 w-4.5" />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>

    </div>
  );
}
