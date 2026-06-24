import Link from "next/link";
import { Mail, ShieldCheck, Award, Briefcase, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Directors & Founders | Ashok, Sumaan Shree & Shubhaang Kataruka",
  description: "Meet the leadership team of Suasion Group Kolkata: Founder Ashok Kataruka (Chartered Accountant), Director Sumaan Shree Kataruka, and Director Shubhaang Kataruka.",
  alternates: {
    canonical: "/leadership",
  },
  keywords: [
    "Ashok Kataruka",
    "Sumaan Shree Kataruka",
    "Sumaan Kataruka",
    "Shubhaang Kataruka",
    "Suasion Group directors",
    "Kataruka family Kolkata",
    "Chartered Accountant Ashok Kataruka",
  ],
};

const leaders = [
  {
    name: "Ashok Kataruka",
    image: "/ashok_kataruka.jpg",
    title: "Senior Leader & Founder",
    credentials: "Chartered Accountant (CA)",
    verticals: "Suasion Finvest Private Limited",
    expertise: [
      "Structured Finance & Business Funding",
      "Corporate Taxation & Direct Taxes",
      "Corporate Advisory & Statutory Audits",
      "Financial Restructuring & Capital Allocation"
    ],
    bio: "Ashok Kataruka has been the guiding force behind Suasion Group since its founding in 1995. As a veteran Chartered Accountant based in Kolkata, he has structured financial growth strategies for hundreds of business houses, advising on tax compliance, statutory audits, and debt syndication. Under his leadership, Suasion Finvest grew into a trusted NBFC provider in Eastern India."
  },
  {
    name: "Sumaan Shree Kataruka",
    image: "/sumaan_kataruka.jpg",
    title: "Director",
    credentials: "Insurance & Real Asset Structuring Advisor",
    verticals: "Suasion Services Pvt Ltd & Suasion Infrastructure Pvt Ltd",
    expertise: [
      "Life Insurance Portfolio Audits",
      "Estate Preservation & Legacy Planning",
      "Real Estate Yield Analysis & Sourcing",
      "Guaranteed Asset Allocation"
    ],
    bio: "Sumaan Shree Kataruka leads operations for Suasion Services Private Limited and Suasion Infrastructure Private Limited. With extensive experience in estate planning, she manages the group's corporate insurance relationships with Bajaj Allianz, LIC, and Aditya Birla Sun Life. Concurrently, she oversees property investment advisory, evaluating commercial and residential portfolios to structure stable, inflation-hedged yields for HNI families."
  },
  {
    name: "Shubhaang Kataruka",
    image: "/shubhaang_kataruka.jpg",
    title: "Director & Next-Gen Leader",
    credentials: "B.Tech & Wealth Advisory Specialist",
    verticals: "Suasion Securities & Suasion Services",
    expertise: [
      "Digital Financial Strategies",
      "Mutual Fund Distribution Desk",
      "Asset Allocation & Risk Profiling",
      "Client Experience & Technical Architecture"
    ],
    bio: "Shubhaang Kataruka represents the next-generation leadership of Suasion Group, driving digital-first initiatives across our wealth management desk. He manages mutual fund distribution and SIP planning under Suasion Securities. Leveraging modern data tools, Shubhaang is committed to helping young professionals and business families start early, allocate assets disciplinedly, and experience premium customer support."
  }
];

export default function Leadership() {
  return (
    <div className="py-12 md:py-20 space-y-24">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
            Board of Directors
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
            Experienced Financial Advisors
          </h1>
          <p className="text-base text-charcoal/80">
            Our leadership team blends thirty years of tax and corporate advisory legacy with modern, tech-led wealth management.
          </p>
        </div>
      </section>

      {/* 2. Leader Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 gap-12">
          {leaders.map((leader, index) => {
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-gold/15 p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start"
              >
                
                {/* Left Profile Area */}
                <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
                  {leader.image ? (
                    <div className="relative w-28 h-28 mx-auto lg:mx-0 rounded-full overflow-hidden border-2 border-gold/45 shadow-md">
                      <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" />
                    </div>
                  ) : null}
                  <div className="space-y-1">
                    <h2 className="text-2xl font-serif font-bold text-navy">{leader.name}</h2>
                    <p className="text-xs font-bold text-gold uppercase tracking-wider">{leader.title}</p>
                    <p className="text-xs text-charcoal/60 italic">{leader.credentials}</p>
                  </div>
                  <div className="pt-2 border-t border-gold/10 text-xs text-charcoal/70">
                    <span className="font-bold text-navy block uppercase tracking-wider text-[9px] mb-1">Vertically Associated:</span>
                    <span>{leader.verticals}</span>
                  </div>
                </div>

                {/* Right Profile Details */}
                <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-gold/15 lg:pl-12">
                  <div>
                    <h3 className="font-serif font-bold text-navy text-lg">Professional Background</h3>
                    <p className="text-sm text-charcoal/70 mt-2 leading-relaxed text-wrap">
                      {leader.bio}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-navy text-lg">Key Focus Areas</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                      {leader.expertise.map((exp, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-charcoal/80">
                          <ChevronRight className="h-4 w-4 text-gold shrink-0" />
                          <span>{exp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-navy text-white hover:bg-gold hover:text-navy text-xs font-bold uppercase tracking-wider rounded border border-navy hover:border-gold transition-colors duration-300 shadow-sm"
                    >
                      Book Consultation
                    </Link>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
