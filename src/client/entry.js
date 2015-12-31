import React from "react";
import { render } from "react-dom";
import { Router, Route, Link } from "react-router";

import routes from "../shared/routes";


render(routes, document.getElementById('app'));
