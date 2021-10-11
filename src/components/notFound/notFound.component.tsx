/** @format */

import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../../assets/images/notFound.png";
class NotFoundPage extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <img src={PageNotFound} />
        <p style={{ textAlign: "center", color: "#fff", fontSize: "50px" }}>
          <Link to='/AplicacionesGraficas-IV-SYSTEMAS/home'>Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
