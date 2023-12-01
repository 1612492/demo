import chevronDownIcon from '@assets/chevron-down.svg';
import useClickOutside from '@hooks/useClickOutside';
import { useState } from 'react';
import { Option } from '../types';

type Props = {
  options: Option[];
  value: Option;
  onChange: (value: Option) => void;
};

function Select({ options, value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((p) => !p)}
        className="flex h-11 w-full items-center justify-between rounded border border-secondary bg-transparent p-2 outline-primary"
      >
        <span>{value.label}</span>
        <img src={chevronDownIcon} alt="" />
      </button>
      {isOpen ? (
        <ul ref={ref} className="absolute z-10 mt-2 w-full overflow-hidden rounded">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="bg-gray-800 hover:bg-gray-700 cursor-pointer select-none p-2"
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Select;
