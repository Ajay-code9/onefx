import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Globe2, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2,
  Plus,
  Minus,
  Gem,
  Coins,
  ChevronRight,
  ArrowDownToLine,
  Clock,
  HelpCircle,
  MousePointer2,
  Wallet,
  ArrowRight
} from 'lucide-react';
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

// --- Metals Page Sections ---

const MetalsHero = () => (
  <section className="hero-full-viewport pt-[calc(5rem+10px)] pb-6 md:pt-[calc(5rem+28px)] md:pb-8 bg-[#0b0118]">
    <div className="absolute inset-0">
      <img
        src="/images/hero/metalsherosection.webp"
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
            <Gem className="w-4 h-4" />
            <span className="tracking-widest uppercase">Precious Metals Trading</span>
          </div>
          <h1 className="site-heading-hero font-bold text-white leading-[1.05] mb-8 tracking-tighter">
            Trade Gold & <br />
            <span className="gold-gradient-text">Silver CFDs</span>
          </h1>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-lg">
            Diversify your portfolio with the world's most sought-after precious metals. Benefit from tight spreads, high leverage, and institutional liquidity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/signup" className="px-10 py-5 text-lg">
              Open Live Account <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button to="/signup" variant="outline" className="px-10 py-5 text-lg">
              Try Free Demo
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8">
            <div>
              <div className="text-2xl font-bold text-white">0.0</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Min Spreads</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">1:500</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Max Leverage</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">24/5</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Market Access</div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  </section>
);

const MetalsMarketOverview = () => {
  const metals = [
    { symbol: 'XAU/USD', name: 'Gold', spread: '0.12', leverage: '1:500', icon: <Gem className="w-6 h-6" />, color: 'from-gold/20 to-gold/5' },
    { symbol: 'XAG/USD', name: 'Silver', spread: '0.01', leverage: '1:200', icon: <Coins className="w-6 h-6" />, color: 'from-slate-400/20 to-slate-400/5' },
    { symbol: 'XPT/USD', name: 'Platinum', spread: '1.50', leverage: '1:100', icon: <Gem className="w-6 h-6" />, color: 'from-blue-200/20 to-blue-200/5' },
    { symbol: 'XPD/USD', name: 'Palladium', spread: '2.40', leverage: '1:100', icon: <Gem className="w-6 h-6" />, color: 'from-orange-200/20 to-orange-200/5' },
  ];

  return (
    <section className="site-section bg-dark relative overflow-hidden">
      <div className="site-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="site-heading font-bold text-white mb-6">Market Overview</h2>
            <p className="text-white/40 text-lg">Real-time pricing and trading conditions for our most popular precious metal pairs.</p>
          </div>
          <Button to="/account-comparison" variant="outline" className="border-white/10">View All Instruments <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metals.map((metal, i) => (
            <motion.div
              key={metal.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-gold/30 transition-all group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${metal.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gold border border-white/10 group-hover:border-gold/30 transition-colors">
                    {metal.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Spread from</div>
                    <div className="text-xl font-mono font-bold text-gold">{metal.spread}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{metal.symbol}</h3>
                <p className="text-white/40 mb-6">{metal.name}</p>
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <span className="text-sm text-white/40">Leverage</span>
                  <span className="text-sm font-bold text-white">{metal.leverage}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MetalsFeatures = () => (
  <section className="site-section bg-[linear-gradient(180deg,#13032a_0%,#09021b_58%,#090118_100%)] relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_16%_88%,rgba(120,72,198,0.24),transparent_44%),radial-gradient(circle_at_82%_70%,rgba(98,53,162,0.2),transparent_40%)]" />
    <div className="site-container relative z-10">
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="site-heading font-bold text-white mb-6">Why Trade Metals With oneFX</h2>
      </div>

      <div className="max-w-[1180px] mx-auto overflow-hidden">
        <img
          src="/images/hero/Trade-Forex-With-oneFX.webp"
          alt="Why Trade Metals With oneFX"
          className="w-full h-auto object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const UnderstandingMetalsTrading = () => (
  <section className="site-section bg-[#F8F9FA]">
    <div className="site-container">
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="font-sans text-4xl md:text-6xl font-medium text-[#10131A] mb-5 leading-tight">
          Understanding Metals Trading
        </h2>
        <p className="font-sans text-[#10131A]/72 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
          Explore how gold, silver, and other precious metals are priced and traded, and discover why they remain vital safe-haven assets during global market shifts.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-7">
        <div className="rounded-3xl overflow-hidden bg-white border border-[#E9EBF2] shadow-[0_10px_24px_rgba(15,23,42,0.07)] min-h-[540px]">
          <img
            src="/images/hero/Forex-Trading.svg"
            alt="Metals trading chart"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="rounded-3xl bg-[#ECEEF8] border border-[#E3E7F2] p-8 md:p-9 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
          <div className="w-12 h-12 rounded-xl bg-[#2A0D51] flex items-center justify-center mb-7">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-sans text-[2.1rem] md:text-[2.35rem] leading-[1.12] font-medium text-[#1A1B23] mb-5">
            What is metals trading
          </h3>
          <p className="font-sans text-[#1A1B23]/78 text-base md:text-lg leading-relaxed font-normal">
            Metals trading involves buying and selling assets like gold and silver. Traders use metals for hedging, diversification, and speculation. Learn the essentials in our detailed Metals Trading blog.
          </p>
        </div>

        <div className="rounded-3xl bg-[#ECEEF8] border border-[#E3E7F2] p-8 md:p-9 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
          <div className="w-12 h-12 rounded-xl bg-[#2A0D51] flex items-center justify-center mb-7">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-sans text-[2.1rem] md:text-[2.35rem] leading-[1.12] font-medium text-[#1A1B23] mb-5">
            How to trade metals
          </h3>
          <p className="font-sans text-[#1A1B23]/78 text-base md:text-lg leading-relaxed font-normal">
            To trade metals, open a trading account, choose gold, silver, or other metals, and use our trading platforms. Traders monitor prices, apply strategies, and seek opportunities in precious and industrial metals markets.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const MetalsHeatmap = () => {
  const currencies = ['EUR', 'USD', 'AUD', 'GBP', 'NZD', 'CAD', 'CHF', 'JPY', 'CNY'];
  const values: Record<string, Record<string, string>> = {
    EUR: { USD: '0.52%', AUD: '0.17%', GBP: '-0.27%', NZD: '0%', CAD: '0.19%', CHF: '0.13%', JPY: '-0.23%', CNY: '0.06%' },
    USD: { EUR: '-0.17%', AUD: '0.34%', GBP: '-0.42%', NZD: '-0.16%', CAD: '-0.03%', CHF: '-0.08%', JPY: '-0.26%', CNY: '-0.12%' },
    AUD: { EUR: '-0.51%', USD: '-0.33%', GBP: '-0.77%', NZD: '-0.48%', CAD: '-0.29%', CHF: '-0.38%', JPY: '-0.69%', CNY: '-0.42%' },
    GBP: { EUR: '0.27%', USD: '0.46%', AUD: '0.76%', NZD: '0.26%', CAD: '0.40%', CHF: '0.38%', JPY: '0.37%', CNY: '0.27%' },
    NZD: { EUR: '-0.01%', USD: '0.21%', AUD: '0.50%', GBP: '-0.26%', CAD: '0.14%', CHF: '0.19%', JPY: '-0.31%', CNY: '0.07%' },
    CAD: { EUR: '-0.12%', USD: '0.07%', AUD: '0.37%', GBP: '-0.40%', NZD: '-0.12%', CHF: '-0.02%', JPY: '-0.21%', CNY: '-0.08%' },
    CHF: { EUR: '-0.10%', USD: '0.08%', AUD: '0.41%', GBP: '-0.36%', NZD: '-0.09%', CAD: '0.04%', JPY: '-0.20%', CNY: '-0.09%' },
    JPY: { EUR: '0.20%', USD: '0.37%', AUD: '0.70%', GBP: '-0.13%', NZD: '0.31%', CAD: '0.11%', CHF: '0.20%', CNY: '0.15%' },
    CNY: { EUR: '-0.06%', USD: '0.12%', AUD: '0.47%', GBP: '-0.27%', NZD: '-0.07%', CAD: '0.08%', CHF: '0%', JPY: '-0.15%' },
  };

  const getCellClass = (value: string) => {
    const num = parseFloat(value);
    if (Number.isNaN(num) || num === 0) return 'bg-[#7A7A7A] text-white';
    if (num > 0.4) return 'bg-[#3FAFA3] text-white';
    if (num > 0) return 'bg-[#97D3CC] text-white';
    if (num < -0.4) return 'bg-[#E86779] text-white';
    return 'bg-[#E8AAB5] text-white';
  };

  return (
    <section className="site-section bg-[#F8F9FA]">
      <div className="site-container">
        <div className="text-center mb-12">
          <h2 className="font-sans text-4xl md:text-6xl font-medium text-[#10131A] mb-4">Heatmap</h2>
          <p className="font-sans text-[#10131A]/72 text-base md:text-xl">Track real-time gold and silver market movements instantly.</p>
        </div>

        <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-[0_10px_28px_rgba(15,23,42,0.08)] p-4 md:p-6 overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse">
            <thead>
              <tr>
                <th className="p-3 border border-[#E5E7EB] bg-[#F8F9FA]" />
                {currencies.map((col) => (
                  <th key={col} className="p-3 border border-[#E5E7EB] bg-[#F8F9FA] text-[#1A1B23] text-xs font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currencies.map((row) => (
                <tr key={row}>
                  <td className="p-3 border border-[#E5E7EB] bg-[#F8F9FA] text-[#1A1B23] text-xs font-semibold">{row}</td>
                  {currencies.map((col) => {
                    if (row === col) {
                      return <td key={col} className="p-3 border border-[#E5E7EB] bg-[#F2F3F5]" />;
                    }
                    const value = values[row]?.[col] ?? '0%';
                    return (
                      <td key={col} className={`p-3 border border-[#E5E7EB] text-center text-[11px] font-medium ${getCellClass(value)}`}>
                        {value}
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
};

const TradingSteps = () => (
  <section className="site-section bg-dark">
    <div className="site-container">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="site-heading font-bold text-white mb-6">Start Trading in 3 Steps</h2>
        <p className="text-white/40 text-lg">Join thousands of traders and start your journey with oneFX today.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { step: '01', title: 'Register', desc: 'Complete our simple online application form in minutes.', icon: <CheckCircle2 className="w-8 h-8" /> },
          { step: '02', title: 'Fund', desc: 'Deposit funds using our wide range of secure payment methods.', icon: <Wallet className="w-8 h-8" /> },
          { step: '03', title: 'Trade', desc: 'Access the markets and start trading your favorite metals.', icon: <MousePointer2 className="w-8 h-8" /> },
        ].map((item, i) => (
          <div key={i} className="relative group">
            <div className="text-[120px] font-bold text-white/5 absolute -top-16 -left-4 pointer-events-none group-hover:text-gold/10 transition-colors">
              {item.step}
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold mb-8 group-hover:border-gold/30 transition-all">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MetalsFAQ = () => (
  <section className="site-section bg-[#050510]">
    <div className="site-container">
      <div className="grid lg:grid-cols-3 gap-16">
        <div>
          <h2 className="site-heading font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-white/40 text-lg mb-8">Can't find the answer you're looking for? Contact our 24/5 support team.</p>
          <Button to="/contact-us" variant="outline" className="border-gold/20 text-gold hover:bg-gold/10">
            Contact Support
          </Button>
        </div>
        
        <div className="lg:col-span-2">
          <FAQItem 
            question="What are the trading hours for Gold?"
            answer="Gold and Silver markets typically open on Sunday evening at 22:00 GMT and close on Friday evening at 21:00 GMT, with a daily break between 21:00 and 22:00 GMT."
          />
          <FAQItem 
            question="What is the minimum deposit to trade metals?"
            answer="You can start trading metals with as little as $100 on our Standard account. For professional conditions, we recommend our Raw Spread account."
          />
          <FAQItem 
            question="Do you offer swap-free accounts for metals?"
            answer="Yes, we offer Islamic (Swap-Free) accounts for clients who cannot receive or pay interest due to religious beliefs. This applies to all our metal pairs."
          />
          <FAQItem 
            question="What leverage is available for Silver?"
            answer="Leverage for Silver (XAG/USD) is typically up to 1:200 for retail clients and up to 1:500 for professional clients, depending on your jurisdiction and account type."
          />
          <FAQItem 
            question="Are there any commissions on metals?"
            answer="On our Standard account, trading is commission-free with slightly wider spreads. Our Raw Spread account features institutional spreads from 0.0 pips with a small commission per lot."
          />
        </div>
      </div>
    </div>
  </section>
);

// --- Main Metals Component ---

export const Metals = () => {
  const tickerAssets = [
    { symbol: 'XAU/USD', price: '2024.50', change: '+12.30', percent: '+0.61%', trend: 'up' as const, flags: ['un', 'us'] },
    { symbol: 'XAG/USD', price: '22.84', change: '+0.15', percent: '+0.66%', trend: 'up' as const, flags: ['un', 'us'] },
    { symbol: 'XPT/USD', price: '910.25', change: '-5.45', percent: '-0.60%', trend: 'down' as const, flags: ['un', 'us'] },
    { symbol: 'XPD/USD', price: '1024.50', change: '+8.30', percent: '+0.81%', trend: 'up' as const, flags: ['un', 'us'] },
    { symbol: 'GOLD/EUR', price: '1864.20', change: '+10.40', percent: '+0.56%', trend: 'up' as const, flags: ['un', 'eu'] },
    { symbol: 'SILVER/EUR', price: '21.15', change: '-0.20', percent: '-0.94%', trend: 'down' as const, flags: ['un', 'eu'] },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <MetalsHero />
      <MarketTickerStrip assets={tickerAssets} />
      <MetalsMarketOverview />
      <MetalsFeatures />
      <UnderstandingMetalsTrading />
      <MetalsHeatmap />
      <TradingPlatformsSection />
      <TradingSteps />
      <StatsSection />
      <MetalsFAQ />
      <CTASection />
    </div>
  );
};

export default Metals;
