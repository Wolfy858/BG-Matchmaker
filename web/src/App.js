import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from './HOCs/PrivateRoute.component';

import "bootstrap/dist/css/bootstrap.min.css"

import Landing from "./components/landing.component"
import Profile from "./components/profile.component"
import EditProfile from "./components/edit-profile.component"
import Login from './components/login.component'
import Signup from './components/signup.component'
// DEFUNCT import Auth from "./containers/auth.component"
import { AuthContext } from "./context/auth"

class App extends Component {

  state = {
    currentUser: null
  }

  render() {
    return (
      <AuthContext.Provider value={false}>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">Home</Link>
              <div className="navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/login" className="nav-link">Login</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/profile" className="nav-link">My profile</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br/>
            <h2>BG Matchmaker App</h2>
            <Route path="/" exact component={Landing} />
            <Route path="/edit/:id" component={EditProfile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/profile" component={Profile} />
          </div>
        </Router>
      </AuthContext.Provider>

    );
  }

}

export default App;
