import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./pages/landing";
import LoginPage from "./pages/login-mobile";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} />
    </Router>
  );
};

export default App;
