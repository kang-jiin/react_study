import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contents from './Contents';
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";

export default () => (
  <Router>
    <Route exact path="/" component={Contents} />
    <Route path="/test1" component={Test1} />
    <Route path="/test2" component={Test2} />
    <Route path="/test3" component={Test3} />
  </Router>
)