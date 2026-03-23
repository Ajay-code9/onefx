import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Eye, 
  Shield, 
  Zap, 
  ChevronDown,
  Star,
  ArrowRight,
  Globe
} from 'lucide-react';
import { Button } from '../components/Button';
import { MarketTickerStrip } from '../components/MarketTickerStrip';

const AboutHero = () => (
  <section className="pt-[calc(5rem+32px)] pb-0 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            <span className="text-gold">Building Trust Through</span> <br />
            <span className="text-[#1A1B23]">Global Market Access</span>
          </h1>
          
          <p className="text-dark/60 text-xl mb-12 max-w-xl leading-relaxed">
            oneFX is a trusted regulated forex broker delivering safe, reliable, and advanced trading platforms worldwide.
          </p>
          
          <Button to="/signup" className="px-10 py-5 text-lg rounded-full bg-gradient-to-r from-[#E5C384] to-[#A67C37] hover:opacity-90 transition-opacity border-none group">
            Open Live Account
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-full flex items-center justify-center"
        >
          {/* Floating 3D Icons Mockup */}
          <div className="relative w-full max-w-lg aspect-square">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-64 h-64 bg-[#2D1B4E] rounded-[3rem] shadow-2xl flex items-center justify-center transform rotate-12"
            >
              <Star className="w-32 h-32 text-gold" fill="currentColor" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-0 w-48 h-48 bg-[#2D1B4E] rounded-[2.5rem] shadow-2xl flex items-center justify-center transform -rotate-12"
            >
              <Star className="w-24 h-24 text-gold" fill="currentColor" />
            </motion.div>
            <motion.div 
              animate={{ x: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/4 w-16 h-16 text-gold"
            >
              <Star className="w-full h-full" fill="currentColor" />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-1/4 w-12 h-12 text-gold"
            >
              <Star className="w-full h-full" fill="currentColor" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const WhyChooseSection = () => (
  <section className="py-24 bg-[#0A0B10] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Why Choose <br />
          <span className="text-gold">oneFX</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {[
          {
            icon: Target,
            title: "Our Mission",
            desc: "To provide reliable forex brokers with cutting-edge forex trading platforms, delivering safe, efficient, and transparent foreign exchange trading solutions."
          },
          {
            icon: Eye,
            title: "Our Vision",
            desc: "To become the leading regulated forex broker trusted by traders worldwide."
          },
          {
            icon: Shield,
            title: "Our Values",
            desc: "We prioritize clients by offering fair conditions, secure systems, and dedicated support, ensuring every trader feels confident in foreign exchange trading platform."
          }
        ].map((item, i) => (
          <div key={i} className="p-10 rounded-[2.5rem] bg-[#1A1B23] border border-white/5 flex flex-col items-start group hover:bg-[#252630] transition-all">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <item.icon className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
            <p className="text-white/40 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    
    {/* Large Gold Star Background element */}
    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] opacity-20 pointer-events-none">
      <Star className="w-full h-full text-gold" fill="currentColor" />
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-[#1A1B23]">Results Backed By Numbers</h2>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { value: "60+", label: "Currency pairs available" },
          { value: "500:1", label: "Maximum leverage" },
          { value: "24/7", label: "Dedicated client support" },
          { value: "4", label: "Flexible account types" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-gold mb-4">{stat.value}</div>
            <div className="text-dark/60 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { title: "Quick Sign Up", desc: "Apply online to open your forex trading account." },
    { title: "Secure Deposits", desc: "Fund your account using our secure payment methods." },
    { title: "Start Trading", desc: "Access global markets and start trading instantly." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#1A1B23] mb-4">Begin Trading in Three Steps</h2>
          <p className="text-dark/40">Open, fund, and access forex trading platforms quickly.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`pl-8 border-l-2 transition-all cursor-pointer ${activeStep === i ? 'border-gold' : 'border-gray-100'}`}
                onClick={() => setActiveStep(i)}
              >
                <div className="text-xs font-bold text-gold uppercase tracking-widest mb-2">Step {i + 1}</div>
                <h3 className={`text-2xl font-bold mb-4 ${activeStep === i ? 'text-[#1A1B23]' : 'text-dark/40'}`}>{step.title}</h3>
                {activeStep === i && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-dark/60 leading-relaxed"
                  >
                    {step.desc}
                  </motion.p>
                )}
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-[#1A1B23] rounded-[3rem] p-4 shadow-2xl max-w-[320px] mx-auto">
              <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
                <div className="p-8 pt-12 text-center">
                  <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-2">
                      <Star className="w-6 h-6 text-gold" fill="currentColor" />
                      <span className="font-bold text-dark">oneFX</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-dark mb-8">Register as a Trader</h4>
                  <div className="space-y-4">
                    <div className="h-10 bg-gray-50 rounded-lg border border-gray-100" />
                    <div className="h-10 bg-gray-50 rounded-lg border border-gray-100" />
                    <div className="h-10 bg-gray-50 rounded-lg border border-gray-100" />
                    <div className="h-12 bg-gold/10 rounded-lg border border-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                      Continue
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Ali S", text: "Platform is smooth, spreads are tight.", title: "Good Platform", date: "Aug 2025" },
    { name: "Marcos Kountouris", text: "I feel secure trading on this platform.", title: "Safe Trading", date: "Aug 2025" },
    { name: "Omar D.", text: "Support team available anytime, very responsive.", title: "Excellent Support", date: "Aug 2025" },
    { name: "Ahmed K.", text: "Fast account setup and reliable forex broker service.", title: "Great Experience", date: "Aug 2025" },
    { name: "Ahmed K.", text: "Fast account setup and reliable forex broker service.", title: "Great Experience", date: "Aug 2025" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1B23] mb-4">Serving Traders Across Global Markets</h2>
          <p className="text-dark/40">Strong MENA presence with global forex broker services.</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-12 no-scrollbar">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-[300px] p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-gold" fill="currentColor" />)}
              </div>
              <h4 className="font-bold text-dark mb-2">{t.title}</h4>
              <p className="text-dark/60 text-sm mb-8 leading-relaxed">{t.text}</p>
              <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                <span className="text-xs font-bold text-dark">{t.name}</span>
                <span className="text-[10px] text-dark/40 uppercase font-bold">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-dark w-4' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>
      
      {/* Globe Background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-10 pointer-events-none translate-y-1/2">
        <Globe className="w-full h-full text-dark" />
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { q: "Is oneFX a trusted forex broker?", a: "Yes, oneFX is a reliable forex broker providing safe and transparent online forex trading." },
    { q: "Which forex trading platforms do you support?", a: "We support industry-leading platforms including MetaTrader 5 and our proprietary oneFX WebTrader." },
    { q: "Can beginners start forex trading here?", a: "Absolutely. We offer educational resources, demo accounts, and 24/7 support to help beginners get started." },
    { q: "How does oneFX ensure client fund protection?", a: "We use segregated accounts with top-tier banks and maintain strict regulatory compliance." },
    { q: "Do you offer global access?", a: "Yes, we provide traders worldwide with access to global financial markets." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-bold text-[#1A1B23] leading-tight">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-4">
                <button 
                  className="w-full flex justify-between items-center py-4 text-left group"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                  <span className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-dark' : 'text-dark/60 group-hover:text-dark'}`}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180 text-dark' : 'text-dark/40'}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-dark/60 text-sm leading-relaxed pb-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BottomCTA = () => (
  <section className="py-24 bg-[#0A0B10] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Power Your Trading <br />
          <span className="text-gold">Journey Today</span>
        </h2>
        <p className="text-white/60 text-xl mb-12 leading-relaxed">
          Access Forex, Shares, Commodities and Metals with advanced platform.
        </p>
        <Button to="/signup" className="px-12 py-6 text-xl rounded-full bg-white text-dark hover:bg-gray-100 transition-colors border-none group">
          Open an Account
          <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
    
    {/* Decorative light streak */}
    <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/30 to-transparent blur-[120px] -mr-64 -mt-64" />
    </div>
  </section>
);

export const AboutUs = () => {
  const tickerAssets = [
    { symbol: 'EUR/USD', price: '1.15690', change: '-0.00142', percent: '-0.12%', trend: 'down' as const, flags: ['eu', 'us'] },
    { symbol: 'GBP/USD', price: '1.38420', change: '+0.00215', percent: '+0.15%', trend: 'up' as const, flags: ['gb', 'us'] },
    { symbol: 'USD/JPY', price: '110.250', change: '+0.450', percent: '+0.41%', trend: 'up' as const, flags: ['us', 'jp'] },
    { symbol: 'XAU/USD', price: '2024.50', change: '+12.30', percent: '+0.61%', trend: 'up' as const, flags: ['un', 'us'] },
    { symbol: 'BTC/USD', price: '64250.00', change: '+1240.00', percent: '+1.98%', trend: 'up' as const, flags: ['un', 'us'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <MarketTickerStrip assets={tickerAssets} />
      <WhyChooseSection />
      <StatsSection />
      <StepsSection />
      <TestimonialsSection />
      <FAQSection />
      <BottomCTA />
    </div>
  );
};

export default AboutUs;
