import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.scss";


// const el = document.getElementById("app");

// ReactDOM.render(<App />, el);

const el = ReactDOM.createRoot(document.getElementById("app"));
el.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
