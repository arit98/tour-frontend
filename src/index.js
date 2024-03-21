import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.css"
import { StateContextProvider } from "./context/StateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateContextProvider>
);
