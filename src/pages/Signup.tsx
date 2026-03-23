import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import {
  AuthPageChrome,
  AuthRiskNote,
  authInputClass,
  authBtnGoldPill,
  authBtnDarkPill,
  authBtnDarkPillFull,
  authCardClass,
} from '../components/auth/AuthPageChrome';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const labelClass = 'mb-1.5 block text-left text-[13px] font-semibold font-sans text-[#1a1a1a]';

  return (
    <AuthPageChrome>
      <div className={authCardClass}>
        <div className="grid md:grid-cols-2">
          <div className="px-8 py-11 sm:px-11 sm:py-14 md:border-r md:border-[#ebebeb]">
            <p className="mb-8 text-center font-sans text-[13px] text-[#777]">
              Sections marked with * are mandatory fields
            </p>

            <form
              className="space-y-4 font-sans"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <label htmlFor="signup-name" className={labelClass}>
                  Full name<span className="text-gold">*</span>
                </label>
                <input id="signup-name" name="name" type="text" placeholder="Full name" className={authInputClass} autoComplete="name" />
              </div>

              <div>
                <label htmlFor="signup-email" className={labelClass}>
                  Email or username<span className="text-gold">*</span>
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className={authInputClass}
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="signup-password" className={labelClass}>
                  Password<span className="text-gold">*</span>
                </label>
                <div className="relative">
                  <input
                    id="signup-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className={`${authInputClass} pr-10`}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[#888] transition-colors hover:text-[#555]"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" strokeWidth={1.75} /> : <Eye className="h-4 w-4" strokeWidth={1.75} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="signup-confirm" className={labelClass}>
                  Confirm password<span className="text-gold">*</span>
                </label>
                <div className="relative">
                  <input
                    id="signup-confirm"
                    name="confirmPassword"
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="Confirm password"
                    className={`${authInputClass} pr-10`}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[#888] transition-colors hover:text-[#555]"
                    aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  >
                    {showConfirm ? <EyeOff className="h-4 w-4" strokeWidth={1.75} /> : <Eye className="h-4 w-4" strokeWidth={1.75} />}
                  </button>
                </div>
              </div>

              <button type="submit" className={`${authBtnDarkPillFull} mt-2`}>
                Register Now
              </button>
            </form>

            <AuthRiskNote />
          </div>

          <div className="flex flex-col items-center justify-center px-8 py-11 sm:px-11 sm:py-14 md:px-12">
            <p className="mb-7 text-center font-sans text-[14px] font-normal leading-snug text-[#1a1a1a]">
              Already have an Account?
            </p>
            <Link
              to="/login"
              className={`${authBtnGoldPill} flex max-w-[300px] items-center justify-center`}
            >
              Login
            </Link>
            <AuthRiskNote />
          </div>
        </div>
      </div>
    </AuthPageChrome>
  );
}
