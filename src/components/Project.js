export default function Project(props) {
  function openNewTab(target) {
    window.open(target, "_blank");
  }

  return (
    <div className={props.class}>
      <img
        className="prImg"
        onClick={() =>
          props.name !== "ChatApp server api"
            ? openNewTab(props.url)
            : openNewTab(props.code)
        }
        src={props.img}
        alt={props.name + " img"}
      />

      <div className="titleContainer">
        <div className="projectTitle">{props.name}</div>
        <div className="aniContaineThree">
          <div className="box1-3"></div>
          <div className="box2-3"></div>
          <div className="box3-3"></div>
          <div className="box4-3"></div>
          <div className="box5-3"></div>
          <div className="box6-3"></div>
        </div>
      </div>

      <p className="prHosted">{props.hosted}</p>
      <p className="prUsing">{props.using}</p>

      <div className="buttons">
        <button className="prBtn" onClick={() => openNewTab(props.code)}>
          GitHub
        </button>
        {props.name !== "ChatApp server api" ? (
          <button className="prBtn" onClick={() => openNewTab(props.url)}>
            WebPage
          </button>
        ) : null}
      </div>
    </div>
  );
}
