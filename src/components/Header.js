import Topic from "./Topic.js";
import git from "../git.svg";
import wordPress from "../wordpress.svg";
import scrollDown from "./handlers.js";
export default function Header(props) {
  function openGit() {
    window.open("https://github.com/RomanZujev", "_blank");
  }
  function openWP() {
    window.open("https://zeroonenotes.wordpress.com");
  }
  return (
    <header>
      <div className="headContainer1">
        <h1>ROMAN ZUJEV</h1>

        <div className="iconsContainer">
          <img
            src={wordPress}
            alt="wordPress"
            className="icon"
            onClick={openWP}
          />
          <img src={git} alt="git" className="icon" onClick={openGit} />
        </div>
      </div>
      <div className="divider"></div>
      <div className="headContainer2">
        <Topic key="t1" name="RESUME" eventHandler={props.resumeHandler} />
        <Topic key="t2" name="PROJECTS" eventHandler={scrollDown} />
        <Topic key="t3" name="CONTACT" eventHandler={props.contactHandler} />
      </div>
      <div className="addressContainer">
        <div className="adress">roman.zujev@gmail.com</div>
        <div className="verticalLine"></div>
      </div>
    </header>
  );
}
