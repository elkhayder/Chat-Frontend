import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./styles/global.scss";

import "remixicon/fonts/remixicon.css";
import "react-perfect-scrollbar/dist/css/styles.css";

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById("root")
);
