import clsx from 'clsx';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className,
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-4 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
