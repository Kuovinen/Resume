export default function Topic(props) {
  return (
    <div className="topic" onClick={props.eventHandler}>
      {props.name}
    </div>
  );
}
