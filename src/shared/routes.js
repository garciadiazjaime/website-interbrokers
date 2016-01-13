import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

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
    </Route>
  </Router>
);
