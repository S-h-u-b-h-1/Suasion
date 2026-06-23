import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  Coins, 
  ArrowRight,
  FileSpreadsheet,
  AlertTriangle,
  Lock,
  LineChart
} from "lucide-react";

export const metadata = {
  title: "Our Services | Borrow, Protect, Invest & Grow",
  description: "Explore the comprehensive financial services of Suasion Group, spanning NBFC business loans, life insurance distribution, property investments, and mutual funds.",
};

export default function Services() {
  return (
    <div className="py-12 md:py-20 space-y-24">
      
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
            Our Expertise
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
            Integrated Solutions for Families & Businesses
          </h1>
          <p className="text-base text-charcoal/80">
            Select a vertical below to explore how Suasion Group coordinates borrowing, protection, and asset growth.
          </p>
        </div>
      </section>

      {/* Quick Nav Anchors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#nbfc" className="px-5 py-2.5 bg-white border border-gold/25 hover:border-navy text-navy font-semibold text-xs uppercase tracking-wider rounded transition-colors shadow-sm">
            NBFC Lending
          </a>
          <a href="#insurance" className="px-5 py-2.5 bg-white border border-gold/25 hover:border-navy text-navy font-semibold text-xs uppercase tracking-wider rounded transition-colors shadow-sm">
            Life Insurance
          </a>
          <a href="#property" className="px-5 py-2.5 bg-white border border-gold/25 hover:border-navy text-navy font-semibold text-xs uppercase tracking-wider rounded transition-colors shadow-sm">
            Property Investments
          </a>
          <a href="#securities" className="px-5 py-2.5 bg-white border border-gold/25 hover:border-navy text-navy font-semibold text-xs uppercase tracking-wider rounded transition-colors shadow-sm">
            Mutual Funds & Wealth
          </a>
        </div>
      </section>

      {/* 2. NBFC / Suasion Finvest */}
      <section id="nbfc" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gold/15 p-8 md:p-12 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gold/15 pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-gold tracking-widest block">Suasion Finvest Private Limited</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy">Lending & Structured Finance</h2>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest bg-navy text-white px-3 py-1.5 rounded">
              NBFC License since 1995
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm text-charcoal/80 leading-relaxed text-wrap">
                As the group's foundational NBFC lending company, Suasion Finvest Private Limited specializes in structured capital solutions, corporate debt financing, and credit intermediation to help local businesses scale. We work directly with entrepreneurs to design custom payback periods and terms that align with cash flows.
              </p>
              
              <h3 className="font-serif font-bold text-navy text-lg">Core Lending Solutions:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-charcoal/70">
                <div className="flex items-start gap-2">
                  <Coins className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy block">Business Loans</strong>
                    Customized expansion capital for corporate requirements.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileSpreadsheet className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy block">Structured Finance</strong>
                    Bespoke capital structuring matching specific business operations.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy block">Asset-Backed Lending</strong>
                    Secured financial credit facilities backed by quality assets.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <LineChart className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy block">Capital Structuring</strong>
                    Financial advisory services on leverage and equity ratios.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-navy/5 p-6 rounded-lg border border-navy/10 space-y-4">
                <h4 className="font-serif font-bold text-navy text-sm uppercase tracking-wide">Inquiry Guidance</h4>
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  Lending is subject to eligibility, documentation, credit assessment, and regulatory guidelines. Our directors review all proposals on an individual basis.
                </p>
                <Link 
                  href="/contact?type=nbfc" 
                  className="w-full inline-flex items-center justify-center py-2 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-gold hover:text-navy transition-colors shadow-sm"
                >
                  Submit Financing Request
                </Link>
              </div>

              {/* Disclaimer Alert */}
              <div className="bg-amber-50 p-4 rounded border border-amber-200 text-xs text-amber-800 flex gap-2.5">
                <AlertTriangle className="h-4.5 w-4.5 text-amber-600 shrink-0" />
                <p>
                  <strong>NBFC Regulatory Disclaimer:</strong> All financial services are subject to applicable regulatory norms, eligibility, documentation, and internal assessment.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Insurance / Suasion Services */}
      <section id="insurance" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gold/15 p-8 md:p-12 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gold/15 pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-gold tracking-widest block">Suasion Services Private Limited</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy">Life Insurance Distribution</h2>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest bg-navy text-white px-3 py-1.5 rounded">
              Estate Protection Vertical
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm text-charcoal/80 leading-relaxed text-wrap">
                Protection is the foundation of wealth preservation. Through our partnership with premium insurance companies, Suasion Services Private Limited structures custom life insurance plans. We help you hedge liabilities, protect business continuation, and secure guaranteed income streams for retirement and family welfare.
              </p>

              <h3 className="font-serif font-bold text-navy text-lg">Key Insurance Portfolios:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-charcoal/70">
                <div>
                  <strong className="text-navy block">Term Insurance Planning</strong>
                  High-cover, low-premium life insurance to protect family dependants and lock-in liabilities.
                </div>
                <div>
                  <strong className="text-navy block">Guaranteed Income Plans</strong>
                  Structured annuities and periodic cash flows ensuring guaranteed yield for wealth preservation.
                </div>
                <div>
                  <strong className="text-navy block">Retirement & Annuity Plans</strong>
                  Sound pension plans securing financial independence during retirement.
                </div>
                <div>
                  <strong className="text-navy block">Child Future Planning</strong>
                  Structured investment policies built to fund higher education and milestone requirements.
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs font-semibold text-navy">
                  Corporate Insurance Partners:
                </p>
                <div className="flex flex-wrap gap-4 mt-2 text-xs text-charcoal/80">
                  <span className="bg-navy/5 px-2.5 py-1 rounded border border-navy/10">Bajaj Allianz Life Insurance</span>
                  <span className="bg-navy/5 px-2.5 py-1 rounded border border-navy/10">Life Insurance Corporation (LIC)</span>
                  <span className="bg-navy/5 px-2.5 py-1 rounded border border-navy/10">Aditya Birla Sun Life Insurance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-navy/5 p-6 rounded-lg border border-navy/10 space-y-4">
                <h4 className="font-serif font-bold text-navy text-sm uppercase tracking-wide">Protection Audit</h4>
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  Analyze if your current life coverage covers your business liabilities and family expenses. Let our partners structure a comprehensive risk audit.
                </p>
                <Link 
                  href="/contact?type=insurance" 
                  className="w-full inline-flex items-center justify-center py-2 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-gold hover:text-navy transition-colors shadow-sm"
                >
                  Request Insurance Consultation
                </Link>
              </div>

              {/* Disclaimer Alert */}
              <div className="bg-amber-50 p-4 rounded border border-amber-200 text-xs text-amber-800 flex gap-2.5">
                <AlertTriangle className="h-4.5 w-4.5 text-amber-600 shrink-0" />
                <p>
                  <strong>Insurance Regulatory Disclaimer:</strong> Insurance is the subject matter of solicitation. Benefits depend on the specific product, terms, conditions, and insurer approval.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Property Investments / Suasion Services */}
      <section id="property" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gold/15 p-8 md:p-12 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gold/15 pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-gold tracking-widest block">Suasion Services Private Limited</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy">Property Investment Advisory</h2>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest bg-navy text-white px-3 py-1.5 rounded">
              Real Asset Planning
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm text-charcoal/80 leading-relaxed text-wrap">
                Real estate constitutes a crucial component of HNI wealth. We provide property investment advisory services, analyzing rental yields, commercial asset valuations, and capital appreciation potential across key hubs. Our advisory includes strict review of property documentation and legal titles to protect your capital.
              </p>

              <h3 className="font-serif font-bold text-navy text-lg">Property Advisory Scope:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-charcoal/70">
                <div>
                  <strong className="text-navy block">Commercial Asset Opportunities</strong>
                  Acquisition reviews of commercial spaces for rental cash flow.
                </div>
                <div>
                  <strong className="text-navy block">Rental Yield Analysis</strong>
                  Yield assessments to compare properties against alternative debt indices.
                </div>
                <div>
                  <strong className="text-navy block">Due Diligence Review</strong>
                  Title inspections and legal assessment coordination before acquisition.
                </div>
                <div>
                  <strong className="text-navy block">Asset Allocation</strong>
                  Structuring real estate within a balanced multi-asset portfolio.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-navy/5 p-6 rounded-lg border border-navy/10 space-y-4">
                <h4 className="font-serif font-bold text-navy text-sm uppercase tracking-wide">Real Asset Consult</h4>
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  Evaluate properties for cash generation or estate legacy. Submit details to coordinate a consultation.
                </p>
                <Link 
                  href="/contact?type=property" 
                  className="w-full inline-flex items-center justify-center py-2 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-gold hover:text-navy transition-colors shadow-sm"
                >
                  Request Real Estate advisory
                </Link>
              </div>

              {/* Disclaimer Alert */}
              <div className="bg-amber-50 p-4 rounded border border-amber-200 text-xs text-amber-800 flex gap-2.5">
                <AlertTriangle className="h-4.5 w-4.5 text-amber-600 shrink-0" />
                <p>
                  <strong>Property Advisory Disclaimer:</strong> Property investments are subject to market risks, documentation, legal verification, and due diligence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Mutual Funds / Suasion Securities */}
      <section id="securities" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gold/15 p-8 md:p-12 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gold/15 pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-gold tracking-widest block">Suasion Securities</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy">Mutual Fund Distribution & Wealth</h2>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest bg-navy text-white px-3 py-1.5 rounded">
              Launched 01 April 2024
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm text-charcoal/80 leading-relaxed text-wrap">
                Securities and mutual fund distribution are coordinates via Suasion Securities. Operating since 2024, our vertical handles asset allocation reviews, systematic investment planning (SIPs), lumpsum capital deployment, and goal-based portfolios. We translate complex market variables into simple, disciplined portfolios built to resist emotional volatility.
              </p>

              <h3 className="font-serif font-bold text-navy text-lg">Wealth & Mutual Fund Advisory:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-charcoal/70">
                <div>
                  <strong className="text-navy block">Mutual Fund Distribution</strong>
                  Access to diversified equity, hybrid, and debt schemes from top AMCs.
                </div>
                <div>
                  <strong className="text-navy block">SIP & Lumpsum Planning</strong>
                  Setting up systematic investment routes to tap compounding growth.
                </div>
                <div>
                  <strong className="text-navy block">Asset Allocation</strong>
                  Structuring core and satellite portfolios mapped to your horizon.
                </div>
                <div>
                  <strong className="text-navy block">Goal-Based Portfolios</strong>
                  Retirement corpus planning, children education corpuses, and family objectives.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-navy/5 p-6 rounded-lg border border-navy/10 space-y-4">
                <h4 className="font-serif font-bold text-navy text-sm uppercase tracking-wide">Portfolio Review</h4>
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  We analyze your current allocation against inflation and risk parameters. Request a review from our wealth desk.
                </p>
                <Link 
                  href="/contact?type=mutual_fund" 
                  className="w-full inline-flex items-center justify-center py-2 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-gold hover:text-navy transition-colors shadow-sm"
                >
                  Book Portfolio Review
                </Link>
              </div>

              {/* Disclaimer Alert */}
              <div className="bg-amber-50 p-4 rounded border border-amber-200 text-xs text-amber-800 flex gap-2.5">
                <AlertTriangle className="h-4.5 w-4.5 text-amber-600 shrink-0" />
                <p>
                  <strong>Securities Regulatory Disclaimer:</strong> Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
