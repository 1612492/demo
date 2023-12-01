import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type Props = {
  active: boolean;
};

function HamburgerButton({ active, onClick }: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="flex flex-col gap-y-2 py-2 md:hidden" onClick={onClick}>
      <div
        className={clsx(
          'h-0.5 w-9 bg-white transition-transform',
          active && 'translate-y-3 rotate-45'
        )}
      ></div>
      <div className={clsx('h-0.5 w-6 bg-white transition-opacity', active && 'opacity-0')}></div>
      <div
        className={clsx(
          'h-0.5 w-9 bg-white transition-transform',
          active && '-translate-y-2 -rotate-45'
        )}
      ></div>
    </button>
  );
}

export default HamburgerButton;
