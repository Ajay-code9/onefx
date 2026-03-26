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
import { BeginTradingStepsSection } from '../components/CommonSections';

const AboutHero = () => (
  <section className="hero-full-viewport pt-[calc(5rem+24px)] pb-6 md:pb-8 bg-white">
    <div className="absolute inset-0">
      <img
        src="/images/hero/about__hero.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-right brightness-[1.2] contrast-[1.1] saturate-[1.24]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/66 via-white/14 to-transparent" />
    </div>
    <div className="hero-full-viewport-fill">
    <div className="site-container py-4 md:py-6">
      <div className="relative z-10 grid lg:grid-cols-2 site-grid-gap lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-[760px]"
        >
          <h1 className="font-sans text-[2.9rem] sm:text-[3.6rem] md:text-[4.25rem] font-semibold mb-8 leading-[1.04] tracking-tight">
            <span className="text-gold md:whitespace-nowrap">Building Trust Through</span>
            <br />
            <span className="text-[#1A1B23] md:whitespace-nowrap">Global Market Access</span>
          </h1>
          
          <p className="text-[#111318] text-[1.3rem] sm:text-[1.55rem] md:text-[1.5rem] mb-11 max-w-[760px] leading-[1.5] font-medium">
            oneFX is a trusted regulated forex broker
            <br />
            delivering safe, reliable, and advanced trading
            <br />
            platforms worldwide.
          </p>
          
          <Button to="/signup" className="px-12 py-3.5 text-lg rounded-full bg-linear-to-r from-[#E5C384] to-[#A67C37] hover:opacity-90 transition-opacity border-none group">
            Open Live Account
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <div className="hidden lg:block" />
      </div>
    </div>
    </div>
  </section>
);

const WhyChooseSection = () => (
  <section className="site-section bg-[#070312] relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_6%,rgba(88,60,170,0.36),transparent_44%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.07)_0%,transparent_24%,transparent_70%,rgba(121,76,214,0.2)_100%)]" />
      <div className="absolute -bottom-[260px] left-1/2 -translate-x-1/2 w-[1320px] h-[620px] rounded-[100%] border border-white/14 bg-[radial-gradient(ellipse_at_top,rgba(96,56,182,0.22),rgba(13,6,28,0.08)_64%,transparent)]" />
    </div>

    <div className="absolute -right-10 top-8 opacity-90 pointer-events-none">
      <Star className="w-[250px] h-[250px] text-gold drop-shadow-[0_18px_40px_rgba(197,160,89,0.35)]" fill="currentColor" />
    </div>

    <div className="site-container relative z-10">
      <div className="text-center mb-14">
        <h2 className="site-heading font-semibold text-white leading-[1.05] tracking-tight">
          Why Choose <br />
          <span className="text-gold">oneFX</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-stretch max-w-5xl mx-auto">
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
          <div
            key={i}
            className="rounded-[1.35rem] border border-white/10 bg-white/[0.08] backdrop-blur-sm p-6 md:p-7 flex flex-col items-start min-h-[250px] shadow-[0_14px_30px_rgba(3,2,12,0.28)]"
          >
            <div className="w-7 h-7 rounded-md bg-white/18 border border-white/20 flex items-center justify-center mb-6">
              <item.icon className="text-white w-3.5 h-3.5" />
            </div>
            <h3 className="text-[2rem] md:text-[2.15rem] font-semibold text-white mb-4 leading-[1.05]">{item.title}</h3>
            <p className="text-white/80 leading-relaxed text-[1.03rem] md:text-[1.08rem]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="site-section bg-white">
    <div className="site-container">
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
            <div className="site-heading font-bold text-gold mb-4">{stat.value}</div>
            <div className="text-dark/60 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const StepsSection = () => (
  <BeginTradingStepsSection
    title="Begin Trading In Three Steps"
    subtitle="Open, fund, and access forex trading platforms quickly."
    steps={[
      {
        title: 'Quick Sign Up',
        description: 'Apply online to open your forex trading account.',
        image: '/images/hero/quick-signup.svg',
      },
      {
        title: 'Secure Deposits',
        description: 'Fund your account using our secure payment methods.',
        image: '/images/hero/secure-deposits.svg',
      },
      {
        title: 'Start Trading',
        description: 'Access global markets and start trading instantly.',
        image: '/images/hero/access-global-markets.svg',
      },
    ]}
  />
);

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Ali S", text: "Platform is smooth, spreads are tight.", title: "Good Platform", date: "Aug 2025" },
    { name: "Marcos Kountouris", text: "I feel secure trading on this platform.", title: "Safe Trading", date: "Aug 2025" },
    { name: "Omar D.", text: "Support team available anytime, very responsive.", title: "Excellent Support", date: "Aug 2025" },
    { name: "Ahmed K.", text: "Fast account setup and reliable forex broker service.", title: "Great Experience", date: "Aug 2025" },
    { name: "Ahmed K.", text: "Fast account setup and reliable forex broker service.", title: "Great Experience", date: "Aug 2025" }
  ];

  return (
    <section className="site-section bg-white overflow-hidden relative">
      <div className="site-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="site-heading font-bold text-[#1A1B23] mb-4">Serving Traders Across Global Markets</h2>
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
    { q: "Which forex trading platforms do you support?", a: "We support industry-leading platforms including oneFXTrader and our proprietary oneFX WebTrader." },
    { q: "Can beginners start forex trading here?", a: "Absolutely. We offer educational resources, demo accounts, and 24/7 support to help beginners get started." },
    { q: "How does oneFX ensure client fund protection?", a: "We use segregated accounts with top-tier banks and maintain strict regulatory compliance." },
    { q: "Do you offer global access?", a: "Yes, we provide traders worldwide with access to global financial markets." }
  ];

  return (
    <section className="site-section bg-white">
      <div className="site-container">
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
  <section className="site-section bg-[#070312] relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(124,87,210,0.42),transparent_52%)] pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(72,35,140,0.2),transparent_70%)] pointer-events-none" />
    <div className="site-container relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="site-heading font-bold text-white leading-[0.96] tracking-tight mb-5">
          Power Your Trading <br />
          <span className="text-gold">Journey Today</span>
        </h2>
        <p className="text-white/80 text-lg md:text-[1.95rem] leading-[1.35] mb-10">
          Access Forex, Shares, Commodities and Metals with advanced platform.
        </p>
        <Button to="/signup" className="mx-auto px-12 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-[#F3F4F6] transition-all flex items-center gap-2.5 text-lg">
          Open an Account
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
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
