import { SVGProps } from 'react';

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" {...props}>
      <rect width={12} height={12} fill="#17161A" rx={6} />
      <g clipPath="url(#a)">
        <path
          fill="url(#b)"
          d="m9.667 6-.814-.93.114-1.23-1.204-.273-.63-1.067L6 2.987 4.867 2.5l-.63 1.063-1.204.27.114 1.234L2.333 6l.814.93-.114 1.233 1.204.274.63 1.063L6 9.01l1.133.487.63-1.064 1.204-.273-.114-1.23.814-.93Zm-4.54 1.337-.794-.8a.332.332 0 0 1 0-.47l.024-.024c.13-.13.343-.13.473 0l.537.54 1.716-1.72c.13-.13.344-.13.474 0l.023.024c.13.13.13.34 0 .47l-1.973 1.98a.344.344 0 0 1-.48 0Z"
        />
        <path
          fill="#F5F8FA"
          d="m5.127 7.337-.794-.8a.332.332 0 0 1 0-.47l.024-.024c.13-.13.343-.13.473 0l.537.54 1.716-1.72c.13-.13.344-.13.474 0l.023.024c.13.13.13.34 0 .47l-1.973 1.98a.344.344 0 0 1-.48 0Z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={2.333}
          x2={9.683}
          y1={2.5}
          y2={2.517}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#49DD81" />
          <stop offset={1} stopColor="#22B4C6" />
        </linearGradient>
        <clipPath id="a">
          <rect width={8} height={8} x={2} y={2} fill="#fff" rx={4} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CheckIcon;
