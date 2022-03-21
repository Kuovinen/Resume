export default function Project(props) {
  function openNewTab() {
    window.open(props.code, "_blank");
  }
  return (
    <div className={props.class}>
      <img src={props.img} alt={props.name + " img"} />
      <div className="projectTitle">{props.name}</div>
      <div className="buttons">
        <button onClick={openNewTab}>CODE</button>
        <button>PROJECT</button>
      </div>
    </div>
  );
}
