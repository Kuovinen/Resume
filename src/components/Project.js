export default function Project(props) {
  function openNewTab(target) {
    window.open(target, "_blank");
  }

  return (
    <div className={props.class}>
      <img className="prImg" src={props.img} alt={props.name + " img"} />
      <div className="projectTitle">{props.name}</div>
      <p className="prDescription">{props.desc}</p>
      <div className="buttons">
        <button className="prBtn" onClick={() => openNewTab(props.url)}>
          WebPage
        </button>
        <button className="prBtn" onClick={() => openNewTab(props.code)}>
          GitHub
        </button>
      </div>
    </div>
  );
}
