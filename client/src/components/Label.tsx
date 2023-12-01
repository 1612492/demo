import clsx from 'clsx';
import { LabelHTMLAttributes } from 'react';

function Label({ children, className, ...restProps }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={clsx('mb-2 block uppercase text-secondary', className)} {...restProps}>
      {children}
    </label>
  );
}

export default Label;
