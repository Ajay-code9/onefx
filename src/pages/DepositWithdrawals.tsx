import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
import { MarketTickerStrip } from '../components/MarketTickerStrip';

const DepositHero = () => (
  <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#06020f] pt-[calc(5rem+22px)] pb-8 md:pt-[calc(5rem+30px)] md:pb-12">
    <div className="absolute inset-0">
      <img
        src="/images/hero/backgroundbehindguys.webp"
        alt=""
        className="h-full w-full object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#06020f]/45" />
    </div>

    <div className="relative z-10 flex flex-1 flex-col px-4 sm:px-6 lg:px-8 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="text-center max-w-4xl mx-auto shrink-0 pt-2 md:pt-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-white mb-3 md:mb-4">
          <span className="text-gold">Deposits</span>
          <span className="text-white"> and withdrawals</span>
        </h1>
        <p className="text-white/85 text-base md:text-lg lg:text-xl leading-relaxed font-normal max-w-2xl mx-auto mb-6 md:mb-8">
          Secure, fast, and flexible forex deposit and withdrawal methods designed to give traders confidence and peace of mind.
        </p>
        <Button
          to="/signup"
          className="px-8 py-3 text-sm md:text-base rounded-full bg-linear-to-r from-[#E5C384] to-[#A67C37] text-white font-medium hover:brightness-105 transition-all"
        >
          Open Live Account
        </Button>
      </motion.div>

      <div className="flex flex-1 flex-col items-center justify-center min-h-[min(58vh,420px)] py-6 md:py-10 w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="relative mx-auto aspect-square w-full max-w-[min(100%,26rem)] shrink-0 sm:max-w-md md:max-w-lg"
        >
          {/* Floating pills */}
          <div
            className="absolute z-20 left-0 top-[4%] sm:top-[6%] max-w-[48%] sm:max-w-[52%] rounded-full bg-linear-to-r from-[#c5a059] via-[#a67c37] to-[#6b4a1f] px-2.5 py-2 sm:px-3.5 sm:py-2.5 shadow-lg border border-white/10 text-left leading-tight"
            style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.35)' }}
          >
            <span className="text-xl sm:text-2xl font-bold text-white">0</span>
            <span className="text-[10px] sm:text-xs font-medium text-white/95 ml-1">
              Commission on deposits
            </span>
          </div>

          <div className="absolute z-20 right-0 top-[6%] sm:top-[8%] max-w-[50%] sm:max-w-[54%] rounded-full bg-white/95 px-2.5 py-2 sm:px-3.5 sm:py-2.5 shadow-lg border border-white/40 text-right leading-tight">
            <span className="text-lg sm:text-xl font-bold text-gold">24/7</span>
            <span className="text-[10px] sm:text-xs font-medium text-[#111318] ml-1">Support for funding</span>
          </div>

          <div className="absolute z-20 left-0 bottom-[14%] sm:bottom-[16%] max-w-[52%] rounded-full bg-white/95 px-2.5 py-2 sm:px-3.5 sm:py-2.5 shadow-lg border border-white/40 text-left leading-tight">
            <span className="text-xl sm:text-2xl font-bold text-gold">100</span>
            <span className="text-[10px] sm:text-xs font-medium text-[#111318] ml-1">Min. deposit (USD)</span>
          </div>

          <div
            className="absolute z-20 right-0 bottom-[10%] sm:bottom-[12%] max-w-[56%] sm:max-w-[58%] rounded-full bg-linear-to-r from-[#c5a059] via-[#a67c37] to-[#5c4520] px-2.5 py-2 sm:px-3.5 sm:py-2.5 shadow-lg border border-white/10 text-left sm:text-right leading-snug"
            style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.35)' }}
          >
            <span className="text-[9px] sm:text-[10px] font-medium text-white/90">From </span>
            <span className="text-lg sm:text-xl font-bold text-white">25</span>
            <span className="text-[10px] sm:text-xs font-medium text-white/95"> min. withdrawal</span>
          </div>

          {/* Perfect circle: equal width + height (% of square parent) — avoids oval/egg */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="h-[68%] w-[68%] max-h-[68%] max-w-[68%] shrink-0 overflow-hidden rounded-full border-2 border-white/20 bg-[#120a1f] shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:h-[70%] sm:w-[70%] sm:max-h-[70%] sm:max-w-[70%]">
              <img
                src="/images/hero/introducingbroker-hero.webp"
                alt=""
                className="h-full w-full object-cover object-[76%_44%] sm:object-[74%_44%] md:object-[72%_44%]"
                aria-hidden
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="shrink-0 text-center pb-2"
      >
        <a
          href="#payment-methods"
          className="inline-flex items-center gap-1 text-white/90 underline underline-offset-4 decoration-white/50 hover:text-gold hover:decoration-gold/70 text-sm md:text-base font-medium transition-colors"
        >
          Flexible payment options
          <ChevronRight className="w-4 h-4 shrink-0" aria-hidden />
        </a>
      </motion.div>
    </div>
  </section>
);

const TrustedBrokerSection = () => (
  <section className="py-16 md:py-20 bg-white font-sans antialiased">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
        <h2 className="text-3xl md:text-4xl font-medium text-[#10131A] mb-4 leading-tight">Trusted Broker</h2>
        <p className="text-[#10131A]/72 text-base md:text-lg leading-relaxed font-normal">
          We prioritize secure, compliant funding with bank-grade encryption, strict same-name policies, and clear fees shown before you confirm. Your transactions are protected at every step.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-14 md:mb-16">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#10131A] leading-snug mb-5">Ready to make deposit?</h3>
          <p className="text-[#10131A]/92 text-lg md:text-xl mb-6 leading-relaxed font-normal">
            Go to &quot;Finance {'->'} Deposit&quot; in your oneFX account.
          </p>
          <ul className="space-y-3 text-[#10131A]/90 text-base md:text-lg leading-relaxed font-normal">
            <li className="list-disc ml-6">Choose your preferred method</li>
            <li className="list-disc ml-6">Confirm matching account name</li>
            <li className="list-disc ml-6">Follow provider checkout steps</li>
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img src="/images/hero/depositwithdrawal1.webp" alt="Deposit method visual" className="w-full max-w-[470px] h-auto object-contain" referrerPolicy="no-referrer" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <img src="/images/hero/depositwithdrawal2.webp" alt="Withdrawal method visual" className="w-full max-w-[400px] h-auto object-contain" referrerPolicy="no-referrer" />
        </div>
        <div className="order-1 lg:order-2">
          <h3 className="text-3xl md:text-4xl font-bold text-[#10131A] leading-snug mb-5">Want to withdraw your funds?</h3>
          <p className="text-[#10131A]/92 text-lg md:text-xl mb-6 leading-relaxed font-normal">
            Go to &quot;Finance {'->'} Withdrawal&quot; in your oneFX account.
          </p>
          <ul className="space-y-3 text-[#10131A]/90 text-base md:text-lg leading-relaxed font-normal">
            <li className="list-disc ml-6">Submit request in dashboard</li>
            <li className="list-disc ml-6">Verify identity if requested</li>
            <li className="list-disc ml-6">Payout returns to source</li>
          </ul>
          <p className="mt-6 text-[#10131A]/82 text-base md:text-lg leading-relaxed">
            *Processing times depend on banks and payment providers.
          </p>
        </div>
      </div>
    </div>
  </section>
);

type PaymentMethodCardData = {
  id: string;
  logoSrc: string;
  logoAlt: string;
  currencies: string;
  minDeposit: string;
  minWithdrawal: string;
};

const PAYMENT_METHOD_CARDS: PaymentMethodCardData[] = [
  {
    id: 'mastercard',
    logoSrc: '/images/logos/mastercardlogo.png',
    logoAlt: 'Mastercard',
    currencies: 'USD , EUR , GBP , ZAR',
    minDeposit: '100',
    minWithdrawal: '25',
  },
  {
    id: 'visa',
    logoSrc: '/images/logos/visalogo.png',
    logoAlt: 'Visa',
    currencies: 'USD , EUR , GBP , ZAR',
    minDeposit: '100',
    minWithdrawal: '25',
  },
  {
    id: 'bank-transfer',
    logoSrc: '/images/logos/banktransferlogo.png',
    logoAlt: 'Bank transfer',
    currencies: 'USD , EUR , GBP , ZAR',
    minDeposit: '100',
    minWithdrawal: '25',
  },
  {
    id: 'neteller',
    logoSrc: '/images/logos/netellerlogo.png',
    logoAlt: 'Neteller',
    currencies: 'USD , EUR , GBP , ZAR',
    minDeposit: '100',
    minWithdrawal: '25',
  },
  {
    id: 'skrill',
    logoSrc: '/images/logos/skrilllogo.png',
    logoAlt: 'Skrill',
    currencies: 'USD , EUR , GBP , ZAR',
    minDeposit: '100',
    minWithdrawal: '25',
  },
];

const PaymentMethodCard = ({ card }: { card: PaymentMethodCardData }) => (
  <div className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white shadow-sm">
    <div className="px-5 pt-6 pb-4">
      <div className="h-14 flex items-center justify-center mb-4 px-2">
        <img
          src={card.logoSrc}
          alt={card.logoAlt}
          className="max-h-11 w-auto max-w-[min(100%,11rem)] object-contain object-center"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="space-y-2.5 text-[#10131A]/80 text-sm font-normal">
        <div className="flex justify-between gap-3">
          <span>Currencies</span>
          <span className="font-medium text-right">{card.currencies}</span>
        </div>
        <div className="flex justify-between">
          <span>Min. Deposit</span>
          <span className="font-medium">{card.minDeposit}</span>
        </div>
        <div className="flex justify-between">
          <span>Min. Withdrawal</span>
          <span className="font-medium">{card.minWithdrawal}</span>
        </div>
      </div>
    </div>
    <div className="bg-[#F1EDF7] text-center py-2 text-[#10131A] font-medium text-sm">Commission</div>
    <div className="px-5 py-4 text-[#10131A]/80 text-sm space-y-2.5">
      <div className="flex justify-between">
        <span>On Deposit</span>
        <span>None</span>
      </div>
      <div className="flex justify-between">
        <span>On Withdrawal</span>
        <span>None</span>
      </div>
      <Button
        to="/signup"
        className="mt-2 w-full py-2.5 text-sm rounded-full bg-linear-to-r from-[#E5C384] to-[#A67C37] text-white font-medium"
      >
        Fund Now <ArrowRight className="w-3.5 h-3.5 ml-1 inline" />
      </Button>
    </div>
  </div>
);

const FlexiblePaymentOptions = () => {
  return (
    <section id="payment-methods" className="py-16 md:py-20 bg-white scroll-mt-28 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-[#10131A] mb-3 leading-tight">Flexible Payment Options</h2>
          <p className="text-[#10131A]/72 text-base md:text-lg mb-4 leading-relaxed font-normal">
            Choose from multiple deposit and withdrawal methods that suit your needs.
          </p>
          <p className="text-[#10131A]/58 text-xs md:text-sm leading-relaxed">
            *By using these services, clients acknowledge the potential risks of online payment systems, including delays or disruptions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {PAYMENT_METHOD_CARDS.slice(0, 3).map((card) => (
            <PaymentMethodCard key={card.id} card={card} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-[940px]">
          {PAYMENT_METHOD_CARDS.slice(3).map((card) => (
            <PaymentMethodCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const depositWithdrawalsTickerAssets = [
  { symbol: 'EUR/USD', price: '1.15690', change: '-0.00142', percent: '-0.12%', trend: 'down' as const, flags: ['eu', 'us'] },
  { symbol: 'GBP/USD', price: '1.38420', change: '+0.00215', percent: '+0.15%', trend: 'up' as const, flags: ['gb', 'us'] },
  { symbol: 'USD/JPY', price: '110.250', change: '+0.450', percent: '+0.41%', trend: 'up' as const, flags: ['us', 'jp'] },
  { symbol: 'AUD/USD', price: '0.74520', change: '-0.00085', percent: '-0.11%', trend: 'down' as const, flags: ['au', 'us'] },
  { symbol: 'USD/CAD', price: '1.25340', change: '+0.00120', percent: '+0.10%', trend: 'up' as const, flags: ['us', 'ca'] },
  { symbol: 'EUR/GBP', price: '0.85420', change: '-0.00045', percent: '-0.05%', trend: 'down' as const, flags: ['eu', 'gb'] },
];

export const DepositWithdrawals = () => {
  return (
    <div className="min-h-screen bg-white">
      <DepositHero />
      <MarketTickerStrip assets={depositWithdrawalsTickerAssets} />
      <TrustedBrokerSection />
      <FlexiblePaymentOptions />
    </div>
  );
};

export default DepositWithdrawals;
