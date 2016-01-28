import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import ServicesInnerSection from './components/sections/services/inner';
import menuData from './menuData';
const { items } = menuData;

const routes = items.children.map((item, index) => {
  return (<Route path={item.url} component={item.component} key={index} />);
});


export default(
  <Router>
    <Route path="/" component={items.component}>
      <IndexRoute component={items.default} />
      {routes}

      <Route path="servicios/:category" component={ServicesInnerSection} />
      <Route path="servicios/:category/:subcategory" component={ServicesInnerSection} />
      <Route path="servicios/:category/:subcategory/:service" component={ServicesInnerSection} />

    </Route>
  </Router>
);
