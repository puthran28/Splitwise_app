import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";

export default function Home() {
  console.log("API IS", API);

  return (
    <Base title="Split Wise" description="Welcome to the App ;)">
      
    </Base>
  );
}
