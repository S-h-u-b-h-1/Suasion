import Link from "next/link";
import { Award, Target, Shield, Heart, GraduationCap, Lightbulb, Compass, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Suasion Group Kolkata | CA Ashok Kataruka Legacy",
  description: "Discover the 30-year legacy of Suasion Group in Kolkata. Founded in 1995 by veteran Chartered Accountant Ashok Kataruka, we serve families and businesses across West Bengal.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "About Suasion Group Kolkata",
    "CA Ashok Kataruka",
    "Kataruka family Kolkata",
    "Kolkata financial services legacy",
    "Suasion Finvest history",
  ],
};

const values = [
  {
    icon: Shield,
    name: "Trust & Integrity",
    description: "Honest and transparent advisory form the baseline of every client interaction. We prioritize security and compliance."
  },
  {
    icon: Heart,
    name: "Long-Term Relationships",
    description: "We think in generations, not quarters. We support families and corporate clients through all stages of financial growth."
  },
  {
    icon: Target,
    name: "Responsible Wealth",
    description: "Building wealth via disciplined planning, active asset allocation, and conservative risk management."
  },
  {
    icon: GraduationCap,
    name: "Financial Education",
    description: "Empowering our clients with the knowledge needed to make confident and informed financial choices."
  },
  {
    icon: Lightbulb,
    name: "Innovation & Agility",
    description: "Applying modern, tech-led portfolio planning tools while maintaining traditional family office trust."
  },
  {
    icon: Compass,
    name: "Client-Centric Care",
    description: "Direct access to decision-makers. Every strategy is customized to meet specific needs."
  }
];

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
    details: "To protect the accumulated wealth of our expanding clientele, we launched Suasion Services Private Limited. This vertical introduced specialized life insurance planning and estate protection auditing, partnering with Aditya Birla Sun Life, LIC, and Bajaj Allianz Life. Demonstrating professional excellence, our family has achieved 3 MDRT (Million Dollar Round Table) qualifications in the life insurance domain over the past 3 consecutive years—with Sumaan Shree Kataruka qualifying twice and Shubhaang Kataruka qualifying once (recognized as the youngest MDRT at ABSLI)."
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

export default function About() {
  return (
    <div className="py-12 md:py-20 space-y-24">
      
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
            Guiding Kolkata's Wealth Since 1995
          </h1>
          <p className="text-sm uppercase tracking-widest text-navy/70 font-semibold font-numbers">
            Suasion Group Legacy
          </p>
        </div>
      </section>

      {/* 2. Group Story & Kolkata Legacy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-navy">
              A Relationship Built on Generations
            </h2>
            <div className="space-y-4 text-charcoal/80 text-sm leading-relaxed text-wrap">
              <p>
                In 1995, Ashok Kataruka, a senior Chartered Accountant, established Suasion Finvest Private Limited as a licensed Non-Banking Financial Company (NBFC) to supply structured business credit and working capital to Kolkata's trade houses. Over the subsequent three decades, as the financial landscape matured, the Kataruka family maintained a conservative, risk-managed philosophy that prioritized personal accountability over transactional velocity.
              </p>
              <p>
                As our clients' wealth accumulated, they required focused estate protection and asset allocation. In 2011, we incorporated Suasion Services Private Limited to distribute life insurance and annuity portfolios. In 2017, responding to the need for institutionalized real asset placement, we incorporated **Suasion Infrastructure Private Limited** to deliver property investment advisory and commercial real estate due diligence. In 2024, to serve the next generation of wealth builders, we launched Suasion Securities to handle digitized mutual fund distribution and goal-based Systematic Investment Plans (SIPs).
              </p>
              <p>
                Today, Suasion Group represents a multi-generational family office operating with a single standard of care. By blending traditional accounting wisdom with modern digital portfolio models, we help families protect what they have built and grow their assets with discipline. We remain proudly family-owned and relationship-focused, serving as Kolkata's trusted financial partner.
              </p>
            </div>
          </div>

          {/* Luxury Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[460px] aspect-[4/3] rounded-2xl bg-gradient-navy-gold p-8 flex flex-col justify-between text-white border border-gold/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gold/15 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-navy/20 rounded-full blur-2xl" />
              
              <div className="space-y-4 relative z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold bg-white/10 px-2 py-1 rounded">
                  Corporate Philosophy
                </span>
                <blockquote className="text-lg font-serif italic text-white/95 leading-relaxed">
                  "Wealth is not just about numbers; it is about building the freedom to secure your family's future and execute your business vision with confidence."
                </blockquote>
              </div>
              
              <div className="border-t border-white/15 pt-4 relative z-10">
                <p className="text-xs font-bold text-gold">The Kataruka Family</p>
                <p className="text-[10px] text-white/60">Founders & Directors, Suasion Group</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Our Journey Timeline */}
      <section id="timeline" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
            Milestones
          </span>
          <h2 className="text-3xl font-serif font-bold text-navy">Our Journey of Trust</h2>
          <p className="text-sm text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            For over thirty years, we have adapted to financial cycles while maintaining our commitment to conservative wealth protection and relationship stewardship.
          </p>
        </div>

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

      {/* 4. Mission & Vision */}
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Mission */}
            <div className="space-y-4 p-8 rounded-xl border border-gold/15 bg-white/5 backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">Our Mission</span>
              <h3 className="text-2xl font-serif font-bold text-white">To Enable Confident Financial Choices</h3>
              <p className="text-sm text-white/80 leading-relaxed text-wrap">
                "To help clients make confident financial decisions through trusted advisory, disciplined planning, and long-term relationships." We focus on structuring finance, protecting families, and designing sound investment portfolios.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4 p-8 rounded-xl border border-gold/15 bg-white/5 backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">Our Vision</span>
              <h3 className="text-2xl font-serif font-bold text-white">Kolkata's Benchmark Family Office</h3>
              <p className="text-sm text-white/80 leading-relaxed text-wrap">
                "To become Eastern India's most trusted multi-generational financial services group." We aim to bridges traditional values with modern fintech efficiency, setting the standard for client care.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-serif font-bold text-navy">Our Core Values</h2>
          <p className="text-xs uppercase tracking-wider text-gold font-bold">What Guides Us</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-xl border border-gold/15 shadow-sm space-y-4 hover:border-gold transition-all duration-300 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-navy">{val.name}</h3>
                <p className="text-xs text-charcoal/70 leading-relaxed text-wrap">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Direct CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy">
          Let's Plan Your Financial Future
        </h3>
        <p className="text-sm text-charcoal/70 max-w-xl mx-auto leading-relaxed">
          Contact our partners directly at our Kolkata headquarters for an estate review, business financing query, or portfolio advisory.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wider bg-navy text-white hover:bg-gold hover:text-navy rounded transition-all duration-300 font-bold"
          >
            Contact a Director
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
