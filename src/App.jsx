import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import MainContent from "./components/MainContent";
function App() {
  const resumeElRef = React.useRef(<div></div>);
  const contactElRef = React.useRef(<div></div>);
  const [currentPr, setCurrentPr] = React.useState(0);
  const curtain = React.useRef(null);
  return (
    <div className="App">
      <div className="overlay1">
        <div className="overlay2"></div>
      </div>
      <Header resRef={resumeElRef} conRef={contactElRef} />
      <main>
        <section
          ref={curtain}
          className="curtain"
          onClick={() => {
            curtain.current.innerHTML = "";
            curtain.current.className = "curtain curtainUp";
          }}
        >
          PROJECTS
        </section>
        <Resume resRef={resumeElRef} conRef={contactElRef} />
        <Contact conRef={contactElRef} resRef={resumeElRef} />
        <MainContent currentPr={currentPr} setCurrentPr={setCurrentPr} />
      </main>
      <Footer currentPr={currentPr} />
    </div>
  );
}

export default App;
