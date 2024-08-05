// https://www.youtube.com/watch?v=lie7_DVxNBY&list=PL8p2I9GklV46NFHdQMFBjXvxwVqtJpa2N&index=6
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import swDev from "./swDev";

// import reportWebVitals from "./reportWebVitals";

// import * as serviceWorker from "./serviceWorker"

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

swDev();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
// serviceWorker.unregister()
