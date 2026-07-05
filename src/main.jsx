import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { applySeason } from "../brand/season-switch.js";
import "../brand/tokens.css";
import "./index.css";
import App from "./App.jsx";

// Season: auto by date (manual override comes later via UI).
// index.html carries data-season="autumn" as the no-JS default.
applySeason();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
