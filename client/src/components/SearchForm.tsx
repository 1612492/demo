import { useState } from 'react';
import magnifyingGlassIcon from '@assets/magnifying-glass.svg';
import Button from '@components/Button';
import TextInput from './TextInput';
import Label from './Label';
import Select from './Select';
import RangeInput from './RangeInput';
import { priceOptions, themeOptions, tierOptions, timeOptions } from '@utils/metadata';
import useDebounce from '@hooks/useDebouce';
import { Query } from '../types';
import useForm from '@hooks/useFilters';
import { defaultFilters, filterToField } from '@utils/filter';

type Props = {
  refetch: (newQuery: Partial<Query>) => Promise<void>;
};

function SearchForm({ refetch }: Props) {
  const [keyword, setKeyword] = useState('');
  const [form, setForm] = useForm(defaultFilters);

  useDebounce(keyword, () => refetch({ keyword }));

  return (
    <section className="w-full sm:w-[320px]">
      <div className="space-y-4">
        <div className="relative mb-8">
          <img src={magnifyingGlassIcon} alt="search" className="absolute left-2 top-2" />
          <TextInput
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search by name"
            className="pl-10"
          />
        </div>
        <div>
          <Label>Price</Label>
          <RangeInput
            from={form.fromPrice}
            to={form.toPrice}
            onChange={(value) => {
              if (typeof value !== 'number') {
                setForm({ fromPrice: value[0], toPrice: value[1] });
              }
            }}
          />
        </div>
        <div>
          <Label>Tier</Label>
          <Select
            options={tierOptions}
            value={form.tier}
            onChange={(value) => setForm({ tier: value })}
          />
        </div>
        <div>
          <Label>Theme</Label>
          <Select
            options={themeOptions}
            value={form.theme}
            onChange={(value) => setForm({ theme: value })}
          />
        </div>
        <div>
          <Label>Time</Label>
          <Select
            options={timeOptions}
            value={form.timeOrder}
            onChange={(value) => setForm({ timeOrder: value })}
          />
        </div>
        <div>
          <Label>Price</Label>
          <Select
            options={priceOptions}
            value={form.priceOrder}
            onChange={(value) => setForm({ priceOrder: value })}
          />
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <Button
          onClick={() => {
            setForm(defaultFilters);
            refetch({
              keyword,
              ...filterToField(defaultFilters),
            });
          }}
        >
          Reset filter
        </Button>
        <Button
          onClick={() =>
            refetch({
              keyword,
              ...filterToField(form),
            })
          }
        >
          Apply filter
        </Button>
      </div>
    </section>
  );
}

export default SearchForm;
