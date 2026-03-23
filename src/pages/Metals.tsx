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
  Gem,
  Coins,
  Shield,
  ChevronRight,
  ArrowDownToLine,
  Clock,
  Layers,
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
  <section className="relative pt-[calc(5rem+32px)] pb-32 overflow-hidden bg-[#050510]">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none" />
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-xs font-bold mb-8 border border-gold/20">
            <Gem className="w-4 h-4" />
            <span className="tracking-widest uppercase">Precious Metals Trading</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tighter">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-yellow-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-4 bg-gold/20 rounded-full blur-2xl group-hover:bg-gold/30 transition-all duration-500" />
              <img 
                src="https://picsum.photos/seed/gold-bars/800/800" 
                alt="Gold Bars" 
                className="w-80 h-80 object-cover rounded-full border border-gold/30 shadow-[0_0_50px_rgba(197,160,89,0.3)] relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-dark/80 backdrop-blur-md border border-gold/30 p-4 rounded-2xl z-20 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-dark" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">XAU/USD</div>
                    <div className="text-lg font-bold text-white">$2,024.50</div>
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

const MetalsMarketOverview = () => {
  const metals = [
    { symbol: 'XAU/USD', name: 'Gold', spread: '0.12', leverage: '1:500', icon: <Gem className="w-6 h-6" />, color: 'from-gold/20 to-gold/5' },
    { symbol: 'XAG/USD', name: 'Silver', spread: '0.01', leverage: '1:200', icon: <Coins className="w-6 h-6" />, color: 'from-slate-400/20 to-slate-400/5' },
    { symbol: 'XPT/USD', name: 'Platinum', spread: '1.50', leverage: '1:100', icon: <Gem className="w-6 h-6" />, color: 'from-blue-200/20 to-blue-200/5' },
    { symbol: 'XPD/USD', name: 'Palladium', spread: '2.40', leverage: '1:100', icon: <Gem className="w-6 h-6" />, color: 'from-orange-200/20 to-orange-200/5' },
  ];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Market Overview</h2>
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
  <section className="py-32 bg-[#050510] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Why Trade <span className="gold-gradient-text">Metals</span> with oneFX?
          </h2>
          <p className="text-white/40 text-xl mb-12 leading-relaxed">
            Precious metals have been a store of value for centuries. In today's volatile markets, they offer a unique way to hedge against inflation and economic uncertainty.
          </p>
          
          <div className="space-y-8">
            {[
              { title: 'Deep Liquidity', desc: 'Execute large orders with minimal slippage thanks to our tier-1 liquidity providers.', icon: <Layers className="w-6 h-6" /> },
              { title: 'Fast Execution', desc: 'Our low-latency infrastructure ensures your trades are executed in milliseconds.', icon: <Zap className="w-6 h-6" /> },
              { title: 'Secure Trading', desc: 'Trade with confidence on a fully regulated and secure platform.', icon: <Shield className="w-6 h-6" /> },
            ].map((feature, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 border border-gold/20">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/40 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gold/10 rounded-[3rem] blur-3xl" />
          <img 
            src="https://picsum.photos/seed/trading-app/800/1000" 
            alt="Trading App" 
            className="relative z-10 rounded-[3rem] border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -top-10 -left-10 bg-dark/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl z-20 shadow-2xl max-w-[240px]">
            <div className="text-gold font-bold text-4xl mb-2">99.9%</div>
            <div className="text-white/60 text-sm">Uptime on our trading servers globally.</div>
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
  <section className="py-32 bg-[#050510]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-3 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
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
      <TradingPlatformsSection />
      <TradingSteps />
      <StatsSection />
      <MetalsFAQ />
      <CTASection />
    </div>
  );
};

export default Metals;
