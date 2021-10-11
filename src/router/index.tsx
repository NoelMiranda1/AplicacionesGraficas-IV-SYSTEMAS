/** @format */

import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Header } from "../components/header/header.component";
import NotFoundPage from "../components/notFound/notFound.component";
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
          <Route path='/AplicacionesGraficas-IV-SYSTEMAS/movie/:id'>
            <MoviePage />
          </Route>
          <Route path='/AplicacionesGraficas-IV-SYSTEMAS/home'>
            <HomePage data={data} />
          </Route>
          <Route path='/404' component={NotFoundPage} />
          <Redirect from='/' to='/AplicacionesGraficas-IV-SYSTEMAS/home' />
        </Switch>
      </Router>
    </>
  );
};
