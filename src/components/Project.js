export default function Project(props) {
  function openNewTab(target) {
    window.open(target, "_blank");
  }

  return (
    <div className={props.class}>
      <img
        className="prImg"
        onClick={() =>
          props.name != "ChatApp server api"
            ? openNewTab(props.url)
            : openNewTab(props.code)
        }
        src={props.img}
        alt={props.name + " img"}
      />
      <div className="projectTitle">{props.name}</div>
      <p className="prUsing">{props.using}</p>
      <p className="prHosted">{props.hosted}</p>
      <div className="buttons">
        {props.name != "ChatApp server api" ? (
          <button className="prBtn" onClick={() => openNewTab(props.url)}>
            WebPage
          </button>
        ) : null}
        <button className="prBtn" onClick={() => openNewTab(props.code)}>
          GitHub
        </button>
      </div>
    </div>
  );
}
