import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type Props = {
  src: string;
  alt: string;
};

function IconButton({
  src,
  alt,
  className,
  ...buttonProps
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      aria-label={alt}
      className={clsx(
        'flex h-8 w-8 items-center justify-center outline-primary transition-transform hover:scale-125',
        className
      )}
      {...buttonProps}
    >
      <img src={src} alt={alt} />
    </button>
  );
}

export default IconButton;
