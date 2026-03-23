import React from 'react';
import { motion } from 'motion/react';

export const MarketTicker = () => {
  const assets = [
    { symbol: 'EUR/USD', price: '1.15690', change: '-0.00142', percent: '-0.12%', trend: 'down' },
    { symbol: 'GBP/USD', price: '1.38420', change: '+0.00215', percent: '+0.15%', trend: 'up' },
    { symbol: 'USD/JPY', price: '110.250', change: '+0.450', percent: '+0.41%', trend: 'up' },
    { symbol: 'AUD/USD', price: '0.74520', change: '-0.00085', percent: '-0.11%', trend: 'down' },
    { symbol: 'USD/CAD', price: '1.25340', change: '+0.00120', percent: '+0.10%', trend: 'up' },
    { symbol: 'EUR/GBP', price: '0.85420', change: '-0.00045', percent: '-0.05%', trend: 'down' },
  ];

  return (
    <div className="bg-[#0a0a0a] border-y border-white/5 py-3 overflow-hidden whitespace-nowrap relative z-20">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-12 w-max"
      >
        {[...assets, ...assets, ...assets, ...assets].map((asset, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="flex -space-x-1.5">
              <div className="w-5 h-5 rounded-full border border-white/20 overflow-hidden bg-white/5">
                <img 
                  src={`https://flagcdn.com/w40/${asset.symbol.split('/')[0].toLowerCase().slice(0, 2) === 'eu' ? 'eu' : asset.symbol.split('/')[0].toLowerCase().slice(0, 2)}.png`} 
                  alt="" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="w-5 h-5 rounded-full border border-white/20 overflow-hidden bg-white/5">
                <img 
                  src={`https://flagcdn.com/w40/${asset.symbol.split('/')[1].toLowerCase().slice(0, 2) === 'us' ? 'us' : asset.symbol.split('/')[1].toLowerCase().slice(0, 2)}.png`} 
                  alt="" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <span className="text-xs font-bold text-white tracking-wider">{asset.symbol}</span>
            <span className="text-xs font-mono text-white/90">{asset.price}</span>
            <span className={`text-xs font-mono font-medium ${asset.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {asset.change} ({asset.percent})
            </span>
            <div className="h-4 w-[1px] bg-white/10 ml-4" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarketTicker;
