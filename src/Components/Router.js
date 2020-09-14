import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Intro from "../Routes/Intro";
import About from "../Routes/About";

const AppRouter = () => (
  <Router>
    <Route path="/" component={Intro} />
  </Router>
);
export default AppRouter;
