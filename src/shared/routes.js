import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import AppHandler from './components/AppHandler';
import HomeSection from './components/sections/home';
import menuData from './menuData';

const routes = menuData.items.map((item, index) => {
  return (<Route path={item.url} component={item.component} key={index} />);
});

export default(
  <Router>
    <Route path="/" component={AppHandler}>
      <IndexRoute component={HomeSection} />
      {routes}
    </Route>
  </Router>
);
