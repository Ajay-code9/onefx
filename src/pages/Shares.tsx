import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Zap, 
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
  PieChart,
  Activity,
  ArrowRight,
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
  <section className="relative pt-[calc(5rem+32px)] pb-32 overflow-hidden bg-[#050510]">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-8 border border-blue-500/20">
            <BarChart3 className="w-4 h-4" />
            <span className="tracking-widest uppercase">Global Equity Markets</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tighter">
            Invest in <br />
            <span className="text-blue-400">Global Giants</span>
          </h1>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-lg">
            Trade thousands of global shares with zero commission. Access the world's leading exchanges and build your dream portfolio today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              to="/signup"
              className="px-10 py-5 text-lg bg-blue-500 hover:bg-blue-600 border-blue-500 shadow-blue-500/20"
            >
              Start Trading <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button to="/shares" variant="outline" className="px-10 py-5 text-lg border-white/10 hover:border-blue-500/50">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all duration-500" />
              <img 
                src="https://picsum.photos/seed/stock-market/800/800" 
                alt="Stock Market" 
                className="w-80 h-80 object-cover rounded-3xl border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)] relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -left-6 bg-dark/80 backdrop-blur-md border border-blue-500/30 p-4 rounded-2xl z-20 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">NVDA</div>
                    <div className="text-lg font-bold text-white">+2.91%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Popular Stocks</h2>
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
  <section className="py-32 bg-[#050510] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] blur-3xl" />
            <img 
              src="https://picsum.photos/seed/stock-analysis/800/1000" 
              alt="Stock Analysis" 
              className="relative z-10 rounded-[3rem] border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-dark/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl z-20 shadow-2xl">
              <PieChart className="w-12 h-12 text-blue-500 mb-4" />
              <div className="text-white font-bold text-xl mb-1">Portfolio Diversification</div>
              <div className="text-white/40 text-sm">Access 15+ global exchanges instantly.</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            The Smart Way to <br />
            <span className="text-blue-400">Trade Shares</span>
          </h2>
          <p className="text-white/40 text-xl mb-12 leading-relaxed">
            Experience stock trading like never before. Our platform is designed for both beginners and professional traders, offering the tools you need to succeed.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: 'Zero Commission', desc: 'No hidden fees or commissions on any share trades.', icon: <Zap className="w-6 h-6" /> },
              { title: 'Fractional Shares', desc: 'Buy any stock with as little as $10 investment.', icon: <BarChart3 className="w-6 h-6" /> },
              { title: 'Real-time Data', desc: 'Free live streaming quotes for all major exchanges.', icon: <Activity className="w-6 h-6" /> },
              { title: 'Dividend Payouts', desc: 'Receive dividends directly into your trading account.', icon: <Wallet className="w-6 h-6" /> },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TradingSteps = () => (
  <section className="py-32 bg-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Trading in 3 Steps</h2>
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
  <section className="py-32 bg-[#050510]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-3 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
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
      <TradingPlatformsSection />
      <TradingSteps />
      <StatsSection />
      <SharesFAQ />
      <CTASection />
    </div>
  );
};

export default Shares;
