export default function Project(props) {
  return (
    <div className={props.class}>
      <img src={props.img} alt={props.name + " img"} />
      <div className="projectTitle">{props.name}</div>
      <div className="buttons">
        <button>CODE</button>
        <button>PROJECT</button>
      </div>
    </div>
  );
}
