import Route from './Route';
import { useState } from 'react';

const routes = ['Home', 'About us', 'Our teams', 'Marketplace', 'Roadmap', 'Whitepaper'];

type Props = {
  className?: string;
};

function Routes({ className }: Props) {
  const [activeRoute, setActiveRoute] = useState(routes[3]);

  return (
    <nav className={className}>
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
