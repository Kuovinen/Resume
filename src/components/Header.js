import Topic from "./Topic.js";
import git from "../git.svg";
export default function Header() {
  return (
    <header>
      <div className="headContainer1">
        <h1>ROMAN ZUJEV</h1>

        <div className="iconsContainer">
          <img src={git} alt="git" className="icon" />
          <img src={git} alt="git" className="icon" />
        </div>
      </div>
      <div className="divider"></div>
      <div className="headContainer2">
        <Topic name="RESUME" />
        <Topic name="PROJECTS" />
        <Topic name="CONTACT" />
      </div>
    </header>
  );
}
