import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Dashboard from "../pages/Dashboard";
import Login, { getTokenFromUrl } from "../pages/Login";
import NotFound from "../pages/NotFound";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyWebApi = new SpotifyWebApi();

export default function Routes() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.history.pushState({}, null, "/");
    const accessToken = hash.access_token;
    if (accessToken) setToken(accessToken);
  }, []);

  useEffect(() => {
    if (token) {
      spotifyWebApi.setAccessToken(token);
    }
  }, [token]);

  return (
    <Router>
      {!token ? (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route component={NotFound} />
        </Switch>
      ) : (
        <>
          <Navbar setToken={setToken} />
          <div className="general_container">
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <Dashboard token={token} spotifyWebApi={spotifyWebApi} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </>
      )}
    </Router>
  );
}
