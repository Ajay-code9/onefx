import React from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  Droplets, 
  Wheat, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  BarChart3,
  Plus,
  Minus,
  ArrowDownToLine,
  Globe2,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MarketTickerStrip } from '../components/MarketTickerStrip';
import { StatsSection, TradingPlatformsSection, CTASection } from '../components/CommonSections';
import { Button } from '../components/Button';

// --- Reusable Components ---

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-orange-500' : 'text-white/80 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-orange-500 border-orange-500 rotate-180' : 'bg-white/5'}`}>
          {isOpen ? <Minus className="w-4 h-4 text-dark" /> : <Plus className="w-4 h-4 text-white/40" />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-white/40 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

// --- Commodities Page Sections ---

const CommoditiesHero = () => (
  <section className="hero-full-viewport pt-[calc(5rem+10px)] pb-6 md:pt-[calc(5rem+28px)] md:pb-8 bg-[#0b0118]">
    <div className="absolute inset-0">
      <img
        src="/images/hero/forexherosection.webp"
        alt=""
        className="h-full w-full object-cover object-[58%_30%] md:object-center brightness-[1.06] contrast-[1.08] saturate-[1.14]"
        aria-hidden
      />
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0b0118]/56 via-[#0b0118]/26 to-[#0b0118]/10" />
      <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-[#0b0118]/10 via-transparent to-[#0b0118]/38" />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,1,24,0.12) 0%, rgba(11,1,24,0.3) 28%, rgba(11,1,24,0.64) 52%, rgba(11,1,24,0.9) 74%, #0b0118 100%)',
        }}
      />
    </div>

    <div className="hero-full-viewport-fill">
      <div className="site-container relative z-10 py-4 md:py-6">
      <div className="grid lg:grid-cols-2 site-grid-gap items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-xs font-bold mb-8 border border-gold/20">
            <Flame className="w-4 h-4" />
            <span>ENERGY & AGRICULTURE</span>
          </div>
          <h1 className="site-heading-hero font-bold text-white leading-[1.05] mb-8 tracking-tighter font-sans">
            Trade Commodities <br />
            <span className="gold-gradient-text">Online With oneFX</span>
          </h1>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-lg">
            Access energy, metals, and soft commodities with competitive pricing, advanced platforms, and secure trading solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/signup" className="px-10 py-5 text-lg">
              Open Live Account <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button to="/signup" variant="outline" className="px-10 py-5 text-lg border-white/10 hover:border-gold/50">
              Try Demo Account
            </Button>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  </section>
);

const CommoditiesGrid = () => {
  const items = [
    { symbol: 'UKOIL', name: 'Brent Crude Oil', price: '82.42', change: '+1.12', percent: '+1.38%', trend: 'up' as const, icon: <Flame className="w-6 h-6" /> },
    { symbol: 'USOIL', name: 'WTI Crude Oil', price: '78.34', change: '+0.95', percent: '+1.23%', trend: 'up' as const, icon: <Droplets className="w-6 h-6" /> },
    { symbol: 'XNG/USD', name: 'Natural Gas', price: '1.84', change: '-0.05', percent: '-2.65%', trend: 'down' as const, icon: <Flame className="w-6 h-6" /> },
    { symbol: 'WHEAT', name: 'Wheat', price: '564.20', change: '+4.40', percent: '+0.79%', trend: 'up' as const, icon: <Wheat className="w-6 h-6" /> },
  ];

  return (
    <section className="site-section bg-dark">
      <div className="site-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Commodities Currency Pairs</h2>
          <p className="text-white/40">Trade the world's most essential resources with tight spreads.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors">{item.symbol}</h3>
                    <p className="text-xs text-white/40">{item.name}</p>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-md text-[10px] font-bold ${item.trend === 'up' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {item.change}
                </div>
              </div>
              <div className="text-2xl font-mono font-bold text-white">{item.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyTradeCommodities = () => (
  <section className="site-section bg-[linear-gradient(180deg,#13032a_0%,#09021b_58%,#090118_100%)] relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_16%_88%,rgba(120,72,198,0.24),transparent_44%),radial-gradient(circle_at_82%_70%,rgba(98,53,162,0.2),transparent_40%)]" />
    <div className="site-container relative z-10">
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="site-heading font-bold text-white mb-6">Why Trade Commodities With oneFX</h2>
      </div>

      <div className="max-w-[1180px] mx-auto overflow-hidden">
        <img
          src="/images/hero/Trade-Forex-With-oneFX.webp"
          alt="Why Trade Commodities With oneFX"
          className="w-full h-auto object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const UnderstandingCommodities = () => (
  <section className="site-section bg-[#F8F9FA]">
    <div className="site-container">
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="font-sans text-4xl md:text-6xl font-medium text-[#10131A] mb-5 leading-tight">
          Understanding the Commodity Market
        </h2>
        <p className="font-sans text-[#10131A]/72 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
          Understand how energy, agriculture, and metal commodities are traded worldwide, how prices move with supply and demand, and how traders diversify their portfolios through these markets.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-7">
        <div className="rounded-3xl overflow-hidden bg-white border border-[#E9EBF2] shadow-[0_10px_24px_rgba(15,23,42,0.07)] min-h-[540px]">
          <img
            src="/images/hero/Forex-Trading.svg"
            alt="Commodity trading chart"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="rounded-3xl bg-[#ECEEF8] border border-[#E3E7F2] p-8 md:p-9 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
          <div className="w-12 h-12 rounded-xl bg-[#2A0D51] flex items-center justify-center mb-7">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-sans text-[2.1rem] md:text-[2.35rem] leading-[1.12] font-medium text-[#1A1B23] mb-5">
            What is commodity trading
          </h3>
          <p className="font-sans text-[#1A1B23]/78 text-base md:text-lg leading-relaxed font-normal">
            Commodities trading involves buying and selling raw materials like oil, gold, and wheat in global markets. Traders speculate on price movements to profit. Learn more in our Commodities Trading Basics blog.
          </p>
        </div>

        <div className="rounded-3xl bg-[#ECEEF8] border border-[#E3E7F2] p-8 md:p-9 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
          <div className="w-12 h-12 rounded-xl bg-[#2A0D51] flex items-center justify-center mb-7">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-sans text-[2.1rem] md:text-[2.35rem] leading-[1.12] font-medium text-[#1A1B23] mb-5">
            How to trade commodities
          </h3>
          <p className="font-sans text-[#1A1B23]/78 text-base md:text-lg leading-relaxed font-normal">
            To trade commodities, choose from energy, metals, or agricultural assets on our platform. Traders buy or sell contracts based on price movements, using strategies to manage risk and diversify across global commodity markets.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const HeatmapSection = () => (
  <section className="site-section bg-[#050510]">
    <div className="site-container">
      <div className="text-center mb-20">
        <h2 className="site-heading font-bold text-white mb-6">Commodity Heatmap</h2>
        <p className="text-white/40 text-xl">Visualize market direction and relative strength in real-time.</p>
      </div>

      <div className="bg-dark-card rounded-[2.5rem] border border-white/5 p-8 md:p-12 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-white/5">
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">Asset</th>
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">UKOIL</th>
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">USOIL</th>
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">XNG</th>
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">WHEAT</th>
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">CORN</th>
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">SOY</th>
            </tr>
          </thead>
          <tbody>
            {['UKOIL', 'USOIL', 'XNG', 'WHEAT', 'CORN', 'SOY'].map((row, i) => (
              <tr key={row} className="border-b border-white/5 last:border-0">
                <td className="py-6 font-bold text-white">{row}</td>
                {['UKOIL', 'USOIL', 'XNG', 'WHEAT', 'CORN', 'SOY'].map((col, j) => {
                  if (row === col) return <td key={col} className="py-6 bg-white/5" />;
                  const value = (Math.random() * 4 - 2).toFixed(2);
                  const isPositive = parseFloat(value) > 0;
                  const intensity = Math.abs(parseFloat(value)) * 50;
                  
                  return (
                    <td key={col} className="py-6 px-2">
                      <div 
                        className={`w-full h-12 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                        style={{ backgroundColor: isPositive ? `rgba(34, 197, 94, ${intensity / 100})` : `rgba(239, 68, 68, ${intensity / 100})` }}
                      >
                        {isPositive ? '+' : ''}{value}%
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const CommoditiesFAQ = () => (
  <section className="site-section bg-dark">
    <div className="site-container">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="site-heading font-bold text-white mb-6">Frequently asked questions</h2>
        <p className="text-white/40 text-xl">Everything you need to know about trading commodities with oneFX.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <FAQItem 
          question="What are the trading hours for commodities?"
          answer="Commodity markets have varying hours depending on the asset. Energy markets like Oil typically trade 23 hours a day, while agricultural products have specific session times. Check our platform for exact hours."
        />
        <FAQItem 
          question="What is the minimum margin for oil trading?"
          answer="Margin requirements for oil CFDs typically start from 1% for professional clients and 5% for retail clients, depending on regulatory requirements and account type."
        />
        <FAQItem 
          question="Can I trade commodities on my mobile phone?"
          answer="Yes, our oneFXTrader platform is fully compatible with iOS and Android devices, allowing you to manage your commodity trades on the go."
        />
        <FAQItem 
          question="What factors influence commodity prices?"
          answer="Prices are influenced by global supply/demand, geopolitical tensions, weather patterns (for agriculture), and the strength of the US Dollar."
        />
      </div>
    </div>
  </section>
);

// --- Main Commodities Component ---

export const Commodities = () => {
  const tickerAssets = [
    { symbol: 'UKOIL', price: '82.42', change: '+1.12', percent: '+1.38%', trend: 'up' as const, flags: ['gb'] },
    { symbol: 'USOIL', price: '78.34', change: '+0.95', percent: '+1.23%', trend: 'up' as const, flags: ['us'] },
    { symbol: 'XNG/USD', price: '1.84', change: '-0.05', percent: '-2.65%', trend: 'down' as const, flags: ['us'] },
    { symbol: 'WHEAT', price: '564.20', change: '+4.40', percent: '+0.79%', trend: 'up' as const, flags: ['un'] },
    { symbol: 'CORN', price: '432.10', change: '-2.15', percent: '-0.49%', trend: 'down' as const, flags: ['un'] },
    { symbol: 'SOYBEAN', price: '1184.50', change: '+12.30', percent: '+1.05%', trend: 'up' as const, flags: ['un'] },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <CommoditiesHero />
      <MarketTickerStrip assets={tickerAssets} />
      <CommoditiesGrid />
      <WhyTradeCommodities />
      <UnderstandingCommodities />
      <HeatmapSection />
      <TradingPlatformsSection />
      <StatsSection />
      <CommoditiesFAQ />
      <CTASection />
    </div>
  );
};

export default Commodities;
