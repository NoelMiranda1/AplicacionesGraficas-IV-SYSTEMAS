/** @format */

import { useState } from "react";
import { Header } from "../components/header/Header";

export const Home = () => {
  const [data, setData] = useState<any>([]);
  console.log("data", data);
  return (
    <div>
      <Header setData={() => setData([])} />
    </div>
  );
};
