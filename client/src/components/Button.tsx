import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

function Button({ children, className, ...restProps }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'flex items-center justify-center rounded bg-gradient-to-r from-pink to-purple px-8 py-2 text-sm shadow-lg outline-primary transition-transform hover:scale-105',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Button;
