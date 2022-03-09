import React, { useState } from "react";

import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Resume from "./components/Resume.js";
import Contact from "./components/Contact.js";
import scrollDown from "./components/handlers.js";

function App() {
  let [resumeVisibility, setResumeVisibility] = useState("none");
  function toggleResume() {
    //Hide RESUME if shown. Otherwise show RESUME, but also close CONTACT.
    if (resumeVisibility === "block") {
      setResumeVisibility("none");
    } else {
      if (contactVisibility === "grid") {
        setContactVisibility("none");
      }
      setResumeVisibility("block");
    }
  }
  let [contactVisibility, setContactVisibility] = useState("none");
  function toggleContact() {
    //Hide CONTACT if shown. Otherwise show CONTAT, but also close RESUME.
    if (contactVisibility === "grid") {
      setContactVisibility("none");
    } else {
      if (resumeVisibility === "block") {
        setResumeVisibility("none");
      }
      setContactVisibility("grid");
    }
  }

  return (
    <div className="App">
      <br />
      <Header
        key="header"
        resumeHandler={toggleResume}
        contactHandler={toggleContact}
      />
      <Resume handler={toggleResume} visibility={resumeVisibility} />
      <Contact handler={toggleContact} visibility={contactVisibility} />
      <br />
      <div className="arrow" onClick={scrollDown}></div>
      <br />
      <Main key="main" />
    </div>
  );
}

export default App;
