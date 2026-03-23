import React from 'react';
import { motion } from 'motion/react';
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
            href="https://www.metatrader5.com/en/download"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
          >
            <Monitor className="w-8 h-8 text-white" />
            <div className="text-left">
              <div className="text-[10px] text-white/40 uppercase font-bold">Get it on</div>
              <div className="text-lg font-bold text-white">Windows</div>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
          >
            <Smartphone className="w-8 h-8 text-white" />
            <div className="text-left">
              <div className="text-[10px] text-white/40 uppercase font-bold">Get it on</div>
              <div className="text-lg font-bold text-white">Google Play</div>
            </div>
          </a>
          <a
            href="https://apps.apple.com/app/metatrader-5/id413251709"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
          >
            <Download className="w-8 h-8 text-white" />
            <div className="text-left">
              <div className="text-[10px] text-white/40 uppercase font-bold">Download on the</div>
              <div className="text-lg font-bold text-white">App Store</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050510]" />
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Power Your Trading <br />
            <span className="gold-gradient-text">Journey Today</span>
          </h2>
          <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto">
            Access Forex, Shares, Commodities and Metals with advanced platform.
          </p>
          <Button to="/signup" className="px-12 py-6 text-xl rounded-full group">
            Open an Account <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
