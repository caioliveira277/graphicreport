import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login";
import Header from "./components/header";
import Home from "./pages/home";
import Clients from "./pages/clients";
import "./global.css";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/app" component={Header} />
      <Route exact path="/app" component={Home} />
      <Route exact path="/app/clients" component={Clients} />
    </Router>
  );
}
