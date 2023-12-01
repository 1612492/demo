import { useEffect } from 'react';
import SearchForm from '@components/SearchForm';
import Tabs from '@components/Tabs';
import GridView from '@components/GridView';
import useQuery from '@hooks/useQuery';
import { NFT } from '../types';

function NFTs() {
  const { data, error, isLoading, refetch } = useQuery<NFT[]>('http://localhost:4000/nft');

  useEffect(() => {
    const intervalId = setInterval(() => refetch(), 60000);

    return () => clearInterval(intervalId);
  }, [refetch]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (!data) return <div>Empty</div>;

  return (
    <div className="container mx-auto flex flex-col gap-8 p-4 px-4 sm:flex-row">
      <SearchForm refetch={refetch} />
      <section className="mt-8 sm:mt-0 sm:flex-1">
        <Tabs refetch={refetch} />
        {data.length > 0 ? <GridView nfts={data} refetch={refetch} /> : <div>Empty</div>}
      </section>
    </div>
  );
}

export default NFTs;
