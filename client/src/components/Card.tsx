import heartIcon from '@assets/heart.svg';
import verifyIcon from '@assets/verify.svg';
import { NFT } from '../types';
import IconButton from './IconButton';

type Props = {
  nft: NFT;
};

function Card({ nft }: Props) {
  return (
    <div className="rounded-lg bg-card p-4">
      <div className="relative flex items-end justify-center rounded">
        <div className="absolute left-2 top-2 rounded-lg bg-black bg-opacity-40 px-4 py-2 text-sm">
          {nft.category}
        </div>
        <IconButton src={heartIcon} alt="favorite" className="absolute right-2 top-2" />
        <img src={nft.uri} alt={nft.name} className="w-full" />
      </div>
      <div className="my-4 flex justify-between">
        <span className="font-bold">{nft.name}</span>
        <span>{nft.price} ETH</span>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="relative">
          <img src={nft.owner_avatar} alt="avatar" />
          {nft.verified_owner ? (
            <img src={verifyIcon} alt="verify" className="absolute bottom-0 right-0" />
          ) : null}
        </div>
        <span>{nft.owner_name}</span>
      </div>
    </div>
  );
}

export default Card;
