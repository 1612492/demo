import { SVGProps } from 'react';

function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" {...props}>
      <path
        fill="#FBC625"
        fillRule="evenodd"
        d="M9 .429A8.571 8.571 0 1 0 9 17.57 8.571 8.571 0 0 0 9 .43Zm2.779 10.357a.714.714 0 0 1-.508 1.218.714.714 0 0 1-.485-.225L9.018 9.993 7.25 11.779a.714.714 0 1 1-1.01-1.011L8.024 9 6.239 7.232a.715.715 0 1 1 1.011-1.01l1.768 1.785 1.768-1.786a.715.715 0 1 1 1.01 1.011L10.011 9l1.768 1.786Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default CloseIcon;
