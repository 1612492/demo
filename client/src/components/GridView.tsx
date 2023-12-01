import { useState } from 'react';
import Card from './Card';
import { NFT, Query } from '../types';
import Button from './Button';

type Props = {
  nfts: NFT[];
  refetch: (newStates: Partial<Query>) => Promise<void>;
};

function GridView({ nfts, refetch }: Props) {
  const [limit, setLimit] = useState(20);

  return (
    <>
      <div className="mt-6 grid gap-4 sm:max-h-[2000px] sm:overflow-x-auto sm:pr-2 lg:grid-cols-2 xl:grid-cols-4">
        {nfts.map((nft) => (
          <Card key={nft.id} nft={nft} />
        ))}
      </div>
      <Button
        onClick={() => {
          const newLimit = limit + 10;
          setLimit(newLimit);
          refetch({ limit: newLimit });
        }}
        className="mx-auto mt-10"
      >
        View more
      </Button>
    </>
  );
}

export default GridView;
