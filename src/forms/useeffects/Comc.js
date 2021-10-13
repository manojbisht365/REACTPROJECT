import React from "react";
import { Firstname } from "../App";
export default function Comc() {
  return (
    <div>
      <Firstname.Consumer>
        {(fname) => {
          return <h1>hello {fname}</h1>;
        }}
      </Firstname.Consumer>
      <h1>hello form c</h1>
    </div>
  );
}
