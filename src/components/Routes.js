import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contents from './Contents';
import Home from "./Home/Home";
import Carrer from "./Carrer/Carrer";
import Test3 from "./Test3";
import ProjList from "./Projects/ProjList";
import Proj1 from "../views/Proj1";
import Proj2 from "../views/Proj2";
import Proj3 from "../views/Proj3";

export default () => (
  <Router>
    <Route exact path="/" component={Contents} />
    <Route path="/home" component={Home} />
    <Route path="/carrer" component={Carrer} />
    <Route path="/test3" component={Test3} />
    <Route path="/projlist" component={ProjList} />
    <Route path="/proj1" component={Proj1} />
    <Route path="/proj2" component={Proj2} />
    <Route path="/proj3" component={Proj3} />
  </Router>
)