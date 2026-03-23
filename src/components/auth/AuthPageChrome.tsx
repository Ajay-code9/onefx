import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

/** Slim inputs (~36px tall) — matches reference thin field height */
export const authInputClass =
  'h-9 w-full rounded-[5px] border border-[#d8d8d8] bg-white px-3 text-[14px] font-sans font-normal text-[#1a1a1a] placeholder:text-[#a8a8a8] outline-none transition-shadow focus:border-gold focus:ring-1 focus:ring-gold/25';

export const authBtnGoldPill =
  'w-full rounded-full py-2.5 px-8 text-[14px] font-bold font-sans text-white shadow-sm bg-linear-to-r from-gold via-[#d4b068] to-[#a67c32] transition-opacity hover:opacity-95';

export const authBtnDarkPill =
  'flex w-full max-w-[300px] items-center justify-center rounded-full py-2.5 px-8 text-[14px] font-bold font-sans text-white bg-[#1A112E] shadow-sm transition-colors hover:bg-[#251542]';

/** Full-width dark pill (signup form primary CTA) */
export const authBtnDarkPillFull =
  'w-full rounded-full py-2.5 px-8 text-[14px] font-bold font-sans text-white bg-[#1A112E] shadow-sm transition-colors hover:bg-[#251542]';

export const authCardClass =
  'mx-auto w-full max-w-[960px] overflow-hidden rounded-[18px] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.07)] ring-1 ring-black/5';

export function AuthLogo() {
  return (
    <Link to="/" className="inline-flex items-center select-none">
      <img
        src="/images/hero/logo-white.svg"
        alt="oneFX"
        className="h-12 w-auto"
        referrerPolicy="no-referrer"
      />
    </Link>
  );
}

export function AuthLanguageSelect() {
  return (
    <button
      type="button"
      className="absolute right-4 top-4 sm:right-8 sm:top-6 flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-3.5 py-2 text-sm font-sans font-medium text-[#4a4a4a] shadow-sm hover:bg-gray-50 transition-colors"
      aria-label="Language"
    >
      <span className="text-base leading-none" aria-hidden>
        🇬🇧
      </span>
      <span>EN</span>
      <ChevronDown className="w-4 h-4 text-gray-500" strokeWidth={2} />
    </button>
  );
}

export function AuthPageChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#333] antialiased">
      <div className="relative mx-auto max-w-[1040px] px-4 pb-16 pt-6 sm:px-6 sm:pt-8">
        <AuthLanguageSelect />
        <div className="flex justify-center pt-2 pb-10 sm:pb-12">
          <AuthLogo />
        </div>
        {children}
      </div>
    </div>
  );
}

export function AuthRiskNote() {
  return (
    <p className="mt-4 text-center font-sans text-[11px] leading-snug text-[#333]">Trading Forex &amp; CFDs is Risky</p>
  );
}
