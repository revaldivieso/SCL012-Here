import React from "react";
// import "../App.css";
import HomePage from "./components/HomePage.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UserAuth from './components/UserAuth.js'
// import Apigeofencing from './components/ApiGeofencing.js'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={HomePage}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;