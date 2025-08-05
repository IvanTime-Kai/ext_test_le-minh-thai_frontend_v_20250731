'use client';

import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';

interface BadgeProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  badgeCount?: number;
  onClick?: () => void;
}

const Badge = ({ href, icon, label, badgeCount = 0, onClick }: BadgeProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(href);
    }
  };

  return (
    <div className="flex items-center space-x-2 min-w-[160px] cursor-pointer" onClick={handleClick}>
      <div className="relative">
        {icon}
        {badgeCount > 0 && (
          <span className="caption text-[10px] absolute -top-0 -right-[6px] bg-primary-500 text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center">
            {badgeCount}
          </span>
        )}
      </div>

      <span
        className={clsx(
          'body-base font-family-jp',
          pathname === href ? 'text-primary' : 'text-primary-foreground'
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default Badge;
