import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Nav, NavDesktop, Projects } from '../containers/';

const Portfolio = () => {
  useEffect(() => window.scroll({ behavior: 'smooth', top: 0 }), []);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="rogelisoamuel621's portfolio where you can find my projects which have demos and its code"
        />
        <title>Rogelio Samuel | Portfolio</title>
      </Helmet>
      {screen.width >= 1024 ? <NavDesktop /> : null}
      <Projects />
      {screen.width < 1024 ? <Nav inPortfolio={true} /> : null}
    </>
  );
};

export default Portfolio;
