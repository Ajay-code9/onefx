import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  Smartphone, 
  Globe, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Download,
  Layout,
  Cpu,
  MousePointer2,
  Settings,
  ChevronDown,
  Plus,
  Minus,
  Apple,
  PlayCircle,
  LayoutGrid,
  Shield,
  Layers,
  MousePointerClick,
  Settings2,
  PieChart
} from 'lucide-react';
import { Button } from '../components/Button';
import { BeginTradingStepsSection } from '../components/CommonSections';

const PlatformHero = () => (
  <section className="hero-full-viewport pt-[calc(5rem+24px)] pb-6 md:pb-8 bg-white relative">
    {/* Background Vertical Bars */}
    <div className="absolute inset-0 flex justify-around items-end px-4 opacity-5 pointer-events-none">
      {[40, 60, 30, 80, 50, 70, 45, 90, 35, 65, 55, 75].map((height, i) => (
        <div 
          key={i} 
          className="w-16 bg-gray-400 rounded-t-lg" 
          style={{ height: `${height}%` }}
        />
      ))}
    </div>

    <div className="hero-full-viewport-fill">
    <div className="site-container relative z-10 text-center flex flex-1 flex-col justify-center min-h-0 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
          <span className="text-[#A67C37]">The Most Trusted Forex</span><br />
          <span className="text-[#1A0B2E]">Trading Platforms Worldwide</span>
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
          Trade on oneFXTrader and oneFX's proprietary platform. Our platforms combine powerful features, advanced analysis, and secure execution, making them the best forex trading software for all traders.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mt-auto pt-6 md:pt-8 flex justify-center min-h-0"
      >
        <div className="flex justify-center items-end gap-0 md:gap-8 max-h-[38vh] md:max-h-[42vh] w-full">
          <div className="relative z-20 transform translate-y-4 md:translate-y-8">
            <div className="bg-gray-200 w-full h-24 md:h-36 rounded-lg absolute bottom-0 left-0 -z-10 shadow-xl" />
            <img 
              src="/images/hero/Advanced-Trading.webp" 
              alt="Trading on Laptop" 
              className="max-w-[min(100%,360px)] md:max-w-[640px] max-h-[32vh] md:max-h-[38vh] h-auto w-auto object-contain drop-shadow-2xl mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </div>
    </div>
  </section>
);

const TrustedBrokerTabs = () => {
  const [activeTab, setActiveTab] = useState('WEB PLATFORM');

  const tabs = [
    { id: 'WEB PLATFORM', label: 'WEB PLATFORM' },
    { id: 'DESKTOP', label: 'DESKTOP' },
    { id: 'ANDROID', label: 'ANDROID' },
    { id: 'IOS', label: 'IOS' },
  ];

  const content = {
    'WEB PLATFORM': {
      title: "Access oneFXTrader directly from your web browser — no downloads required. Trade from any device with secure and lightning-fast execution.",
      subtitle: "How to trade on the oneFXTrader Web Platform:",
      steps: [
        "Open the oneFXTrader Web platform in your browser.",
        "Log in with your trading account credentials.",
        "Access live quotes, charts, and order functions.",
        "Start trading instantly without installation."
      ],
      buttons: [
        { label: "Open Web Platform", icon: ArrowRight, href: '/signup' }
      ],
      image: '/images/hero/web-terminal.svg',
    },
    'DESKTOP': {
      title: "Download oneFXTrader for Desktop on Windows or Mac to enjoy full trading functionality with advanced tools and secure connectivity.",
      subtitle: "How to trade on the oneFXTrader Desktop version:",
      steps: [
        "Download the installer for your OS.",
        "Follow the on-screen installation steps.",
        "Launch the platform and log in.",
        "Start trading on global markets."
      ],
      buttons: [
        { label: "Get oneFXTrader for Windows", icon: ArrowRight, href: '/signup' },
        { label: "Get oneFXTrader for MacOS", icon: ArrowRight, href: '/signup' }
      ],
      image: '/images/hero/desktop.svg',
    },
    'ANDROID': {
      title: "Trade anywhere with the oneFXTrader Android app. Stay connected and manage your trades on the go with full functionality.",
      subtitle: "How to trade on the oneFXTrader Android app:",
      steps: [
        "Download the app from Google Play.",
        "Install and open the application.",
        "Log in to your trading account.",
        "Access markets and start trading."
      ],
      buttons: [
        { label: "Get oneFXTrader for Android", icon: ArrowRight, href: '/signup' }
      ],
      image: '/images/hero/android-screen.svg',
    },
    'IOS': {
      title: "Trade seamlessly from your iPhone or iPad with the oneFXTrader iOS app. Access markets and manage trades securely anytime.",
      subtitle: "How to trade on the oneFXTrader iOS app:",
      steps: [
        "Download the app from the App Store.",
        "Install and launch the application.",
        "Log in with your trading account credentials.",
        "Start trading on the move."
      ],
      buttons: [
        { label: "Get oneFXTrader for iOS", icon: ArrowRight, href: '/signup' }
      ],
      image: '/images/hero/ios-screen.svg',
    },
  };

  return (
    <section className="site-section bg-white">
      <div className="site-container">
        <h2 className="text-5xl font-bold text-center mb-16">Trusted Broker</h2>
        
        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-200 mb-12 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 text-sm font-bold tracking-wider transition-all relative whitespace-nowrap ${
                activeTab === tab.id ? 'text-[#1A0B2E]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A0B2E]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 site-grid-gap items-center"
          >
            <div className={`order-2 lg:order-1 ${activeTab === 'ANDROID' || activeTab === 'IOS' ? 'flex justify-center' : ''}`}>
              <div className={`rounded-2xl overflow-hidden shadow-2xl border border-gray-100 ${activeTab === 'ANDROID' || activeTab === 'IOS' ? 'max-w-[300px]' : 'w-full'}`}>
                <img
                  src={content[activeTab as keyof typeof content].image}
                  alt={activeTab}
                  className="w-full h-auto object-contain object-center bg-[#F8F9FB]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-[#1A0B2E] mb-6 leading-snug">
                {content[activeTab as keyof typeof content].title}
              </h3>
              <p className="text-gray-600 mb-6 font-medium">
                {content[activeTab as keyof typeof content].subtitle}
              </p>
              <ul className="space-y-4 mb-10">
                {content[activeTab as keyof typeof content].steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                {content[activeTab as keyof typeof content].buttons.map((btn, i) => (
                  <Button key={i} href={btn.href} className="gold-gradient px-8 py-4 rounded-full flex items-center gap-2 group">
                    {btn.label}
                    <btn.icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const FeatureGrid = () => {
  const featureItems = [
    { icon: LayoutGrid, title: "Advanced multi asset platform" },
    { icon: BarChart3, title: "Powerful charts and indicators" },
    { icon: MousePointerClick, title: "One click trade execution" },
    { icon: Settings2, title: "Algorithmic trading with EAs" },
    { icon: Layers, title: "Depth of Market DOM" },
    { icon: Shield, title: "Hedging and netting modes" }
  ];

  const topRow = featureItems.slice(0, 3);
  const bottomRow = featureItems.slice(3);

  return (
    <section className="site-section bg-[#060311] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-70">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(138,110,204,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(138,110,204,0.08) 1px, transparent 1px)',
            backgroundSize: '120px 96px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(112,70,208,0.45),transparent_45%)]" />
      </div>

      <div className="site-container relative z-10">
        <div className="lg:hidden text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-2">oneFXTrader at Its Best</h2>
          <p className="text-3xl md:text-4xl font-semibold text-gold">Experience the Top Platform</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:hidden gap-4">
          {featureItems.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/[0.08] px-5 py-5 flex items-center gap-3.5"
            >
              <feature.icon className="w-4.5 h-4.5 text-white shrink-0" />
              <h3 className="text-white font-semibold text-sm leading-snug">{feature.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-9">
            {topRow.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-white/10 bg-white/[0.08] px-6 py-5 flex items-center gap-3.5"
              >
                <feature.icon className="w-4.5 h-4.5 text-white shrink-0" />
                <h3 className="text-white font-semibold text-2xl leading-tight">{feature.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-9">
            <h2 className="text-6xl font-semibold text-white mb-2 leading-tight">oneFXTrader at Its Best</h2>
            <p className="text-6xl font-semibold text-gold leading-tight">Experience the Top Platform</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {bottomRow.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.08 }}
                className="rounded-xl border border-white/10 bg-white/[0.08] px-6 py-5 flex items-center gap-3.5"
              >
                <feature.icon className="w-4.5 h-4.5 text-white shrink-0" />
                <h3 className="text-white font-semibold text-2xl leading-tight">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TradeEverything = () => (
  <section className="site-section bg-white overflow-hidden">
    <div className="site-container">
      <div className="bg-gray-50 rounded-[2.5rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="site-heading font-bold text-[#1A0B2E] mb-8 leading-tight">
            Trade Everything On A Single Platform
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            oneFXTrader is more than just a forex platform. With oneFX, you can access forex, metals, commodities and shares in one place. Simplify your trading with one trusted platform.
          </p>
          <Button to="/signup" className="gold-gradient px-10 py-5 rounded-full text-lg group">
            Start Trading on oneFXTrader
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="lg:w-1/2 relative">
          <img 
            src="/images/hero/Advanced-Trading.webp" 
            alt="Trading on Mobile" 
            className="w-full max-w-[520px] mx-auto drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const TradeYourWay = () => (
  <section className="site-section bg-white text-center">
    <div className="site-container">
      <h2 className="site-heading font-bold text-[#1A0B2E] mb-6">
        Trade Your Way on Any Device
      </h2>
      <p className="text-gray-500 text-lg mb-16">
        Stay connected to markets at all times with oneFXTrader on desktop, web or mobile.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-8 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
        >
          <Monitor className="w-8 h-8 text-blue-500" />
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Get it on</div>
            <div className="text-xl font-bold text-[#1A0B2E]">oneFXTrader Windows</div>
          </div>
        </a>
        <a
          href="/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-8 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
        >
          <PlayCircle className="w-8 h-8 text-green-500" />
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Get it on</div>
            <div className="text-xl font-bold text-[#1A0B2E]">oneFXTrader Android</div>
          </div>
        </a>
        <a
          href="/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-8 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
        >
          <Apple className="w-8 h-8 text-black" />
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Download on the</div>
            <div className="text-xl font-bold text-[#1A0B2E]">oneFXTrader iOS</div>
          </div>
        </a>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is the best forex trading platform for beginners?",
      a: "oneFXTrader is designed for both beginners and professionals, offering simplicity, tools, and flexibility for new traders."
    },
    {
      q: "Why choose oneFX’s trading platforms?",
      a: "Our platforms offer institutional-grade execution, advanced charting tools, and a secure environment backed by oneFX's expertise."
    },
    {
      q: "What makes oneFXTrader a top forex platform?",
      a: "oneFXTrader supports multi-asset trading, advanced technical analysis, and algorithmic trading capabilities with a highly customizable interface."
    },
    {
      q: "Can I trade on multiple devices?",
      a: "Yes, you can access your oneFXTrader account across desktop, web, and mobile devices simultaneously with real-time synchronization."
    },
    {
      q: "Which forex broker platform is best for professional traders?",
      a: "Professional traders prefer oneFXTrader for its Depth of Market (DOM), advanced order types, and flexible automation capabilities."
    }
  ];

  return (
    <section className="site-section bg-white">
      <div className="site-container">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-5xl font-bold text-[#1A0B2E] leading-tight">
              Frequently asked questions
            </h2>
          </div>
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-xl font-bold text-[#1A0B2E] group-hover:text-[#A67C37] transition-colors">{faq.q}</span>
                  <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-500 leading-relaxed">
                        {faq.a}
                      </p>
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
  <section className="site-section relative overflow-hidden bg-[#070312]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(124,87,210,0.42),transparent_52%)] pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(72,35,140,0.2),transparent_70%)] pointer-events-none" />
    <div className="site-container relative z-10 text-center">
      <h2 className="site-heading font-bold text-white leading-[0.96] tracking-tight mb-5">
        Power Your Trading <br />
        <span className="text-gold">Journey Today</span>
      </h2>
      <p className="text-white/80 text-lg md:text-[1.95rem] leading-[1.35] mb-10 max-w-4xl mx-auto">
        Access Forex, Shares, Commodities and Metals with advanced platform.
      </p>
      <Button to="/signup" className="mx-auto px-12 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-[#F3F4F6] transition-all flex items-center gap-2.5 text-lg">
        Open an Account
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  </section>
);

export const TradingPlatform = () => {
  return (
    <div className="min-h-screen bg-white">
      <PlatformHero />
      <TrustedBrokerTabs />
      <FeatureGrid />
      <TradeEverything />
      <TradeYourWay />
      <BeginTradingStepsSection
        title="Begin Trading In Three Steps"
        subtitle="Open, fund, and access forex trading platforms quickly."
      />
      <FAQSection />
      <BottomCTA />
    </div>
  );
};

export default TradingPlatform;
