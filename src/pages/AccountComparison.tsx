import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Star
} from 'lucide-react';
import { Button } from '../components/Button';

const AccountHero = () => (
  <section className="bg-white pt-[calc(5rem+10px)] pb-6 sm:pb-8 md:pt-[calc(5rem+16px)] font-sans antialiased">
    <div className="site-container">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#080320] mb-2 sm:mb-3 leading-tight tracking-tight">
            Compare Our <span className="text-gold">Trading Accounts</span> Easily
          </h1>

          <p className="text-[#111318]/72 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
            Review and compare types of trading accounts at oneFX to choose the right fit for your strategy.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const AccountCards = () => {
  const accounts = [
    {
      name: 'Smart Account',
      deposit: '$1,000 Min Deposit',
      features: [
        'Zero Commission',
        'Spreads from 1.2 pips',
        'Leverage up to 1:500',
        'All Trading Instruments',
        'Standard Execution'
      ],
      isPrestige: false
    },
    {
      name: 'Elite Account',
      deposit: '$5,000 Min Deposit',
      features: [
        'Low Commission',
        'Spreads from 0.8 pips',
        'Leverage up to 1:500',
        'Priority Support',
        'Fast Execution'
      ],
      isPrestige: false
    },
    {
      name: 'Premiere Account',
      deposit: '$25,000 Min Deposit',
      features: [
        'Ultra-Low Commission',
        'Spreads from 0.4 pips',
        'Leverage up to 1:500',
        'Dedicated Account Manager',
        'Direct Market Access'
      ],
      isPrestige: false
    },
    {
      name: 'Prestige Account',
      deposit: '$50,000 Min Deposit',
      features: [
        'Zero Commission Options',
        'Spreads from 0.0 pips',
        'Leverage up to 1:500',
        'VIP Trading Tools',
        'Institutional Execution'
      ],
      isPrestige: true
    }
  ];

  return (
    <section className="site-section bg-white">
      <div className="site-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accounts.map((account, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col bg-[#F8F9FA] rounded-[2rem] overflow-hidden border border-gray-100"
            >
              <div className={`p-8 ${account.isPrestige ? 'bg-gold' : 'bg-dark'} relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${account.isPrestige ? 'bg-white/20' : 'bg-gold/20'}`}>
                      <Star className={`w-5 h-5 ${account.isPrestige ? 'text-white' : 'text-gold'}`} fill="currentColor" />
                    </div>
                    <span className={`text-sm font-bold uppercase tracking-widest ${account.isPrestige ? 'text-white' : 'text-gold'}`}>oneFX</span>
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${account.isPrestige ? 'text-white' : 'text-white'}`}>{account.name}</h3>
                  <div className={`text-lg font-medium ${account.isPrestige ? 'text-white/80' : 'text-gold'}`}>{account.deposit}</div>
                </div>
                {/* Stylized card background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12" />
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-sm font-bold text-dark/40 uppercase tracking-widest mb-6">What we offer:</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {account.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-dark/70 text-sm">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button to="/signup" variant={account.isPrestige ? 'primary' : 'outline'} className="w-full py-4 rounded-xl">
                  Open Live Account
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  const rows = [
    { feature: 'Minimum Deposit', smart: '$1,000', elite: '$5,000', premiere: '$25,000', prestige: '$50,000' },
    { feature: 'Spreads from', smart: '1.2 pips', elite: '0.8 pips', premiere: '0.4 pips', prestige: '0.0 pips' },
    { feature: 'Commission', smart: 'Zero', elite: 'Low', premiere: 'Ultra-Low', prestige: 'Zero Options' },
    { feature: 'Leverage up to', smart: '1:500', elite: '1:500', premiere: '1:500', prestige: '1:500' },
    { feature: 'Execution Type', smart: 'Standard', elite: 'Fast', premiere: 'DMA', prestige: 'Institutional' },
    { feature: 'Trading Tools', smart: 'Standard', elite: 'Advanced', premiere: 'Premium', prestige: 'VIP Suite' },
    { feature: 'Account Manager', smart: 'No', elite: 'Priority Support', premiere: 'Dedicated', prestige: 'VIP Direct' },
    { feature: 'Market Analysis', smart: 'Daily', elite: 'Premium', premiere: 'Custom', prestige: 'Exclusive' },
  ];

  return (
    <section className="site-section bg-[#F8F9FA]">
      <div className="site-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Detailed Comparison</h2>
          <p className="text-dark/60">Choose the account that best fits your trading style and goals.</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-dark/5">
                <th className="py-6 px-4 text-left text-dark/40 font-bold uppercase tracking-widest text-xs">Features</th>
                <th className="py-6 px-4 text-center text-dark font-bold">Smart</th>
                <th className="py-6 px-4 text-center text-dark font-bold">Elite</th>
                <th className="py-6 px-4 text-center text-dark font-bold">Premiere</th>
                <th className="py-6 px-4 text-center text-gold font-bold">Prestige</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-dark/5 hover:bg-white transition-colors">
                  <td className="py-6 px-4 text-dark/70 font-medium">{row.feature}</td>
                  <td className="py-6 px-4 text-center text-dark/60">{row.smart}</td>
                  <td className="py-6 px-4 text-center text-dark/60">{row.elite}</td>
                  <td className="py-6 px-4 text-center text-dark/60">{row.premiere}</td>
                  <td className="py-6 px-4 text-center text-dark font-bold">{row.prestige}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
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
        </Button>
      </div>
    </div>
  </section>
);

export const AccountComparison = () => {
  return (
    <div className="min-h-screen bg-white">
      <AccountHero />
      <AccountCards />
      <ComparisonTable />
      <CTASection />
    </div>
  );
};

export default AccountComparison;
