import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import {
  AuthPageChrome,
  AuthRiskNote,
  authInputClass,
  authBtnGoldPill,
  authBtnDarkPill,
  authCardClass,
} from '../components/auth/AuthPageChrome';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

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
                <label htmlFor="login-email" className={labelClass}>
                  Email or username<span className="text-gold">*</span>
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="text"
                  autoComplete="username"
                  placeholder="Email Address"
                  className={authInputClass}
                />
              </div>

              <div>
                <label htmlFor="login-password" className={labelClass}>
                  Password<span className="text-gold">*</span>
                </label>
                <div className="relative">
                  <input
                    id="login-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="Password"
                    className={`${authInputClass} pr-10`}
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

              <button type="submit" className={`${authBtnGoldPill} mt-2`}>
                Login
              </button>
            </form>

            <AuthRiskNote />

            <div className="mt-8 text-center">
              <Link
                to="/contact-us"
                className="font-sans text-[13px] font-medium text-[#1a1a1a] transition-colors hover:text-gold"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center px-8 py-11 sm:px-11 sm:py-14 md:px-12">
            <p className="mb-7 text-center font-sans text-[14px] font-normal leading-snug text-[#1a1a1a]">
              Do not have an Account yet?
            </p>
            <Link to="/signup" className={authBtnDarkPill}>
              Register Now
            </Link>
            <AuthRiskNote />
          </div>
        </div>
      </div>
    </AuthPageChrome>
  );
}
