import ChevronIcon from '@components/icons/Chevron';
import GlobeIcon from '@components/icons/Globe';
import newArrrivalImg from '@assets/new-arrrival.png';
import theDjImg from '@assets/the-dj.png';
import bottomImg from '@assets/bottom.png';
import cardImg from '@assets/card.png';
import ribbonImg from '@assets/ribbon.png';
import assassinImg from '@assets/assassin.png';
import neonGuyImg from '@assets/neon-guy.png';
import mafiaEnglandImg from '@assets/mafia-england.png';
import basketballGirlImg from '@assets/basketball-girl.png';
import avatar from '@assets/avatar.png';
import MagnifyingGlassIcon from '@components/icons/MagnifyingGlass';
import CloseIcon from '@components/icons/Close';
import HeartIcon from '@components/icons/Heart';
import CheckIcon from '@components/icons/Check';

const routes = ['Home', 'About us', 'Our teams', 'Marketplace', 'Roadmap', 'Whitepaper'];

const cards = [
  { name: 'Assassin', img: assassinImg },
  { name: 'Neon Guy', img: neonGuyImg },
  { name: 'Mafia England', img: mafiaEnglandImg },
  { name: 'Basketball Girl', img: basketballGirlImg },
];

function Card() {
  return (
    <div className="bg-card rounded-lg p-4">
      <div className="bg-pink relative flex aspect-square items-end justify-center rounded">
        <div className="absolute left-2 top-2 rounded-lg bg-black bg-opacity-40 px-4 py-2">
          Epic
        </div>
        <HeartIcon className="absolute right-4 top-4" />
        <img src={theDjImg} className="w-2/3" />
      </div>
      <div className="my-4 flex justify-between">
        <span className="font-bold">The DJ</span>
        <span>2.75 ETH</span>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="relative">
          <img src={avatar} />
          <CheckIcon className="absolute bottom-0 right-0" />
        </div>

        <span>Ghozali_GGhozalu</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <section className="bg-banner">
        <header>
          <div className="container mx-auto flex justify-between py-4">
            <nav className="flex gap-x-8 p-2">
              {routes.map((route, index) => (
                <a key={index} className="group relative cursor-pointer font-medium uppercase">
                  {route}
                  <span className="from-pink to-purple absolute left-0 top-6 h-1 w-0 rounded bg-gradient-to-r transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-x-4">
              <button className="outline-primary from-pink to-purple flex items-center justify-center rounded bg-gradient-to-r px-4 py-2 text-sm shadow-lg transition-transform hover:scale-105">
                Connect Wallet
              </button>
              <div className="flex items-center gap-x-2">
                <button
                  aria-label="Select language"
                  className="outline-primary flex h-8 w-8 items-center justify-center transition-transform hover:scale-125"
                >
                  <GlobeIcon />
                </button>
                <button
                  aria-label="Dropdown"
                  className="outline-primary flex h-8 w-8 items-center justify-center transition-transform hover:scale-125"
                >
                  <ChevronIcon />
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="relative flex">
          <div className="container mx-auto flex items-start pt-8">
            <div className="absolute bottom-0 left-0 right-0">
              <img src={ribbonImg} className="absolute bottom-0" />
              <div className="container mx-auto flex gap-x-4 pb-4">
                {cards.map(({ name, img }, index) => (
                  <article key={index}>
                    <div className="relative flex w-56 items-center justify-center">
                      <img src={cardImg} className="absolute bottom-0" />
                      <img src={img} className="absolute bottom-3" />
                    </div>
                    <p className="relative mt-2 text-center font-medium uppercase text-black">
                      {name}
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <img src={newArrrivalImg} className="relative w-2/3" />
            <img src={theDjImg} className="relative w-1/3" />
          </div>
        </div>
      </section>
      <section className="pt-20">
        <div className="container mx-auto flex gap-x-8">
          <section className="w-[600px] space-y-4">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-2 top-2" />
              <input
                placeholder="Quick search"
                className="border-secondary outline-primary w-full rounded border bg-transparent p-2 pl-10"
              />
            </div>
            <div>
              <label className="uppercase">Price</label>
              <input className="border-secondary outline-primary w-full rounded border bg-transparent p-2" />
            </div>
            <div>
              <label className="text-secondary mb-2 block uppercase">Tier</label>
              <select className="border-secondary outline-primary w-full rounded border bg-transparent p-2">
                {['All', 'Tier 1', 'Tier 2'].map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-secondary mb-2 block uppercase">Theme</label>
              <select className="border-secondary outline-primary w-full rounded border bg-transparent p-2">
                {['Halloween', 'Sport'].map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-secondary mb-2 block uppercase">Time</label>
              <select className="border-secondary outline-primary w-full rounded border bg-transparent p-2">
                {['Latest', 'Oldest'].map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-secondary mb-2 block uppercase">Price</label>
              <select className="border-secondary outline-primary w-full rounded border bg-transparent p-2">
                {['Low to high', 'High to low'].map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <button
                  aria-label="Reset"
                  className="outline-primary flex h-8 w-8 items-center justify-center transition-transform hover:scale-125"
                >
                  <CloseIcon />
                </button>
                <span>Reset filter</span>
              </div>
              <button className="outline-primary from-pink to-purple flex items-center justify-center rounded bg-gradient-to-r px-8 py-2 text-sm shadow-lg transition-transform hover:scale-105">
                Search
              </button>
            </div>
          </section>
          <section>
            <div className="flex gap-x-4 overflow-x-auto">
              {[
                'All',
                'Upper Body',
                'Lower Body',
                'Hat',
                'Shoes',
                'Accessory',
                'Legendary',
                'Mythic',
                'Epic',
                'Rare',
              ].map((category, index) => (
                <button
                  key={index}
                  className="outline-primary from-pink to-purple flex items-center justify-center rounded bg-gradient-to-r px-4 py-2 text-sm shadow-lg transition-transform hover:scale-105"
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              {new Array(20).fill(0).map((_, index) => (
                <Card key={index} />
              ))}
            </div>
            <button className="outline-primary from-pink to-purple mx-auto mt-10 flex items-center justify-center rounded bg-gradient-to-r px-4 py-2 text-sm shadow-lg transition-transform hover:scale-105">
              View more
            </button>
          </section>
        </div>
        <img src={bottomImg} className="mt-10" />
      </section>
      <footer className="bg-primary pb-40 pt-10">
        <div className="container mx-auto">
          <div className="border-secondary grid grid-cols-3 border-b pb-10">
            <div>
              <h3 className="mb-4 text-xl font-semibold uppercase">Navigation</h3>
              <nav className="grid grid-cols-3">
                <div>
                  <a className="block">Home</a>
                  <a className="block">About us</a>
                  <a className="block">Our teams</a>
                </div>
                <div>
                  <a className="block">Whitepaper</a>
                  <a className="block">Marketplace</a>
                  <a className="block">Roadmap</a>
                </div>
                <div>
                  <a className="block">FAQs</a>
                  <a className="block">News</a>
                  <a className="block">Community</a>
                </div>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold uppercase">Contact us</h3>
              <div>
                <span>01234568910</span>
              </div>
              <div>
                <span>tymex-talent@tyme.com</span>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold uppercase">
                Subscribe to receive our lastest update
              </h3>
              <div className="flex gap-x-4">
                <input
                  placeholder="Your email address"
                  className="border-secondary outline-primary flex-1 rounded border bg-transparent p-2"
                />
                <button className="outline-primary from-pink to-purple flex items-center justify-center rounded bg-gradient-to-r px-4 py-2 text-sm shadow-lg transition-transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="pt-10 flex justify-between">
            <div>©2023 Tyme - Edit. All Rights reserved.</div>
            <nav className='flex gap-x-4'>
              <a>Security</a>
              <a>Legal</a>
              <a>Privacy</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
