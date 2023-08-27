import React from "react";
import projects from "./projectData";
export default function Overlay(props) {
  const [currentPr, setCurrentPr] = React.useState(0);
  function openNewTab(target) {
    window.open(target, "_blank");
  }
  function buttonClick(direction) {
    if (currentPr === projects.length - 1 && direction > 0) {
      setCurrentPr(() => 0);
    } else if (currentPr === 0 && direction < 0) {
      setCurrentPr(() => projects.length - 1);
    } else setCurrentPr((original) => original + direction);
  }
  return (
    <div className={"overlay"}>
      <div className="info">
        <p className="description">{projects[currentPr].description}</p>
        <button
          className="gitbtn"
          onClick={() => openNewTab(projects[currentPr].code)}
        >
          GitHub
        </button>
      </div>

      <button className="btnBack" onClick={() => buttonClick(-1)}>
        {"<"}
      </button>

      <button className="btnFrwrd" onClick={() => buttonClick(1)}>
        {">"}
      </button>
    </div>
  );
}
