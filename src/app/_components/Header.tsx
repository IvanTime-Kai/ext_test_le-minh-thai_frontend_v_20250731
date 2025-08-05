'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import ChallengeIcon from '../../../public/icons/icon_challenge.svg';
import CloseIcon from '../../../public/icons/icon_close.svg';
import InfoIcon from '../../../public/icons/icon_info.svg';
import MemoIcon from '../../../public/icons/icon_memo.svg';
import MenuIcon from '../../../public/icons/icon_menu.svg';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import paths from '../configs/paths';
import { HEADER_HEIGHT, menuItems } from '../constants';
import ButtonIcon from './ui/ButtonIcon';
import Popover from './ui/Popover';
import Badge from './ui/Badge';

export default function Header() {
  const pathname = usePathname();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header
      className={clsx(
        'bg-accent-foreground',
        'sticky top-0 z-50',
        'flex items-center justify-center'
      )}
      style={{ height: HEADER_HEIGHT }}
    >
      <div className="container max-w-screen-lg mx-auto flex items-center justify-between px-4 md:px-0">
        <Link href={paths.home}>
          <div className="relative aspect-[109/40] h-8 md:h-10">
            <Image src="/logo.svg" alt="Healthy Logo" fill loading="eager" />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-0">
          <Link href={paths.mySelf} className="flex items-center space-x-2 min-w-[160px]">
            <MemoIcon className="min-w-8 min-h-8" />
            <span
              className={clsx(
                'body-base font-family-jp',
                pathname === paths.mySelf ? 'text-primary' : 'text-primary-foreground'
              )}
            >
              自分の記録
            </span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 min-w-[160px]">
            <ChallengeIcon className="min-w-8 min-h-8" />
            <span className={clsx('body-base font-family-jp text-primary-foreground')}>
              チャレンジ
            </span>
          </Link>
          <Badge
            href={paths.notification}
            icon={<InfoIcon className="min-w-8 min-h-8" />}
            label="お知らせ"
            badgeCount={1}
          />
          <Popover
            open={isPopupOpen}
            onOpenChange={setIsPopupOpen}
            align="end"
            sideOffset={10}
            trigger={
              <ButtonIcon onClick={togglePopup}>
                {isPopupOpen ? (
                  <CloseIcon className="min-size-8" />
                ) : (
                  <MenuIcon className="min-size-8" />
                )}
              </ButtonIcon>
            }
            className="hidden md:block"
          >
            <div className="w-80 p-0 bg-muted-foreground text-white border-none shadow-lg">
              <div className="flex flex-col">
                {menuItems.map((item, index) => (
                  <Link key={index} href={item.href || '#'}>
                    <div
                      key={index}
                      className={clsx(
                        'py-6 px-4 text-base cursor-pointer hover:bg-[#444444] transition-all duration-200',
                        'border-t border-b',
                        'border-t-[rgba(255,255,255,0.15)]',
                        'border-b-[rgba(46,46,46,0.25)]'
                      )}
                    >
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Popover>
        </nav>

        <div className="md:hidden">
          <Popover
            open={isPopupOpen}
            onOpenChange={setIsPopupOpen}
            align="end"
            sideOffset={10}
            trigger={
              <ButtonIcon onClick={togglePopup}>
                {isPopupOpen ? (
                  <CloseIcon className="min-size-6 md:min-size-8" />
                ) : (
                  <MenuIcon className="min-size-6 md:min-size-8" />
                )}
              </ButtonIcon>
            }
          >
            <div className="w-screen h-screen bg-muted-foreground text-white fixed top-0 left-0 z-50 overflow-auto">
              <div className="flex justify-end p-4">
                <ButtonIcon onClick={togglePopup}>
                  <CloseIcon className="min-size-6 md:min-size-8" />
                </ButtonIcon>
              </div>
              <div className="flex flex-col">
                {menuItems.map((item, index) => (
                  <Link key={index} href={item.href || '#'}>
                    <div
                      className={clsx(
                        'py-6 px-4 text-base cursor-pointer hover:bg-[#444444] transition-all duration-200',
                        'border-t border-b',
                        'border-t-[rgba(255,255,255,0.15)]',
                        'border-b-[rgba(46,46,46,0.25)]'
                      )}
                    >
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </header>
  );
}
