import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./sass/main.scss";

import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
