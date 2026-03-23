import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Zap, 
  Globe2, 
  ShieldCheck, 
  BarChart3, 
  Plus,
  Minus,
  ChevronRight,
  DollarSign,
  Users,
  Settings,
  PieChart,
  CheckCircle2,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { Button } from '../components/Button';
import { MarketTickerStrip } from '../components/MarketTickerStrip';

// --- Reusable Components ---

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-xl font-medium text-slate-900 group-hover:text-gold transition-colors">
          {question}
        </span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus className="w-5 h-5 text-slate-400" /> : <Plus className="w-5 h-5 text-slate-400" />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-slate-600 leading-relaxed max-w-2xl">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

// --- Page Sections ---

const IBHero = () => (
  <section className="relative pt-[calc(5rem+32px)] pb-24 overflow-hidden bg-[#0B0118]">
    {/* Background Glows */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-[0.9] mb-8 tracking-tighter font-display">
            Partner as an <br />
            <span className="gold-gradient-text">Introducing Broker</span>
          </h1>
          <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-lg font-medium">
            Join oneFX's introducing broker program and earn competitive commissions by growing your trader network.
          </p>
          <Button to="/contact-us" className="px-12 py-5 text-xl rounded-full bg-linear-to-r from-gold to-[#B48F48] text-dark font-bold hover:opacity-90 transition-all flex items-center gap-3 shadow-[0_20px_60px_rgba(197,160,89,0.3)]">
            Ask to Join as IB <ChevronRight className="w-6 h-6" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10">
            <img 
              src="https://picsum.photos/seed/partners/800/600" 
              alt="Business Partners" 
              className="rounded-2xl shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
            {/* Floating Stats Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 left-10 bg-white p-6 rounded-xl shadow-2xl border border-black/5 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-gold w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">You earned $19,100!</div>
                  <div className="text-[10px] text-slate-400">For users you invited</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-10 bg-white p-4 rounded-xl shadow-2xl border border-black/5 z-20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-500">173%</div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Profit</div>
              </div>
            </motion.div>
          </div>
          
          {/* Chart Overlay (Stylized) */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

const IBProcess = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-64 h-full bg-gold/5 -translate-x-1/2 rounded-full blur-3xl" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">How to Become a Partner?</h2>
        <p className="text-slate-500 text-xl font-medium">Choose the account that matches your trading goals.</p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_auto_2fr] gap-12 items-center">
        {/* Numbers */}
        <div className="space-y-32 text-right">
          <div className="text-8xl font-black text-gold/20 font-display">01</div>
          <div className="text-8xl font-black text-gold/20 font-display">02</div>
          <div className="text-8xl font-black text-gold/20 font-display">03</div>
        </div>

        {/* Dotted Line */}
        <div className="hidden md:flex flex-col items-center h-full py-10">
          <div className="w-px h-full border-l-2 border-dotted border-slate-200 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-24">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Quick Signup</h3>
            <p className="text-slate-500 text-lg">Apply online to join the introducing broker program.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Grow Network</h3>
            <p className="text-slate-500 text-lg">Introduce traders and expand your client base.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Receive Commissions</h3>
            <p className="text-slate-500 text-lg">Collect rebates with fast and transparent payouts.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
        <Button to="/contact-us" className="px-10 py-4 rounded-full bg-linear-to-r from-gold to-[#B48F48] text-dark font-bold hover:opacity-90 transition-all flex items-center gap-2 mx-auto">
          Become a Partner <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  </section>
);

const IBBenefits = () => (
  <section className="py-24 bg-[#0B0118] relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Why Partner with <span className="gold-gradient-text">oneFX Trading</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: TrendingUp, title: "High Commissions", desc: "Earn competitive payouts for referred trading activity." },
          { icon: Zap, title: "Fast Payments", desc: "Receive IB commissions without delay." },
          { icon: Briefcase, title: "Partner Tools", desc: "Access dashboards to track traders and payouts." },
          { icon: ShieldCheck, title: "Trusted Brand", desc: "Partner with globally recognized forex trading company." },
          { icon: Settings, title: "Flexible Models", desc: "Choose rebates or revenue share partnership options." },
          { icon: Users, title: "Dedicated Support", desc: "Get 24/7 assistance for your IB business." }
        ].map((benefit, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all group"
          >
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
              <benefit.icon className="text-gold w-6 h-6 group-hover:text-dark transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
            <p className="text-white/50 leading-relaxed">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const MultiplyEarnings = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
          Multiply Your Earnings <br /> With Our IB Program
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed font-medium">
          Our introducing broker program allows you to generate additional income by referring traders to oneFX. With rebates up to <span className="text-slate-900 font-bold">$25 per lot</span>, you can scale earnings as your network grows. Simple onboarding, transparent reporting, and fast payouts make it the best forex IB program.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Gold Pill Container */}
        <div className="bg-linear-to-r from-[#E5C78B] via-gold to-[#B48F48] p-1 rounded-full">
          <div className="bg-white rounded-full py-12 px-8 flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <img 
                key={i}
                src={`https://i.pravatar.cc/150?u=${i + 10}`} 
                alt="Partner" 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg grayscale hover:grayscale-0 transition-all cursor-pointer"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>

        {/* Floating Earning Card */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white p-6 rounded-xl shadow-2xl border border-black/5 z-20 min-w-[280px]"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
              <TrendingUp className="text-gold w-4 h-4" />
            </div>
            <div className="text-sm font-bold text-slate-900">You Earned $120!</div>
          </div>
          <div className="text-[10px] text-slate-400">Thanks for inviting a trader to oneFX</div>
        </motion.div>
      </div>
    </div>
  </section>
);

const IBCalculator = () => {
  const [clients, setClients] = useState(1);
  const rebatePerLot = clients < 100 ? 8 : clients < 250 ? 10 : 12;
  const monthlyEarnings = clients * rebatePerLot * 8; // Assuming 8 lots per client

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-black/10 p-12 shadow-sm relative overflow-hidden">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Dynamic IB Model. <br />
                <span className="text-gold">Earn more as you grow</span>
              </h2>
              
              <div className="mt-12">
                <div className="flex justify-between items-end mb-6">
                  <div className="text-3xl font-bold text-slate-900 font-display">{clients} <span className="text-slate-400 font-medium text-lg">Active Clients</span></div>
                  <div className="text-2xl font-bold text-slate-900 font-display">${rebatePerLot} <span className="text-slate-400 font-medium text-lg">per lot</span></div>
                </div>
                
                <input 
                  type="range" 
                  min="1" 
                  max="500" 
                  value={clients} 
                  onChange={(e) => setClients(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold"
                />
                
                <div className="mt-10">
                  <div className="text-6xl font-bold text-slate-900 font-display">${monthlyEarnings.toLocaleString()} <span className="text-xl text-slate-400 font-medium">per month</span></div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-black/5">
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Use this calculator to project your average monthly income based on the number of active clients you refer.
              </p>
              <Button to="/contact-us" className="w-full py-4 rounded-full bg-linear-to-r from-gold to-[#B48F48] text-dark font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                Become a Partner <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AttractiveRebates = () => (
  <section className="py-24 bg-black relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/rebates/800/600" 
            alt="Rebates" 
            className="rounded-2xl shadow-2xl opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent rounded-2xl" />
          {/* Stylized Money Stack Placeholder */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-9xl font-bold text-white/10">%</div>
          </div>
        </div>

        <div>
          <div className="text-gold font-bold text-sm uppercase tracking-[0.2em] mb-4">High Commission Rates</div>
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
            Attractive <br />
            <span className="text-gold">Rebates</span>
          </h2>
          <p className="text-white/60 text-xl mb-12 leading-relaxed font-medium">
            Earn consistent rebates with transparent reporting and fast partner payments.
          </p>
          <Button to="/contact-us" variant="outline" className="px-12 py-5 rounded-full border-white text-white hover:bg-white hover:text-black transition-all flex items-center gap-3 text-lg">
            Become an IB Partner <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const IBFAQ = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Frequently asked <br /> questions
          </h2>
        </div>
        
        <div className="space-y-2">
          <FAQItem 
            question="What is an Introducing Broker (IB)?"
            answer="An Introducing Broker (IB) is an individual or company that refers clients to oneFX. The IB helps connect new traders to our platform and earns commission based on their trading activity—not by handling client funds."
          />
          <FAQItem 
            question="How does the commission / rebate structure work for an IB?"
            answer="Our structure is tiered based on volume. You can earn up to $25 per lot traded by your referred clients. Commissions are paid in real-time or daily depending on the model chosen."
          />
          <FAQItem 
            question="How do I join as an IB?"
            answer="Simply click on the 'Become a Partner' button, fill out the application form, and our partnership team will review your application within 24 hours."
          />
          <FAQItem 
            question="When and how are IB commissions paid?"
            answer="Commissions are credited to your IB account and can be withdrawn at any time using our wide range of payment methods, including bank wire, e-wallets, and crypto."
          />
          <FAQItem 
            question="Can I refer another IB or build a network?"
            answer="Yes, we support multi-level IB structures. You can refer other IBs and earn a percentage of their network's performance as well."
          />
        </div>
      </div>
    </div>
  </section>
);

const BottomCTA = () => (
  <section className="py-24 bg-[#0B0118] relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent pointer-events-none" />
    
    <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-6xl md:text-9xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
        Power Your Trading <br />
        <span className="gold-gradient-text">Journey Today</span>
      </h2>
      <p className="text-white/40 text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
        Access Forex, Shares, Commodities and Metals with advanced platform.
      </p>
      <Button to="/signup" className="px-14 py-6 rounded-full bg-white text-black font-bold text-xl hover:bg-gold hover:text-white transition-all flex items-center gap-3 mx-auto shadow-[0_20px_60px_rgba(255,255,255,0.1)]">
        Open an Account <ChevronRight className="w-6 h-6" />
      </Button>
    </div>
  </section>
);

// --- Main Component ---

export const IntroducingBroker = () => {
  const tickerAssets = [
    { symbol: 'EUR/USD', price: '1.15690', change: '-0.00142', percent: '-0.12%', trend: 'down' as const, flags: ['eu', 'us'] },
    { symbol: 'GBP/USD', price: '1.38420', change: '+0.00215', percent: '+0.15%', trend: 'up' as const, flags: ['gb', 'us'] },
    { symbol: 'USD/JPY', price: '110.250', change: '+0.450', percent: '+0.41%', trend: 'up' as const, flags: ['us', 'jp'] },
    { symbol: 'XAU/USD', price: '2024.50', change: '+12.30', percent: '+0.61%', trend: 'up' as const, flags: ['un', 'us'] },
    { symbol: 'BTC/USD', price: '64250.00', change: '+1240.00', percent: '+1.98%', trend: 'up' as const, flags: ['un', 'us'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      <IBHero />
      <MarketTickerStrip assets={tickerAssets} />
      <IBProcess />
      <IBBenefits />
      <MultiplyEarnings />
      <IBCalculator />
      <AttractiveRebates />
      <IBFAQ />
      <BottomCTA />
    </div>
  );
};

export default IntroducingBroker;
