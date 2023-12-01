import clsx from 'clsx';
import { categoryOptions } from '@utils/metadata';
import { Query } from '../types';
import { useState } from 'react';

type Props = {
  refetch: (newQuery: Partial<Query>) => Promise<void>;
};

function Tabs({ refetch }: Props) {
  const [category, setCategory] = useState(categoryOptions[0]);

  return (
    <div className="mt-1 flex gap-x-4 overflow-x-auto pb-4">
      {categoryOptions.map((option, index) => (
        <button
          key={index}
          onClick={() => {
            setCategory(option), refetch({ category: option.value });
          }}
          className={clsx(
            'flex items-center justify-center rounded px-4 py-2 text-sm shadow-lg outline-primary',
            option.value === category.value ? 'bg-gradient-to-br from-pink to-purple' : 'bg-fuchsia'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
