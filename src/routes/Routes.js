import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { hasData } from "../utils/hasData";
import Dashboard from "../pages/Dashboard";
import Player from "../pages/Player";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export default function Routes() {
  const [user] = useState(true);

  /* const logout = () => {
    setUser(null);
  };

  const login = (data) => {
    const { email, token } = data;
    setUser({
      email,
      token,
    });
  }; */

  return (
    <Router>
      {!hasData(user) ? (
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Login /* login={login} */ />}
          />
          <Route component={NotFound} />
        </Switch>
      ) : (
        <>
          <Navbar />
          <div className="general_container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/song/:id" component={Player} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </>
      )}
    </Router>
  );
}
