import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashBoard from "./pages/DashBoard";
import CreateSurvey from "./pages/CreateSurvey";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/create" component={CreateSurvey} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
