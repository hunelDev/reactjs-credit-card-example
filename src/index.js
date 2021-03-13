import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import { HunelProvider, HunelCreditCard } from "reactjs-credit-card";

const hunel = new HunelCreditCard({
  middlePartHide: false, //
});

ReactDOM.render(
  <HunelProvider config={hunel}>
    <App />
  </HunelProvider>,
  document.getElementById("root")
);
