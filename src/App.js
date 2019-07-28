import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidenav from "./components/layout/Sidenav";
import Login from "./components/layout/Login";
import Schedule from "./components/layout/schedule";

function App() {
  return (
    <BrowserRouter>
      <Switch>{/* <Route exact path="/" component={Login} /> */}</Switch>
      <Header />
      <div className="container">
        <Sidenav />
        <div className="wrapper">
          <Switch>
            <Route exact path="/schedule" component={Schedule} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
