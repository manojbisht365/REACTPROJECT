// import About from "./BLOG/About";
import Navbar from "./BLOG/Navbar";
import Textform from "./BLOG/Textform";
import About from "./BLOG/About";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("dark");

  const toogleMode = () => {
    if (mode === "light") {
      setmode("dark");
    } else {
      setmode("light");
    }
  };
  return (
    <div>
      <Navbar Title="TextUtils" mode={mode} toogleMode={toogleMode} />
      <div className="container">
        <Textform />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
