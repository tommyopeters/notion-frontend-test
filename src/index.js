import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import "./sass/main.scss";

import Home from "./Home";
import Search from "./Search";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
