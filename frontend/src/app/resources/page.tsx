"use client";

import { useState } from "react";
import { BookOpen, Calendar, User, ArrowRight, X, ChevronRight } from "lucide-react";

export const blogPosts = [
  {
    id: 1,
    title: "Why Financial Planning Should Start Early",
    excerpt: "Discover the mathematical power of compounding interest and how starting your investment journey early can secure your financial independence.",
    category: "Wealth Creation",
    date: "June 12, 2026",
    author: "Shubhaang Kataruka",
    readTime: "4 mins read",
    content: `
      Starting early is one of the most powerful decisions you can make for your wealth. The reason lies in the exponential mathematics of compounding interest. 
      
      When you invest early, even in smaller amounts, your money has more time to generate returns, which are then reinvested to generate their own returns. For example, a monthly SIP of ₹10,000 started at age 25 will accumulate a significantly larger corpus by age 55 than a monthly SIP of ₹20,000 started at age 35, assuming similar annual yields.
      
      Starting early also builds financial discipline. It trains you to allocate a portion of your cash flows toward assets before discretionary spending. By understanding asset allocation early, you can ride out market cycles with confidence, avoiding emotional decisions that can damage your long-term wealth.
    `
  },
  {
    id: 2,
    title: "How Term Insurance Protects Your Family",
    excerpt: "An essential guide to structuring high-cover term plans to secure business liabilities and protect your family's future standard of living.",
    category: "Protection",
    date: "May 28, 2026",
    author: "Sumaan Shree Kataruka",
    readTime: "5 mins read",
    content: `
      Term insurance represents the purest form of protection. Unlike investment-linked policies, a term plan's sole mandate is to hedge against life risks.
      
      For business owners and professionals, term insurance is critical to shield their estate. If a business carries liabilities—such as working capital loans, structured credit, or commercial mortgages—a term plan can be structured to cover those exact liabilities. This ensures that in the event of an untimely demise, the business debts do not fall upon family members or force the liquidation of valuable real assets.
      
      We advise clients to calculate their Human Life Value (HLV) by assessing their current income, future liabilities, and children's education milestones, then securing a term cover that matches that sum from highly-rated insurers like LIC, Bajaj Allianz, or Aditya Birla Sun Life.
    `
  },
  {
    id: 3,
    title: "SIP vs Lumpsum Investing: Which is Best?",
    excerpt: "Evaluate the benefits of Systematic Investment Plans (SIP) versus one-time lumpsum allocation across different market cycles.",
    category: "Securities",
    date: "April 15, 2026",
    author: "Shubhaang Kataruka",
    readTime: "4 mins read",
    content: `
      One of the most frequent questions we receive at our wealth desk is whether to invest systematically (SIP) or deploy capital in a single lumpsum. The answer depends on market valuations and cash flow structures.
      
      Systematic Investment Plans (SIPs) are ideal for regular monthly cash flows. They excel at 'Rupee Cost Averaging'—purchasing more mutual fund units when markets are low and fewer units when markets are high. This dampens short-term volatility and removes emotional timing from the equation.
      
      Lumpsum investing is suited for windfalls, business dividends, or real estate sales. However, deploying a large sum requires market valuation filters. If equity valuations are high, we advise deploying capital into liquid or arbitrage funds first, then initiating a Systematic Transfer Plan (STP) to transition it into equity funds over 6-12 months.
    `
  },
  {
    id: 4,
    title: "Understanding NBFC Lending & Corporate Debt",
    excerpt: "How structured finance from Non-Banking Financial Companies (NBFC) helps SMEs scale where traditional commercial banks hesitate.",
    category: "Corporate Finance",
    date: "March 10, 2026",
    author: "Ashok Kataruka",
    readTime: "6 mins read",
    content: `
      Non-Banking Financial Companies (NBFCs) play a pivotal role in the credit ecosystem. While traditional commercial banks follow rigid underwriting templates, NBFCs provide the flexibility needed for structured business growth.
      
      At Suasion Finvest, we analyze corporate credit by evaluating cash flows, underlying contracts, and management capabilities rather than just relying on standard security collateral. This allows us to structure business lending solutions, expansion capital, and structured debt matching seasonal cash flow cycles.
      
      For medium enterprises in West Bengal, partnering with an NBFC means faster turnaround, customized repayment scheduling, and advisory support that helps them optimize their balance sheet for future growth.
    `
  },
  {
    id: 5,
    title: "How Property Fits into Long-Term Wealth Planning",
    excerpt: "A guide to analyzing rental yields, commercial opportunities, and using real estate as a hedge against inflation.",
    category: "Real Assets",
    date: "February 18, 2026",
    author: "Sumaan Shree Kataruka",
    readTime: "5 mins read",
    content: `
      Property is a core component of HNI asset allocation. It provides a physical hedge against inflation and a source of regular rental cash flow.
      
      However, successful property investing requires a disciplined yield-centric approach. Residential real estate in India typically yields 2-3%, which struggles to cover inflation or maintenance. Conversely, commercial properties, office spaces, and retail outlets can yield 6-8%, making them excellent cash-generation assets.
      
      Before purchasing any real estate, we advise clients to perform strict legal title due diligence, verify municipal approvals, and calculate the net-of-tax yield. A property should fit within your total asset allocation rather than concentrating all family wealth in illiquid holdings.
    `
  },
  {
    id: 6,
    title: "Retirement Planning for Business Families",
    excerpt: "Key strategies for managing business succession, structuring family offices, and securing guaranteed pension cash flows.",
    category: "Family Office",
    date: "January 05, 2026",
    author: "Ashok Kataruka",
    readTime: "6 mins read",
    content: `
      Retirement planning for business families is different from salaried individuals. Since their wealth is often tied up in business equity and commercial assets, liquidity events must be carefully planned.
      
      A key step is separating personal estate from business liabilities. This is done by setting up family trusts and structuring life insurance portfolios under the Married Women's Property (MWP) Act to protect assets from business creditors.
      
      Secondly, business families should create a non-business income stream. By deploying surplus profits into debt securities, mutual fund SIPs, and guaranteed annuity plans, they build a financial cushion. This enables the next generation to manage the family business with confidence while securing the founders' retirement.
    `
  }
];

export default function Resources() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  return (
    <div className="py-12 md:py-20 space-y-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
            Resources & Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
            Financial Literacy & Strategy
          </h1>
          <p className="text-base text-charcoal/80">
            Insights on wealth management, business finance, estate protection, and asset allocation from the Suasion Group desk.
          </p>
        </div>
      </section>

      {/* Grid of Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl border border-gold/15 p-6 shadow-sm flex flex-col justify-between hover:border-gold hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] uppercase font-bold text-gold tracking-wider">
                  <span>{post.category}</span>
                  <span className="text-charcoal/50 font-numbers">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-navy leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gold/10 flex justify-between items-center">
                <div className="text-[10px] text-charcoal/60 space-y-0.5">
                  <span className="block font-medium">By {post.author}</span>
                  <span className="block font-numbers">{post.date}</span>
                </div>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-gold transition-colors"
                >
                  Read Article
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedPost(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white rounded-xl border border-gold/20 max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-10 shadow-2xl relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 text-charcoal/60 hover:text-navy p-1.5 rounded-lg hover:bg-navy/5"
              aria-label="Close article modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase text-gold tracking-widest block">
                {selectedPost.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy leading-tight pr-8">
                {selectedPost.title}
              </h2>
              <div className="flex flex-wrap gap-4 text-xs text-charcoal/60 font-numbers pt-1 border-b border-gold/10 pb-4">
                <span className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" /> By {selectedPost.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {selectedPost.date}
                </span>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            <div className="text-sm sm:text-base text-charcoal/80 leading-relaxed space-y-4 whitespace-pre-line text-wrap">
              {selectedPost.content}
            </div>

            <div className="pt-6 border-t border-gold/10 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2.5 bg-navy text-white hover:bg-gold hover:text-navy text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
