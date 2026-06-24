"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

const ThreeGoldParticles = dynamic(() => import("../effects/ThreeGoldParticles"), { ssr: false });

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/newsletter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setMessage("Thank you for subscribing to our newsletter.");
      } else {
        const errData = await response.json();
        setStatus("error");
        setMessage(errData.message || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Connection error. Please try again later.");
    }
  };

  return (
    <footer className="bg-gradient-navy-gold text-white/80 pt-16 pb-8 border-t border-gold/20 relative overflow-hidden">
      <ThreeGoldParticles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-gold/40 shadow">
                <span className="text-gold font-serif font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-lg tracking-wider leading-none">
                  SUASION
                </span>
                <span className="text-[10px] text-gold tracking-widest leading-none mt-1">
                  GROUP
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              Kolkata-based integrated financial services house. Helping families, professionals, and businesses borrow, protect, invest, and grow wealth across generations.
            </p>
            <div className="flex flex-col space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-4.5 w-4.5 text-gold shrink-0" />
                <span>Kolkata, West Bengal</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-gold shrink-0" />
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+919903040304"}`} className="hover:text-gold transition-colors">
                  {process.env.NEXT_PUBLIC_PHONE || "+91 9903040304"}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-gold shrink-0" />
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "info@suasion.in"}`} className="hover:text-gold transition-colors">
                  {process.env.NEXT_PUBLIC_EMAIL || "info@suasion.in"}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-white text-base tracking-wide border-b border-gold/20 pb-2">
              Our Verticals
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services#nbfc" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                  Suasion Finvest (NBFC)
                </Link>
              </li>
              <li>
                <Link href="/services#insurance" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                  Insurance Distribution
                </Link>
              </li>
              <li>
                <Link href="/services#property" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                  Property Investments
                </Link>
              </li>
              <li>
                <Link href="/services#securities" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                  Suasion Securities (Mutual Funds)
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Links */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-white text-base tracking-wide border-b border-gold/20 pb-2">
              Corporate
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">Our Legacy & About Us</Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-gold transition-colors">Leadership Team</Link>
              </li>
              <li>
                <Link href="/journey" className="hover:text-gold transition-colors">Our Journey Timeline</Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-gold transition-colors">Resources & Insights</Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-gold transition-colors">Compliance & Disclaimers</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-white text-base tracking-wide border-b border-gold/20 pb-2">
              Financial Insights
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              Subscribe to our monthly newsletter for insights on asset allocation, market trends, and financial planning.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 text-white placeholder-white/40 text-sm px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gold border border-white/20 flex-grow"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-gold text-navy px-3 py-2 rounded hover:bg-white hover:text-navy transition-all duration-300 font-bold shrink-0 disabled:opacity-50"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {status === "success" && (
                <div className="flex items-center gap-1.5 text-emerald text-xs bg-emerald/10 p-2 rounded border border-emerald/20">
                  <CheckCircle2 className="h-4 w-4 text-emerald" />
                  <span>{message}</span>
                </div>
              )}
              {status === "error" && (
                <p className="text-red-400 text-xs bg-red-900/10 p-2 rounded border border-red-500/20">
                  {message}
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Regulatory Warnings / Disclaimers (Summary) */}
        <div className="py-8 border-b border-white/10 text-[11px] leading-relaxed text-white/50 space-y-3">
          <p>
            <strong className="text-gold">Suasion Finvest Private Limited:</strong> All financial services and lending options are subject to regulatory norms, eligibility criteria, credit checks, and internal assessments.
          </p>
          <p>
            <strong className="text-gold">Suasion Services Private Limited:</strong> Insurance is the subject matter of solicitation. Mutual funds and property investments are subject to market risks. Please read all scheme-related documents carefully before investing. Partners: Bajaj Allianz Life Insurance, LIC, Aditya Birla Sun Life Insurance.
          </p>
          <p>
            <strong className="text-gold">Suasion Securities:</strong> Mutual fund distribution is governed by AMFI guidelines. Mutual fund investments are subject to market risks. Past performance does not guarantee future results.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} Suasion Group. All rights reserved.</p>
          <p>
            Designed & developed for <span className="text-gold font-medium">Suasion Group Kolkata</span>.
          </p>
        </div>

      </div>
    </footer>
  );
}
