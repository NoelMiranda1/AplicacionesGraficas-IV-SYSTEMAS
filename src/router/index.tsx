/** @format */

import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Header } from "../components/header/header.component";
import { HomePage } from "../pages/home.page";
import { MoviePage } from "../pages/movie.page";

export const Routes = () => {
  const [data, setData] = useState<any>([]);

  const getData = (data: any) => {
    setData(data);
  };
  return (
    <>
      <Router>
        <Header setData={getData} />
        <Switch>
          <Route path='/movie/:id'>
            <MoviePage />
          </Route>
          <Route path='/home'>
            <HomePage data={data} />
          </Route>
          <Redirect from='/' to='/home' />
        </Switch>
      </Router>
    </>
  );
};
