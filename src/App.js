import React, { useState } from "react";

import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Resume from "./components/Resume.js";
import scrollDown from "./components/handlers.js";

function App() {
  let [resumeVisibility, setResumeVisibility] = useState("block");
  function toggleResume() {
    console.log("clickedResume");
    resumeVisibility === "block"
      ? setResumeVisibility("none")
      : setResumeVisibility("block");
  }

  return (
    <div className="App">
      <br />
      <Header key="header" resumeHandler={toggleResume} />
      <Resume handler={toggleResume} visibility={resumeVisibility} />
      <br />
      <div className="arrow" onClick={scrollDown}></div>
      <br />
      <Main key="main" />
    </div>
  );
}

export default App;
