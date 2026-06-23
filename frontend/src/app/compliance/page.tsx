import { AlertTriangle, ShieldCheck, Info } from "lucide-react";

export const metadata = {
  title: "Compliance & Regulatory Disclaimers",
  description: "Read the regulatory disclaimers, license scopes, and risk warnings for Suasion Group's NBFC, insurance, property, and mutual fund services.",
};

export default function Compliance() {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
          Legal & Regulatory
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy">
          Compliance & Regulatory Disclaimers
        </h1>
      </div>

      <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 text-xs sm:text-sm text-amber-950 flex gap-4">
        <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-2">
          <strong>Important Risk Warning:</strong>
          <p className="leading-relaxed text-wrap">
            All financial operations carry risk. Product parameters, interest rates, values, yields, and returns mentioned on this website are for informational purposes only. They do not constitute an offer, invitation, or guaranteed assurance of returns unless explicitly backed by statutory insurer/AMC documents.
          </p>
        </div>
      </div>

      {/* Disclaimers Detail */}
      <div className="bg-white rounded-xl border border-gold/15 p-8 space-y-8">
        
        {/* NBFC */}
        <div className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-navy flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-gold" />
            1. Suasion Finvest Private Limited (NBFC)
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed text-wrap">
            Suasion Finvest Private Limited is registered as a Non-Banking Financial Company (NBFC) under the applicable regulations of the Reserve Bank of India (RBI). Lending solutions, debt structures, expansion credit, and collateral assessments are subject to eligibility verification, documentation, internal credit scoring, and executive approval. The RBI does not accept any responsibility or guarantee about the present position as to the financial soundness of the company or for the correctness of any of the statements or representations made or opinions expressed by the company.
          </p>
        </div>

        {/* Insurance */}
        <div className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-navy flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-gold" />
            2. Insurance Distribution (Suasion Services Private Limited)
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed text-wrap">
            Insurance is the subject matter of solicitation. Suasion Services Private Limited operates as a corporate distributor/agent. Product benefits, payouts, bonuses, and terms are governed strictly by the policy contract issued by our corporate insurance partners: <strong>Bajaj Allianz Life Insurance</strong>, <strong>Life Insurance Corporation of India (LIC)</strong>, and <strong>Aditya Birla Sun Life Insurance</strong>. Prospective clients should read the sales brochure and product terms carefully before concluding a sale.
          </p>
        </div>

        {/* Property */}
        <div className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-navy flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-gold" />
            3. Property Investment Advisory (Suasion Services Private Limited)
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed text-wrap">
            Property investment advisory and real estate models are based on market observations, historical rental yield trends, and developer-provided statistics. Property values and yields can fluctuate based on economic cycles, location demand, tax structures, and local municipal guidelines. All acquisitions must be verified via independent legal due diligence, title inspections, and physical audits. Suasion Group does not accept liability for losses arising from property transaction cycles.
          </p>
        </div>

        {/* Securities */}
        <div className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-navy flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-gold" />
            4. Mutual Fund Distribution (Suasion Securities)
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed text-wrap">
            Suasion Securities operates as a registered distributor of mutual funds. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Asset allocations, risk profiling indicators, and performance representations are based on historical data indices, which do not guarantee future performance outcomes. Mutual fund commissions earned by the group are disclosed in compliance with AMFI guidelines and are available upon request.
          </p>
        </div>

        {/* General Info */}
        <div className="space-y-3 border-t border-gold/10 pt-6">
          <h2 className="text-lg font-serif font-bold text-navy flex items-center gap-2">
            <Info className="h-5 w-5 text-gold" />
            5. General Information & Content Scope
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed text-wrap">
            The content provided on this website is for general financial literacy and company overview purposes only. It does not constitute specific tax, legal, or investment advice. Visitors and prospective clients are strongly encouraged to consult qualified financial advisors, chartered accountants, and legal professionals before executing any borrowing, protection, or investment decisions.
          </p>
        </div>

      </div>

    </div>
  );
}
