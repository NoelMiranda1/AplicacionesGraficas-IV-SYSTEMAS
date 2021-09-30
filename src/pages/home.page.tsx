/** @format */

import { useState } from "react";
import { Header } from "../components/header/header.component";

export const HomePage = () => {
  const [data, setData] = useState<any>(null);
  console.log("data Home", data);
  const getData = (data: any) => {
    setData(data);
  };
  return (
    <div>
      <Header setData={getData} />
    </div>
  );
};
