'use client';

import { useState, useEffect } from 'react';
import MenuIcon from '../../../public/icons/icon_caret_top.svg';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-4 right-4 z-50
        cursor-pointer
        flex h-12 w-12 items-center justify-center
        rounded-full border border-[#777777]
        bg-primary-foreground
        transition-opacity duration-300 ease-in-out
        hover:bg-gray-50 hover:text-gray-700
        focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
        ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}
    >
      <MenuIcon className="min-size-8" />
    </button>
  );
}
