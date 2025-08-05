'use client';

import CupIcon from '../../../public/icons/icon_cup.svg';
import KnifeIcon from '../../../public/icons/icon_knife.svg';
import { ServiceIconType } from '../enums';

interface HexagonCardProps {
  icon: ServiceIconType;
  label: string;
  isActive?: boolean;
}

export default function HexagonCard({ icon, label, isActive }: HexagonCardProps) {
  return (
    <div
      className={`relative w-[116px] h-[134px] flex items-center justify-center text-primary-foreground text-center p-4 transition-color duration-300 ${
        isActive ? 'bg-primary-500' : 'bg-gradient-to-br from-primary-300 to-primary-400'
      }`}
      style={{
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-0">
        {icon === ServiceIconType.Trash ? (
          <CupIcon className="min-size-14" />
        ) : (
          <KnifeIcon className="min-size-14" />
        )}
        <span className="text-xl leading-6 font-normal">{label}</span>
      </div>
    </div>
  );
}
