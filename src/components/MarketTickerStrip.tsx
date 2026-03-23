import React from 'react';
import { motion } from 'motion/react';

interface Asset {
  symbol: string;
  price: string;
  change: string;
  percent: string;
  trend: 'up' | 'down';
  flags?: string[];
}

interface MarketTickerStripProps {
  assets: Asset[];
}

export const MarketTickerStrip = ({ assets }: MarketTickerStripProps) => {
  return (
    <div className="relative z-20">
      <div className="bg-[#0a0a0a] border-y border-white/5 py-3 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 w-max"
        >
          {[...assets, ...assets, ...assets, ...assets].map((asset, i) => (
            <div key={i} className="flex items-center gap-4">
              {asset.flags && (
                <div className="flex -space-x-1.5">
                  {asset.flags.map((flag, idx) => (
                    <div key={idx} className="w-5 h-5 rounded-full border border-white/20 overflow-hidden bg-white/5">
                      <img 
                        src={`https://flagcdn.com/w40/${flag.toLowerCase()}.png`} 
                        alt="" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                </div>
              )}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-2 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
          * Ticker is not live. Prices are for demonstration purposes only.
        </div>
      </div>
    </div>
  );
};

export default MarketTickerStrip;
