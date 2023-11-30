import { SVGProps } from 'react';

function ChevronIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={14} height={9} {...props}>
      <path d="M13.268.707a1 1 0 0 0-1.414 0L7.768 4.793a1 1 0 0 1-1.414 0L2.268.707a1 1 0 0 0-1.414 0L.707.854a1 1 0 0 0 0 1.414l5.647 5.646a1 1 0 0 0 1.414 0l5.647-5.646a1 1 0 0 0 0-1.414l-.147-.147Z" />
    </svg>
  );
}

export default ChevronIcon;
