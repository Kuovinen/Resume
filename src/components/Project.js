export default function Project(props) {
  function openNewTab(target) {
    window.open(target, "_blank");
  }

  return (
    <div className={props.class}>
      <img src={props.img} alt={props.name + " img"} />
      <div className="projectTitle">{props.name}</div>
      <div className="buttons">
        <button onClick={() => openNewTab(props.code)}>GITHUB</button>
        <button onClick={() => openNewTab(props.url)}>WEBSITE</button>
      </div>
    </div>
  );
}
