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

const PlatformHero = () => (
  <section className="pt-[calc(5rem+32px)] pb-20 bg-white overflow-hidden relative">
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

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
          <span className="text-[#A67C37]">The Most Trusted Forex</span><br />
          <span className="text-[#1A0B2E]">Trading Platforms Worldwide</span>
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Trade on MetaTrader 5 and oneFX's proprietary platform. Our platforms combine powerful features, advanced analysis, and secure execution, making them the best forex trading software for all traders.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mt-16"
      >
        <div className="flex justify-center items-end gap-0 md:gap-8">
          {/* Laptop on block */}
          <div className="relative z-20 transform translate-y-12 md:translate-y-20">
            <div className="bg-gray-200 w-full h-32 md:h-48 rounded-lg absolute bottom-0 left-0 -z-10 shadow-xl" />
            <img 
              src="/images/hero/Advanced-Trading.webp" 
              alt="Trading on Laptop" 
              className="w-[300px] md:w-[600px] drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
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
      title: "Access MetaTrader 5 directly from your web browser — no downloads required. Trade from any device with secure and lightning-fast execution.",
      subtitle: "How to trade on the MetaTrader 5 Web Platform:",
      steps: [
        "Open the MetaTrader 5 Web platform in your browser.",
        "Log in with your trading account credentials.",
        "Access live quotes, charts, and order functions.",
        "Start trading instantly without installation."
      ],
      buttons: [
        { label: "Open Web Platform", icon: ArrowRight, href: 'https://trade.mql5.com/trade' }
      ],
      image: "https://picsum.photos/seed/web-platform/800/500"
    },
    'DESKTOP': {
      title: "Download MetaTrader 5 for Desktop on Windows or Mac to enjoy full trading functionality with advanced tools and secure connectivity.",
      subtitle: "How to trade on the MetaTrader 5 Desktop version:",
      steps: [
        "Download the installer for your OS.",
        "Follow the on-screen installation steps.",
        "Launch the platform and log in.",
        "Start trading on global markets."
      ],
      buttons: [
        { label: "Get MT5 for Windows", icon: ArrowRight, href: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe' },
        { label: "Get MT5 for MacOS", icon: ArrowRight, href: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.pkg.zip' }
      ],
      image: "https://picsum.photos/seed/desktop-platform/800/500"
    },
    'ANDROID': {
      title: "Trade anywhere with the MetaTrader 5 Android app. Stay connected and manage your trades on the go with full functionality.",
      subtitle: "How to trade on the MetaTrader 5 Android app:",
      steps: [
        "Download the app from Google Play.",
        "Install and open the application.",
        "Log in to your trading account.",
        "Access markets and start trading."
      ],
      buttons: [
        { label: "Get MT5 for Android", icon: ArrowRight, href: 'https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5' }
      ],
      image: "https://picsum.photos/seed/android-platform/400/800"
    },
    'IOS': {
      title: "Trade seamlessly from your iPhone or iPad with the MetaTrader 5 iOS app. Access markets and manage trades securely anytime.",
      subtitle: "How to trade on the MetaTrader 5 iOS app:",
      steps: [
        "Download the app from the App Store.",
        "Install and launch the application.",
        "Log in with your trading account credentials.",
        "Start trading on the move."
      ],
      buttons: [
        { label: "Get MT5 for iOS", icon: ArrowRight, href: 'https://apps.apple.com/app/metatrader-5/id413251709' }
      ],
      image: "https://picsum.photos/seed/ios-platform/400/800"
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className={`order-2 lg:order-1 ${activeTab === 'ANDROID' || activeTab === 'IOS' ? 'flex justify-center' : ''}`}>
              <div className={`rounded-2xl overflow-hidden shadow-2xl border border-gray-100 ${activeTab === 'ANDROID' || activeTab === 'IOS' ? 'max-w-[300px]' : 'w-full'}`}>
                <img 
                  src={content[activeTab as keyof typeof content].image} 
                  alt={activeTab} 
                  className="w-full h-auto"
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

const FeatureGrid = () => (
  <section className="py-24 bg-[#0A0B10] relative overflow-hidden">
    {/* Grid Background */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          MetaTrader 5 at Its Best
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-[#A67C37]">
          Experience the Top Platform
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: LayoutGrid, title: "Advanced multi asset platform" },
          { icon: BarChart3, title: "Powerful charts and indicators" },
          { icon: MousePointerClick, title: "One click trade execution" },
          { icon: Settings2, title: "Algorithmic trading with EAs" },
          { icon: Layers, title: "Depth of Market DOM" },
          { icon: Shield, title: "Hedging and netting modes" }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#1A1B23] p-8 rounded-xl border border-white/5 hover:border-gold/30 transition-all group flex items-center gap-6"
          >
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <feature.icon className="text-white w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white leading-tight">{feature.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TradeEverything = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-50 rounded-[2.5rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A0B2E] mb-8 leading-tight">
            Trade Everything On A Single Platform
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            MetaTrader 5 is more than just a forex platform. With oneFX, you can access forex, metals, commodities and shares in one place. Simplify your trading with one trusted platform.
          </p>
          <Button to="/signup" className="gold-gradient px-10 py-5 rounded-full text-lg group">
            Start Trading On MT5
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="lg:w-1/2 relative">
          <img 
            src="/images/hero/Advanced-Trading.webp" 
            alt="Trading on Mobile" 
            className="w-full max-w-[400px] mx-auto drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const TradeYourWay = () => (
  <section className="py-24 bg-white text-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-6xl font-bold text-[#1A0B2E] mb-6">
        Trade Your Way on Any Device
      </h2>
      <p className="text-gray-500 text-lg mb-16">
        Stay connected to markets at all times with MetaTrader 5 on desktop, web or mobile.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-8 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
        >
          <Monitor className="w-8 h-8 text-blue-500" />
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Get it on</div>
            <div className="text-xl font-bold text-[#1A0B2E]">Windows</div>
          </div>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-8 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
        >
          <PlayCircle className="w-8 h-8 text-green-500" />
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Get it on</div>
            <div className="text-xl font-bold text-[#1A0B2E]">Google Play</div>
          </div>
        </a>
        <a
          href="https://apps.apple.com/app/metatrader-5/id413251709"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-8 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
        >
          <Apple className="w-8 h-8 text-black" />
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Download on the</div>
            <div className="text-xl font-bold text-[#1A0B2E]">App Store</div>
          </div>
        </a>
      </div>
    </div>
  </section>
);

const ThreeSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Quick Signup",
      description: "Create your forex broker account in minutes.",
      image: "/images/hero/quick-signup.svg"
    },
    {
      title: "Secure Deposit",
      description: "Add funds safely through trusted payment methods.",
      image: "/images/hero/secure-deposits.svg"
    },
    {
      title: "Start Trading",
      description: "Access global markets on the best forex platform.",
      image: "/images/hero/access-global-markets.svg"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1A0B2E] mb-6">
            Begin Trading In Three Easy Steps
          </h2>
          <p className="text-gray-500 text-lg">
            Open your account, fund it, and access top forex trading platforms instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div 
                key={i}
                onMouseEnter={() => setActiveStep(i)}
                className={`relative pl-12 cursor-pointer transition-all duration-300 ${activeStep === i ? 'opacity-100' : 'opacity-40'}`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-colors ${activeStep === i ? 'bg-[#1A0B2E]' : 'bg-gray-200'}`} />
                <div className="text-sm font-bold text-[#1A0B2E] mb-2">Step {i + 1}</div>
                <h3 className="text-3xl font-bold text-[#1A0B2E] mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="relative z-10 max-w-[400px] mx-auto">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#1A0B2E] opacity-5 blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is the best forex trading platform for beginners?",
      a: "MetaTrader 5 is considered the most popular forex trading platform, offering simplicity, tools, and flexibility for new traders."
    },
    {
      q: "Why choose oneFX’s trading platforms?",
      a: "Our platforms offer institutional-grade execution, advanced charting tools, and a secure environment backed by oneFX's expertise."
    },
    {
      q: "What makes MetaTrader 5 the top forex platform?",
      a: "MT5 supports multi-asset trading, advanced technical analysis, algorithmic trading with EAs, and has a highly customizable interface."
    },
    {
      q: "Can I trade on multiple devices?",
      a: "Yes, you can access your MT5 account across desktop, web, and mobile devices simultaneously with real-time synchronization."
    },
    {
      q: "Which forex broker platform is best for professional traders?",
      a: "Professional traders prefer MT5 for its Depth of Market (DOM), advanced order types, and powerful MQL5 programming capabilities."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
  <section className="py-24 relative overflow-hidden bg-[#0A0B10]">
    <div className="absolute inset-0 bg-gradient-to-br from-[#1A0B2E]/50 to-transparent" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Power Your Trading
      </h2>
      <p className="text-4xl md:text-6xl font-bold text-[#A67C37] mb-8">
        Journey Today
      </p>
      <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto">
        Access Forex, Shares, Commodities and Metals with advanced platform.
      </p>
      <Button to="/signup" className="bg-white text-[#1A0B2E] hover:bg-gray-100 px-12 py-5 rounded-full text-lg font-bold group">
        Open an Account
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
    {/* Decorative Streaks */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full" />
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
      <ThreeSteps />
      <FAQSection />
      <BottomCTA />
    </div>
  );
};

export default TradingPlatform;
