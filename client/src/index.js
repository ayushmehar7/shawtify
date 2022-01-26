import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter as Router, Route} from "react-router-dom"
import Home from './Home';
import Redirecter from "./Redirecter"

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/:url">
      <Redirecter />
    </Route>
  </Router>,
  document.getElementById('root')
);
