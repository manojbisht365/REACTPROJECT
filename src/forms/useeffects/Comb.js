import React, { useContext } from "react";
import { Firstname } from "../../App";
import { Lastname } from "../../App";

export const Comb = () => {
  const fname = useContext(Firstname);
  const lname = useContext(Lastname);
  return (
    <div>
      <h1>Firstname is{fname}</h1>
      <h1>Firstname is{lname}</h1>
    </div>
  );
};
