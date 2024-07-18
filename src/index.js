import { Router } from "wouter";
import ReactDOM from "react-dom";
import App from "./App";

const base = "/cityzen-shop";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Router base={base}>
    <App />
  </Router>
);
