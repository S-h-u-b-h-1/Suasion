import Link from "next/link";
import { Award, Target, Shield, Heart, GraduationCap, Lightbulb, Compass, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Our Legacy & Core Values",
  description: "Learn about the legacy of Suasion Group, a family-owned Kolkata financial services firm operating since 1995.",
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
                In 1995, Ashok Kataruka established Suasion Finvest Private Limited as a dedicated non-banking financial company (NBFC) in Kolkata. Over the subsequent decades, the financial landscape transformed, yet our core commitment to relationship-led financial stewardship remained unchanged.
              </p>
              <p>
                As client needs expanded, we grew. In 2011, we incorporated Suasion Services Private Limited to manage life insurance distribution and property investment advisory, safeguarding our clients' assets and real estate portfolios. In 2024, to meet the needs of a new generation of wealth builders, we launched Suasion Securities, introducing digitized mutual fund distribution and goal-based portfolio reviews.
              </p>
              <p>
                Today, Suasion Group operates as a fully integrated financial services group. We manage the delicate balance between conservative wealth protection and active growth planning. We are proud to call Kolkata our home and proud to serve the families that drive Eastern India's economy.
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

      {/* 3. Mission & Vision */}
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
