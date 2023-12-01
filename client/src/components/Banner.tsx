import assassinImg from '@assets/assassin.png';
import basketballGirlImg from '@assets/basketball-girl.png';
import mafiaEnglandImg from '@assets/mafia-england.png';
import neonGuyImg from '@assets/neon-guy.png';
import newArrrivalImg from '@assets/new-arrrival.png';
import theDjImg from '@assets/the-dj.png';

const cards = [
  { name: 'Assassin', img: assassinImg },
  { name: 'Neon Guy', img: neonGuyImg },
  { name: 'Mafia England', img: mafiaEnglandImg },
  { name: 'Basketball Girl', img: basketballGirlImg },
];

function Banner() {
  return (
    <section className="relative bg-banner pt-20">
      <div className="container mx-auto flex items-start px-4 pt-8">
        <img src={newArrrivalImg} className="relative z-10 w-2/3" />
        <img src={theDjImg} className="relative z-10 w-1/3" />
      </div>
      <div className="bottom-0 left-0 right-0 bg-ribbon xl:absolute">
        <div className="flex w-full gap-x-4 overflow-x-auto px-4 py-10">
          {cards.map(({ name, img }, index) => (
            <article key={index}>
              <div className="w-40 lg:w-56">
                <img src={img} />
              </div>
              <p className="mt-2 text-center font-medium uppercase text-black">{name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;
