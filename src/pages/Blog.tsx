import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/Button';
import { MarketTickerStrip } from '../components/MarketTickerStrip';

const BlogHero = () => (
  <section className="bg-white pt-[calc(5rem+14px)] pb-8 sm:pb-10 md:pt-[calc(5rem+20px)]">
    <div className="site-container">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="site-heading font-bold text-[#1A1B23] mb-3 sm:mb-4 tracking-tight">
            <span className="text-gold">Our</span> Blog
          </h1>
          
          <p className="text-[#1A1B23]/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
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
      image: "/images/hero/blog-1.webp",
      category: "Trading Platform",
      date: "28 Aug 2025",
      readTime: "3 min read"
    },
    {
      title: "Metals Trading Blog",
      excerpt: "Metals trading has always been a central part of global finance. Precious metals like gold and silver are viewed as safe-haven assets, while industrial metals such as platinum...",
      image: "/images/hero/blog-2metaltrading.webp",
      category: "Trading Platform",
      date: "28 Aug 2025",
      readTime: "3 min read"
    },
    {
      title: "Commodities Trading Basics",
      excerpt: "Commodities trading has been a cornerstone of global markets for centuries, connecting producers and consumers through the buying and selling of raw materials. Today, it remains a powerful...",
      image: "/images/hero/blog3-commodities.webp",
      category: "Forex basics",
      date: "28 Aug 2025",
      readTime: "3 min read"
    },
    {
      title: "Forex Basics",
      excerpt: "Forex trading, also known as foreign exchange trading, is the world's largest financial market, with daily transactions exceeding $7 trillion. It offers traders the opportunity to buy and...",
      image: "/images/hero/blog4-forex.webp",
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
      <div className="site-container relative z-10">
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
