import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  active: boolean;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};

function Route({ active, children, onClick }: Props) {
  return (
    <a
      href="/"
      onClick={onClick}
      className={clsx(
        'group relative block cursor-pointer text-sm font-semibold uppercase md:inline xl:text-base',
        active && 'text-fill-transparent bg-gradient-to-r from-pink to-purple bg-clip-text'
      )}
    >
      {children}
      <span
        className={clsx(
          'absolute left-0 top-6 hidden h-1 w-0 rounded bg-gradient-to-r from-pink to-purple transition-all group-hover:w-full md:block',
          active ? 'w-full' : ''
        )}
      />
    </a>
  );
}

export default Route;
