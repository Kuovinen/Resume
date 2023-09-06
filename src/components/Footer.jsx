//THIS COMPONENT HOLDS BOTH TECH ITEMS AND PERSONAL ICONS FOR CONTACT

import "./Header.scss";
import FooterIcon from "./Footer/FooterIcon";
import git from "../git.svg";
import linkedIn from "../linkedin.svg";
import email from "../email.svg";
import projects from "./projectData";
export default function Footer(props) {
  const currentProject = props.currentPr;
  function openGit() {
    window.open("https://github.com/RomanZujev", "_blank");
  }
  function openWP() {
    window.open("https://www.linkedin.com/in/roman-zujev-a06a51238/");
  }
  const iconData = [
    { url: "skillIcons/js.svg", txt: "JavaScript" },
    { url: "skillIcons/ts.svg", txt: "TypeScipt" },
    { url: "skillIcons/mongodb.svg", txt: "MongoDB" },
    { url: "skillIcons/react.svg", txt: "ReactJS" },
    { url: "skillIcons/sass.svg", txt: "Sass" },
    { url: "skillIcons/html.svg", txt: "HTML" },
    { url: "skillIcons/css.svg", txt: "CSS" },
    { url: "skillIcons/azure.svg", txt: "Azure" },
    { url: "skillIcons/nodejs.svg", txt: "NodeJS" },
    { url: "skillIcons/express.svg", txt: "Express" },
    { url: "skillIcons/docker.svg", txt: "Docker" },
  ];

  return (
    <footer>
      <div id="techIcons">
        {iconData.map((element) => (
          <FooterIcon url={element.url} txt={element.txt} glow={0} />
        ))}
      </div>
      <div id="techIconsGlow">
        {iconData.map((element) => {
          const glow = projects[currentProject].tech.includes(element.txt)
            ? 1
            : 0;
          return <FooterIcon url={element.url} txt={element.txt} glow={glow} />;
        })}
      </div>
      <div className="contactIcons">
        <img src={linkedIn} alt="linkedIn" className="icon1" onClick={openWP} />
        <img src={git} alt="git" className="icon2" onClick={openGit} />
        <a className="address" href="mailto:emil.kuovinen@gmail.com">
          <img src={email} alt="email" className="icon3" />
        </a>
      </div>
    </footer>
  );
}
