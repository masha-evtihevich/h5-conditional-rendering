import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Loader from "./Loader";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Loader />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);