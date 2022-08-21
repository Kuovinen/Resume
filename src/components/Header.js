import Topic from "./Topic.js";
import Topic2 from "./Topic2.js";
import git from "../git.svg";
import linkedIn from "../linkedin.svg";
import email from "../email.svg";
import at from "../at.svg";

import ThreeejsO from "./ThreejsO.js";
import "./Header.css";

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
  function boxInterract(className) {
    document.querySelector(`.${className}`).style.display = "none";
  }
  function boxOneInterract(className) {
    document.querySelector(`.${className}`).style.background =
      "var(--cp-lYellow)";
  }
  function boxTwoReset() {
    document.querySelector(".box1-2").style.display = "block";
    document.querySelector(".box2-2").style.display = "block";
    document.querySelector(".box3-2").style.display = "block";
    document.querySelector(".box5-2").style.display = "block";
    document.querySelector(".box6-2").style.display = "block";
  }
  return (
    <header>
      <div className="headContainer1">
        <h1>
          <div className="firstName">
            <span className="nameLetters">R</span>
            {/*<ThreeejsO />*/}
            <span className="letterO nameLetters">O</span>
            <span className="nameLetters">MAN</span>
          </div>
          <div className="lastName">ZUJEV</div>
        </h1>
        <span id="copyAddd">click to copy address ↓</span>
        <button className="address" onClick={toClipboard}>
          roman.zujev <img src={at} alt="@" className="icon4" /> gmail.com
        </button>
      </div>
      <div className="divider"></div>
      <div className="headContainer2">
        <Topic2 key="t2" name="Projects" />
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
        <span className="slogan"> {"<<webDevelopment"}</span>
      </div>
      <div className="aniContaineOne">
        <div
          className="box1"
          onClick={() => {
            boxOneInterract("box1");
          }}
        ></div>
        <div
          className="box2"
          onClick={() => {
            boxOneInterract("box2");
          }}
        ></div>
        <div
          className="box3"
          onClick={() => {
            boxOneInterract("box3");
          }}
        ></div>
        <div
          className="box4"
          onClick={() => {
            boxOneInterract("box4");
          }}
        ></div>
        <div
          className="box5"
          onClick={() => {
            boxOneInterract("box5");
          }}
        ></div>
        <div
          className="box6"
          onClick={() => {
            boxOneInterract("box6");
          }}
        ></div>
      </div>
      <div className="aniContaineTwo">
        <div
          className="box1-2"
          onClick={() => {
            boxInterract("box1-2");
          }}
        ></div>
        <div
          className="box2-2"
          onClick={() => {
            boxInterract("box2-2");
          }}
        ></div>
        <div
          className="box3-2"
          onClick={() => {
            boxInterract("box3-2");
          }}
        ></div>
        <div
          className="box4-2"
          onClick={() => {
            boxTwoReset();
          }}
        ></div>
        <div
          className="box5-2"
          onClick={() => {
            boxInterract("box5-2");
          }}
        ></div>
        <div
          className="box6-2"
          onClick={() => {
            boxInterract("box6-2");
          }}
        ></div>
      </div>
    </header>
  );
}
