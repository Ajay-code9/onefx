import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Star,
  Zap,
  Shield,
  Globe,
  Clock,
  ArrowRight,
  CreditCard,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/Button';

const AccountHero = () => (
  <section className="pt-[calc(5rem+32px)] pb-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-dark mb-8 leading-[1.1] tracking-tight">
            Compare Our <span className="text-gold">Trading</span> <br />
            Accounts Easily
          </h1>
          
          <p className="text-dark/60 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
  <section className="py-24 bg-[#1A1B23] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="bg-gradient-to-r from-gold/20 to-transparent p-12 md:p-20 rounded-[3rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Power Your Trading <br />
            <span className="text-gold">Journey Today</span>
          </h2>
          <p className="text-white/60 text-lg mb-0">
            Join thousands of traders who have already chosen oneFX for their market success.
          </p>
        </div>
        <div className="shrink-0">
          <Button to="/signup" className="px-12 py-6 text-lg rounded-2xl shadow-2xl shadow-gold/20">
            Open an Account
          </Button>
        </div>
      </div>
    </div>
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -ml-64 -mb-64" />
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
