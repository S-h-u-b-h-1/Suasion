"use client";

import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Building2, 
  Award, 
  Users, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2,
  DollarSign,
  Briefcase,
  Layers
} from "lucide-react";

// No revolving logo import needed
const ThreeGoldParticles = dynamic(() => import("../components/effects/ThreeGoldParticles"), { ssr: false });

// FAQ Data
const faqs = [
  {
    question: "What entities comprise Suasion Group?",
    answer: "Suasion Group operates through four core verticals: Suasion Finvest Private Limited (our NBFC lending backbone, established in 1995), Suasion Services Private Limited (focusing on life insurance distribution, established in 2011), Suasion Infrastructure Private Limited (focusing on property investment advisory and infrastructure development, established in 2017), and Suasion Securities (our modern wealth management and mutual fund distribution arm, launched in 2024)."
  },
  {
    question: "Where is Suasion Group based?",
    answer: "Our group headquarters is located in Kolkata, West Bengal. We have a rich legacy in Eastern India, serving clients across the region with a deep commitment to local relationships and local wealth creation."
  },
  {
    question: "Who are your insurance partners?",
    answer: "Suasion Services Private Limited partners with top-tier insurance companies, including Aditya Birla Sun Life Insurance, LIC (Life Insurance Corporation of India), and Bajaj Allianz Life Insurance, to offer robust protection and guaranteed income plans."
  },
  {
    question: "Do you offer lending solutions for businesses?",
    answer: "Yes. Through Suasion Finvest Private Limited (NBFC), we offer lending solutions, business funding, structured finance, and investment-backed financial support to help enterprises grow."
  },
  {
    question: "How do I start investing in mutual funds with Suasion Securities?",
    answer: "You can book a wealth consultation on our Contact page. Our team will perform a risk profiling and asset allocation analysis to design a goal-based SIP or lumpsum investment portfolio tailored to your needs."
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-24 pb-20">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FinancialService",
                "@id": "https://www.suasion.in/#organization",
                "name": "Suasion Group",
                "url": "https://www.suasion.in",
                "logo": "https://www.suasion.in/logo.png",
                "image": "https://www.suasion.in/logo.png",
                "description": "Suasion Group Kolkata is a trusted financial services house operating Suasion Finvest (NBFC), Suasion Services (Insurance), Suasion Infrastructure (Property), and Suasion Securities. Led by CA Ashok Kataruka, Sumaan Shree Kataruka, and Shubhaang Kataruka.",
                "telephone": "+919903040304",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "C-12, 3rd floor, 41, B B Ganguly Street",
                  "addressLocality": "Kolkata",
                  "addressRegion": "West Bengal",
                  "postalCode": "700012",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "22.5726",
                  "longitude": "88.3639"
                },
                "founder": [
                  {
                    "@type": "Person",
                    "@id": "https://www.suasion.in/#ashok-kataruka",
                    "name": "Ashok Kataruka",
                    "jobTitle": "Founder & Senior Leader (Chartered Accountant)",
                    "worksFor": {
                      "@id": "https://www.suasion.in/#organization"
                    }
                  }
                ],
                "employee": [
                  {
                    "@type": "Person",
                    "@id": "https://www.suasion.in/#ashok-kataruka",
                    "name": "Ashok Kataruka",
                    "jobTitle": "Founder & Chartered Accountant"
                  },
                  {
                    "@type": "Person",
                    "@id": "https://www.suasion.in/#sumaan-kataruka",
                    "name": "Sumaan Shree Kataruka",
                    "jobTitle": "Director"
                  },
                  {
                    "@type": "Person",
                    "@id": "https://www.suasion.in/#shubhaang-kataruka",
                    "name": "Shubhaang Kataruka",
                    "jobTitle": "Director & Next-Gen Leader"
                  }
                ],
                "foundingDate": "1995-01-05",
                "sameAs": [
                  "https://www.suasion.in"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://www.suasion.in/#website",
                "url": "https://www.suasion.in",
                "name": "Suasion Group",
                "publisher": {
                  "@id": "https://www.suasion.in/#organization"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://www.suasion.in/#webpage",
                "url": "https://www.suasion.in",
                "name": "Suasion Group | Integrated Financial Services Kolkata",
                "isPartOf": {
                  "@id": "https://www.suasion.in/#website"
                },
                "about": {
                  "@id": "https://www.suasion.in/#organization"
                },
                "description": "Suasion Group is a Kolkata-based multi-generational financial services house operating across NBFC lending, insurance distribution, property investments, and mutual fund distribution. Guiding wealth across generations."
              }
            ]
          }),
        }}
      />
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-20 lg:pt-28 pb-16 md:pb-24">
        {/* Ambient 3D background particles */}
        <ThreeGoldParticles />

        {/* Luxury Background Glows */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/10 right-1/10 w-96 h-96 rounded-full bg-navy/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy/5 border border-gold/20 backdrop-blur-sm shadow-sm">
                <Award className="h-4 w-4 text-gold" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-navy">
                  Kolkata's Legacy Financial Partner Since 1995
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy leading-tight tracking-tight text-wrap">
                Guiding Wealth <br />
                <span className="text-gold-gradient italic font-medium">Across Generations</span>
              </h1>
              <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-wrap">
                Suasion Group is a Kolkata-based integrated financial services group helping families, professionals, entrepreneurs, and businesses borrow, protect, invest, and grow wealth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wider bg-navy text-white hover:bg-gold hover:text-navy rounded border border-navy hover:border-gold transition-all duration-300 shadow-md"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wider bg-white text-navy hover:bg-navy hover:text-white rounded border border-navy/20 hover:border-navy transition-all duration-300 shadow-sm"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center w-full">
              <div className="w-full max-w-[450px] aspect-square relative flex items-center justify-center p-4">
                <img
                  src="/logo.png"
                  alt="Suasion Group Logo"
                  className="w-full h-auto object-contain drop-shadow-[0_10px_25px_rgba(212,175,55,0.08)]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Trust Stats Section */}
      <section className="bg-gradient-navy-gold py-16 text-white relative overflow-hidden">
        <ThreeGoldParticles />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="space-y-2">
              <span className="block text-4xl sm:text-5xl font-bold text-gold stats-number">1995</span>
              <span className="block text-xs sm:text-sm uppercase tracking-widest text-white/70">Legacy of Trust</span>
            </div>
            <div className="space-y-2">
              <span className="block text-4xl sm:text-5xl font-bold text-gold stats-number">4</span>
              <span className="block text-xs sm:text-sm uppercase tracking-widest text-white/70">Core Companies</span>
            </div>
            <div className="space-y-2">
              <span className="block text-4xl sm:text-5xl font-bold text-gold stats-number">Kolkata</span>
              <span className="block text-xs sm:text-sm uppercase tracking-widest text-white/70">Headquarters</span>
            </div>
            <div className="space-y-2">
              <span className="block text-4xl sm:text-5xl font-bold text-gold stats-number">Multi-Gen</span>
              <span className="block text-xs sm:text-sm uppercase tracking-widest text-white/70">Client Relationships</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="h-1 w-12 bg-gold" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              A Family Legacy in Kolkata Financial Services
            </h2>
            <p className="text-sm uppercase tracking-widest text-gold font-semibold">
              Suasion Group
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6 text-charcoal/80 leading-relaxed text-wrap">
            <p>
              Established on 05 January 1995 with the incorporation of Suasion Finvest Private Limited by Ashok Kataruka, Suasion Group has evolved from a pioneering NBFC lending company into a comprehensive multi-company family office. For over three decades, the Kataruka family has remained committed to Kolkata's business community, serving three generations of clients with an unyielding standard of relationship-driven, conservative stewardship.
            </p>
            <p>
              Our operations span structured corporate lending (Suasion Finvest), generational life insurance protection (Suasion Services), commercial property yield advisory (Suasion Infrastructure), and active mutual fund wealth allocation (Suasion Securities). Under the guiding hand of the Kataruka family, we bridges traditional financial discipline with modern digital portfolio management tools, operating under a singular commitment: <strong>your long-term trust is our ultimate asset</strong>.
            </p>
            <div>
              <Link 
                href="/about" 
                className="inline-flex items-center text-navy font-bold text-sm group hover:text-gold transition-colors duration-200"
              >
                Read Our Full Story
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Companies / Verticals Cards (Obsidian Dark with Gold accents & floating 3D dust) */}
      <section className="bg-obsidian py-20 border-y border-gold/20 relative overflow-hidden text-white/80">
        <ThreeGoldParticles />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Our Core Companies
            </h2>
            <p className="text-sm text-white/70 max-w-xl mx-auto">
              Our businesses are organized into dedicated verticals, providing tailored expertise under a unified standard of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Suasion Finvest */}
            <div className="glass-panel-dark glass-panel-dark-hover p-8 rounded-xl flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/30 text-gold shadow-sm">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold block">
                    NBFC Vertical
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    Suasion Finvest Pvt Ltd
                  </h3>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  Established in 1995, Suasion Finvest represents the group's lending backbone. We offer tailored business funding, structured finance, and investment-backed capital solutions.
                </p>
                <ul className="text-xs space-y-2.5 text-white/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    Business Lending & Expansion Capital
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    Structured Finance Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    Incorporated 05 January 1995
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link 
                  href="/services#nbfc"
                  className="w-full inline-flex items-center justify-center py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-navy hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all duration-300 font-bold"
                >
                  Explore Lending
                </Link>
              </div>
            </div>

            {/* Card 2: Suasion Services */}
            <div className="glass-panel-dark glass-panel-dark-hover p-8 rounded-xl flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/30 text-gold shadow-sm">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold block">
                    Protection Arm
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    Suasion Services Pvt Ltd
                  </h3>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  Our life insurance and estate protection arm. Backed by 3 MDRT qualifications in our family (Sumaan Shree Kataruka twice, and Shubhaang Kataruka once as the youngest MDRT at ABSLI).
                </p>
                <ul className="text-xs space-y-2.5 text-white/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    Aditya Birla Life, LIC & Bajaj Allianz
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    3 MDRTs in the family (last 3 years)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    Life, Term & Guaranteed Income
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link 
                  href="/services#insurance"
                  className="w-full inline-flex items-center justify-center py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-navy hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all duration-300 font-bold"
                >
                  Explore Protection
                </Link>
              </div>
            </div>

            {/* Card 3: Suasion Infrastructure */}
            <div className="glass-panel-dark glass-panel-dark-hover p-8 rounded-xl flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/30 text-gold shadow-sm">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold block">
                    Property & Real Assets
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    Suasion Infrastructure Pvt Ltd
                  </h3>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  Our real estate investment advisory arm. We help clients acquire high-yield commercial and residential properties, providing rental yield modeling and rigorous due diligence.
                </p>
                <ul className="text-xs space-y-2.5 text-white/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    Commercial Sourcing & Yield Modeling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    Title Due Diligence & Market Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    Incorporated 12 May 2017
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link 
                  href="/services#property"
                  className="w-full inline-flex items-center justify-center py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-navy hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all duration-300 font-bold"
                >
                  Explore Property
                </Link>
              </div>
            </div>

            {/* Card 4: Suasion Securities */}
            <div className="glass-panel-dark glass-panel-dark-hover p-8 rounded-xl flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/30 text-gold shadow-sm">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold block">
                    Gold Standard Wealth
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    Suasion Securities
                  </h3>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  Launched in 2024 to provide modern, tech-enabled wealth management. We distribute mutual funds, plan SIPs, perform asset allocation, and design goal-based portfolios.
                </p>
                <ul className="text-xs space-y-2.5 text-white/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    Mutual Funds & Goal-Based SIPs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    Portfolio Reviews & Risk Profiling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    Launched 01 April 2024
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link 
                  href="/services#securities"
                  className="w-full inline-flex items-center justify-center py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-navy hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all duration-300 font-bold"
                >
                  Explore Wealth
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs uppercase tracking-widest text-gold font-bold block">
              Integrated Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Comprehensive Financial Scope
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-charcoal/70 text-sm leading-relaxed">
              We align our vertical resources to help you borrow, protect, invest, and manage assets dynamically. Our clients receive holistic guidance for every major financial decision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-6 bg-white rounded-lg border border-gold/15 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy font-bold">1</div>
            <h3 className="font-serif font-bold text-lg text-navy">Lending solutions</h3>
            <p className="text-xs text-charcoal/70 leading-relaxed">
              Tailored capital support, structured finance, and business expansion funding through our NBFC license.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gold/15 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy font-bold">2</div>
            <h3 className="font-serif font-bold text-lg text-navy">Estate Protection</h3>
            <p className="text-xs text-charcoal/70 leading-relaxed">
              Providing family peace of mind with term insurance and structured guaranteed income plans from Aditya Birla Sun Life, LIC, and Bajaj Allianz.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gold/15 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy font-bold">3</div>
            <h3 className="font-serif font-bold text-lg text-navy">Real Assets Planning</h3>
            <p className="text-xs text-charcoal/70 leading-relaxed">
              Strategic property investment advisory focusing on rental yields, valuation growth, and legal due diligence.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gold/15 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy font-bold">4</div>
            <h3 className="font-serif font-bold text-lg text-navy">Wealth Creation</h3>
            <p className="text-xs text-charcoal/70 leading-relaxed">
              Disciplined SIP planning, asset allocation, and goal-based investing through mutual fund distribution.
            </p>
          </div>

        </div>
      </section>

      {/* 6. Why Choose Suasion Group */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-2xl text-white p-8 md:p-16 relative overflow-hidden shadow-xl border border-gold/20">
          <ThreeGoldParticles />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gold">
                Why Corporate & Family Clients Choose Us
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                As a family-owned organization, we measure success in decades, not quarters. We hold ourselves to strict standards of transparency, conservative underwriting, and active client support.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-gold font-bold text-sm group hover:text-white transition-colors duration-200"
                >
                  Schedule an advisory discussion
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="flex gap-4">
                <ShieldCheck className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-base">Uncompromising Integrity</h4>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">
                    Zero conflict of interest. We partner with only the most reliable institutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-base">Relationship Driven</h4>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">
                    Direct access to decision-makers. No automated call-center runarounds.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Layers className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-base">Integrated Offerings</h4>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">
                    A singular group to coordinate lending, insurance, real estate, and wealth planning.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Award className="h-6 w-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-base">30-Year Legacy</h4>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">
                    Continuous service in Kolkata since 1995. Deep-rooted business expertise.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. Journey Timeline Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold font-bold block">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
            Our Journey of Growth
          </h2>
        </div>

        <div className="relative border-l border-gold/30 ml-4 md:ml-32 py-4 space-y-12">
          
          {/* Milestone 1 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full bg-gold border border-white" />
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="text-lg font-bold text-navy stats-number shrink-0 md:absolute md:-left-24 md:text-right md:w-20">
                1995
              </span>
              <div>
                <h4 className="font-serif font-bold text-base text-navy">
                  Suasion Finvest Incorporated
                </h4>
                <p className="text-xs text-charcoal/70 mt-1">
                  Obtained NBFC license to support businesses and individuals with robust lending options.
                </p>
              </div>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full bg-gold border border-white" />
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="text-lg font-bold text-navy stats-number shrink-0 md:absolute md:-left-24 md:text-right md:w-20">
                2011
              </span>
              <div>
                <h4 className="font-serif font-bold text-base text-navy">
                  Suasion Services Expansion
                </h4>
                <p className="text-xs text-charcoal/70 mt-1">
                  Launched protection planning and life insurance distribution to protect family wealth.
                </p>
              </div>
            </div>
          </div>

          {/* Milestone 2.5 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full bg-gold border border-white" />
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="text-lg font-bold text-navy stats-number shrink-0 md:absolute md:-left-24 md:text-right md:w-20">
                2017
              </span>
              <div>
                <h4 className="font-serif font-bold text-base text-navy">
                  Suasion Infrastructure Incorporated
                </h4>
                <p className="text-xs text-charcoal/70 mt-1">
                  Incorporated a dedicated real estate advisory and property investment vertical to evaluate commercial and rental yield portfolios.
                </p>
              </div>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full bg-gold border border-white" />
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="text-lg font-bold text-navy stats-number shrink-0 md:absolute md:-left-24 md:text-right md:w-20">
                2024
              </span>
              <div>
                <h4 className="font-serif font-bold text-base text-navy">
                  Suasion Securities Launched
                </h4>
                <p className="text-xs text-charcoal/70 mt-1">
                  Formed dedicated mutual fund distribution and wealth management vertical for next-gen clients.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center pt-4">
          <Link
            href="/about#timeline"
            className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-navy text-white hover:bg-gold hover:text-navy rounded border border-navy hover:border-gold transition-all duration-300"
          >
            View Complete Timeline
          </Link>
        </div>
      </section>

      {/* 8. Leadership Preview */}
      <section className="bg-[#F8F5EF] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy">
              Experienced Leadership
            </h2>
            <p className="text-sm text-charcoal/70 max-w-xl mx-auto">
              Our directors combine traditional financial wisdom with forward-looking digital strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Ashok Kataruka */}
            <div className="bg-white p-6 rounded-lg border border-gold/15 text-center space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gold/45 shadow">
                  <img src="/ashok_kataruka.jpg" alt="Ashok Kataruka" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-navy">Ashok Kataruka</h3>
                  <p className="text-xs text-gold uppercase tracking-wider font-semibold mt-1">
                    Founder | CA (1987), CS, DISA
                  </p>
                </div>
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  Chartered Accountant (qualified in 1987) managing A K Kataruka & Co. St. Xavier's, CS, and DISA alumnus.
                </p>
              </div>
            </div>

            {/* Sumaan Shree Kataruka */}
            <div className="bg-white p-6 rounded-lg border border-gold/15 text-center space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gold/45 shadow">
                  <img src="/sumaan_kataruka.jpg" alt="Sumaan Shree Kataruka" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-navy">Sumaan Shree Kataruka</h3>
                  <p className="text-xs text-gold uppercase tracking-wider font-semibold mt-1">
                    Director | Double MDRT Qualifier
                  </p>
                </div>
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  Double MDRT qualifier in the life insurance domain, overseeing estate planning and property investments.
                </p>
              </div>
            </div>

            {/* Shubhaang Kataruka */}
            <div className="bg-white p-6 rounded-lg border border-gold/15 text-center space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gold/45 shadow">
                  <img src="/shubhaang_kataruka.jpg" alt="Shubhaang Kataruka" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-navy">Shubhaang Kataruka</h3>
                  <p className="text-xs text-gold uppercase tracking-wider font-semibold mt-1">
                    Director | MDRT Qualifier (1x)
                  </p>
                </div>
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  ABSLI's youngest MDRT qualifier (qualified once), managing mutual fund distribution and wealth systems.
                </p>
              </div>
            </div>

          </div>

          <div className="text-center pt-4">
            <Link
              href="/leadership"
              className="inline-flex items-center text-navy font-bold text-sm group hover:text-gold transition-colors duration-200"
            >
              Meet the Leadership Team
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 9. Client Consultation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-navy-gold text-white rounded-2xl p-8 md:p-16 text-center space-y-6 relative overflow-hidden border border-gold/20 shadow-lg">
          <ThreeGoldParticles />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gold max-w-2xl mx-auto leading-tight">
            Ready to Protect and Grow Your Generational Wealth?
          </h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto leading-relaxed">
            Contact us today to schedule a confidential discussion in our Kolkata office, or set up a secure virtual consultation.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider bg-gold text-navy hover:bg-white hover:text-navy rounded transition-all duration-300 font-bold shadow-md"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQ Section (Accordion) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-serif font-bold text-navy">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-charcoal/60 uppercase tracking-wider">
            General Queries
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-gold/15 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4.5 flex justify-between items-center text-navy font-serif font-bold text-base hover:text-gold transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gold shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gold shrink-0" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-gold/10" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-4.5 text-sm text-charcoal/80 leading-relaxed text-wrap">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
