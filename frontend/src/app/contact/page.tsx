"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, MessageSquare, ArrowRight, Send } from "lucide-react";

// Email mailto link generator based on service interest
const getMailtoLink = (lead: any) => {
  if (!lead) return "#";
  const email = "info@suasion.in";
  
  const subjectTemplates: Record<string, string> = {
    GENERAL: `General Financial Inquiry - ${lead.fullName}`,
    NBFC_FINANCE: `NBFC Lending / Business Credit Inquiry - ${lead.fullName}`,
    INSURANCE: `Life Insurance & Estate Preservation Request - ${lead.fullName}`,
    PROPERTY_INVESTMENT: `Property Advisory & Yield Consultation - ${lead.fullName}`,
    MUTUAL_FUND: `Mutual Fund Portfolio & SIP Allocation - ${lead.fullName}`,
    PARTNERSHIP: `Associate Partnership Proposal - ${lead.fullName}`,
  };

  const bodyTemplates: Record<string, string> = {
    GENERAL: `Dear Suasion Group Advisory Desk,\n\nI have submitted an inquiry for general financial services on your website. Below is a copy of my details:\n\n- Name: ${lead.fullName}\n- Phone: ${lead.phone}\n- City: ${lead.city}\n- Preferred Channel: ${lead.preferredContactMethod}\n- Inquiry Details:\n${lead.message}\n\nI look forward to discussing this further.\n\nBest regards,\n${lead.fullName}`,
    
    NBFC_FINANCE: `Dear Suasion Finvest Lending Desk,\n\nI have submitted a corporate/business financing inquiry. Below are the details:\n\n- Name: ${lead.fullName}\n- Phone: ${lead.phone}\n- City: ${lead.city}\n- Preferred Channel: ${lead.preferredContactMethod}\n- Financing Details:\n${lead.message}\n\nI look forward to discussing our borrowing requirements with an advisor.\n\nBest regards,\n${lead.fullName}`,
    
    INSURANCE: `Dear Suasion Services Protection Desk,\n\nI have submitted a life insurance / estate protection consultation request. Below are my details:\n\n- Name: ${lead.fullName}\n- Phone: ${lead.phone}\n- City: ${lead.city}\n- Preferred Channel: ${lead.preferredContactMethod}\n- Protection Details:\n${lead.message}\n\nI look forward to our estate planning discussion.\n\nBest regards,\n${lead.fullName}`,
    
    PROPERTY_INVESTMENT: `Dear Suasion Services Property Desk,\n\nI have submitted an inquiry regarding property investments and rental yield advisory. Below are the details:\n\n- Name: ${lead.fullName}\n- Phone: ${lead.phone}\n- City: ${lead.city}\n- Preferred Channel: ${lead.preferredContactMethod}\n- Property Inquiry Details:\n${lead.message}\n\nI look forward to reviewing commercial and real estate yield opportunities.\n\nBest regards,\n${lead.fullName}`,
    
    MUTUAL_FUND: `Dear Suasion Securities Wealth Desk,\n\nI have submitted an inquiry for mutual fund systematic investment planning (SIP) and portfolio allocation review. Below are the details:\n\n- Name: ${lead.fullName}\n- Phone: ${lead.phone}\n- City: ${lead.city}\n- Preferred Channel: ${lead.preferredContactMethod}\n- Portfolio Details:\n${lead.message}\n\nI look forward to speaking with a wealth manager.\n\nBest regards,\n${lead.fullName}`,
    
    PARTNERSHIP: `Dear Suasion Group Directors,\n\nI have submitted a partnership proposal on the Suasion Group desk. Below are the details:\n\n- Name: ${lead.fullName}\n- Phone: ${lead.phone}\n- City: ${lead.city}\n- Preferred Channel: ${lead.preferredContactMethod}\n- Proposal Details:\n${lead.message}\n\nI look forward to discussing associate synergy options.\n\nBest regards,\n${lead.fullName}`,
  };

  const subject = encodeURIComponent(subjectTemplates[lead.serviceInterest] || `Inquiry - ${lead.fullName}`);
  const body = encodeURIComponent(bodyTemplates[lead.serviceInterest] || lead.message);
  
  return `mailto:${email}?subject=${subject}&body=${body}`;
};

// Wrap form in a suspense component since it uses useSearchParams
function ContactForm() {
  const searchParams = useSearchParams();
  const serviceType = searchParams.get("type");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    serviceInterest: "GENERAL",
    preferredContactMethod: "PHONE",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedLead, setSubmittedLead] = useState<any>(null);

  // Map query types to enum values
  useEffect(() => {
    if (serviceType) {
      const typeMap: Record<string, string> = {
        nbfc: "NBFC_FINANCE",
        insurance: "INSURANCE",
        property: "PROPERTY_INVESTMENT",
        mutual_fund: "MUTUAL_FUND",
        partnership: "PARTNERSHIP",
      };
      if (typeMap[serviceType]) {
        setFormData((prev) => ({ ...prev, serviceInterest: typeMap[serviceType] }));
      }
    }
  }, [serviceType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMessage("Please accept the consent terms to proceed.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/inquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const resData = await response.json();
        setSubmittedLead(resData.data);
        setStatus("success");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          city: "",
          serviceInterest: "GENERAL",
          preferredContactMethod: "PHONE",
          message: "",
          consent: false,
        });
      } else {
        const errData = await response.json();
        setStatus("error");
        setErrorMessage(errData.message || "Failed to submit inquiry. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Connection error. Please check your internet or try again later.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  // Pre-generate WhatsApp message (Updated to 919903040304)
  const whatsappUrl = `https://wa.me/${
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919903040304"
  }?text=Hello%20Suasion%20Group%20desk,%20I%20would%20like%20to%20schedule%20a%20consultation.`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Direct Contact Details Left Column */}
      <div className="lg:col-span-5 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-navy">
            Advisory Desk Kolkata
          </h2>
          <p className="text-sm text-charcoal/70 leading-relaxed text-wrap">
            Book an appointment at our Kolkata headquarters or request a call from a vertical advisor. Our directors directly review all proposals.
          </p>
        </div>

        <div className="space-y-6">
          
          <div className="flex gap-4 p-4 bg-white rounded-lg border border-gold/15 shadow-sm">
            <MapPin className="h-6 w-6 text-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-navy text-sm">Office Location</h4>
              <p className="text-xs text-charcoal/70 mt-1">Kolkata, West Bengal, India</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white rounded-lg border border-gold/15 shadow-sm">
            <Phone className="h-6 w-6 text-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-navy text-sm">Direct Phone</h4>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+919903040304"}`} className="text-xs text-charcoal/70 hover:text-gold transition-colors block mt-1">
                {process.env.NEXT_PUBLIC_PHONE || "+91 9903040304"}
              </a>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white rounded-lg border border-gold/15 shadow-sm">
            <Mail className="h-6 w-6 text-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-navy text-sm">Email Inbox</h4>
              <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "info@suasion.in"}`} className="text-xs text-charcoal/70 hover:text-gold transition-colors block mt-1">
                {process.env.NEXT_PUBLIC_EMAIL || "info@suasion.in"}
              </a>
            </div>
          </div>

        </div>

        {/* WhatsApp Click to Chat */}
        <div className="bg-emerald/5 p-6 rounded-xl border border-emerald/20 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-emerald font-bold text-sm">
            <MessageSquare className="h-5 w-5" />
            <span>Instant Chat Support</span>
          </div>
          <p className="text-xs text-charcoal/70 leading-relaxed">
            Need immediate assistance? Chat directly with our client desk via WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center py-2.5 bg-emerald hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
          >
            Chat on WhatsApp
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

      </div>

      {/* Inquiry Form Right Column */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-gold/15 p-6 md:p-10 shadow-sm">
        
        {status === "success" ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center text-emerald mx-auto border border-emerald/20">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-navy">Inquiry Received & Logged</h3>
              <p className="text-xs text-charcoal/70 max-w-md mx-auto leading-relaxed">
                Your consultation request has been successfully recorded in our database on Neon.
              </p>
            </div>

            {/* Expeditious Email Client Direction CTA */}
            {submittedLead && (
              <div className="bg-navy/5 rounded-xl border border-gold/20 p-6 text-left space-y-4 max-w-md mx-auto">
                <div className="flex items-center gap-2 text-navy font-bold text-xs uppercase tracking-wider">
                  <Mail className="h-4.5 w-4.5 text-gold" />
                  <span>Expedite Your Consultation</span>
                </div>
                <p className="text-[11px] text-charcoal/80 leading-relaxed">
                  Click the button below to open your local mail client with a pre-filled template. Sending this mail directly to <strong className="text-navy">info@suasion.in</strong> ensures immediate routing to our directors.
                </p>
                <a
                  href={getMailtoLink(submittedLead)}
                  className="w-full inline-flex items-center justify-center py-3 bg-navy hover:bg-gold text-white hover:text-navy text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 shadow-md gap-2"
                >
                  <Send className="h-3.5 w-3.5" />
                  Send Confirmation Email
                </a>
              </div>
            )}

            <div>
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-2.5 bg-white text-navy hover:bg-ivory border border-navy/20 text-xs font-bold uppercase tracking-wider rounded transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-serif font-bold text-navy border-b border-gold/10 pb-3">
              Confidential Consultation Request
            </h3>

            {status === "error" && (
              <div className="flex gap-2.5 bg-red-50 p-4 rounded border border-red-200 text-xs text-red-800">
                <AlertCircle className="h-4.5 w-4.5 text-red-600 shrink-0 mt-0.5" />
                <p>{errorMessage}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-xs font-semibold text-charcoal/80">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Ashok Kumar"
                  className="w-full text-sm bg-ivory/30 border border-gold/20 rounded px-3 py-2.5 focus:outline-none focus:border-navy"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs font-semibold text-charcoal/80">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="10-digit number"
                  className="w-full text-sm bg-ivory/30 border border-gold/20 rounded px-3 py-2.5 focus:outline-none focus:border-navy"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-semibold text-charcoal/80">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="name@example.com"
                  className="w-full text-sm bg-ivory/30 border border-gold/20 rounded px-3 py-2.5 focus:outline-none focus:border-navy"
                />
              </div>

              {/* City */}
              <div className="space-y-2">
                <label htmlFor="city" className="block text-xs font-semibold text-charcoal/80">
                  City / Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Kolkata"
                  className="w-full text-sm bg-ivory/30 border border-gold/20 rounded px-3 py-2.5 focus:outline-none focus:border-navy"
                />
              </div>

              {/* Service Interest */}
              <div className="space-y-2">
                <label htmlFor="serviceInterest" className="block text-xs font-semibold text-charcoal/80">
                  Service Interest <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleInputChange}
                  className="w-full text-sm bg-ivory/30 border border-gold/20 rounded px-3 py-2.5 focus:outline-none focus:border-navy"
                >
                  <option value="GENERAL">General Inquiry</option>
                  <option value="NBFC_FINANCE">NBFC / Finance Inquiry</option>
                  <option value="INSURANCE">Insurance Consultation</option>
                  <option value="PROPERTY_INVESTMENT">Property Investment Advisory</option>
                  <option value="MUTUAL_FUND">Mutual Fund Consultation</option>
                  <option value="PARTNERSHIP">Partnership Inquiry</option>
                </select>
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-2">
                <label htmlFor="preferredContactMethod" className="block text-xs font-semibold text-charcoal/80">
                  Preferred Contact Method
                </label>
                <select
                  id="preferredContactMethod"
                  name="preferredContactMethod"
                  value={formData.preferredContactMethod}
                  onChange={handleInputChange}
                  className="w-full text-sm bg-ivory/30 border border-gold/20 rounded px-3 py-2.5 focus:outline-none focus:border-navy"
                >
                  <option value="PHONE">Phone Call</option>
                  <option value="WHATSAPP">WhatsApp Message</option>
                  <option value="EMAIL">Email Correspondence</option>
                </select>
              </div>

            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-semibold text-charcoal/80">
                Brief details of your query <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Please describe your requirements (e.g. loan size, protection goals, wealth horizon)..."
                className="w-full text-sm bg-ivory/30 border border-gold/20 rounded px-3 py-2.5 focus:outline-none focus:border-navy resize-none"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleCheckboxChange}
                required
                className="mt-1 h-4 w-4 border-gold/30 rounded text-navy focus:ring-navy"
              />
              <label htmlFor="consent" className="text-[11px] text-charcoal/60 leading-normal">
                I hereby consent to Suasion Group storing my submitted data and contacting me regarding financial services in compliance with the website's <a href="/privacy" target="_blank" className="text-navy hover:text-gold font-bold underline">Privacy Policy</a>.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 bg-navy hover:bg-gold hover:text-navy text-white text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 shadow-sm disabled:opacity-50"
              >
                {status === "loading" ? "Submitting Request..." : "Submit Inquiry"}
              </button>
            </div>

          </form>
        )}

      </div>
      
    </div>
  );
}

export default function Contact() {
  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
          Connect with Our Advisory Desk
        </h1>
        <p className="text-base text-charcoal/80">
          Have an inquiry for lending, insurance, property, or wealth advisory? Submit the secure form below.
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-20 text-sm text-charcoal/60">Loading contact details...</div>}>
        <ContactForm />
      </Suspense>

    </div>
  );
}
