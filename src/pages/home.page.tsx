/** @format */

import { useState } from "react";
import { Banner } from "../components/common/banner.component";
import { Header } from "../components/header/header.component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const HomePage = () => {
  const [data, setData] = useState<any>([]);
  // console.log("data Home", data);
  const getData = (data: any) => {
    setData(data);
  };
  return (
    <div>
      <Header setData={getData} />
      <div style={{ marginTop: "7%" }}>
        {data !== [] ? <Banner data={data} /> : null}
      </div>
    </div>
  );
};
