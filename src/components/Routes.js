import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contents from './Contents';
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";
import ProjList from "../views/ProjList";
import Proj1 from "../views/Proj1";
import Proj2 from "../views/Proj2";
import Proj3 from "../views/Proj3";

export default () => (
  <Router>
    <Route exact path="/" component={Contents} />
    <Route path="/test1" component={Test1} />
    <Route path="/test2" component={Test2} />
    <Route path="/test3" component={Test3} />
    <Route path="/projlist" component={ProjList} />
    <Route path="/proj1" component={Proj1} />
    <Route path="/proj2" component={Proj2} />
    <Route path="/proj3" component={Proj3} />
  </Router>
)