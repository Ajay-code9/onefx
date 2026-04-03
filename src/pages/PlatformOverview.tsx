import React from 'react';

const TabletFrame: React.FC<{ label?: string; src: string; alt: string }> = ({ label, src, alt }) => (
  <div className="group relative flex flex-col rounded-[24px] border border-slate-200/90 bg-[radial-gradient(circle_at_top,#ffffff,#f3f4f6_55%,#e5e7eb_100%)] shadow-[0_24px_70px_rgba(15,23,42,0.28)] overflow-hidden px-4 py-4 sm:px-5 sm:py-5 transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.35)]">
    <div className="pointer-events-none absolute inset-x-3 top-3 h-1.5 rounded-full bg-slate-200/90" />
    <div className="mt-4 rounded-[20px] bg-[radial-gradient(circle_at_top,rgba(248,250,252,1),rgba(226,232,240,0.98)_45%,rgba(203,213,225,0.96)_100%)] overflow-hidden">
      <div className="aspect-4/3 w-full flex items-center justify-center bg-white px-2.5 sm:px-4 py-3 sm:py-4 rounded-[20px] shadow-[0_16px_45px_rgba(15,23,42,0.35)]">
        <img
          src={src}
          alt={alt}
          className="h-full w-full max-h-full max-w-full object-contain sm:scale-[1.04]"
        />
      </div>
    </div>
    {label && (
      <div className="mt-3 flex items-center justify-between text-xs font-medium text-slate-600">
        <span>{label}</span>
        <span className="inline-flex items-center gap-1 text-[0.7rem] text-slate-400">
          Preview
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.25)]" />
        </span>
      </div>
    )}
  </div>
);

const features = [
  {
    title: 'Account Management',
    body: 'Create, verify, and manage multiple trading accounts from a single, unified profile.',
  },
  {
    title: 'Secure Transactions',
    body: 'Bank-grade encryption and controlled workflows for deposits, withdrawals, and internal transfers.',
  },
  {
    title: 'Real-time Trading Insights',
    body: 'Live positions, P&L, and exposure views designed for fast decision-making.',
  },
  {
    title: 'Performance Analytics',
    body: 'Understand trading behaviour, profitability, and retention with clear visual reporting.',
  },
];

const PlatformOverview: React.FC = () => {
  return (
    <main className="bg-dark text-white">
      <section className="pt-[calc(5rem+20px)] pb-12 md:pt-[calc(5rem+26px)] md:pb-16 bg-[radial-gradient(circle_at_top,#261145,#0b0118_58%,#05000a_100%)]">
        <div className="site-container space-y-8 lg:space-y-10">
          {/* Compact header */}
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold/90">
              Platform Overview
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-zinc-50">
              One platform for traders and operations.
            </h1>
            <p className="text-sm text-slate-300/95 max-w-2xl">
              See how OneFX brings trading, wallets, and analytics into a single experience.
            </p>
          </div>

          {/* Interactive showcase */}
          <section className="relative rounded-3xl bg-white/5 border border-white/8 shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl px-4 py-5 sm:px-6 sm:py-7 overflow-visible lg:overflow-visible group">
            {/* Optional dim background on hover (desktop only) */}
            <div className="pointer-events-none fixed inset-0 bg-black/40 backdrop-blur-md opacity-0 transition-opacity duration-300 ease-out hidden lg:block lg:group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-zinc-50">
                    OneFX platform screens
                  </h2>
                  <p className="text-xs md:text-sm text-slate-300/90">
                    Hover over each screen to reveal what it helps your clients accomplish.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:overflow-visible">
                <article
                  className="group/card relative z-0 flex flex-col h-full rounded-3xl bg-white/5 border border-white/10 shadow-[0_14px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 ease-out lg:group-hover:opacity-70 lg:hover:opacity-100 lg:hover:-translate-y-2 lg:hover:scale-[1.05] lg:hover:shadow-[0_24px_70px_rgba(0,0,0,0.9)] lg:hover:z-20"
                  style={{ transitionProperty: 'transform, box-shadow, opacity' }}
                >
                  <div className="p-3 sm:p-4 pb-0">
                    <TabletFrame
                      label="Trading Workspace"
                      src="/images/user-side-images/userplatform1.svg"
                      alt="Trading workspace preview"
                    />
                  </div>
                  <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
                    <h3 className="text-sm md:text-base font-semibold text-zinc-50">
                      1. Trading workspace
                    </h3>
                    <p className="mt-1 text-xs md:text-sm text-slate-300/95 line-clamp-2 group-hover/card:line-clamp-none transition-all duration-300 ease-out">
                      Monitor markets, open positions, and key balances from a single responsive view.
                    </p>
                    <div className="mt-2 text-xs md:text-sm text-slate-200/95 leading-relaxed overflow-hidden max-h-0 opacity-0 translate-y-1 group-hover/card:max-h-48 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 ease-out">
                      The trading workspace keeps charts, tickets, and exposure panels close together so traders
                      never lose context while managing orders or reacting to market moves.
                    </div>
                  </div>
                </article>

                <article
                  className="group/card relative z-0 flex flex-col h-full rounded-3xl bg-white/5 border border-white/10 shadow-[0_14px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 ease-out lg:group-hover:opacity-70 lg:hover:opacity-100 lg:hover:-translate-y-2 lg:hover:scale-[1.05] lg:hover:shadow-[0_24px_70px_rgba(0,0,0,0.9)] lg:hover:z-20"
                  style={{ transitionProperty: 'transform, box-shadow, opacity' }}
                >
                  <div className="p-3 sm:p-4 pb-0">
                    <TabletFrame
                      label="Wallet & Funding"
                      src="/images/user-side-images/userplatform2.svg"
                      alt="Wallet and funding preview"
                    />
                  </div>
                  <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
                    <h3 className="text-sm md:text-base font-semibold text-zinc-50">
                      2. Wallets & funding
                    </h3>
                    <p className="mt-1 text-xs md:text-sm text-slate-300/95 line-clamp-2 group-hover/card:line-clamp-none transition-all duration-300 ease-out">
                      A clear view of balances, currencies, and funding flows across accounts.
                    </p>
                    <div className="mt-2 text-xs md:text-sm text-slate-200/95 leading-relaxed overflow-hidden max-h-0 opacity-0 translate-y-1 group-hover/card:max-h-48 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 ease-out">
                      Wallet dashboards simplify deposits, withdrawals, and internal transfers while keeping
                      compliance checks and processing states transparent for every client.
                    </div>
                  </div>
                </article>

                <article
                  className="group/card relative z-0 flex flex-col h-full rounded-3xl bg-white/5 border border-white/10 shadow-[0_14px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 ease-out lg:group-hover:opacity-70 lg:hover:opacity-100 lg:hover:-translate-y-2 lg:hover:scale-[1.05] lg:hover:shadow-[0_24px_70px_rgba(0,0,0,0.9)] lg:hover:z-20"
                  style={{ transitionProperty: 'transform, box-shadow, opacity' }}
                >
                  <div className="p-3 sm:p-4 pb-0">
                    <TabletFrame
                      label="Insights & Reporting"
                      src="/images/user-side-images/userplatform3.svg"
                      alt="Insights and reporting preview"
                    />
                  </div>
                  <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
                    <h3 className="text-sm md:text-base font-semibold text-zinc-50">
                      3. Insights & reporting
                    </h3>
                    <p className="mt-1 text-xs md:text-sm text-slate-300/95 line-clamp-2 group-hover/card:line-clamp-none transition-all duration-300 ease-out">
                      Visual analytics that help traders and teams understand performance.
                    </p>
                    <div className="mt-2 text-xs md:text-sm text-slate-200/95 leading-relaxed overflow-hidden max-h-0 opacity-0 translate-y-1 group-hover/card:max-h-48 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 ease-out">
                      Performance views highlight profitability, drawdowns, and retention trends so brokers can
                      support clients and partners with data-backed insight.
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Feature summary */}
          <section className="rounded-3xl bg-white/5 border border-white/8 shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl px-4 py-5 sm:px-6 sm:py-7">
            <h2 className="text-lg md:text-xl font-semibold text-zinc-50 mb-4">
              Built for clarity and control
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {features.map((feature, idx) => {
                const badgeText =
                  idx === 0 ? 'AM' : idx === 1 ? 'ST' : idx === 2 ? 'RT' : 'PA';

                return (
                  <div
                    key={feature.title}
                    className="flex flex-col rounded-2xl border border-white/8 bg-white/5 shadow-[0_14px_40px_rgba(0,0,0,0.55)] px-4 py-4 sm:px-5 sm:py-5 gap-2"
                  >
                    <div className="relative inline-flex h-9 w-9 items-center justify-center mb-1">
                      <span className="absolute inline-flex h-9 w-9 rounded-xl bg-gold/25 animate-ping" />
                      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gold text-dark text-[0.7rem] font-semibold tracking-tight shadow-[0_10px_25px_rgba(0,0,0,0.7)]">
                        {badgeText}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-50">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-slate-200/95 leading-relaxed">
                      {feature.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA */}
          <div className="rounded-full inline-flex">
            <a
              href="/client-dashboard"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#C5A059] via-[#E5C78B] to-[#C5A059] px-7 py-2.5 text-sm md:text-base font-medium text-[#1a102f] shadow-[0_12px_36px_rgba(0,0,0,0.75),0_0_24px_rgba(197,160,89,0.5)] hover:shadow-[0_16px_44px_rgba(0,0,0,0.85),0_0_30px_rgba(229,199,139,0.65)] hover:-translate-y-0.5 transition-all duration-300 ease-out"
            >
              Explore Client Dashboard
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlatformOverview;

