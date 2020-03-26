import React, {useState, useEffect} from "react";
import "./App.css";
import HomePage from "./components/HomePage.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from './components/firebase';
// import UserAuth from './components/UserAuth.js'
// import Apigeofencing from './components/ApiGeofencing.js'


function App() {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})

  return firebaseInitialized !== false ? (
    <Router>
      <Switch>
        <Route exact path="/" component={Register}/>
        <Route exact path="/login" component={HomePage}/>
        <Route exact path="/register" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  ) : <div id="loader">CircularProgress</div>
}

export default App;

