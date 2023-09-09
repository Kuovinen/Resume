//THIS IS A 2D OVERLAY ABOVE THE 3D CARUSEL
import React from "react";
export default function Overlay(props) {
  const { setCurrentPr, currentPr, projects } = { ...props };
  const length = props.projects.length;
  const currentProjectNumber =
    currentPr >= length ? currentPr - length : currentPr;
  function openNewTab(target) {
    window.open(target, "_blank");
  }
  //for next/previous project buttons
  function buttonClick(direction) {
    if (currentPr === length * 2 - 1 && direction > 0) {
      setCurrentPr(() => 0);
    } else if (currentPr === 0 && direction < 0) {
      setCurrentPr(() => length * 2 - 1);
    } else setCurrentPr((original) => original + direction);
  }

  const curtain = React.useRef(null);

  return (
    <div>
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
      <section className={"overlay"}>
        <div className="info">
          <p className="description">
            {projects[currentProjectNumber].description}
          </p>
          <button
            className="gitbtn"
            onClick={() => openNewTab(projects[currentProjectNumber].code)}
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
      </section>
    </div>
  );
}
