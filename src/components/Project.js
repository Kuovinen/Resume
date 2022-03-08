export default function Project(props) {
  return (
    <div className="project">
      <div className="img"></div>
      <div className="projectTitle">{props.name}</div>
      <div className="buttons">
        <button>CODE</button>
        <button>PROJECT</button>
      </div>
    </div>
  );
}
