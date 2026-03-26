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
  Apple,
  Cpu,
  Smartphone,
  Car,
  ChevronRight,
  ArrowDownToLine,
  Search,
  ArrowRight,
  HelpCircle,
  Wallet,
  MousePointer2
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
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-400' : 'text-white/80 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-blue-500 border-blue-500 rotate-180' : 'bg-white/5'}`}>
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

// --- Shares Page Sections ---

const SharesHero = () => (
  <section className="hero-full-viewport pt-[calc(5rem+10px)] pb-6 md:pt-[calc(5rem+28px)] md:pb-8 bg-[#0b0118]">
    <div className="absolute inset-0">
      <img
        src="/images/hero/sharesherosections.webp"
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
            <BarChart3 className="w-4 h-4" />
            <span className="tracking-widest uppercase">Global Equity Markets</span>
          </div>
          <h1 className="site-heading-hero font-bold text-white leading-[1.05] mb-8 tracking-tighter font-sans">
            Invest in <br />
            <span className="gold-gradient-text">Global Giants</span>
          </h1>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-lg">
            Trade thousands of global shares with zero commission. Access the world's leading exchanges and build your dream portfolio today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/signup" className="px-10 py-5 text-lg">
              Start Trading <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button to="/shares" variant="outline" className="px-10 py-5 text-lg border-white/10 hover:border-gold/50">
              View All Stocks
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8">
            <div>
              <div className="text-2xl font-bold text-white">2000+</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Global Stocks</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">$0</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Commission</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">1:20</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Max Leverage</div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  </section>
);

const SharesMarketOverview = () => {
  const stocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: '182.42', change: '+1.18%', trend: 'up' as const, icon: <Apple className="w-6 h-6" /> },
    { symbol: 'TSLA', name: 'Tesla, Inc.', price: '198.34', change: '+3.09%', trend: 'up' as const, icon: <Car className="w-6 h-6" /> },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: '864.20', change: '+2.91%', trend: 'up' as const, icon: <Cpu className="w-6 h-6" /> },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: '412.50', change: '+1.05%', trend: 'up' as const, icon: <Smartphone className="w-6 h-6" /> },
  ];

  return (
    <section className="site-section bg-dark">
      <div className="site-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="site-heading font-bold text-white mb-6">Popular Stocks</h2>
            <p className="text-white/40 text-lg">Track and trade the most active companies in the global markets.</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input 
                type="text" 
                placeholder="Search stocks..." 
                className="bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors w-64"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stocks.map((item, i) => (
            <motion.div
              key={item.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                  {item.icon}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${item.trend === 'up' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {item.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{item.symbol}</h3>
              <p className="text-white/40 mb-6">{item.name}</p>
              <div className="text-3xl font-mono font-bold text-white">${item.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SharesFeatures = () => (
  <section className="site-section bg-[linear-gradient(180deg,#13032a_0%,#09021b_58%,#090118_100%)] relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_16%_88%,rgba(120,72,198,0.24),transparent_44%),radial-gradient(circle_at_82%_70%,rgba(98,53,162,0.2),transparent_40%)]" />
    <div className="site-container relative z-10">
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="site-heading font-bold text-white mb-6">Why Trade Shares With oneFX</h2>
      </div>

      <div className="max-w-[1180px] mx-auto overflow-hidden">
        <img
          src="/images/hero/Trade-Forex-With-oneFX.webp"
          alt="Why Trade Shares With oneFX"
          className="w-full h-auto object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const UnderstandingStockMarketTrading = () => (
  <section className="site-section bg-[#F8F9FA]">
    <div className="site-container">
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="font-sans text-4xl md:text-6xl font-medium text-[#10131A] mb-5 leading-tight">
          Understanding Stock Market Trading
        </h2>
        <p className="font-sans text-[#10131A]/72 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
          Gain a clearer view of how global equity markets function, how share prices reflect company performance, and how traders participate in both rising and falling markets.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-7">
        <div className="rounded-3xl overflow-hidden bg-white border border-[#E9EBF2] shadow-[0_10px_24px_rgba(15,23,42,0.07)] min-h-[540px]">
          <img
            src="/images/hero/Forex-Trading.svg"
            alt="Stock market chart"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="rounded-3xl bg-[#ECEEF8] border border-[#E3E7F2] p-8 md:p-9 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
          <div className="w-12 h-12 rounded-xl bg-[#2A0D51] flex items-center justify-center mb-7">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-sans text-[2.1rem] md:text-[2.35rem] leading-[1.12] font-medium text-[#1A1B23] mb-5">
            What is Stock Trading?
          </h3>
          <p className="font-sans text-[#1A1B23]/78 text-base md:text-lg leading-relaxed font-normal">
            Stock trading allows investors to buy and sell company shares through online platforms. Traders profit from price movements and dividends. Explore details in our in-depth Share Market Trading blog.
          </p>
        </div>

        <div className="rounded-3xl bg-[#ECEEF8] border border-[#E3E7F2] p-8 md:p-9 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
          <div className="w-12 h-12 rounded-xl bg-[#2A0D51] flex items-center justify-center mb-7">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-sans text-[2.1rem] md:text-[2.35rem] leading-[1.12] font-medium text-[#1A1B23] mb-5">
            How to trade shares
          </h3>
          <p className="font-sans text-[#1A1B23]/78 text-base md:text-lg leading-relaxed font-normal">
            To trade shares, open a stock trading account with oneFX, select global stocks, and place buy or sell orders. Traders use analysis to capture opportunities in leading stock markets worldwide.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SharesHeatmap = () => {
  const currencies = ['EUR', 'USD', 'AUD', 'GBP', 'NZD', 'CAD', 'CHF', 'JPY', 'CNY'];
  const values: Record<string, Record<string, string>> = {
    EUR: { USD: '0.53%', AUD: '0.17%', GBP: '-0.70%', NZD: '0.02%', CAD: '0.16%', CHF: '0.70%', JPY: '-0.91%', CNY: '0%' },
    USD: { EUR: '-0.53%', AUD: '0.13%', GBP: '-0.42%', NZD: '-0.11%', CAD: '1%', CHF: '-0.04%', JPY: '-0.32%', CNY: '-0.12%' },
    AUD: { EUR: '-0.52%', USD: '-0.13%', GBP: '-0.83%', NZD: '-0.46%', CAD: '-0.31%', CHF: '0.40%', JPY: '-0.70%', CNY: '-0.56%' },
    GBP: { EUR: '0.70%', USD: '0.42%', AUD: '0.83%', NZD: '0.32%', CAD: '0.43%', CHF: '0.39%', JPY: '0.30%', CNY: '0.24%' },
    NZD: { EUR: '-0.02%', USD: '0.11%', AUD: '0.46%', GBP: '-0.32%', CAD: '0.11%', CHF: '0.09%', JPY: '-0.20%', CNY: '-0.09%' },
    CAD: { EUR: '-0.16%', USD: '-1%', AUD: '0.31%', GBP: '-0.43%', NZD: '-0.11%', CHF: '-0.05%', JPY: '-0.17%', CNY: '-0.11%' },
    CHF: { EUR: '-0.70%', USD: '0.04%', AUD: '-0.40%', GBP: '-0.39%', NZD: '-0.09%', CAD: '0.05%', JPY: '-0.74%', CNY: '-0.08%' },
    JPY: { EUR: '0.91%', USD: '0.32%', AUD: '0.70%', GBP: '-0.30%', NZD: '0.20%', CAD: '0.17%', CHF: '0.74%', CNY: '0.23%' },
    CNY: { EUR: '0%', USD: '0.12%', AUD: '0.56%', GBP: '-0.24%', NZD: '0.09%', CAD: '0.11%', CHF: '0.08%', JPY: '-0.23%' },
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
          <p className="font-sans text-[#10131A]/72 text-base md:text-xl">Monitor live currency strength and market direction instantly.</p>
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
          { step: '03', title: 'Trade', desc: 'Access the markets and start trading your favorite shares.', icon: <MousePointer2 className="w-8 h-8" /> },
        ].map((item, i) => (
          <div key={i} className="relative group">
            <div className="text-[120px] font-bold text-white/5 absolute -top-16 -left-4 pointer-events-none group-hover:text-blue-500/10 transition-colors">
              {item.step}
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-8 group-hover:border-blue-500/30 transition-all">
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

const SharesFAQ = () => (
  <section className="site-section bg-[#050510]">
    <div className="site-container">
      <div className="grid lg:grid-cols-3 gap-16">
        <div>
          <h2 className="site-heading font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-white/40 text-lg mb-8">Can't find the answer you're looking for? Contact our 24/5 support team.</p>
          <Button to="/contact-us" variant="outline" className="border-blue-500/20 text-blue-400 hover:bg-blue-500/10">
            Contact Support
          </Button>
        </div>
        
        <div className="lg:col-span-2">
          <FAQItem 
            question="What exchanges can I trade on?"
            answer="We provide access to major US (NYSE, NASDAQ), European (LSE, Euronext, XETRA), and Asian stock exchanges (HKEX, TSE)."
          />
          <FAQItem 
            question="Do I receive dividends on my share positions?"
            answer="Yes, dividend adjustments are made to your account for long positions. If you hold a short position, the dividend amount will be deducted from your balance."
          />
          <FAQItem 
            question="What is the minimum trade size for shares?"
            answer="Our platform supports fractional share trading, allowing you to trade as little as 0.01 of a share on selected high-value stocks."
          />
          <FAQItem 
            question="Are there any hidden fees for share trading?"
            answer="No, we pride ourselves on transparency. There are no hidden fees, no inactivity fees, and no account maintenance fees."
          />
          <FAQItem 
            question="Can I use leverage for stock trading?"
            answer="Yes, we offer leverage up to 1:20 for share trading, allowing you to increase your market exposure with a smaller capital outlay."
          />
        </div>
      </div>
    </div>
  </section>
);

// --- Main Shares Component ---

export const Shares = () => {
  const tickerAssets = [
    { symbol: 'AAPL', price: '182.42', change: '+2.12', percent: '+1.18%', trend: 'up' as const, flags: ['us'] },
    { symbol: 'TSLA', price: '198.34', change: '+5.95', percent: '+3.09%', trend: 'up' as const, flags: ['us'] },
    { symbol: 'AMZN', price: '174.25', change: '-1.45', percent: '-0.83%', trend: 'down' as const, flags: ['us'] },
    { symbol: 'MSFT', price: '412.50', change: '+4.30', percent: '+1.05%', trend: 'up' as const, flags: ['us'] },
    { symbol: 'NVDA', price: '864.20', change: '+24.40', percent: '+2.91%', trend: 'up' as const, flags: ['us'] },
    { symbol: 'META', price: '484.20', change: '-2.20', percent: '-0.45%', trend: 'down' as const, flags: ['us'] },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <SharesHero />
      <MarketTickerStrip assets={tickerAssets} />
      <SharesMarketOverview />
      <SharesFeatures />
      <UnderstandingStockMarketTrading />
      <SharesHeatmap />
      <TradingPlatformsSection />
      <TradingSteps />
      <StatsSection />
      <SharesFAQ />
      <CTASection />
    </div>
  );
};

export default Shares;
