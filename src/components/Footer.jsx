//THIS COMPONENT HOLDS BOTH TECH ITEMS AND PERSONAL ICONS FOR CONTACT

import "./Header.scss";
import FooterIcon from "./Footer/FooterIcon";
import git from "../git.svg";
import linkedIn from "../linkedin.svg";
import email from "../email.svg";
import projects from "./projectData";
export default function Footer(props) {
  const currentProject =
    props.currentPr >= projects.length
      ? props.currentPr - projects.length
      : props.currentPr; //because I had to double the number of project items
  //I now need to make the duplicate batch have the same project numbers
  //as the original because it's originally one array
  function openGit() {
    window.open("https://github.com/Kuovinen", "_blank");
  }
  function openWP() {
    window.open("https://www.linkedin.com/in/emil-kuovinen-a06a51238/");
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
    { url: "skillIcons/awsl.svg", txt: "AWS" },
    { url: "skillIcons/jest.svg", txt: "Jest" },
  ];

  return (
    <footer>
      <div id="techIconsGlow">
        {iconData.map((element) => {
          const glow = projects[currentProject].tech.includes(element.txt)
            ? 1
            : 0;
          return (
            <FooterIcon
              key={crypto.randomUUID()}
              url={element.url}
              txt={element.txt}
              glow={glow}
              glowMore={0}
            />
          );
        })}
      </div>

      <div id="techIcons">
        {iconData.map((element) => {
          const glowMore = projects[currentProject].tech.includes(element.txt)
            ? 1
            : 0;
          return (
            <FooterIcon
              key={crypto.randomUUID()}
              url={element.url}
              txt={element.txt}
              glow={0}
              glowMore={glowMore}
            />
          );
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
