import bottomImg from '@assets/bottom.png';
import Header from '@components/Header';
import Banner from '@components/Banner';
import Footer from '@components/Footer';
import NFTs from '@components/NFTs';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <section className="pt-20">
        <NFTs />
        <img src={bottomImg} className="mt-10" />
      </section>
      <Footer />
    </>
  );
}

export default App;
