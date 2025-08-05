// components/ButtonIcon.tsx
'use client';

import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import Spinner from './Spinner';

type ButtonIconProps = {
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonIcon({
  children,
  loading = false,
  size = 'md',
  disabled,
  className,
  ...props
}: ButtonIconProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  return (
    <button
      type="button"
      className={clsx(
        'inline-flex items-center justify-center rounded-full transition-colors cursor-pointer',
        sizeClasses[size],
        disabled || loading ? 'opacity-50 cursor-not-allowed' : '',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}
