import Topic from "./Topic.js";
import git from "../git.svg";
import linkedIn from "../linkedin.svg";
import email from "../email.svg";
import at from "../at.svg";
import scrollDown from "./handlers.js";
export default function Header(props) {
  function openGit() {
    window.open("https://github.com/RomanZujev", "_blank");
  }
  function openWP() {
    window.open("https://www.linkedin.com/in/roman-zujev-a06a51238/");
  }
  function toClipboard() {
    navigator.clipboard.writeText("roman.zujev@gmail.com");
  }
  return (
    <header>
      <div className="headContainer1">
        <h1>
          <div className="firstName">ROMAN</div>
          <div className="lastName">ZUJEV</div>
        </h1>
        <span id="copyAddd">click to copy address ↓</span>
        <button className="address" onClick={toClipboard}>
          roman.zujev <img src={at} alt="@" className="icon4" /> gmail.com
        </button>
      </div>
      <div className="divider"></div>
      <div className="headContainer2">
        <Topic key="t2" name="Projects" eventHandler={scrollDown} />
        <Topic key="t3" name="Contact" eventHandler={props.contactHandler} />
        <Topic key="t1" name="Resume" eventHandler={props.resumeHandler} />

        <div className="iconsContainer">
          <img
            src={linkedIn}
            alt="linkedIn"
            className="icon1"
            onClick={openWP}
          />
          <img src={git} alt="git" className="icon2" onClick={openGit} />
          <a className="address" href="mailto:roman.zujev@gmail.com">
            <img src={email} alt="email" className="icon3" />
          </a>
        </div>
      </div>
      <div className="addressContainer">
        <div className="verticalLine"></div>
        <a className="slogan"> {"<<webDesign"}</a>
      </div>
    </header>
  );
}
