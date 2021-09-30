/** @format */

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "../pages/home.page";
import { MoviePage } from "../pages/movie.page";

export const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/movie'>
            <MoviePage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
