"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

const ThreeGoldParticles = dynamic(() => import("../effects/ThreeGoldParticles"), { ssr: false });

export default function Footer() {
  return (
    <footer className="bg-gradient-navy-gold text-white/80 pt-16 pb-8 border-t border-gold/20 relative overflow-hidden">
      <ThreeGoldParticles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Suasion Group Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/70">
              Kolkata-based integrated financial services house. Helping families, professionals, and businesses borrow, protect, invest, and grow wealth across generations.
            </p>
            <div className="flex flex-col space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-4.5 w-4.5 text-gold shrink-0" />
                <span>C-12, 3rd floor, 41, B B Ganguly Street, Kolkata - 700012</span>
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
                  Suasion Services (Life Insurance)
                </Link>
              </li>
              <li>
                <Link href="/services#property" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                  Suasion Infrastructure (Property)
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
                <Link href="/about#timeline" className="hover:text-gold transition-colors">Our Journey Timeline</Link>
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

        </div>

        {/* Regulatory Warnings / Disclaimers (Summary) */}
        <div className="py-8 border-b border-white/10 text-[11px] leading-relaxed text-white/50 space-y-3">
          <p>
            <strong className="text-gold">Suasion Finvest Private Limited:</strong> All financial services and lending options are subject to regulatory norms, eligibility criteria, credit checks, and internal assessments.
          </p>
          <p>
            <strong className="text-gold">Suasion Services Private Limited:</strong> Insurance is the subject matter of solicitation. Policies and payouts are subject to the terms of the policy contract issued by our partners: Aditya Birla Sun Life Insurance, LIC, and Bajaj Allianz Life Insurance.
          </p>
          <p>
            <strong className="text-gold">Suasion Infrastructure Private Limited:</strong> Property investments are subject to market risks, municipal clearances, and title verification. Past yield trends do not guarantee future returns.
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
