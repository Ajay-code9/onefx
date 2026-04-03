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
    <section className="site-section bg-[#050510] border-y border-white/5">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-3 site-grid-gap text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 gold-gradient-text">{stat.value}</div>
              <div className="text-white/40 text-sm sm:text-base uppercase tracking-widest font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TradingPlatformsSection = () => {
  return (
    <section className="site-section bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="site-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <h2 className="site-heading text-white mb-4">Trade On Powerful Platforms</h2>
        </div>

        <div className="relative mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-[2rem] p-3 sm:p-4 shadow-xl max-w-4xl xl:max-w-5xl mx-auto"
          >
            <img 
              src="/images/user-side-images/dashboard2.svg" 
              alt="Trading Platform" 
              className="rounded-xl lg:rounded-3xl w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 site-grid-gap mb-10 lg:mb-12">
          {[
            { icon: BarChart3, title: 'Smart Tools', desc: 'Charting indicators built for market analysis.' },
            { icon: Cpu, title: 'Automated Trading', desc: 'Run Expert Advisors on trading strategies.' },
            { icon: Smartphone, title: 'Any Device', desc: 'Trade online via desktop, mobile, or web.' }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all border border-white/10">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          <a
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition-all"
          >
            <Monitor className="w-7 h-7 text-white shrink-0" />
            <div className="text-left">
              <div className="text-[10px] text-white/40 uppercase font-bold">Get it on</div>
              <div className="text-base font-bold text-white">oneFXTrader Windows</div>
            </div>
          </a>
          <a
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition-all"
          >
            <Smartphone className="w-7 h-7 text-white shrink-0" />
            <div className="text-left">
              <div className="text-[10px] text-white/40 uppercase font-bold">Get it on</div>
              <div className="text-base font-bold text-white">oneFXTrader Android</div>
            </div>
          </a>
          <a
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition-all"
          >
            <Download className="w-7 h-7 text-white shrink-0" />
            <div className="text-left">
              <div className="text-[10px] text-white/40 uppercase font-bold">Download on the</div>
              <div className="text-base font-bold text-white">oneFXTrader iOS</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export const CTASection = () => {
  return (
    <section className="site-section bg-[#070312] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(124,87,210,0.42),transparent_52%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(72,35,140,0.2),transparent_70%)] pointer-events-none" />

      <div className="site-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="site-heading text-white leading-tight mb-4">
            Power Your Trading <br />
            <span className="text-gold">Journey Today</span>
          </h2>
          <p className="site-lead text-white/80 mb-8">
            Access Forex, Shares, Commodities and Metals with advanced platform.
          </p>
          <Button to="/signup" className="mx-auto px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-[#F3F4F6] transition-all flex items-center gap-2 text-base">
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
    <section className="site-section bg-[#F5F5F7] overflow-hidden">
      <div className="site-container">
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="site-heading text-[#16092D] mb-3">{title}</h2>
          <p className="site-lead text-[#4D4D57]/80">{subtitle}</p>
        </div>

        <div className="md:hidden space-y-8 site-grid-gap">
          {steps.map((step, i) => (
            <div key={step.title} className="space-y-4">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-[#1A0B2E]" />
                <div className="text-xs sm:text-sm font-medium text-[#1A0B2E]/55 mb-1">Step {i + 1}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1A0B2E] mb-1 leading-tight">{step.title}</h3>
                <p className="text-[#4D4D57] text-base sm:text-lg">{step.description}</p>
              </div>
              <div className="max-w-md mx-auto">
                <img src={step.image} alt={step.title} className="w-full h-auto site-img-feature" referrerPolicy="no-referrer" />
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:grid lg:grid-cols-[1fr_1fr] site-grid-gap items-center">
          <div className="space-y-4 lg:space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                onMouseEnter={() => setActiveStep(i)}
                className={`relative pl-10 cursor-pointer transition-all duration-300 ${activeStep === i ? 'opacity-100' : 'opacity-45'}`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-colors ${activeStep === i ? 'bg-[#1A0B2E]' : 'bg-[#D7D7DE]'}`} />
                <div className="text-sm font-semibold text-[#1A0B2E]/70 mb-1">Step {i + 1}</div>
                <h3 className="text-2xl lg:text-3xl leading-tight font-semibold text-[#1A0B2E] mb-1">{step.title}</h3>
                <p className="text-[#4D4D57]/80 text-base lg:text-lg leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="relative flex justify-center">
            <div className="relative z-10 w-full max-w-sm lg:max-w-md xl:max-w-lg">
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
