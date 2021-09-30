/** @format */

import { useState } from "react";
import { Header } from "../components/header/Header";

export const Home = () => {
  const [data, setData] = useState<any>(null);
  console.log("data", data);
  return (
    <div>
      <Header setData={(e: any) => setData(e)} />
    </div>
  );
};
