import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/Button';
import { MarketTickerStrip } from '../components/MarketTickerStrip';

const BlogHero = () => (
  <section className="pt-[calc(5rem+32px)] pb-16 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1B23] mb-8 tracking-tight">
            <span className="text-gold">Our</span> Blog
          </h1>
          
          <p className="text-[#1A1B23]/60 text-lg leading-relaxed">
            Stay ahead of the global Forex market by tracking important economic events, news releases, and market indicators with oneFX
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Forex', 'Forex basics', 'Trading Platform'];

  const posts = [
    {
      title: "Share Market Trading",
      excerpt: "The share market is where global companies raise capital and investors buy and sell ownership stakes known as shares or stocks. Trading shares online allows individuals to participate...",
      image: "https://images.unsplash.com/photo-1611974717484-788cff8fca47?q=80&w=2070&auto=format&fit=crop",
      category: "Trading Platform",
      date: "28 Aug 2025",
      readTime: "3 min read"
    },
    {
      title: "Metals Trading Blog",
      excerpt: "Metals trading has always been a central part of global finance. Precious metals like gold and silver are viewed as safe-haven assets, while industrial metals such as platinum...",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2070&auto=format&fit=crop",
      category: "Trading Platform",
      date: "28 Aug 2025",
      readTime: "3 min read"
    },
    {
      title: "Commodities Trading Basics",
      excerpt: "Commodities trading has been a cornerstone of global markets for centuries, connecting producers and consumers through the buying and selling of raw materials. Today, it remains a powerful...",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop",
      category: "Forex basics",
      date: "28 Aug 2025",
      readTime: "3 min read"
    },
    {
      title: "Forex Basics",
      excerpt: "Forex trading, also known as foreign exchange trading, is the world's largest financial market, with daily transactions exceeding $7 trillion. It offers traders the opportunity to buy and...",
      image: "https://images.unsplash.com/photo-1611974717484-788cff8fca47?q=80&w=2070&auto=format&fit=crop",
      category: "Forex",
      date: "28 Aug 2025",
      readTime: "3 min read"
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <section className="pb-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center justify-center mb-16">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-10 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat 
                ? 'bg-linear-to-r from-[#E5C384] to-[#A67C37] text-white' 
                : 'bg-[#1A0B2E] text-white hover:bg-[#2A1B3E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map((post, i) => (
            <motion.div
              id={`blog-post-${i}`}
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col scroll-mt-28"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Purple Tint Overlay */}
                <div className="absolute inset-0 bg-[#1A0B2E]/40 mix-blend-multiply" />
                
                {/* Category Tag */}
                <div className="absolute bottom-0 right-0">
                  <div className="px-6 py-2 bg-[#1A0B2E] text-white text-sm font-bold">
                    {post.category}
                  </div>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#1A1B23] mb-4 group-hover:text-gold transition-colors">{post.title}</h3>
                <p className="text-[#1A1B23]/60 text-sm leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <button className="text-[#1A0B2E] font-bold text-sm underline underline-offset-4 hover:text-gold transition-colors">
                    know more
                  </button>
                  <div className="flex items-center gap-2 text-[#1A1B23]/60 text-xs font-bold">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#1A1B23]/20" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BottomCTA = () => (
  <section className="py-24 bg-[#0A0B10] relative overflow-hidden">
    {/* Background streaks/glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.1)_0%,transparent_70%)]" />
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.1)_50%,transparent_55%)] bg-[length:200%_200%] animate-[shimmer_10s_infinite_linear]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
        >
          Power Your Trading <br />
          <span className="text-gold">Journey Today</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/60 mb-12 leading-relaxed"
        >
          Access Forex, Shares, Commodities and Metals with advanced platform.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button to="/signup" className="px-12 py-5 text-lg font-bold bg-white text-dark border-none rounded-full hover:bg-gray-100 transition-all group">
            Open an Account
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export const Blog = () => {
  const tickerAssets = [
    { symbol: 'EUR/USD', price: '1.15690', change: '-0.00142', percent: '-0.12%', trend: 'down' as const, flags: ['eu', 'us'] },
    { symbol: 'GBP/USD', price: '1.38420', change: '+0.00215', percent: '+0.15%', trend: 'up' as const, flags: ['gb', 'us'] },
    { symbol: 'USD/JPY', price: '110.250', change: '+0.450', percent: '+0.41%', trend: 'up' as const, flags: ['us', 'jp'] },
    { symbol: 'XAU/USD', price: '2024.50', change: '+12.30', percent: '+0.61%', trend: 'up' as const, flags: ['un', 'us'] },
    { symbol: 'BTC/USD', price: '64250.00', change: '+1240.00', percent: '+1.98%', trend: 'up' as const, flags: ['un', 'us'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      <MarketTickerStrip assets={tickerAssets} />
      <BlogGrid />
      <BottomCTA />
    </div>
  );
};

export default Blog;
