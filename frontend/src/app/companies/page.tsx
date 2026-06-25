import Link from "next/link";
import { Building2, ShieldCheck, TrendingUp, Calendar, ArrowRight, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Suasion Group Companies Kolkata | Finvest, Services & Infrastructure",
  description: "Official legal and corporate structure of Suasion Group Kolkata, including Suasion Finvest Private Limited (NBFC), Suasion Services Private Limited, Suasion Infrastructure Private Limited, and Suasion Securities.",
  alternates: {
    canonical: "/companies",
  },
  keywords: [
    "Suasion Finvest Private Limited",
    "Suasion Services Private Limited",
    "Suasion Infrastructure Private Limited",
    "Suasion Securities",
    "Suasion Finvest Pvt Ltd",
    "Suasion Services Pvt Ltd",
    "Suasion Infrastructure Pvt Ltd",
    "Suasion Group structure",
  ],
};

const companies = [
  {
    vertical: "Lending Arm",
    name: "Suasion Finvest Private Limited",
    icon: Building2,
    role: "The legacy financial backbone of the group, providing business credit, working capital loans, structured finance, and financial intermediation.",
    incorporation: "05 January 1995",
    category: "Non-Banking Financial Company (NBFC)",
    details: "Suasion Finvest is the oldest operating vertical within the group. Registered as an NBFC, it has acted as a critical financing partner to Kolkata's SME and corporate sector for over three decades, enabling local enterprises to fund capital requirements, purchase equipment, and bridge expansion cycles with stable structured credit.",
    link: "/services#nbfc",
    btnText: "Lending Solutions"
  },
  {
    vertical: "Protection Arm",
    name: "Suasion Services Private Limited",
    icon: ShieldCheck,
    role: "The estate protection and life insurance planning arm, distributing customized protection plans and wealth reservation strategies.",
    incorporation: "18 August 2011",
    category: "Life Insurance Distribution & Solicitations",
    details: "Suasion Services protects family wealth by distributing life insurance, term plans, guaranteed income products, and retirement annuities from top-tier partners Aditya Birla Sun Life, LIC, and Bajaj Allianz Life. Our focus is ensuring robust risk hedging and estate preservation across generations.",
    link: "/services#insurance",
    btnText: "Protection Services"
  },
  {
    vertical: "Property & Infrastructure Arm",
    name: "Suasion Infrastructure Private Limited",
    icon: Building2,
    role: "The real asset investment and property advisory arm, helping clients deploy capital into high-yield commercial and residential portfolios.",
    incorporation: "12 May 2017",
    category: "Property Investment Advisory & Infrastructure Development",
    details: "Suasion Infrastructure assists corporate, HNI, and family clients in identifying, evaluating, and acquiring high-yield commercial and residential real estate assets. We provide rental return modeling, site diligence, lease negotiations, and long-term asset management.",
    link: "/services#property",
    btnText: "Property Advisory"
  },
  {
    vertical: "Wealth Arm",
    name: "Suasion Securities",
    icon: TrendingUp,
    role: "The modern investment and wealth advisory arm, distributing mutual funds and offering goal-based asset allocation review.",
    incorporation: "01 April 2024",
    category: "Mutual Fund Distribution & Portfolio Planning",
    details: "Launched to serve the digital-first era of investing, Suasion Securities distributes diversified mutual funds, setups systematic investment routes (SIPs), and structures custom asset allocation plans. It blends modern quantitative modeling with traditional conservative planning to design long-term wealth creation routes.",
    link: "/services#securities",
    btnText: "Investment Services"
  }
];

export default function Companies() {
  return (
    <div className="py-12 md:py-20 space-y-24">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
            Group Structure
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
            Our Operating Entities
          </h1>
          <p className="text-base text-charcoal/80">
            Suasion Group coordinates specialized services through four distinct corporate verticals to provide focused expertise.
          </p>
        </div>
      </section>

      {/* 2. Company Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {companies.map((company, index) => {
          const IconComponent = company.icon;
          return (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gold/15 p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Icon & Headings */}
              <div className="lg:col-span-4 space-y-6">
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy border border-navy/10">
                  <IconComponent className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold text-gold tracking-widest block">
                    {company.vertical}
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-navy leading-tight">
                    {company.name}
                  </h2>
                </div>
                <div className="space-y-2.5 text-xs text-charcoal/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gold shrink-0" />
                    <span>Established: {company.incorporation}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4 text-gold shrink-0" />
                    <span>Category: {company.category}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed copy */}
              <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-gold/15 lg:pl-12">
                <div>
                  <h3 className="font-serif font-bold text-navy text-lg">Role & Mandate</h3>
                  <p className="text-sm text-charcoal/80 mt-2 font-medium">
                    {company.role}
                  </p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-navy text-lg">Corporate Background</h3>
                  <p className="text-sm text-charcoal/70 mt-2 leading-relaxed text-wrap">
                    {company.details}
                  </p>
                </div>
                <div className="pt-4">
                  <Link
                    href={company.link}
                    className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-navy text-white hover:bg-gold hover:text-navy rounded border border-navy hover:border-gold transition-all duration-300"
                  >
                    View {company.btnText}
                    <ArrowRight className="ml-2 h-4.5 w-4.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}
