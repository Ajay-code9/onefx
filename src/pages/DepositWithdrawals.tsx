import React from 'react';
import { motion } from 'motion/react';
import { 
  CreditCard, 
  Banknote, 
  Wallet, 
  Clock, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Globe2,
  DollarSign,
  Bitcoin,
  Check
} from 'lucide-react';
import { Button } from '../components/Button';

const DepositHero = () => (
  <section className="pt-[calc(5rem+32px)] pb-20 bg-[#0A0B10] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-bold text-gold uppercase tracking-widest">Secure Transactions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Deposit & <br />
            <span className="text-gold">Withdrawals</span>
          </h1>
          
          <p className="text-white/40 text-xl mb-12 leading-relaxed max-w-xl">
            Fast, secure, and reliable payment methods to fund your account and withdraw your profits. We support a wide range of global and local payment options.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button to="/signup" className="px-8 py-4 rounded-xl">Open Live Account</Button>
            <Button to="/deposit-withdrawals#payment-methods" variant="outline" className="px-8 py-4 rounded-xl border-white/10 text-white hover:bg-white/5">View Methods</Button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-gold/5">
            <img 
              src="https://picsum.photos/seed/finance/800/600" 
              alt="Financial Transactions" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

const PaymentMethods = () => {
  const methods = [
    { name: 'Visa / Mastercard', fee: 'Zero Fee', time: 'Instant', icon: CreditCard, color: 'bg-blue-500/10 text-blue-400' },
    { name: 'Bank Transfer', fee: 'Zero Fee', time: '1-3 Days', icon: Banknote, color: 'bg-emerald-500/10 text-emerald-400' },
    { name: 'Skrill', fee: 'Zero Fee', time: 'Instant', icon: Wallet, color: 'bg-purple-500/10 text-purple-400' },
    { name: 'Neteller', fee: 'Zero Fee', time: 'Instant', icon: Wallet, color: 'bg-orange-500/10 text-orange-400' },
    { name: 'USDT (TRC20)', fee: 'Zero Fee', time: 'Instant', icon: Bitcoin, color: 'bg-teal-500/10 text-teal-400' },
    { name: 'Local Bank', fee: 'Zero Fee', time: 'Instant', icon: Globe2, color: 'bg-indigo-500/10 text-indigo-400' },
  ];

  return (
    <section id="payment-methods" className="py-24 bg-[#0A0B10] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Multiple Payment Methods</h2>
          <p className="text-white/40">Choose from a variety of secure and convenient ways to manage your funds.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {methods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-gold/20 transition-all text-center group"
            >
              <div className={`w-12 h-12 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <method.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{method.name}</h3>
              <div className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">{method.fee}</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest">{method.time}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SecuritySection = () => (
  <section className="py-24 bg-[#0F1016] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
            Your Funds are <br />
            <span className="text-gold">Safe and Secure</span>
          </h2>
          
          <div className="space-y-8">
            {[
              { icon: ShieldCheck, title: 'Segregated Accounts', desc: 'Client funds are kept in fully segregated accounts with top-tier global banks, separate from the company\'s operational funds.' },
              { icon: Lock, title: 'SSL Encryption', desc: 'All transactions and personal data are protected by advanced 256-bit SSL encryption protocols.' },
              { icon: CheckCircle2, title: 'AML Compliance', desc: 'We strictly adhere to international Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations.' }
            ].map((feature, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <feature.icon className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/40 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/security/800/1000" 
              alt="Security" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-gold p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <div className="font-bold text-white">Verified Secure</div>
            </div>
            <p className="text-white/80 text-sm">Our payment infrastructure is audited and verified by leading security firms.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProcessSteps = () => (
  <section className="py-24 bg-[#0A0B10]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white mb-4">How it Works</h2>
        <p className="text-white/40">Start trading in three simple steps.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { step: '01', title: 'Register', desc: 'Open your trading account in minutes with our simple registration process.' },
          { step: '02', title: 'Deposit', desc: 'Fund your account using your preferred payment method from our secure options.' },
          { step: '03', title: 'Start Trading', desc: 'Access global markets and start your trading journey with oneFX.' }
        ].map((item, i) => (
          <div key={i} className="relative p-10 rounded-[2.5rem] bg-white/5 border border-white/5 group hover:bg-white/[0.08] transition-all">
            <div className="text-6xl font-black text-white/5 absolute top-8 right-8 group-hover:text-gold/10 transition-colors">{item.step}</div>
            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Zap className="text-gold w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-white/40 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ImportantInfo = () => (
  <section className="py-24 bg-[#0F1016]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/5 rounded-[3rem] p-12 border border-white/5">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Important Information</h2>
        <div className="space-y-6">
          {[
            'Withdrawals are processed within 24 hours during business days.',
            'Third-party payments are strictly prohibited. Funds must originate from an account in the client\'s name.',
            'oneFX does not charge any internal fees for deposits or withdrawals.',
            'Some payment providers may apply their own transaction fees or currency conversion rates.',
            'Verification of identity (KYC) is required before any withdrawal can be processed.'
          ].map((text, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                <Check className="w-3 h-3 text-gold" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const DepositWithdrawals = () => {
  return (
    <div className="min-h-screen bg-[#0A0B10]">
      <DepositHero />
      <PaymentMethods />
      <SecuritySection />
      <ProcessSteps />
      <ImportantInfo />
    </div>
  );
};

export default DepositWithdrawals;
