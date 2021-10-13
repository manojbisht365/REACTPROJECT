import React from "react";
import { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState(" ");

  const cnvrtUPPERCSE = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const cnvrtLOWERCASE = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleClick = (e) => {
    setText(e.target.value);
  };

  const handleRemoveSpace = () => {
    let newtext = text.replace(/\s+/g, " ").trim();
    setText(newtext);
  };

  return (
    <div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          {props.Title}
        </label>

        <textarea
          className="form-control my-8"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleClick}
        />
        <div className="container">
          <button onClick={cnvrtUPPERCSE} className="btn btn-primary mx-1 my-3">
            Convert to UPPERCASE
          </button>

          <button
            onClick={cnvrtLOWERCASE}
            className="btn btn-primary mx-1 my-3"
          >
            Convert to lowercase
          </button>
          <button
            onClick={handleRemoveSpace}
            className="btn btn-primary mx-1 my-3"
          >
            Remove space
          </button>
        </div>
        <div className="container">
          <h1>Yout Text Summary</h1>
          <p>
            {text.split(" ").length} words and {text.length}
          </p>
        </div>
      </div>
    </div>
  );
}
