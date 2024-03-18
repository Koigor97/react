import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import store from "./store";

console.log(store.getState());

store.dispatch({
  type: "customer/createCustomer",
  payload: { fullName: "Samuel Turay", ntlID: "266#badd7i" },
});
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
