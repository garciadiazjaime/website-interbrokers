import express from "express";
import React from "react";
// import Router from "react-router";

import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from '../shared/routes';

const app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('bower_components'));
app.use(express.static('public'));

app.get('/*', function (req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      let content = renderToString(<RoutingContext {...renderProps} />);
      res.render('index', { content: content });
      // res.status(200).send(renderToString(<RoutingContext {...renderProps} />))
    } else {
      res.status(404).send('Not found');
    }
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
