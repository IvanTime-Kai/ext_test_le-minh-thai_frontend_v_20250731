'use client';

import clsx from 'clsx';
import type React from 'react';
import { useRef, useEffect, useCallback } from 'react';

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  className?: string;
}

const Popover = ({
  trigger,
  children,
  open,
  onOpenChange,
  align = 'end',
  sideOffset = 10,
  className = '',
}: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onOpenChange(false);
      }
    },
    [onOpenChange]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open, handleOutsideClick]);

  const getAlignmentClasses = () => {
    switch (align) {
      case 'start':
        return 'left-0';
      case 'center':
        return 'left-1/2 -translate-x-1/2';
      case 'end':
      default:
        return 'right-0';
    }
  };

  return (
    <div className={clsx('relative inline-block', className)}>
      <div ref={triggerRef} onClick={() => onOpenChange(!open)}>
        {trigger}
      </div>
      {open && (
        <div
          ref={popoverRef}
          className={`absolute z-50 mt-[${sideOffset}px] ${getAlignmentClasses()}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Popover;
