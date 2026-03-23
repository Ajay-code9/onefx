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
  <section className="relative pt-[calc(5rem+32px)] pb-24 overflow-hidden bg-[#050510]">
    {/* Background elements */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold mb-8 border border-orange-500/20">
            <Flame className="w-4 h-4" />
            <span>ENERGY & AGRICULTURE</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tighter">
            Trade Commodities <br />
            <span className="text-orange-500">Online With oneFX</span>
          </h1>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-lg">
            Access energy, metals, and soft commodities with competitive pricing, advanced platforms, and secure trading solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              to="/signup"
              className="px-10 py-5 text-lg bg-orange-500 hover:bg-orange-600 border-orange-500 shadow-orange-500/20"
            >
              Open Live Account <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button to="/signup" variant="outline" className="px-10 py-5 text-lg border-white/10 hover:border-orange-500/50">
              Try Demo Account
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-32 h-32 bg-dark-card border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-xl"
              >
                <Flame className="w-16 h-16 text-orange-500" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-0 w-40 h-40 bg-dark-card border border-white/10 rounded-[2.5rem] flex items-center justify-center shadow-2xl backdrop-blur-xl"
              >
                <Wheat className="w-20 h-20 text-orange-400" />
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="w-64 h-64 bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-full border border-orange-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.2)]"
              >
                <Droplets className="w-32 h-32 text-orange-500" />
              </motion.div>
            </div>
          </div>
        </motion.div>
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
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
  <section className="py-32 bg-[#050510] relative overflow-hidden">
    <div className="pointer-events-none absolute right-[-20px] top-1/2 -translate-y-1/2 hidden md:block z-0">
      <img
        src="/images/hero/logo-white.svg"
        alt=""
        aria-hidden
        className="w-[540px] h-auto opacity-[0.08] blur-[0.2px]"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Why Trade Commodities With oneFX</h2>
        <p className="text-white/40 text-xl">Experience the advantage of trading with a premium infrastructure provider.</p>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 bg-orange-500 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.4)]"
          >
            <Zap className="w-12 h-12 text-dark" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-12">
            <div className="text-right flex flex-row-reverse gap-8 items-start">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                <ShieldCheck className="text-orange-500 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Negative Balance Protection</h3>
                <p className="text-white/40 leading-relaxed">Your losses can never exceed your deposits, ensuring your financial safety in volatile markets.</p>
              </div>
            </div>
            <div className="text-right flex flex-row-reverse gap-8 items-start">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                <BarChart3 className="text-orange-500 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Ultra-Low Spreads</h3>
                <p className="text-white/40 leading-relaxed">Trade with spreads starting from 0.0 pips on major pairs, reducing your trading costs significantly.</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                <ArrowDownToLine className="text-orange-500 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Instant Withdrawals</h3>
                <p className="text-white/40 leading-relaxed">Access your profits instantly with our automated withdrawal system and multiple payment methods.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                <Globe2 className="text-orange-500 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Explore Opportunities</h3>
                <p className="text-white/40 leading-relaxed">Trade 60+ currency pairs including majors, minors, and exotics from a single powerful platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const UnderstandingCommodities = () => (
  <section className="py-32 bg-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Understanding The <br /> <span className="text-orange-500">Commodity Market</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: 'What is commodity trading?', 
            desc: 'Commodity trading involves buying and selling raw materials like oil, gold, or agricultural products. It\'s a way to diversify your portfolio and hedge against inflation.',
            image: 'https://picsum.photos/seed/oil-rig/600/400'
          },
          { 
            title: 'How to trade commodities?', 
            desc: 'You can trade commodities through CFDs, allowing you to speculate on price movements without owning the physical asset. This provides leverage and flexibility.',
            image: 'https://picsum.photos/seed/wheat-field/600/400'
          },
          { 
            title: 'Market Drivers', 
            desc: 'Commodity prices are driven by global supply and demand, geopolitical events, and economic data. Understanding these factors is key to successful trading.',
            image: 'https://picsum.photos/seed/energy-market/600/400'
          }
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 group"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-white/40 leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HeatmapSection = () => (
  <section className="py-32 bg-[#050510]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Commodity Heatmap</h2>
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
  <section className="py-32 bg-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Frequently asked questions</h2>
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
          answer="Yes, our MetaTrader 5 platform is fully compatible with iOS and Android devices, allowing you to manage your commodity trades on the go."
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
