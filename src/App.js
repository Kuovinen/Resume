import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
function App() {
  const resumeContainerElRef = React.useRef(<div></div>);

  return (
    <div className="App">
      <div className="overlay1">
        <div className="overlay2"></div>
      </div>
      <Header resRef={resumeContainerElRef} />
      <main>
        <Resume resRef={resumeContainerElRef} />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
