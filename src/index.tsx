import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import Header from "./components/Header";

const Root = () => {
  return (
    <Router>
      <Header />
      <App />
    </Router>
  );
};

const appRootEl = document.getElementById("app-root");
ReactDOM.render(<Root />, appRootEl);
