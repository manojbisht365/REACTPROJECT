import React, { useState, UseReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  return state;
};

const useReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div></div>
    </>
  );
};
