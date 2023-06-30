import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <Layout />
    </Provider>
  </Router>
);
