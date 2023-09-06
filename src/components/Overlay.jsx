//THIS IS A 2D OVERLAY ABOVE THE 3D CARUSEL

export default function Overlay(props) {
  const { setCurrentPr, currentPr, projects } = { ...props };
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
