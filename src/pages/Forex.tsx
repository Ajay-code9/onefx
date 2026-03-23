import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Zap, 
  Globe2, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  BarChart3,
  Plus,
  Minus,
  ArrowDownToLine,
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
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-gold' : 'text-white/80 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-gold border-gold rotate-180' : 'bg-white/5'}`}>
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

// --- Forex Page Sections ---

const ForexHero = () => (
  <section className="relative pt-[calc(5rem+32px)] pb-24 overflow-hidden bg-[#050510]">
    {/* Background elements */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-xs font-bold mb-8 border border-gold/20">
            <Globe2 className="w-4 h-4" />
            <span>GLOBAL FOREX MARKETS</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tighter">
            Trade Forex <br />
            <span className="gold-gradient-text">With Confidence</span>
          </h1>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-lg">
            Access over 60+ currency pairs with institutional-grade liquidity, ultra-low spreads, and lightning-fast execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/signup" className="px-10 py-5 text-lg">
              Open Live Account <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button to="/signup" variant="outline" className="px-10 py-5 text-lg">
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
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-32 h-32 bg-dark-card border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-xl"
              >
                <span className="text-5xl font-bold text-gold">€</span>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-0 w-40 h-40 bg-dark-card border border-white/10 rounded-[2.5rem] flex items-center justify-center shadow-2xl backdrop-blur-xl"
              >
                <span className="text-6xl font-bold text-white">$</span>
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="w-64 h-64 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full border border-gold/30 flex items-center justify-center shadow-[0_0_50px_rgba(197,160,89,0.2)]"
              >
                <TrendingUp className="w-32 h-32 text-gold" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const CurrencyPairs = () => {
  const pairs = [
    { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: '1.0842', change: '+0.12%', trend: 'up' as const },
    { symbol: 'GBP/USD', name: 'British Pound / US Dollar', price: '1.2634', change: '-0.05%', trend: 'down' as const },
    { symbol: 'USD/JPY', name: 'US Dollar / Japanese Yen', price: '149.23', change: '+0.45%', trend: 'up' as const },
    { symbol: 'AUD/USD', name: 'Australian Dollar / US Dollar', price: '0.6542', change: '+0.21%', trend: 'up' as const },
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pairs.map((pair, i) => (
            <motion.div
              key={pair.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">{pair.symbol}</h3>
                  <p className="text-xs text-white/40">{pair.name}</p>
                </div>
                <div className={`px-2 py-1 rounded-md text-[10px] font-bold ${pair.trend === 'up' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {pair.change}
                </div>
              </div>
              <div className="text-2xl font-mono font-bold text-white">{pair.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyTradeForex = () => (
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
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Why Trade Forex With oneFX</h2>
        <p className="text-white/40 text-xl">Experience the advantage of trading with a premium infrastructure provider.</p>
      </div>

      <div className="relative">
        {/* Central Star Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 bg-gold rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(197,160,89,0.4)]"
          >
            <Zap className="w-12 h-12 text-dark" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-12">
            <div className="text-right flex flex-row-reverse gap-8 items-start">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                <ShieldCheck className="text-gold w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Negative Balance Protection</h3>
                <p className="text-white/40 leading-relaxed">Your losses can never exceed your deposits, ensuring your financial safety in volatile markets.</p>
              </div>
            </div>
            <div className="text-right flex flex-row-reverse gap-8 items-start">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                <BarChart3 className="text-gold w-8 h-8" />
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
                <ArrowDownToLine className="text-gold w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Instant Withdrawals</h3>
                <p className="text-white/40 leading-relaxed">Access your profits instantly with our automated withdrawal system and multiple payment methods.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10">
                <Globe2 className="text-gold w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Global Market Access</h3>
                <p className="text-white/40 leading-relaxed">Trade 60+ currency pairs including majors, minors, and exotics from a single powerful platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const UnderstandingForex = () => (
  <section className="py-24 bg-[#F8F9FA]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="font-sans text-4xl md:text-5xl font-medium text-[#10131A] mb-4 leading-tight tracking-tight">
          Understanding The Forex Market
        </h2>
        <p className="font-sans text-[#10131A]/72 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
          Learn how the global forex market operates, what drives currency movements, and how traders identify opportunities around the world.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-7">
        <div className="rounded-3xl overflow-hidden bg-white border border-[#E9EBF2] shadow-[0_10px_24px_rgba(15,23,42,0.07)] min-h-[540px]">
          <img
            src="/images/hero/Forex-Trading.svg"
            alt="Forex trading chart"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="rounded-3xl bg-[#ECEEF8] border border-[#E3E7F2] p-8 md:p-9 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
          <div className="w-12 h-12 rounded-xl bg-[#2A0D51] flex items-center justify-center mb-7">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-sans text-[2.1rem] md:text-[2.35rem] leading-[1.12] font-medium text-[#1A1B23] mb-5">
            What is Forex Trading?
          </h3>
          <p className="font-sans text-[#1A1B23]/78 text-base md:text-lg leading-relaxed font-normal">
            Forex, or foreign exchange trading, is the global marketplace for buying and selling currencies. It operates 24/5 and enables traders to profit from price movements. Learn more in our detailed Forex Basics blog.
          </p>
        </div>

        <div className="rounded-3xl bg-[#ECEEF8] border border-[#E3E7F2] p-8 md:p-9 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
          <div className="w-12 h-12 rounded-xl bg-[#2A0D51] flex items-center justify-center mb-7">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-sans text-[2.1rem] md:text-[2.35rem] leading-[1.12] font-medium text-[#1A1B23] mb-5">
            How to trade Forex ?
          </h3>
          <p className="font-sans text-[#1A1B23]/78 text-base md:text-lg leading-relaxed font-normal">
            To trade forex, open a trading account, fund it, and access a forex trading platform like MetaTrader 5. Traders buy and sell currency pairs, using analysis and strategies to capture opportunities in the forex market.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const HeatmapSection = () => (
  <section className="py-32 bg-[#050510]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Currency Strength Heatmap</h2>
        <p className="text-white/40 text-xl">Visualize market direction and relative currency strength in real-time.</p>
      </div>

      <div className="bg-dark-card rounded-[2.5rem] border border-white/5 p-8 md:p-12 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-white/5">
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">Currency</th>
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">USD</th>
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">EUR</th>
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">GBP</th>
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">JPY</th>
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">AUD</th>
              <th className="pb-6 text-white/40 font-bold uppercase tracking-wider text-xs">CAD</th>
            </tr>
          </thead>
          <tbody>
            {['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'].map((row, i) => (
              <tr key={row} className="border-b border-white/5 last:border-0">
                <td className="py-6 font-bold text-white">{row}</td>
                {['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'].map((col, j) => {
                  if (row === col) return <td key={col} className="py-6 bg-white/5" />;
                  const value = (Math.random() * 2 - 1).toFixed(2);
                  const isPositive = parseFloat(value) > 0;
                  const intensity = Math.abs(parseFloat(value)) * 100;
                  
                  return (
                    <td key={col} className="py-6 px-2">
                      <div 
                        className={`w-full h-12 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                        style={{ backgroundColor: isPositive ? `rgba(34, 197, 94, ${intensity / 200})` : `rgba(239, 68, 68, ${intensity / 200})` }}
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

const ForexFAQ = () => (
  <section className="py-32 bg-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Forex Trading FAQs</h2>
        <p className="text-white/40 text-xl">Everything you need to know about trading forex with oneFX.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <FAQItem 
          question="What is the minimum deposit for forex trading?"
          answer="The minimum deposit depends on the account type you choose. Our Smart Account starts from $1,000, while our Elite and Premiere accounts are designed for more experienced traders with higher deposit requirements."
        />
        <FAQItem 
          question="What leverage do you offer for forex?"
          answer="We offer flexible leverage options up to 1:500 for major currency pairs. Leverage allows you to control larger positions with a smaller amount of capital, but it also increases your risk."
        />
        <FAQItem 
          question="Are there any commissions on forex trades?"
          answer="Our Smart Account features commission-free trading with slightly wider spreads. Our Elite and Premiere accounts offer raw spreads from 0.0 pips with a small commission per lot traded."
        />
        <FAQItem 
          question="What are the trading hours for forex?"
          answer="The forex market is open 24 hours a day, 5 days a week. Trading begins on Sunday evening (UTC) and closes on Friday evening (UTC)."
        />
        <FAQItem 
          question="Do you offer a demo account?"
          answer="Yes, we offer free demo accounts that allow you to practice trading in real market conditions with virtual funds. This is a great way to test our platform and your trading strategies."
        />
      </div>
    </div>
  </section>
);

// --- Main Forex Component ---

export const Forex = () => {
  const tickerAssets = [
    { symbol: 'EUR/USD', price: '1.15690', change: '-0.00142', percent: '-0.12%', trend: 'down' as const, flags: ['eu', 'us'] },
    { symbol: 'GBP/USD', price: '1.38420', change: '+0.00215', percent: '+0.15%', trend: 'up' as const, flags: ['gb', 'us'] },
    { symbol: 'USD/JPY', price: '110.250', change: '+0.450', percent: '+0.41%', trend: 'up' as const, flags: ['us', 'jp'] },
    { symbol: 'AUD/USD', price: '0.74520', change: '-0.00085', percent: '-0.11%', trend: 'down' as const, flags: ['au', 'us'] },
    { symbol: 'USD/CAD', price: '1.25340', change: '+0.00120', percent: '+0.10%', trend: 'up' as const, flags: ['us', 'ca'] },
    { symbol: 'EUR/GBP', price: '0.85420', change: '-0.00045', percent: '-0.05%', trend: 'down' as const, flags: ['eu', 'gb'] },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <ForexHero />
      <MarketTickerStrip assets={tickerAssets} />
      <CurrencyPairs />
      <WhyTradeForex />
      <UnderstandingForex />
      <HeatmapSection />
      <TradingPlatformsSection />
      <StatsSection />
      <ForexFAQ />
      <CTASection />
    </div>
  );
};

export default Forex;
