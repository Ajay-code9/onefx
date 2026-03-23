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
  <section className="relative pt-[calc(5rem+8px)] pb-10 md:pt-[calc(5rem+32px)] md:pb-24 overflow-hidden bg-[#0B0118]">
    <div className="absolute inset-0">
      <img
        src="/images/hero/introducingbroker-hero.webp"
        alt=""
        className="h-full w-full object-cover object-[70%_45%] md:object-center brightness-[1.14] contrast-[1.12] saturate-[1.18]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0118]/64 via-[#0b0118]/30 to-[#0b0118]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0118]/8 via-transparent to-[#0b0118]/16" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 mt-[108px] sm:mt-[124px] md:mt-0 max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] mb-8 tracking-tight font-display">
            Partner as an <br />
            <span className="text-white">Introducing Broker Today</span>
          </h1>
          <p className="text-xl text-white/85 mb-10 leading-relaxed max-w-lg font-medium">
            Join oneFX's introducing broker program and earn competitive commissions by growing your trader network.
          </p>
          <Button to="/contact-us" className="px-12 py-5 text-xl rounded-full bg-linear-to-r from-gold to-[#B48F48] text-dark font-bold hover:opacity-90 transition-all flex items-center gap-3 shadow-[0_20px_60px_rgba(197,160,89,0.3)]">
            Ask to Join as IB <ChevronRight className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

const ibProcessSteps = [
  {
    num: '01',
    title: 'Quick Signup',
    desc: 'Apply online to join the introducing broker program.',
  },
  {
    num: '02',
    title: 'Grow Network',
    desc: 'Introduce traders and expand your client base.',
  },
  {
    num: '03',
    title: 'Receive Commissions',
    desc: 'Collect rebates with fast and transparent payouts.',
  },
] as const;

const IBProcess = () => (
  <section className="py-16 md:py-24 bg-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-64 h-full bg-gold/5 -translate-x-1/2 rounded-full blur-3xl" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight px-1">
          How to Become a Partner?
        </h2>
        <p className="text-slate-500 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto px-2">
          Choose the account that matches your trading goals.
        </p>
      </div>

      {/* Each row: big number | timeline dot + dotted segment | copy — same on mobile & desktop (ref layout) */}
      <div className="max-w-4xl mx-auto">
        {ibProcessSteps.map((step, i) => (
          <div
            key={step.num}
            className="flex gap-3 sm:gap-5 md:gap-10 items-start"
          >
            <div className="w-[3.25rem] sm:w-20 md:w-28 shrink-0 text-right leading-none pt-0.5 sm:pt-1">
              <span className="text-5xl sm:text-7xl md:text-8xl font-black text-gold/20 font-display select-none">
                {step.num}
              </span>
            </div>

            <div className="flex flex-col items-center shrink-0 w-3 sm:w-4">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gold shrink-0 ring-4 ring-white" />
              {i < ibProcessSteps.length - 1 && (
                <div
                  className="w-px flex-1 border-l-2 border-dotted border-slate-300 min-h-[3.5rem] sm:min-h-[5.5rem] md:min-h-32"
                  aria-hidden
                />
              )}
            </div>

            <div className={`flex-1 min-w-0 ${i < ibProcessSteps.length - 1 ? 'pb-10 sm:pb-14 md:pb-24' : ''}`}>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4">
                {step.title}
              </h3>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 md:mt-20">
        <Button
          to="/contact-us"
          className="px-10 py-4 rounded-full bg-linear-to-r from-gold to-[#B48F48] text-dark font-bold hover:opacity-90 transition-all inline-flex items-center gap-2"
        >
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
  <section className="py-24 bg-[#050510] relative overflow-hidden">
    <div className="relative min-h-[440px] overflow-hidden">
      <img
        src="/images/hero/attractive__rebates.webp"
        alt="Attractive Rebates"
        className="absolute inset-0 h-full w-full object-cover object-center"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07020f]/20 via-[#07020f]/36 to-[#07020f]/72" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[440px] flex items-center justify-end">
        <div className="w-full max-w-[520px]">
          <div className="text-white font-medium text-sm tracking-[0.05em] mb-3">High Commission Rates</div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-5 tracking-tight leading-[0.95]">
            Attractive <span className="text-gold">Rebates</span>
          </h2>
          <p className="text-white/88 text-xl mb-8 leading-relaxed font-medium">
            Earn consistent rebates with transparent reporting and fast partner payments.
          </p>
          <Button to="/contact-us" className="px-10 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-[#F3F4F6] transition-all flex items-center gap-3 text-lg">
            Become an IB Partner <ChevronRight className="w-5 h-5" />
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
  <section className="py-24 bg-[#070312] relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(124,87,210,0.42),transparent_52%)] pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(72,35,140,0.2),transparent_70%)] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.96] tracking-tight mb-5">
        Power Your Trading <br />
        <span className="text-gold">Journey Today</span>
      </h2>
      <p className="text-white/80 text-lg md:text-[1.95rem] leading-[1.35] mb-10 max-w-4xl mx-auto">
        Access Forex, Shares, Commodities and Metals with advanced platform.
      </p>
      <Button to="/signup" className="mx-auto px-12 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-[#F3F4F6] transition-all flex items-center gap-2.5 text-lg">
        Open an Account <ChevronRight className="w-5 h-5" />
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
