import React, { useState } from 'react';

/** Full screenshot visible — object-contain, no crop */
const TabletFrame: React.FC<{ label?: string; src: string; alt: string }> = ({ label, src, alt }) => (
  <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out will-change-transform hover:-translate-y-0.5 hover:shadow-[0_20px_55px_rgba(0,0,0,0.55)]">
    <div className="flex w-full items-center justify-center overflow-hidden bg-neutral-100 px-1 pt-1 sm:px-1.5 sm:pt-1.5">
      <img
        src={src}
        alt={alt}
        className="block h-auto w-full max-h-[min(52vh,420px)] sm:max-h-[min(50vh,460px)] lg:max-h-[min(48vh,500px)] object-contain object-center"
      />
    </div>
    {label && (
      <div className="flex items-center justify-between gap-2 border-t border-white/10 px-2.5 py-2 text-[0.7rem] font-medium text-slate-300/95">
        <span className="truncate">{label}</span>
        <span className="inline-flex shrink-0 items-center gap-1 text-[0.65rem] text-slate-400">
          Client view
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_2px_rgba(16,185,129,0.3)]" />
        </span>
      </div>
    )}
  </div>
);

const ClientDashboard: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards = [
    {
      key: 'workspace',
      label: 'Unified Trading Workspace',
      src: '/images/user-side-images/userplatform1.svg',
      alt: 'Client trading workspace',
      title: 'Unified trading workspace',
      summary: 'Balances, positions, and watchlists together in one clean layout.',
      details:
        'Clients land in a focused workspace that surfaces equity, margin, open trades, and watchlists together — so they can act quickly without navigating multiple pages.',
    },
    {
      key: 'wallets',
      label: 'Wallet & Balances',
      src: '/images/user-side-images/userplatform2.svg',
      alt: 'Wallets and balances',
      title: 'Wallets and funding',
      summary: 'Every wallet, balance, and currency visible at a glance.',
      details:
        'Wallet overviews show cash balances, currencies, and recent funding activity with clear entry points for deposits, withdrawals, and internal transfers.',
    },
    {
      key: 'positions',
      label: 'Portfolio & Positions',
      src: '/images/user-side-images/userplatform3.svg',
      alt: 'Portfolio and positions',
      title: 'Open positions view',
      summary: 'Real-time exposure and P&L across all instruments.',
      details:
        'Position views highlight symbol, size, entry, and floating P&L, helping traders understand risk concentration and adjust quickly when markets move.',
    },
    {
      key: 'reports',
      label: 'Performance Reports',
      src: '/images/user-side-images/userplatform4.svg',
      alt: 'Performance reports',
      title: 'Performance analytics',
      summary: 'Clear breakdowns of trading results and behaviour over time.',
      details:
        'Interactive reports give clients a simple way to review profit, loss, and trading behaviour by period, instrument, and strategy — without exporting to spreadsheets.',
    },
    {
      key: 'notifications',
      label: 'Notifications & Activity',
      src: '/images/user-side-images/userplatform5.svg',
      alt: 'Notifications and activity',
      title: 'Activity and alerts',
      summary: 'Funding, margin, and system alerts in a single smart feed.',
      details:
        'A consolidated activity stream keeps traders informed about funding events, margin calls, and important platform messages so nothing critical is missed.',
    },
  ] as const;

  return (
    <main className="bg-dark text-white">
      <section className="pt-[calc(5rem+18px)] pb-12 md:pt-[calc(5rem+26px)] md:pb-16 bg-[radial-gradient(circle_at_top,#261145,#0b0118_58%,#05000a_100%)]">
        <div className="site-container space-y-8 md:space-y-10">
          {/* Compact header */}
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold/90">
              Client Dashboard
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-zinc-50">
              One place for every trading action.
            </h1>
            <p className="text-sm text-slate-300/95">
              A focused interface where clients review, fund, and manage their trading activity.
            </p>
          </div>

          {/* Interactive showcase */}
          <section className="relative rounded-3xl bg-white/5 border border-white/8 shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl px-4 py-5 sm:px-6 sm:py-7 overflow-visible lg:overflow-visible">
            {/* Dim background only when a card is hovered (desktop only) */}
            <div
              className={`pointer-events-none fixed inset-0 bg-black/45 backdrop-blur-md transition-opacity duration-300 ease-out hidden lg:block ${
                hoveredCard ? 'opacity-100' : 'opacity-0'
              }`}
            />

            <div className="relative z-10">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-zinc-50">
                    Explore the client dashboard
                  </h2>
                  <p className="text-xs md:text-sm text-slate-300/90">
                    Each screen is a real part of the experience — hover or tap to see what it does.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:max-w-6xl lg:mx-auto lg:overflow-visible">
                {cards.map((card, index) => {
                  const alignmentClass =
                    index === 3 ? 'lg:col-start-1' : index === 4 ? 'lg:col-start-2' : '';
                  const isHovered = hoveredCard === card.key;
                  const dimOthers = hoveredCard !== null && !isHovered;

                  return (
                  <article
                    key={card.key}
                    onMouseEnter={() => setHoveredCard(card.key)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group/card relative z-0 flex flex-col h-full rounded-3xl bg-white/5 border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.62)] overflow-hidden transition-[transform,box-shadow,filter,opacity] duration-300 ease-out will-change-transform hover:-translate-y-6 sm:hover:-translate-y-10 lg:hover:-translate-y-14 hover:scale-[1.05] sm:hover:scale-[1.06] lg:hover:scale-[1.08] hover:shadow-[0_40px_100px_rgba(0,0,0,0.98)] hover:z-30 ${alignmentClass} ${
                      dimOthers ? 'lg:opacity-60 lg:saturate-[0.75]' : 'opacity-100'
                    } ${isHovered ? 'lg:brightness-110 lg:saturate-110' : ''}`}
                  >
                    <div className="p-3 sm:p-4 pb-0">
                      <TabletFrame label={card.label} src={card.src} alt={card.alt} />
                    </div>
                    <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
                      <h3 className="text-sm md:text-base font-semibold text-zinc-50">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-xs md:text-sm text-slate-300/95 line-clamp-2 group-hover/card:line-clamp-none transition-all duration-300 ease-out">
                        {card.summary}
                      </p>
                      <div className="mt-2 text-xs md:text-sm text-slate-200/95 leading-relaxed overflow-hidden max-h-0 opacity-0 translate-y-1 group-hover/card:max-h-48 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 ease-out">
                        {card.details}
                      </div>
                    </div>
                  </article>
                );})}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default ClientDashboard;

