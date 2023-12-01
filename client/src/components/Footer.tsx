import phoneIcon from '@assets/phone.svg';
import emailIcon from '@assets/email.svg';

const links = [
  ['Home', 'About us', 'Our teams'],
  ['Whitepaper', 'Marketplace', 'Roadmap'],
  ['FAQs', 'News', 'Community'],
];

const otherLinks = ['Security', 'Legal', 'Privacy'];

const PHONE = '01234568910';
const EMAIL = 'tymex-talent@tyme.com';
const COPYRIGHT = `©${new Date().getFullYear()} Tyme - Edit. All Rights reserved.`;

function Footer() {
  return (
    <footer className="bg-primary px-4 py-10">
      <div className="container mx-auto">
        <div className="grid gap-4 border-b border-secondary pb-10 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold uppercase">Navigation</h3>
            <nav className="grid sm:grid-cols-3">
              {links.map((col, colIndex) => (
                <div key={colIndex}>
                  {col.map((row, rowIndex) => (
                    <a href="/" key={rowIndex} className="mb-2 block hover:text-pink">
                      {row}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold uppercase">Contact us</h3>
            <div className="mb-2 flex gap-x-2">
              <img src={phoneIcon} alt="phone" />
              <a href={`tel:${PHONE}`} className="hover:text-pink">
                {PHONE}
              </a>
            </div>
            <div className="flex gap-x-2">
              <img src={emailIcon} alt="email" />
              <a href={`mailto:${EMAIL}`} className="hover:text-pink">
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <h3 className="mb-4 text-xl font-semibold uppercase">
              Subscribe to receive our lastest update
            </h3>
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                placeholder="Your email address"
                className="flex-1 rounded border border-secondary bg-transparent p-2 outline-primary"
              />
              <button className="flex items-center justify-center rounded bg-gradient-to-r from-pink to-purple px-4 py-2 text-sm shadow-lg outline-primary transition-transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-4 pt-10 sm:flex-row">
          <div>{COPYRIGHT}</div>
          <nav className="flex gap-x-4">
            {otherLinks.map((content, index) => (
              <a href="/" key={index} className="hover:text-pink">
                {content}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
