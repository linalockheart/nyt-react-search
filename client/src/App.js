import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
// import Wrapper from "./components/Wrapper";
// import Search from "./components/Search";
// import Results from "./components/Results";
// import Saved from "./components/Saved";
import Home from "./pages/Home";
import Saved from "./pages/Saved",
import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Articles} />
        {/* <Route exact path="/articles/:id" component={Detail} /> */}
        <Route exact path="/saved/:id" component={Saved} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;

