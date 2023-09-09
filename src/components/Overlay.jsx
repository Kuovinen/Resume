//THIS IS A 2D OVERLAY ABOVE THE 3D CARUSEL

export default function Overlay(props) {
  const { setCurrentPr, currentPr, projects } = { ...props };
  const length = props.projects.length;
  const currentProjectNumber =
    currentPr >= length ? currentPr - length : currentPr;
  console.log(currentProjectNumber);
  console.log(length);
  function openNewTab(target) {
    window.open(target, "_blank");
  }
  function buttonClick(direction) {
    if (currentPr === length * 2 - 1 && direction > 0) {
      setCurrentPr(() => 0);
    } else if (currentPr === 0 && direction < 0) {
      setCurrentPr(() => length * 2 - 1);
    } else setCurrentPr((original) => original + direction);
  }
  return (
    <div className={"overlay"}>
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
    </div>
  );
}
