import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  /** Internal route (renders as React Router `Link`) */
  to?: string;
  /** External URL (renders as `<a target="_blank">`) */
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  to,
  href,
  type = 'button',
  ...props
}) => {
  const variants = {
    primary: 'gold-button shadow-lg shadow-gold/20',
    outline: 'outline-button',
    ghost: 'text-white/60 hover:text-gold transition-colors',
  };

  const combined = `font-bold transition-all duration-200 flex items-center justify-center gap-2 ${variants[variant]} ${className}`;

  if (to) {
    const { type: _t, disabled: _d, form: _f, ...linkProps } = props as Record<string, unknown>;
    return (
      <Link to={to} className={combined} {...(linkProps as React.ComponentProps<typeof Link>)}>
        {children}
      </Link>
    );
  }

  if (href) {
    const { type: _t, disabled: _d, form: _f, ...anchorProps } = props as Record<string, unknown>;
    return (
      <a
        href={href}
        className={combined}
        target="_blank"
        rel="noopener noreferrer"
        {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combined} {...props}>
      {children}
    </button>
  );
};

export default Button;
