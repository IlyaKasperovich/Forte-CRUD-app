import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import PeoplePage from "./pages/PeoplePage"
import StarshipsPage from "./pages/StarshipsPage"
import PlanetsPage from "./pages/PlanetsPage"
  

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul class="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">People</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/planets">Planets</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/starships">Starships</Link>
              </li>
            </ul>
          </nav>
  
          <Switch>
            <Route path="/planets">
              <PlanetsPage />
            </Route>
            <Route path="/starships">
              <StarshipsPage />
            </Route>
            <Route path="/">
              <PeoplePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }