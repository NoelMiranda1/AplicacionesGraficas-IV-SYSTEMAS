/** @format */

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "../pages/Home.tsx";
import { MovieDetails } from "../pages/MovieDetails.tsx";
export const Routers = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='MovieDetails'>
            <MovieDetails />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
