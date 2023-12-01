import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

function TextInput({ className, ...restProps }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      maxLength={50}
      className={clsx(
        'h-11 w-full rounded border border-secondary bg-transparent p-2 outline-primary',
        className
      )}
      {...restProps}
    />
  );
}

export default TextInput;
