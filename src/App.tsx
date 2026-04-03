import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Globe2, 
  Cpu, 
  ArrowRight,
  ChevronRight,
  ChevronDown,
  X,
  CheckCircle2,
  DollarSign,
  Bitcoin,
  BarChart,
  Layers,
  Check,
  CreditCard,
  Lock,
  Monitor,
  Smartphone,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Layout,
  Settings,
  Smartphone as Phone,
  Monitor as Desktop,
  Mail,
  MapPin
} from 'lucide-react';

import Forex from './pages/Forex';
import Commodities from './pages/Commodities';
import Metals from './pages/Metals';
import Shares from './pages/Shares';
import IntroducingBroker from './pages/IntroducingBroker';
import AccountComparison from './pages/AccountComparison';
import DepositWithdrawals from './pages/DepositWithdrawals';
import TradingPlatform from './pages/TradingPlatform';
import EconomicCalendar from './pages/EconomicCalendar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PlatformOverview from './pages/PlatformOverview';
import ClientDashboard from './pages/ClientDashboard';

import { MarketTickerStrip } from './components/MarketTickerStrip';
import { Button } from './components/Button';

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/** Reference-style hamburger: full-width top/bottom bars, shorter middle bar right-aligned */
const MobileHamburgerIcon = ({ className = '' }: { className?: string }) => (
  <span
    className={`inline-flex w-5 flex-col items-end justify-center gap-[4px] ${className}`}
    aria-hidden
  >
    <span className="h-0.5 w-full shrink-0 rounded-full bg-current" />
    <span className="h-0.5 w-[58%] shrink-0 rounded-full bg-current" />
    <span className="h-0.5 w-full shrink-0 rounded-full bg-current" />
  </span>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location]);

  // Mobile: force-disable border/shadow/backdrop-blur to eliminate the 1px divider artifact
  // (helps even when `scrolled` toggles due to mobile browser chrome).
  const navGlass = scrolled
    ? 'border-b-0 shadow-none backdrop-blur-none bg-[#1a0d2e]/78 md:border-b md:border-white/10 md:shadow-[0_8px_32px_rgba(88,28,135,0.2)] md:backdrop-blur-xl md:backdrop-saturate-150'
    : 'border-b-0 shadow-none backdrop-blur-none bg-transparent md:border-b md:border-transparent';

  const lightHeroPaths = [
    '/account-comparison',
    '/trading-platform',
    '/about-us',
    '/blog',
  ];
  const useDarkNavText = lightHeroPaths.includes(location.pathname) && !scrolled;

  /** Light hero pages: black logo on white/clear top; after scroll, glass bar → white logo */
  const navLogoSrc = useDarkNavText ? '/images/hero/logo-black.svg' : '/images/hero/logo-white.svg';

  const navMuted = useDarkNavText
    ? 'text-[#3d2f55] hover:text-gold'
    : 'text-[#e4dff2]/95 hover:text-gold';

  const menuItems = [
    { 
      title: 'Markets', 
      items: [
        { name: 'Forex', path: '/forex' },
        { name: 'Commodities', path: '/commodities' },
        { name: 'Metals', path: '/metals' },
        { name: 'Shares', path: '/shares' },
      ] 
    },
    { title: 'Introducing Broker', path: '/introducing-broker' },
    { 
      title: 'Trading', 
      items: [
        { name: 'Account Comparison', path: '/account-comparison' },
        { name: 'Deposit Withdrawals', path: '/deposit-withdrawals' },
      ] 
    },
    { 
      title: 'Platform', 
      items: [
        { name: 'Overview', path: '/platform' },
        { name: 'Client Dashboard', path: '/client-dashboard' },
      ] 
    },
    { 
      title: 'Tools', 
      items: [
        { name: 'Trading Platform', path: '/trading-platform' },
        { name: 'Economic Calender', path: '/economic-calendar' },
      ] 
    },
    { 
      title: 'Company', 
      items: [
        { name: 'About Us', path: '/about-us' },
        { name: 'Contact Us', path: '/contact-us' },
        { name: 'Blog', path: '/blog' },
      ] 
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out ${navGlass}`}
    >
      <div className="site-container">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={navLogoSrc}
              alt="oneFX"
              className="h-10 w-auto md:h-11 shrink-0 transition-transform duration-300 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <div 
                key={item.title} 
                className="relative group h-20 flex items-center"
                onMouseEnter={() => item.items && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.path ? (
                  <Link 
                    to={item.path} 
                    className={`text-sm font-bold transition-colors flex items-center gap-1 ${navMuted}`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <button 
                    className={`text-sm font-bold transition-colors ${activeDropdown === item.title ? 'text-gold' : navMuted}`}
                  >
                    {item.title}
                  </button>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.items && activeDropdown === item.title && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl py-4 overflow-hidden border border-gray-100"
                    >
                      {item.items.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          to={subItem.path}
                          className="block px-8 py-3 text-sm font-bold text-slate-500 hover:text-gold hover:bg-slate-50 transition-all flex items-center justify-between group/item"
                        >
                          {subItem.name}
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className={`inline-flex items-center justify-center rounded-full px-5 py-1.5 text-[0.88rem] font-semibold font-sans transition-colors duration-200 ${
                useDarkNavText
                  ? 'bg-[#1a0f2e]/12 text-[#1f1633] hover:bg-[#1a0f2e]/18'
                  : 'bg-[#1a0f2e]/72 text-white hover:bg-[#1a0f2e]/85'
              }`}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#E1C988] to-[#B38C45] px-5 py-1.5 text-[0.88rem] font-semibold font-sans text-white shadow-[0_8px_24px_rgba(179,140,69,0.32)] transition-all duration-200 hover:brightness-105"
            >
              Sign up
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 transition-colors ${useDarkNavText ? 'text-[#3d2f55]' : 'text-white'}`}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-7 w-7" strokeWidth={2} /> : <MobileHamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/55"
              aria-label="Close menu overlay"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.24, ease: 'easeOut' }}
              className="absolute right-0 top-0 h-screen w-[78vw] max-w-[320px] bg-[#0a0514] border-l border-white/10 overflow-y-auto font-sans antialiased"
            >
              <div className="px-5 pt-6 pb-8 min-h-screen flex flex-col">
                <div className="flex items-center justify-between gap-3">
                  <Link to="/" className="flex items-center gap-2 min-w-0 font-display" onClick={() => setIsOpen(false)}>
                    <img
                      src="/images/hero/logo-white.svg"
                      alt="oneFX"
                      className="h-10 w-auto shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                  <button type="button" onClick={() => setIsOpen(false)} className="shrink-0 p-1 text-white/70 hover:text-white" aria-label="Close menu">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="pt-10 space-y-1" aria-label="Mobile">
              {menuItems.map((item) => (
                  <div key={item.title} className="space-y-1">
                  {item.path ? (
                    <Link 
                      to={item.path} 
                      className="block py-3.5 text-base font-semibold text-white tracking-tight"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button 
                        type="button"
                        onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                        className="w-full flex justify-between items-center gap-2 py-3.5 text-left text-base font-semibold text-white tracking-tight"
                      >
                        <span className="min-w-0">{item.title}</span>
                        <ChevronDown className={`w-4 h-4 shrink-0 text-white/90 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="rounded-lg bg-white py-2 px-3 mt-1 mb-2 space-y-0.5"
                          >
                            {item.items?.map((subItem) => (
                              <Link 
                                key={subItem.name} 
                                to={subItem.path}
                                className="block py-2.5 text-sm font-medium text-slate-500"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                  </div>
              ))}
                </nav>

                <div className="mt-auto pt-8 flex flex-nowrap items-stretch gap-2.5">
                <Link
                  to="/login"
                  className="flex-1 min-h-[44px] whitespace-nowrap text-center text-sm font-semibold bg-[#1a0f2e] text-white px-3 py-3 rounded-full border border-white/10 shadow-inner"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="flex-1 min-h-[44px] whitespace-nowrap text-center text-sm font-semibold bg-linear-to-r from-gold to-[#B48F48] text-white px-3 py-3 rounded-full"
                >
                  Sign up
                </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MarketCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-3xl bg-white border border-slate-100 premium-shadow hover:border-gold/20 transition-all"
  >
    <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="text-gold w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    <div className="mt-6 flex items-center text-gold font-bold text-sm cursor-pointer group">
      Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
    </div>
  </motion.div>
);

const FeatureBlock = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-2xl flex items-center justify-center shadow-lg shadow-gold/20">
      <Icon className="text-dark w-6 h-6" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/60 leading-relaxed">{description}</p>
    </div>
  </div>
);

const StatItem = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center">
    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 font-display">{value}</div>
    <div className="text-gold font-bold uppercase tracking-wider text-[10px]">{label}</div>
  </div>
);

const StepCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="relative p-6 sm:p-8 rounded-2xl lg:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group"
  >
    {/* Large faded number in background */}
    <div className="text-[120px] font-black text-white/[0.03] absolute -bottom-10 -right-4 select-none group-hover:text-gold/[0.05] transition-colors duration-500">
      {number}
    </div>
    
    <div className="w-12 h-12 bg-gold text-dark rounded-full flex items-center justify-center font-bold text-lg mb-8 shadow-[0_0_20px_rgba(197,160,89,0.3)]">
      {number}
    </div>
    
      <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors duration-300">{title}</h3>
    <p className="text-white/50 text-sm sm:text-base leading-relaxed">{description}</p>
    
    {/* Subtle glow effect on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

const WhatsNewCard = ({ image, title, description }: { image: string, title: string, description: string }) => (
  <div className="flex flex-col gap-4 lg:gap-6 max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto w-full">
    <div className="rounded-xl lg:rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="space-y-2">
      <h3 className="text-lg sm:text-xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  </div>
);

const AccountTypeCard = ({ 
  title, 
  minDeposit, 
  features, 
  variant = 'dark' 
}: { 
  title: string, 
  minDeposit: string, 
  features: string[], 
  variant?: 'dark' | 'gold' 
}) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className={`p-6 lg:p-7 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[280px] lg:min-h-[300px] shadow-xl ${
      variant === 'gold' 
        ? 'bg-gradient-to-br from-[#B8860B] to-[#DAA520] text-white' 
        : 'bg-[#1A1A2E] text-white border border-white/5'
    }`}
  >
    {/* Decorative background element */}
    <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 ${variant === 'gold' ? 'bg-white' : 'bg-gold'}`} />
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase opacity-80 mb-6">{title}</h4>
          {/* Chip Icon */}
          <div className="w-10 h-7 rounded-md bg-gradient-to-br from-yellow-200 to-yellow-600/50 flex items-center justify-center overflow-hidden relative border border-yellow-100/20">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px p-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-black/10 rounded-sm" />
              ))}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold flex items-start justify-end">
            <span className="text-sm mt-1 mr-0.5">$</span>
            <span>{minDeposit}</span>
          </div>
          <div className="text-[10px] font-medium uppercase tracking-wider opacity-60">Min Deposit</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-3 mb-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${variant === 'gold' ? 'bg-white/20' : 'bg-gold/20'}`}>
              <Check className={`w-2.5 h-2.5 ${variant === 'gold' ? 'text-white' : 'text-gold'}`} />
            </div>
            <span className="text-[11px] font-bold whitespace-nowrap">{feature}</span>
          </div>
        ))}
      </div>
    </div>

    <Link
      to="/signup"
      className={`relative z-10 w-fit flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold border transition-all ${
        variant === 'gold'
          ? 'bg-white/10 border-white/20 hover:bg-white/20'
          : 'bg-white/5 border-white/10 hover:border-gold/50 hover:text-gold'
      }`}
    >
      Open Live Account
      <ChevronRight className="w-3 h-3" />
    </Link>
  </motion.div>
);

const MarketExplorer = () => {
  const [activeTab, setActiveTab] = useState('Forex');

  const markets = [
    {
      id: 'Forex',
      title: '60+ currency pairs with competitive spreads and reliable execution.',
      subtitle: 'THE MOST LIQUID MARKET',
      image: '/images/hero/forex.webp',
      color: 'bg-indigo-900/20'
    },
    {
      id: 'Shares',
      title: 'Trade leading stocks from major global exchanges.',
      subtitle: 'WORLD-CLASS EQUITIES',
      image: '/images/hero/shares.webp',
      color: 'bg-blue-900/20'
    },
    {
      id: 'Metals',
      title: 'Gold, silver, and metals with tight spreads.',
      subtitle: 'SAFE-HAVEN ASSETS',
      image: '/images/hero/metals.webp',
      color: 'bg-amber-900/20'
    },
    {
      id: 'Commodities',
      title: 'Energy, oil, and soft commodities with real-time pricing.',
      subtitle: 'ESSENTIAL MARKETS',
      image: '/images/hero/commodities.webp',
      color: 'bg-emerald-900/20'
    }
  ];

  const activeMarket = markets.find(m => m.id === activeTab) || markets[0];

  return (
    <section className="site-section bg-white">
      <div className="site-container">
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="site-heading text-slate-900 mb-3">Explore a Wide Range of Markets</h2>
          <p className="site-lead text-slate-600">Diversify your portfolio across leading global assets.</p>
        </div>

        <div className="flex justify-center gap-2 mb-8 lg:mb-10">
          {markets.map((market) => (
            <button
              key={market.id}
              onClick={() => setActiveTab(market.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === market.id 
                  ? 'bg-[#1A1A2E] text-white shadow-lg' 
                  : 'bg-[#F0F2F5] text-slate-500 hover:bg-slate-200'
              }`}
            >
              {market.id}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 site-grid-gap items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#241447] via-[#1A1A2E] to-[#320f48] p-8 md:p-12 border border-white/10"
            >
              {/* Curtain effect background */}
              <div className="absolute inset-0 opacity-35 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/40 via-transparent to-transparent" />
              
              <div className="relative h-full w-full rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] flex items-center justify-center p-6 md:p-8 bg-transparent">
                <img 
                  src={activeMarket.image} 
                  alt={activeMarket.id} 
                  className={`w-full h-full rounded-xl shadow-lg ${
                    activeMarket.id === 'Forex'
                      ? 'object-cover object-center scale-[1.16]'
                      : activeMarket.id === 'Metals'
                        ? 'object-cover object-center scale-[1.16]'
                      : activeMarket.id === 'Commodities'
                        ? 'object-contain object-center scale-100'
                        : 'object-cover object-center'
                  }`}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + '-content'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6 lg:mb-8">
                {activeMarket.title}
              </h3>
              
              <Link
                to="/signup"
                className="w-fit px-6 py-3 rounded-full border border-gold text-gold font-bold hover:bg-gold hover:text-white transition-all flex items-center gap-2 mb-8"
              >
                Open Live Account
                <ChevronRight className="w-4 h-4" />
              </Link>

              <div className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                {activeMarket.subtitle}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const TradingEdgeSection = () => (
  <section className="site-section bg-white relative overflow-hidden">
    <div className="site-container">
      <div className="text-center mb-10 lg:mb-12">
        <h2 className="site-heading text-[#10131A] mb-4">The Trading Edge You Deserve</h2>
        <p className="site-lead text-slate-600 max-w-2xl mx-auto">Built for speed, reliability, and powerful trading.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 site-grid-gap">
        {/* Lightning-Fast Execution — dark glass card on white section */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="md:col-span-2 p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-white/10 relative overflow-hidden group min-h-[320px] lg:min-h-[380px] flex flex-col justify-between bg-gradient-to-br from-[#1e1a2e] via-[#15101f] to-[#0c0a12] shadow-[0_24px_60px_rgba(15,10,25,0.18)]"
        >
          <div className="absolute top-0 right-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none">
            <img src="/images/hero/lightening-fast.webp" alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" aria-hidden />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 backdrop-blur-md border border-white/10">
              <Zap className="text-white w-7 h-7" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 lg:mb-6 leading-tight">Lightning-Fast <br /> Execution</h3>
            <p className="text-white/50 text-base sm:text-lg max-w-sm leading-relaxed">
              Execute your trades in milliseconds, regardless of size, for seamless and precise market action.
            </p>
          </div>
          <Link
            to="/signup"
            className="relative z-10 mt-12 bg-white text-dark px-10 py-4 rounded-full font-bold w-fit flex items-center gap-3 hover:bg-gold hover:text-white transition-all group"
          >
            Ignite your Trading Journey
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Total Security */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col bg-gradient-to-br from-[#1e1a2e] via-[#15101f] to-[#0c0a12] shadow-[0_24px_60px_rgba(15,10,25,0.18)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
            <ShieldCheck className="w-full h-full text-white" />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 backdrop-blur-md border border-white/10">
              <ShieldCheck className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 lg:mb-6">Total <br /> Security</h3>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed">
              Advanced systems keep your data and activity safe.
            </p>
          </div>
        </motion.div>

        {/* Unmatched Protection */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col bg-gradient-to-br from-[#1e1a2e] via-[#15101f] to-[#0c0a12] shadow-[0_24px_60px_rgba(15,10,25,0.18)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
            <Lock className="w-full h-full text-white" />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 backdrop-blur-md border border-white/10">
              <Lock className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 lg:mb-6">Unmatched <br /> Protection</h3>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed">
              Strong infrastructure ensures smooth and reliable trading.
            </p>
          </div>
        </motion.div>

        {/* Competitive Spreads */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col bg-gradient-to-br from-[#1e1a2e] via-[#15101f] to-[#0c0a12] shadow-[0_24px_60px_rgba(15,10,25,0.18)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
            <BarChart3 className="w-full h-full text-white" />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 backdrop-blur-md border border-white/10">
              <BarChart3 className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 lg:mb-6">Competitive <br /> Spreads</h3>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed">
              Consistently tight spreads across all major instruments.
            </p>
          </div>
        </motion.div>

        {/* Rapid Withdrawals */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col bg-gradient-to-br from-[#1e1a2e] via-[#15101f] to-[#0c0a12] shadow-[0_24px_60px_rgba(15,10,25,0.18)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
            <CreditCard className="w-full h-full text-white" />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 backdrop-blur-md border border-white/10">
              <CreditCard className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 lg:mb-6">Rapid <br /> Withdrawals</h3>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed">
              Seamless and quick withdrawal options for every client.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ZeroSpreadsSection = () => (
  <section className="relative site-section bg-[#050505] overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/images/hero/Zero-Pip-Spreads.webp"
        alt=""
        className="w-full h-full object-cover object-right brightness-[1.22] contrast-[1.16] saturate-[1.2]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#050505]/06 to-[#050505]/24" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/10" />
    </div>
    <div className="site-container">
      <div className="grid lg:grid-cols-2 site-grid-gap items-center relative z-10">
        <div className="hidden lg:block" />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white/40 font-bold text-sm tracking-[0.2em] uppercase mb-6">Raw Pricing Advantage</div>
            <h2 className="site-heading-hero text-white mb-4 lg:mb-6 leading-tight">
              Trade With <br />
              <span className="text-gold">Zero Pip Spreads</span>
            </h2>
            <p className="text-white/60 site-lead mb-8 max-w-lg">
              Access institutional-grade pricing with spreads starting from 0.0 pips. Lower costs, improve accuracy, and maximize your trading performance with raw spreads.
            </p>
            <Link
              to="/signup"
              className="bg-white text-dark px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-gold hover:text-white transition-all group"
            >
              Trade Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const OneFXTraderSection = () => (
  <section className="site-section bg-[#0A0A1F] relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
    
    <div className="site-container relative z-10 text-center">
      <h2 className="site-heading text-white mb-8 lg:mb-10">Advanced Trading With <br /> oneFXTrader</h2>
      
      <div className="relative max-w-4xl xl:max-w-5xl mx-auto mb-10 lg:mb-12 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
        <div className="relative bg-dark rounded-[2rem] p-2 border border-white/10 shadow-2xl overflow-hidden">
          <img 
            src="/images/user-side-images/dashboard2.svg" 
            alt="oneFXTrader Platform" 
            className="w-full h-auto rounded-[1.5rem] brightness-90"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 site-grid-gap mb-10 lg:mb-12">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
            <TrendingUp className="text-white w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Powerful Charting</h3>
          <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
            Access advanced tools and technical indicators.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
            <Settings className="text-white w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Automated Trading</h3>
          <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
            Run Expert Advisors and backtest strategies.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
            <div className="flex items-end gap-1">
              <Desktop className="text-white w-8 h-8" />
              <Phone className="text-white w-5 h-5" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Cross-Device Access</h3>
          <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
            Trade seamlessly across desktop, web, and mobile.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-black border border-white/10 px-6 py-3 rounded-xl hover:bg-white/5 transition-all group"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M0 3.449L9.75 2.1V11.25H0V3.449zm0 17.102L9.75 21.9V12.75H0v8.551zm10.5 1.35L24 24V12.75H10.5v10.651zM10.5 0V11.25H24V0L10.5 0z"/></svg>
          </div>
          <div className="text-left">
            <div className="text-[10px] text-white/40 uppercase font-bold leading-none mb-1">Get it on</div>
            <div className="text-sm text-white font-bold leading-none">oneFXTrader Windows</div>
          </div>
        </a>
        <a
          href="/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-black border border-white/10 px-6 py-3 rounded-xl hover:bg-white/5 transition-all group"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M3.609 1.814L13.792 12 3.609 22.186c-.18.18-.281.427-.281.685 0 .534.434.968.968.968.258 0 .505-.101.685-.281l10.868-10.868c.18-.18.281-.427.281-.685s-.101-.505-.281-.685L5.001.446C4.821.266 4.574.165 4.316.165c-.534 0-.968.434-.968.968 0 .258.101.505.281.685l-.02.01z"/></svg>
          </div>
          <div className="text-left">
            <div className="text-[10px] text-white/40 uppercase font-bold leading-none mb-1">Get it on</div>
            <div className="text-sm text-white font-bold leading-none">oneFXTrader Android</div>
          </div>
        </a>
        <a
          href="/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-black border border-white/10 px-6 py-3 rounded-xl hover:bg-white/5 transition-all group"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.06.75.79-.02 2.04-.88 3.53-.69 1.55.2 2.7 1.05 3.37 2.24-3.1 1.86-2.58 5.86.53 7.15-.6 1.56-1.4 3.1-2.49 4.52zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
          </div>
          <div className="text-left">
            <div className="text-[10px] text-white/40 uppercase font-bold leading-none mb-1">Download on the</div>
            <div className="text-sm text-white font-bold leading-none">oneFXTrader iOS</div>
          </div>
        </a>
      </div>
    </div>
  </section>
);

const ConfidenceSection = () => (
  <section className="site-section bg-white overflow-hidden">
    <div className="site-container">
      <div className="grid lg:grid-cols-2 site-grid-gap items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h2 className="site-heading text-[#0F172A] mb-8 lg:mb-10 tracking-tight leading-tight">
            Trade With <br /> Confidence
          </h2>
          
          <div className="relative w-full max-w-md">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient from-gold/10 to-transparent blur-3xl opacity-30" />
            
            <div className="relative flex items-center justify-center lg:justify-start">
              {/* Main Gold Square Icon */}
              <motion.div 
                animate={{ 
                  rotate: [-2, 2, -2],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-56 h-56 bg-gradient-to-br from-[#FDE68A] via-[#D97706] to-[#78350F] rounded-[3rem] shadow-[0_20px_50px_rgba(217,119,6,0.3)] flex items-center justify-center relative z-10 border border-white/20"
              >
                <Lock className="w-24 h-24 text-white drop-shadow-2xl" strokeWidth={1.5} />
                
                {/* Floating Shield Icon */}
                <motion.div 
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [12, 8, 12]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-[#FDE68A] via-[#D97706] to-[#78350F] rounded-full shadow-2xl flex items-center justify-center border-4 border-white z-20"
                >
                  <ShieldCheck className="w-14 h-14 text-white drop-shadow-lg" strokeWidth={1.5} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <div className="space-y-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group py-10 border-b border-slate-100"
          >
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-gold transition-colors">Data Security</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Industry-grade technology ensures your personal and trading data stays secure.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group py-10 border-b border-slate-100"
          >
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-gold transition-colors">Fund Protection</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Deposits are handled with strict internal safety processes..
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group py-10"
          >
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-gold transition-colors">Stable Environment</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              A strong infrastructure designed to deliver smooth, uninterrupted trading.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 lg:mt-20 pt-12 lg:pt-16 border-t border-slate-100"
      >
        <h2 className="site-heading text-[#0F172A] mb-8 lg:mb-10">Payment On</h2>
        <div className="flex flex-wrap gap-8">
          {[
            { id: 'neteller', src: '/images/logos/netellerlogo.png', alt: 'Neteller' },
            { id: 'mastercard', src: '/images/logos/mastercardlogo.png', alt: 'Mastercard' },
            { id: 'visa', src: '/images/logos/visalogo.png', alt: 'Visa' },
            { id: 'skrill', src: '/images/logos/skrilllogo.png', alt: 'Skrill' },
          ].map((item) => (
            <div
              key={item.id}
              className="px-10 py-7 bg-white border border-slate-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all flex items-center justify-center min-w-[180px] md:min-w-[200px] group"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-9 md:h-11 w-auto max-w-[9.5rem] object-contain object-center transition-transform group-hover:scale-105"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="relative overflow-hidden bg-[#0A0A1F]">
    {/* Top CTA Part */}
    <div className="relative site-section">
      {/* Premium background with deep gradients and glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(79,70,229,0.15),transparent),radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[#0A0A1F]" />
      
      {/* Animated light streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent animate-[shimmer_10s_infinite_linear]" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent animate-[shimmer_12s_infinite_linear_reverse]" />
      </div>

      <div className="site-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-xs font-bold mb-8 border border-gold/20 backdrop-blur-md">
            <Zap className="w-4 h-4" />
            <span>READY TO SCALE YOUR TRADING?</span>
          </div>
          <h2 className="site-heading-hero text-white mb-6 leading-tight">
            Power Your Trading <br />
            <span className="gold-gradient-text">Journey Today</span>
          </h2>
          <p className="text-white/50 site-lead mb-10 max-w-2xl mx-auto font-medium">
            Join thousands of traders worldwide and access the global markets with our award-winning advanced platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/signup"
              className="bg-gold text-dark px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center gap-2 hover:bg-white hover:text-dark transition-all duration-500 group shadow-[0_20px_60px_rgba(197,160,89,0.3)]"
            >
              Open Live Account
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/signup"
              className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center gap-2 hover:bg-white/10 transition-all duration-500"
            >
              Try Demo Account
            </Link>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Bottom Steps Part - Integrated "How It Works" */}
    <div className="relative site-section bg-[#050510] border-t border-white/5">
      <div className="site-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="site-heading text-white mb-4">Start Trading in Minutes</h2>
            <p className="text-white/50 site-lead">Our streamlined onboarding process gets you into the markets faster than ever.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 site-grid-gap">
          <StepCard 
            number="01"
            title="Create Account"
            description="Sign up in seconds with our secure digital onboarding and KYC verification system."
          />
          <StepCard 
            number="02"
            title="Fund Wallet"
            description="Deposit funds instantly using a wide range of payment methods including bank transfer and crypto."
          />
          <StepCard 
            number="03"
            title="Start Trading"
            description="Access the dashboard, choose your markets, and execute your first trade with ease."
          />
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />
    </div>
  </section>
);

const TestimonialCard = ({ quote, author, role, company }: { quote: string, author: string, role: string, company: string }) => (
  <div className="p-6 lg:p-7 rounded-2xl bg-dark-card border border-white/5 shadow-xl">
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-white/80 italic mb-8 leading-relaxed">"{quote}"</p>
    <div>
      <div className="font-bold text-white">{author}</div>
      <div className="text-sm text-gold">{role}, {company}</div>
    </div>
  </div>
);

// --- Main App ---

const Home = () => {
  const tickerAssets = [
    { symbol: 'EUR/USD', price: '1.15690', change: '-0.00142', percent: '-0.12%', trend: 'down' as const, flags: ['eu', 'us'] },
    { symbol: 'GBP/USD', price: '1.38420', change: '+0.00215', percent: '+0.15%', trend: 'up' as const, flags: ['gb', 'us'] },
    { symbol: 'USD/JPY', price: '110.250', change: '+0.450', percent: '+0.41%', trend: 'up' as const, flags: ['us', 'jp'] },
    { symbol: 'XAU/USD', price: '2024.50', change: '+12.30', percent: '+0.61%', trend: 'up' as const, flags: ['un', 'us'] },
    { symbol: 'BTC/USD', price: '64250.00', change: '+1240.00', percent: '+1.98%', trend: 'up' as const, flags: ['un', 'us'] },
    { symbol: 'ETH/USD', price: '3450.15', change: '-45.20', percent: '-1.30%', trend: 'down' as const, flags: ['un', 'us'] },
  ];

  const onboardingSteps = [
    {
      title: 'Quick Sign Up',
      description: 'Complete your account registration online in minutes.',
      image: '/images/hero/quick-signup.svg',
    },
    {
      title: 'Secure Deposits',
      description: 'Add funds using trusted and flexible methods.',
      image: '/images/hero/secure-deposits.svg',
    },
    {
      title: 'Access Global Markets',
      description: 'Start trading instantly on advanced platforms.',
      image: '/images/hero/access-global-markets.svg',
    },
  ];

  const [activeOnboardingStep, setActiveOnboardingStep] = useState(0);

  /** Auto-rotate onboarding only on md+; on mobile it felt like the UI was "running by itself". */
  const [onboardingAutoOk, setOnboardingAutoOk] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false,
  );
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => setOnboardingAutoOk(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!onboardingAutoOk) return;
    const timer = window.setInterval(() => {
      setActiveOnboardingStep((prev) => (prev + 1) % onboardingSteps.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [onboardingAutoOk, onboardingSteps.length]);

  const whatsNewCards = [
    {
      image: '/images/hero/pamm-account.webp',
      title: 'PAMM Account',
      description: 'Invest or manage funds transparently through our verified PAMM accounts.',
    },
    {
      image: '/images/hero/social-trading.webp',
      title: 'Social Trading',
      description: 'Connect with traders worldwide and explore strategy-sharing opportunities.',
    },
    {
      image: '/images/hero/economic-calender.webp',
      title: 'Economic Calendar',
      description: 'Stay informed with live market updates and global economic events.',
    },
  ];

  const [whatsNewIndex, setWhatsNewIndex] = useState(0);
  const whatsNewTouchStartX = useRef<number | null>(null);

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="hero-full-viewport pt-[calc(5rem+10px)] pb-6 md:pt-[calc(5rem+28px)] md:pb-8 bg-[#0b0118]">
      <div className="absolute inset-0 overflow-hidden">
        <picture className="block h-full w-full min-h-0">
          <source media="(min-width: 1024px)" srcSet="/images/hero/new_hero__banner.webp" />
          <img
            src="/images/hero/home-hero-mobile.svg"
            alt=""
            className="block h-full w-full min-h-full min-w-full object-cover object-[72%_42%] md:min-h-0 md:min-w-0 md:object-center brightness-[0.92] md:brightness-[1.07] contrast-[1.06] md:contrast-[1.08] saturate-[1.02] md:saturate-[1.15]"
            aria-hidden
          />
        </picture>
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0b0118]/54 via-[#0b0118]/24 to-[#0b0118]/08" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-[#0b0118]/6 via-transparent to-[#0b0118]/38" />
        {/* Mobile-only: keep top clear, dark/soften lower hero for text readability */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,1,24,0.02) 0%, rgba(11,1,24,0.08) 24%, rgba(11,1,24,0.26) 44%, rgba(11,1,24,0.58) 62%, rgba(11,1,24,0.84) 78%, #0b0118 100%)',
          }}
        />
        <div className="absolute inset-0 md:hidden bg-gradient-to-r from-[#0b0118]/52 via-[#0b0118]/18 to-transparent" />
        <div className="absolute inset-0 hidden md:block bg-[radial-gradient(circle_at_78%_45%,rgba(162,103,255,0.04),transparent_68%)] pointer-events-none" />
      </div>
      <div className="hero-full-viewport-fill">
        <div className="site-container py-4 md:py-6">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 max-w-2xl lg:max-w-xl xl:max-w-2xl p-0"
          >
            <h1 className="site-heading-hero font-medium font-display text-zinc-50 md:text-white leading-tight mb-4 lg:mb-6 drop-shadow-[0_2px_22px_rgba(0,0,0,0.62)] md:drop-shadow-[0_2px_18px_rgba(0,0,0,0.48)] max-md:[text-shadow:0_1px_3px_rgba(0,0,0,0.75),0_0_20px_rgba(255,255,255,0.06)]">
              Fast Execution
              <br />
              <span
                className="whitespace-nowrap bg-clip-text text-transparent max-md:bg-[linear-gradient(102deg,#fffdf6_0%,#fff3c8_18%,#f0d888_42%,#e0b850_68%,#c09038_100%)] md:bg-[linear-gradient(96deg,#f1dda2_0%,#ddb86a_34%,#bf9247_62%,#8e672f_100%)] max-md:[filter:brightness(1.22)_saturate(1.15)_contrast(1.06)_drop-shadow(0_1px_2px_rgba(0,0,0,0.65))_drop-shadow(0_0_28px_rgba(255,236,180,0.55))_drop-shadow(0_0_1px_rgba(255,255,255,0.35))] md:[filter:drop-shadow(0_1px_0_rgba(255,240,200,0.2))_drop-shadow(0_8px_18px_rgba(120,82,24,0.25))] max-md:[-webkit-text-stroke:0.35px_rgba(40,24,8,0.28)] md:[-webkit-text-stroke:0]"
              >
                Ultra-Tight Spreads
              </span>
            </h1>
            <p className="site-lead text-zinc-50 md:text-white font-sans font-medium md:font-normal mb-6 max-w-xl xl:max-w-2xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.52)] md:drop-shadow-[0_2px_14px_rgba(0,0,0,0.4)] max-md:[text-shadow:0_1px_2px_rgba(0,0,0,0.65)]">
              Access Forex, Shares, Commodities, and Metals on powerful platforms with fast execution and low trading costs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 lg:gap-x-10 gap-y-2.5 mb-7 max-w-xl xl:max-w-2xl">
              {[
                'Advanced Educational Platform',
                'Fast and Reliable Execution',
                'Dedicated Account Manager',
                'Comprehensive Support Services',
              ].map((label) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 md:h-7 md:w-7 shrink-0 items-center justify-center rounded-full bg-gold shadow-sm shadow-gold/30">
                    <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-dark" strokeWidth={3} />
                  </div>
                  <span className="text-[0.96rem] sm:text-base font-sans font-medium md:font-normal leading-snug text-zinc-50 md:text-white pt-0.5 drop-shadow-[0_1px_12px_rgba(0,0,0,0.48)] md:drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] max-md:[text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">{label}</span>
                </div>
              ))}
            </div>
            <div className="mb-0 md:mb-12">
              <Link
                to="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#BFA980] via-[#9E7D4A] to-[#5C4520] px-8 py-2.5 sm:px-10 sm:py-3 text-sm sm:text-base font-medium md:font-normal font-sans text-white md:text-white/95 shadow-[0_4px_22px_rgba(0,0,0,0.35),0_4px_18px_rgba(90,70,40,0.22)] md:shadow-[0_4px_18px_rgba(90,70,40,0.22)] transition-all duration-300 ease-out hover:from-[#D8C9A4] hover:via-[#C5A059] hover:to-[#7A5A28] hover:text-white hover:shadow-[0_8px_36px_rgba(197,160,89,0.45),0_0_28px_rgba(229,199,139,0.28),0_0_1px_rgba(255,245,220,0.5)] hover:brightness-[1.03]"
              >
                Open Live Account
                <ArrowRight className="h-4.5 w-4.5 md:h-5.5 md:w-5.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.25} />
              </Link>
            </div>
          </motion.div>

        </div>
        </div>
      </div>
    </section>

    <MarketTickerStrip assets={tickerAssets} />

    {/* What's New Section */}
    <section className="site-section bg-white">
      <div className="site-container">
        <h2 className="site-heading text-center mb-8 lg:mb-10 text-slate-900">What's New on oneFX Trading Platform</h2>
        {/* Mobile: smooth slide (no native horizontal scroller) */}
        <div className="md:hidden">
          <div
            className="relative overflow-hidden touch-pan-y"
            onTouchStart={(e) => {
              whatsNewTouchStartX.current = e.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              if (whatsNewTouchStartX.current === null) return;
              const endX = e.changedTouches[0]?.clientX ?? whatsNewTouchStartX.current;
              const deltaX = whatsNewTouchStartX.current - endX;
              const swipeThreshold = 44;
              if (deltaX > swipeThreshold) {
                setWhatsNewIndex((i) => (i + 1) % whatsNewCards.length);
              } else if (deltaX < -swipeThreshold) {
                setWhatsNewIndex((i) => (i - 1 + whatsNewCards.length) % whatsNewCards.length);
              }
              whatsNewTouchStartX.current = null;
            }}
          >
            <div
              className="flex will-change-transform"
              style={{
                transform: `translate3d(-${whatsNewIndex * 100}%, 0, 0)`,
                transition: 'transform 550ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {whatsNewCards.map((card) => (
                <div key={card.title} className="w-full flex-none">
                  <WhatsNewCard
                    image={card.image}
                    title={card.title}
                    description={card.description}
                  />
                </div>
              ))}
            </div>

          </div>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {whatsNewCards.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setWhatsNewIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === whatsNewIndex ? 'w-10 bg-[#1A0B2E]' : 'w-2.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6 lg:gap-10 md:overflow-visible">
          {whatsNewCards.map((card) => (
            <React.Fragment key={card.title}>
              <WhatsNewCard
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>

    {/* Account Types Section */}
    <section className="site-section bg-[#F8F9FA]">
      <div className="site-container">
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="site-heading mb-3 text-slate-900">Accounts Designed for Every Trader</h2>
          <p className="site-lead text-slate-600">Choose the account that matches your trading goals.</p>
        </div>
        
        <div className="grid md:grid-cols-2 site-grid-gap">
          <AccountTypeCard 
            title="SMART ACCOUNT"
            minDeposit="1,000"
            features={['Leverage Up to 1:500', 'Wider Spread']}
          />
          <AccountTypeCard 
            title="ELITE ACCOUNT"
            minDeposit="10,000"
            features={['Leverage Up to 1:500', 'Ultra-Low Spread']}
          />
          <AccountTypeCard 
            title="PREMIERE ACCOUNT"
            minDeposit="20,000"
            features={['Leverage Up to 1:500', 'Ultra-Low Spread']}
          />
          <AccountTypeCard 
            title="PRESTIGE ACCOUNT"
            minDeposit="50,000"
            features={['Leverage Up to 1:500', 'Fixed Low Spread']}
            variant="gold"
          />
        </div>
      </div>
    </section>

    {/* Begin Trading in 3 Steps */}
    <section className="site-section bg-[#F3F3F6]">
      <div className="site-container">
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="site-heading text-[#1A1B23] mb-3">Begin Trading in Three Simple Steps</h2>
          <p className="site-lead text-[#1A1B23]/70">Open your account and access global markets today.</p>
        </div>

        <div className="md:hidden space-y-4">
          {onboardingSteps.map((step, index) => (
            <div
              key={step.title}
              className={`rounded-2xl transition-all duration-300 ${
                activeOnboardingStep === index ? 'bg-white/92 shadow-sm ring-1 ring-black/5 p-3.5' : 'bg-transparent p-0'
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveOnboardingStep(index)}
                className="w-full text-left"
              >
                <div className={`relative pl-4 ${activeOnboardingStep === index ? '' : 'pb-1'}`}>
                  <div className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-full ${activeOnboardingStep === index ? 'bg-[#2B2546]' : 'bg-[#2B2546]/40'}`} />
                  <div className={`font-sans text-[13px] font-normal mb-1 tracking-[0.01em] ${activeOnboardingStep === index ? 'text-[#8B7F65]' : 'text-[#1A1B23]/50'}`}>
                  Step {index + 1}
                  </div>
                  <h3 className={`font-sans leading-tight text-[#1A1B23] ${activeOnboardingStep === index ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'}`}>
                    {step.title}
                  </h3>
                  <p className={`font-sans text-[#1A1B23]/68 text-[1.1rem] leading-[1.4] transition-all duration-300 ease-out ${
                    activeOnboardingStep === index ? 'opacity-100 max-h-24 mt-1.5' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </button>
              <div className={`max-w-[420px] mx-auto overflow-hidden rounded-[1.4rem] transition-all duration-300 ease-out ${
                activeOnboardingStep === index ? 'opacity-100 max-h-[700px] mt-3' : 'opacity-0 max-h-0 mt-0'
              }`}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:grid lg:grid-cols-2 site-grid-gap items-center">
          <div className="space-y-1.5 max-w-md lg:max-w-lg">
            {onboardingSteps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                onMouseEnter={() => setActiveOnboardingStep(index)}
                onClick={() => setActiveOnboardingStep(index)}
                className={`w-full text-left rounded-2xl px-4 py-3.5 transition-all duration-300 ease-out ${
                  activeOnboardingStep === index ? 'bg-white/92 shadow-sm ring-1 ring-black/5' : 'bg-transparent hover:bg-white/55'
                }`}
              >
                <div className={`pl-4 ${activeOnboardingStep === index ? 'border-l-2 border-[#2B2546]' : 'border-l-2 border-transparent'}`}>
                  <div className={`font-sans text-[13px] font-normal mb-1 tracking-[0.01em] ${activeOnboardingStep === index ? 'text-[#8B7F65]' : 'text-[#1A1B23]/45'}`}>
                    Step {index + 1}
                  </div>
                  <h3 className="font-sans text-xl sm:text-2xl leading-tight font-normal text-[#1A1B23] mb-1.5">{step.title}</h3>
                  <p className={`font-sans text-[#1A1B23]/68 text-[1.15rem] leading-[1.45] transition-all duration-300 ease-out ${
                    activeOnboardingStep === index ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="max-w-md lg:max-w-lg xl:max-w-xl h-[min(360px,50vh)] lg:h-[400px] mx-auto overflow-hidden rounded-xl lg:rounded-2xl">
              <motion.img
                key={activeOnboardingStep}
                initial={{ opacity: 0.1, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                src={onboardingSteps[activeOnboardingStep].image}
                alt={onboardingSteps[activeOnboardingStep].title}
                className="w-full h-full object-contain object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Partnership Program Section */}
    <section className="site-section relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero/backgroundbehindguys.webp"
          alt=""
          className="h-full w-full object-cover object-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#050505]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.2),transparent_65%)] pointer-events-none" />
      </div>
      <div className="site-container relative z-10">
        <div className="text-center mb-10">
          <h2 className="site-heading text-white mb-3">More Than Just Partnership Program</h2>
          <p className="site-lead text-white/75">Trade with us to maximise your potential returns</p>
        </div>

        <div className="max-w-4xl xl:max-w-5xl mx-auto rounded-xl lg:rounded-2xl overflow-hidden border border-white/10 shadow-xl relative z-10">
          <img
            src="/images/hero/Parynership-program.webp"
            alt="Partnership Program"
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>

    <MarketExplorer />

    <MarketTickerStrip assets={tickerAssets} />

    <ZeroSpreadsSection />

    <TradingEdgeSection />

    {/* Features Section */}
    <section id="platform" className="site-section dark-section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full purple-glow opacity-50" />
      <div className="site-container relative z-10">
        <div className="grid lg:grid-cols-2 site-grid-gap items-center">
          <div>
            <h2 className="site-heading mb-6 lg:mb-8 leading-tight">Engineered for <br /><span className="gold-gradient-text">High-Performance</span> Trading</h2>
            <div className="space-y-6 lg:space-y-8">
              <FeatureBlock 
                icon={Zap}
                title="Ultra-fast Execution"
                description="Execute trades in under 30ms with our low-latency infrastructure and direct market access."
              />
              <FeatureBlock 
                icon={Globe2}
                title="Deep Liquidity"
                description="Benefit from institutional-grade liquidity sourced from top-tier global banks and ECNs."
              />
              <FeatureBlock 
                icon={BarChart}
                title="Advanced Analytics"
                description="Professional charting tools, real-time sentiment analysis, and deep market insights."
              />
              <FeatureBlock 
                icon={ShieldCheck}
                title="Secure Infrastructure"
                description="Multi-layered security protocols, cold storage for digital assets, and fully segregated accounts."
              />
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-white/5 max-w-lg lg:max-w-xl xl:max-w-2xl ml-auto">
              <img 
                src="/images/hero/high-performance-trading.svg" 
                alt="High Performance Trading" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-dark w-6 h-6" />
                </div>
                <div className="font-bold text-white">Institutional Grade</div>
              </div>
              <p className="text-white/60 text-sm">Our platform meets the rigorous standards of global financial institutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="site-section bg-dark border-y border-white/5">
      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          <StatItem value="$500M+" label="Monthly Volume" />
          <StatItem value="40K+" label="Active Traders" />
          <StatItem value="99.9%" label="Platform Uptime" />
          <StatItem value="80+" label="Broker Clients" />
        </div>
      </div>
    </section>

    <OneFXTraderSection />

    <ConfidenceSection />

    <FinalCTASection />

    {/* Testimonials */}
    <section className="site-section bg-dark-card border-y border-white/5">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <h2 className="site-heading mb-4 text-white">What Our Clients Say</h2>
          <p className="site-lead text-white/50">Trusted by professional traders and brokers across the globe.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 site-grid-gap">
          <TestimonialCard 
            quote="oneFX has completely transformed our brokerage operations. The liquidity and execution speed are unmatched in the industry."
            author="Sarah Jenkins"
            role="CEO"
            company="Global Prime Brokers"
          />
          <TestimonialCard 
            quote="As a professional trader, I need reliability and speed. oneFX delivers on both fronts with a clean, intuitive interface."
            author="Michael Chen"
            role="Professional Trader"
            company="Independent"
          />
          <TestimonialCard 
            quote="The multi-asset capabilities allowed us to expand our offering to clients seamlessly. Highly recommended for modern brokers."
            author="David Miller"
            role="Head of Trading"
            company="Meridian Partners"
          />
        </div>
      </div>
    </section>
  </div>
  );
};

function AppShell() {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className={isAuthRoute ? '' : 'min-h-screen bg-dark'}>
      {!isAuthRoute && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<PlatformOverview />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/commodities" element={<Commodities />} />
        <Route path="/metals" element={<Metals />} />
        <Route path="/shares" element={<Shares />} />
        <Route path="/introducing-broker" element={<IntroducingBroker />} />
        <Route path="/account-comparison" element={<AccountComparison />} />
        <Route path="/deposit-withdrawals" element={<DepositWithdrawals />} />
        <Route path="/trading-platform" element={<TradingPlatform />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/economic-calendar" element={<EconomicCalendar />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      {!isAuthRoute && (
        <footer className="bg-dark pt-12 sm:pt-16 lg:pt-20 pb-10 border-t border-white/5">
          <div className="site-container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10 mb-10 lg:mb-12">
              <div className="col-span-2 lg:col-span-1">
                <Link to="/" className="flex items-center gap-2 mb-8">
                  <img
                    src="/images/hero/logo-white.svg"
                    alt="oneFX"
                    className="h-12 w-auto"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="space-y-4 text-white/40 text-sm">
                  <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold" /> +35725248954</p>
                  <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold" /> support@onefx.com</p>
                  <p className="flex items-start gap-3"><MapPin className="w-4 h-4 text-gold mt-1" /> Christaki Kranou 46, Office 2, Limassol, Cyprus</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white text-lg mb-8">Markets</h4>
                <ul className="space-y-5 text-base text-white/40">
                  <li><Link to="/forex" className="hover:text-gold transition-colors">Forex Trading</Link></li>
                  <li><Link to="/metals" className="hover:text-gold transition-colors">Precious Metals</Link></li>
                  <li><Link to="/commodities" className="hover:text-gold transition-colors">Commodities</Link></li>
                  <li><Link to="/shares" className="hover:text-gold transition-colors">Global Shares</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-lg mb-8">Trading</h4>
                <ul className="space-y-5 text-base text-white/40">
                  <li><Link to="/account-comparison" className="hover:text-gold transition-colors">Account Comparison</Link></li>
                  <li><Link to="/deposit-withdrawals" className="hover:text-gold transition-colors">Deposit Withdrawals</Link></li>
                  <li><Link to="/introducing-broker" className="hover:text-gold transition-colors">Partner Program</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-lg mb-8">Tools & Company</h4>
                <ul className="space-y-5 text-base text-white/40">
                  <li><Link to="/trading-platform" className="hover:text-gold transition-colors">Trading Platform</Link></li>
                  <li><Link to="/economic-calendar" className="hover:text-gold transition-colors">Economic Calendar</Link></li>
                  <li><Link to="/about-us" className="hover:text-gold transition-colors">About Us</Link></li>
                  <li><Link to="/contact-us" className="hover:text-gold transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-lg mb-8">Newsletter</h4>
                <p className="text-white/40 text-sm mb-8 leading-relaxed">Subscribe for daily market analysis and platform updates.</p>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold/20 text-white transition-all"
                  />
                  <Button to="/contact-us" className="w-full py-4 text-base">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5">
              <div className="grid md:grid-cols-2 site-grid-gap items-center mb-8">
                <div className="text-white/20 text-[10px] leading-relaxed max-w-4xl">
                  <p className="mb-4">
                    oneFX Ltd is Incorporated in Saint Lucia under registration number 2025-00468, maintains its registered office at: Christaki Kranou 46, Office 2, Potamos Germasogeias, 4046, Limassol, Cyprus.
                  </p>
                  <p className="mb-4">
                    Risk Warning: Trading financial instruments involves a high level of risk and may not be suitable for all investors. The use of leverage can lead to large losses as well as gains. You should carefully consider your investment objectives, level of experience, and risk appetite before deciding to trade.
                  </p>
                  <p>
                    The information on this site is not intended for residents of certain jurisdictions and is not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
                  </p>
                </div>
                <div className="flex flex-wrap md:justify-end gap-x-8 gap-y-4 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                  <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
                  <Link to="/risk-disclosure" className="hover:text-gold transition-colors">Risk Disclosure</Link>
                  <Link to="/terms-of-service" className="hover:text-gold transition-colors">Terms & Conditions</Link>
                  <Link to="/aml-policy" className="hover:text-gold transition-colors">AML Policy</Link>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
                <div className="text-white/10 text-[10px] uppercase tracking-[0.3em] font-bold">
                  © 2026 oneFX ltd. All rights reserved.
                </div>
                <div className="flex items-center gap-6 grayscale opacity-20">
                  <CreditCard className="w-8 h-8" />
                  <Bitcoin className="w-8 h-8" />
                  <DollarSign className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppShell />
    </Router>
  );
}
