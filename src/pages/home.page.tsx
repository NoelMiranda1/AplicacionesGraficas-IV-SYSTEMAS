/** @format */

import { useState } from "react";
import { Header } from "../components/header/header.component";

export const HomePage = () => {
  const [data, setData] = useState<any>(null);
  console.log("data", data);
  return (
    <div>
      <Header setData={(e: any) => setData(e)} />
    </div>
  );
};
