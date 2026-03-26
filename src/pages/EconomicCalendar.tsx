import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight,
  BarChart3,
  TrendingUp,
  Calendar,
  DollarSign,
  MousePointer2,
  ChevronDown,
  Globe
} from 'lucide-react';
import { Button } from '../components/Button';
import { MarketTickerStrip } from '../components/MarketTickerStrip';

const CalendarWidget = () => {
  const events = [
    { flag: 'gb', name: 'CPI MM NSA*', value: '-0.1%' },
    { flag: 'jp', name: 'CPI Nationwide Excl Food & Energy M/M*', value: '-0.28%', comingSoon: true },
    { flag: 'jp', name: 'CPI Nationwide Excl Food & Energy Y/Y*', value: '1.34%' },
    { flag: 'jp', name: 'CPI NSA*', value: '112.9 Index' },
    { flag: 'jp', name: 'CPI, Core Nationwide YY', value: '2%' },
    { flag: 'jp', name: 'CPI, Overall Nationwide', value: '1.5%' },
    { time: '06:00', flag: 'jp', name: 'S&P Global Comp Op Flash SA', value: '53.8 Index (diffusion)' },
    { flag: 'jp', name: 'S&P Global Mfg PMI Flash SA', value: '52.8 Index (diffusion)' },
    { flag: 'jp', name: 'S&P Global SVC PMI Flash SA', value: '53.8 Index (diffusion)' },
    { time: '10:30', flag: 'de', name: 'Car Registration MM*', value: '-21.3%' },
    { flag: 'fr', name: 'Car Registration MM*', value: '-38%' },
    { flag: 'gb', name: 'Car Registration MM*', value: '-1.5%' },
  ];

  return (
    <div className="bg-white rounded-2xl border-[6px] border-[#E5C384]/30 shadow-2xl overflow-hidden max-w-5xl mx-auto relative">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-gray-400">
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">G20</span>
          </div>
          <BarChart3 className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <tbody className="text-gray-800">
            {events.map((event, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 relative">
                <td className="py-3 px-6 w-20 text-xs font-bold text-gray-400">
                  {event.time || ''}
                </td>
                <td className="py-3 px-2 w-12">
                  <div className="w-6 h-4 rounded-sm overflow-hidden border border-gray-100">
                    <img 
                      src={`https://flagcdn.com/w40/${event.flag}.png`} 
                      alt={event.flag} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </td>
                <td className="py-3 px-2 w-10">
                  <BarChart3 className="w-4 h-4 text-blue-500" />
                </td>
                <td className="py-3 px-4 text-sm font-medium flex items-center gap-2">
                  {event.name}
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                  {event.comingSoon && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                      <div className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                        <TrendingUp className="w-3 h-3 rotate-45" />
                        Coming soon
                      </div>
                    </div>
                  )}
                </td>
                <td className="py-3 px-6 text-right text-sm font-bold">
                  {event.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-gray-100 flex items-center justify-between">
        <a
          href="https://www.forexfactory.com/calendar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-xs font-bold hover:underline"
        >
          More events ›
        </a>
        <div className="text-gray-300 font-bold italic">TV</div>
      </div>
    </div>
  );
};

const CalendarHero = () => (
  <section className="hero-full-viewport pt-[calc(5rem+24px)] pb-8 md:pb-10 bg-[#1A0B2E] relative">
    {/* Background streaks */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.1)_50%,transparent_55%)] bg-[length:200%_200%] animate-[shimmer_10s_infinite_linear]" />
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.1)_0%,transparent_70%)]" />
    </div>

    <div className="hero-full-viewport-fill">
    <div className="site-container relative z-10 flex flex-1 flex-col justify-center min-h-0 py-4">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="site-heading-hero font-bold text-white mb-4 md:mb-6 tracking-tight">
            <span className="text-gold">Economic</span> Calendar
          </h1>
          
          <p className="text-white/80 text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
            Access our real-time forex economic calendar to track global events and make informed forex trading decisions.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 md:mt-6 w-full max-w-5xl mx-auto shrink min-h-0"
      >
        <CalendarWidget />
      </motion.div>
    </div>
    </div>
  </section>
);

const WhyUseCalendar = () => {
  const features = [
    {
      title: "Live Market Data",
      description: "Stay updated with a real-time forex economic calendar.",
      icon: <BarChart3 className="w-12 h-12 text-[#A67C37]" />
    },
    {
      title: "Forecast v/s Actual",
      description: "Compare predicted results with actual market outcomes.",
      icon: (
        <div className="relative">
          <TrendingUp className="w-12 h-12 text-[#A67C37]" />
          <MousePointer2 className="w-6 h-6 text-[#A67C37] absolute -bottom-2 -right-2" />
        </div>
      )
    },
    {
      title: "Filter Your View",
      description: "Customize the economic events calendar to match trading goals.",
      icon: (
        <div className="relative">
          <Calendar className="w-12 h-12 text-[#A67C37]" />
          <div className="absolute -bottom-2 -right-2 bg-[#A67C37] text-white rounded-full p-1 border-2 border-white">
            <DollarSign className="w-3 h-3" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="site-section bg-white">
      <div className="site-container">
        <div className="text-center mb-16">
          <h2 className="site-heading font-bold text-[#1A1B23] mb-6">
            Why Use Our Forex Economic Calendar
          </h2>
          <p className="text-lg text-[#1A1B23]/60">
            A trusted tool to follow economic events and market forecasts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-linear-to-br from-[#FDF6E9] to-[#F5E6CC] p-10 rounded-3xl shadow-sm border border-[#E5C384]/20 flex flex-col items-start text-left group hover:shadow-md transition-all"
            >
              <h3 className="text-3xl font-bold text-[#1A1B23] mb-6 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[#1A1B23]/70 text-lg mb-12">
                {feature.description}
              </p>
              <div className="mt-auto self-end opacity-40 group-hover:opacity-100 transition-opacity">
                {feature.icon}
              </div>
            </motion.div>
          ))}
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="site-heading font-bold text-white leading-[0.96] tracking-tight mb-5"
        >
          Power Your Trading <br />
          <span className="text-gold">Journey Today</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-lg md:text-[1.95rem] leading-[1.35] mb-10"
        >
          Access Forex, Shares, Commodities and Metals with advanced platform.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button to="/signup" className="mx-auto px-12 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-[#F3F4F6] transition-all flex items-center gap-2.5 text-lg">
            Open an Account
            <ChevronRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export const EconomicCalendar = () => {
  const tickerAssets = [
    { symbol: 'EUR/USD', price: '1.15690', change: '-0.00142', percent: '-0.12%', trend: 'down' as const, flags: ['eu', 'us'] },
    { symbol: 'GBP/USD', price: '1.38420', change: '+0.00215', percent: '+0.15%', trend: 'up' as const, flags: ['gb', 'us'] },
    { symbol: 'USD/JPY', price: '110.250', change: '+0.450', percent: '+0.41%', trend: 'up' as const, flags: ['us', 'jp'] },
    { symbol: 'XAU/USD', price: '2024.50', change: '+12.30', percent: '+0.61%', trend: 'up' as const, flags: ['un', 'us'] },
    { symbol: 'BTC/USD', price: '64250.00', change: '+1240.00', percent: '+1.98%', trend: 'up' as const, flags: ['un', 'us'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      <CalendarHero />
      <MarketTickerStrip assets={tickerAssets} />
      <WhyUseCalendar />
      <BottomCTA />
    </div>
  );
};

export default EconomicCalendar;
