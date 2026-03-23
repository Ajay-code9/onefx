import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Globe2, 
  ChevronRight, 
  ArrowRight,
  BarChart3,
  Cpu,
  Smartphone,
  Monitor,
  Download
} from 'lucide-react';
import { Button } from './Button';

export const StatsSection = () => {
  const stats = [
    { value: '$500M+', label: 'Monthly Volume' },
    { value: '40K+', label: 'Active Traders' },
    { value: '99.9%', label: 'Platform Uptime' },
  ];

  return (
    <section className="py-24 bg-[#050510] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-4 gold-gradient-text">{stat.value}</div>
              <div className="text-white/40 text-lg uppercase tracking-widest font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TradingPlatformsSection = () => {
  return (
    <section className="py-32 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Trade On Powerful Platforms</h2>
        </div>

        <div className="relative mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-4 shadow-2xl"
          >
            <img 
              src="/images/hero/Advanced-Trading.webp" 
              alt="Trading Platform" 
              className="rounded-[2.5rem] w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {[
            { icon: BarChart3, title: 'Smart Tools', desc: 'Charting indicators built for market analysis.' },
            { icon: Cpu, title: 'Automated Trading', desc: 'Run Expert Advisors on trading strategies.' },
            { icon: Smartphone, title: 'Any Device', desc: 'Trade online via desktop, mobile, or web.' }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-all border border-white/10">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
          >
            <Monitor className="w-8 h-8 text-white" />
            <div className="text-left">
              <div className="text-[10px] text-white/40 uppercase font-bold">Get it on</div>
              <div className="text-lg font-bold text-white">oneFXTrader Windows</div>
            </div>
          </a>
          <a
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
          >
            <Smartphone className="w-8 h-8 text-white" />
            <div className="text-left">
              <div className="text-[10px] text-white/40 uppercase font-bold">Get it on</div>
              <div className="text-lg font-bold text-white">oneFXTrader Android</div>
            </div>
          </a>
          <a
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
          >
            <Download className="w-8 h-8 text-white" />
            <div className="text-left">
              <div className="text-[10px] text-white/40 uppercase font-bold">Download on the</div>
              <div className="text-lg font-bold text-white">oneFXTrader iOS</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export const CTASection = () => {
  return (
    <section className="py-24 bg-[#070312] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(124,87,210,0.42),transparent_52%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(72,35,140,0.2),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.96] tracking-tight mb-5">
            Power Your Trading <br />
            <span className="text-gold">Journey Today</span>
          </h2>
          <p className="text-white/80 text-lg md:text-[1.95rem] leading-[1.35] mb-10">
            Access Forex, Shares, Commodities and Metals with advanced platform.
          </p>
          <Button to="/signup" className="mx-auto px-12 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-[#F3F4F6] transition-all flex items-center gap-2.5 text-lg">
            Open an Account <ChevronRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

type BeginTradingStep = {
  title: string;
  description: string;
  image: string;
};

type BeginTradingStepsSectionProps = {
  title?: string;
  subtitle?: string;
  steps?: BeginTradingStep[];
};

export const BeginTradingStepsSection = ({
  title = 'Begin Trading In Three Steps',
  subtitle = 'Open, fund, and access forex trading platforms quickly.',
  steps = [
    {
      title: 'Quick Sign Up',
      description: 'Create your forex broker account in minutes.',
      image: '/images/hero/quick-signup.svg',
    },
    {
      title: 'Secure Deposits',
      description: 'Add funds safely through trusted payment methods.',
      image: '/images/hero/secure-deposits.svg',
    },
    {
      title: 'Start Trading',
      description: 'Access global markets and start trading instantly.',
      image: '/images/hero/access-global-markets.svg',
    },
  ],
}: BeginTradingStepsSectionProps) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-14 lg:py-16 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#16092D] mb-3 tracking-tight">{title}</h2>
          <p className="text-[#4D4D57]/75 text-base md:text-lg">{subtitle}</p>
        </div>

        <div className="md:hidden space-y-9">
          {steps.map((step, i) => (
            <div key={step.title} className="space-y-4">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-[#1A0B2E]" />
                <div className="text-sm font-medium text-[#1A0B2E]/55 mb-1">Step {i + 1}</div>
                <h3 className="text-[2.15rem] font-semibold text-[#1A0B2E] mb-1 leading-tight">{step.title}</h3>
                <p className="text-gray-600 text-xl">{step.description}</p>
              </div>
              <div className="max-w-[420px] mx-auto">
                <img src={step.image} alt={step.title} className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-10 items-center">
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                onMouseEnter={() => setActiveStep(i)}
                className={`relative pl-10 cursor-pointer transition-all duration-300 ${activeStep === i ? 'opacity-100' : 'opacity-45'}`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-colors ${activeStep === i ? 'bg-[#1A0B2E]' : 'bg-[#D7D7DE]'}`} />
                <div className="text-sm font-semibold text-[#1A0B2E]/70 mb-1">Step {i + 1}</div>
                <h3 className="text-[2.35rem] lg:text-[2.7rem] leading-[1.06] font-semibold text-[#1A0B2E] mb-1">{step.title}</h3>
                <p className="text-[#4D4D57]/78 text-[1.05rem] lg:text-[1.18rem] leading-[1.35]">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="relative z-10 max-w-[360px] lg:max-w-[390px] mx-auto">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.3 }}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
