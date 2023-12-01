import clsx from 'clsx';
import Route from './Route';
import { useState } from 'react';

const routes = ['Home', 'About us', 'Our teams', 'Marketplace', 'Roadmap', 'Whitepaper'];

type Props = {
  isOpen?: boolean;
};

function Routes({ isOpen = true }: Props) {
  const [activeRoute, setActiveRoute] = useState(routes[3]);

  return (
    <nav
      className={clsx(
        'flex flex-col gap-6 overflow-hidden px-4 transition-all',
        isOpen ? 'h-[280px]' : 'h-0'
      )}
    >
      {routes.map((route, index) => (
        <Route
          key={index}
          active={route === activeRoute}
          onClick={(e) => {
            e.preventDefault();
            setActiveRoute(route);
          }}
        >
          {route}
        </Route>
      ))}
    </nav>
  );
}

export default Routes;
