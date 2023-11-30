import { SVGProps } from 'react';

function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={15} fill="none" {...props}>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={2}
        d="m7.32 2.005.68.63.68-.63A3.693 3.693 0 0 1 11.206 1c.99 0 1.934.395 2.663 1.133 1.51 1.544 1.506 3.937.002 5.467L8 13.573 2.13 7.6a3.87 3.87 0 0 1-.002-5.464C2.861 1.395 3.805 1 4.795 1c.932 0 1.82.351 2.525 1.005Z"
      />
    </svg>
  );
}

export default HeartIcon;
