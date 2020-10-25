import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const appRootEl = document.getElementById("app-root");
ReactDOM.render(<Root />, appRootEl);
