import { useState } from 'react';
import chevronDownIcon from '@assets/chevron-down.svg';
import globeIcon from '@assets/globe.svg';
import Button from './Button';
import IconButton from './IconButton';
import HamburgerButton from './HamburgerButton';
import useMediaQuery from '@hooks/useMediaQuery';
import Routes from './Routes';
import clsx from 'clsx';

function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-header">
      <div className="container mx-auto flex justify-between p-4">
        {isMobile ? (
          <HamburgerButton active={isOpen} onClick={() => setIsOpen((p) => !p)} />
        ) : (
          <Routes className="flex gap-x-4 p-2 lg:gap-x-8" />
        )}
        <div className="flex items-center gap-x-4">
          <Button>Connect Wallet</Button>
          <div className="flex items-center gap-x-2">
            <IconButton src={globeIcon} alt="language" />
            <IconButton src={chevronDownIcon} alt="option" />
          </div>
        </div>
      </div>
      {isMobile ? (
        <Routes
          className={clsx(
            'space-y-6 overflow-hidden px-4 transition-all',
            isOpen ? 'h-[280px]' : 'h-0'
          )}
        />
      ) : null}
    </header>
  );
}

export default Header;
