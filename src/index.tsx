import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const rootEl = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootEl
);

// if (module.hot) {
//   module.hot.accept("./App", () => {
//     const NextApp = require("./App").default;
//     ReactDOM.render(<NextApp />, rootEl);
//   });
// }
