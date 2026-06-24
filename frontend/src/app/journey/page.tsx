import Link from "next/link";
import { Award, ShieldAlert, Star, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Journey | 30-Year Timeline",
  description: "Track the growth of Suasion Group from our founding in Kolkata in 1995 to our digital-first financial services ecosystem in 2026 and beyond.",
};

const timelineData = [
  {
    year: "1995",
    title: "The Genesis of Suasion Finvest",
    subtitle: "Incorporated on 05 January 1995",
    details: "Established by Ashok Kataruka, Suasion Finvest Private Limited obtained its license as a Non-Banking Financial Company (NBFC). Serving the growing business sector of Kolkata, we provided critical structured lending, asset-backed loans, and working capital to local trade houses and manufacturing units, establishing our base of trust."
  },
  {
    year: "2011",
    title: "Diversification into Suasion Services",
    subtitle: "Incorporated on 18 August 2011",
    details: "To protect the accumulated wealth of our expanding clientele, we launched Suasion Services Private Limited. This vertical introduced specialized life insurance planning and estate protection auditing, partnering with Bajaj Allianz Life, LIC, and Aditya Birla Sun Life to secure family wealth from business liabilities."
  },
  {
    year: "2017",
    title: "Incorporation of Suasion Infrastructure",
    subtitle: "Incorporated on 12 May 2017",
    details: "To address client demand for stable, yield-generating physical assets, we incorporated Suasion Infrastructure Private Limited. This dedicated entity focuses on sourcing premium commercial real estate, modeling net-of-tax rental yields, and conducting thorough due diligence to protect capital in property acquisitions."
  },
  {
    year: "2024",
    title: "Launch of Suasion Securities",
    subtitle: "Established on 01 April 2024",
    details: "With next-generation leadership joining the board, we launched Suasion Securities. This arm concentrates on modern mutual fund distribution, Systematic Investment Plans (SIPs), structured wealth creation, and automated risk profiling. This added liquid asset allocation options to our credit and insurance solutions."
  },
  {
    year: "2026 & Beyond",
    title: "Digital-First Wealth Ecosystem",
    subtitle: "Future Readiness",
    details: "We are building Eastern India's premier integrated financial ecosystem. By integrating cloud portfolio tracking, secure digital consultation desks, and CRM-guided compliance alerts, we ensure our clients experience modern efficiency while receiving traditional, dedicated family-office care."
  }
];

export default function Journey() {
  return (
    <div className="py-12 md:py-20 space-y-24">
      
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
            Milestones
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
            Our Journey of Trust
          </h1>
          <p className="text-base text-charcoal/80">
            For over thirty years, we have adapted to financial cycles while maintaining our commitment to conservative wealth protection and relationship stewardship.
          </p>
        </div>
      </section>

      {/* 2. Visual Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-l-2 border-gold/30 ml-4 md:ml-36 space-y-16 py-8">
          
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              
              {/* Year marker on left for larger screens */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                <span className="text-2xl font-bold text-navy stats-number block">{item.year}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold">Milestone</span>
              </div>

              {/* Point on the timeline line */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gold border-2 border-white shadow" />
              
              {/* Box */}
              <div className="bg-white p-6 md:p-8 rounded-xl border border-gold/15 shadow-sm space-y-3">
                <span className="text-lg font-bold text-navy stats-number block md:hidden">
                  {item.year}
                </span>
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-bold text-navy">{item.title}</h3>
                  <p className="text-xs text-gold uppercase tracking-wider font-semibold">{item.subtitle}</p>
                </div>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed text-wrap">
                  {item.details}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 3. Core Theme Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-2xl text-white p-8 md:p-16 relative overflow-hidden border border-gold/20 shadow-md">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.06),transparent)] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
                Philosophy
              </span>
              <h2 className="text-3xl font-serif font-bold text-white">
                From Traditional Trust to Technology-Enabled Advisory
              </h2>
              <div className="space-y-4 text-sm text-white/80 leading-relaxed text-wrap">
                <p>
                  Our legacy started in 1995 with physical records, personal visits, and manual credit audits. Those decades taught us the value of discipline, direct accountability, and looking beyond credit score metrics to understand business potential.
                </p>
                <p>
                  Today, we use technology to scale that advisory. By deploying web-based inquiry flows, automated asset allocation models, digital client lockers, and secure communication channels, we eliminate paperwork barriers. However, technology remains a tool—our decisions are still made with the same diligence, care, and direct access to directors that our clients have trusted for 30 years.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[320px] aspect-square rounded-xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Star className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif font-bold text-lg text-white">3 Decades of Trust</h4>
                  <p className="text-xs text-white/70">Continuous family leadership and dedicated client support in West Bengal.</p>
                </div>
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-gold font-bold text-xs uppercase tracking-wider group hover:text-white"
                >
                  Consult with Us
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
