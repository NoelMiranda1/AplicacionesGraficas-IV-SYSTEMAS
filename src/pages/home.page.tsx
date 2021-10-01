/** @format */

import { useEffect, useState } from "react";
import { Banner } from "../components/common/banner.component";
import { Header } from "../components/header/header.component";
import { Title } from "../components/common/title.component";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../components/common/card.component";
import API from "../utils/api";
const api = new API();

export const HomePage = () => {
  const [data, setData] = useState<any>([]);
  // console.log("data Home", data);
  const [dcFilter, setDcFilter] = useState([]);
  const [marvelFilter, setMarvelFilter] = useState([]);
  const getData = (data: any) => {
    setData(data);
  };

  async function fetchDC() {
    const data = await api.getMovie("DC");
    setDcFilter(data.results);
  }
  async function fetchMarvel() {
    const data = await api.getMovie("Marvel");
    setMarvelFilter(data.results);
  }

  useEffect(() => {
    fetchDC();
    fetchMarvel();
  }, []);

  return (
    <div>
      <Header setData={getData} />
      <div style={{ marginTop: "7%" }}>
        {data !== [] ? <Banner data={data} /> : null}
        <div style={{ marginLeft: "5%", marginRight: "5%" }}>
          <Title title='Marvel' />
        </div>
        <Card data={marvelFilter} />
        <div style={{ marginLeft: "5%", marginRight: "5%" }}>
          <Title title='DC' />
        </div>
        <Card data={dcFilter} />
      </div>
    </div>
  );
};
