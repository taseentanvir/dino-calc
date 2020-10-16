import React from "react";
import "./App.css";

// custom imports
import Home from "./components/Home.js";
import FactorizationCalc from "./components/factorizationCalc/FactorizationCalc.js";
import BMICalc from "./components/BMICalc/BMICalc.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/factorization-calc">
            <FactorizationCalc />
          </Route>
          <Route exact path="/bmi-calc">
            <BMICalc />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
