import "./Header.scss";
import FooterIcon from "./Footer/FooterIcon";
import git from "../git.svg";
import linkedIn from "../linkedin.svg";
import email from "../email.svg";
export default function Footer(props) {
  function openGit() {
    window.open("https://github.com/RomanZujev", "_blank");
  }
  function openWP() {
    window.open("https://www.linkedin.com/in/roman-zujev-a06a51238/");
  }
  return (
    <footer>
      <div id="techIcons">
        <FooterIcon url="skillIcons/js.svg" txt="JavaScript" />
        <FooterIcon url="skillIcons/ts.svg" txt="TypeScipt" />
        <FooterIcon url="skillIcons/mongodb.svg" txt="MongoDB" />
        <FooterIcon url="skillIcons/react.svg" txt="ReactJS" />
        <FooterIcon url="skillIcons/sass.svg" txt="Sass" />
        <FooterIcon url="skillIcons/html.svg" txt="HTML" />
        <FooterIcon url="skillIcons/css.svg" txt="CSS" />
        <FooterIcon url="skillIcons/azure.svg" txt="Azure" />
        <FooterIcon url="skillIcons/nodejs.svg" txt="NodeJS" />
        <FooterIcon url="skillIcons/express.svg" txt="Express" />
        <FooterIcon url="skillIcons/docker.svg" txt="Docker" />
      </div>
      <div id="techIconsGlow">
        <FooterIcon url="skillIcons/js.svg" txt="JavaScript" />
        <FooterIcon url="skillIcons/ts.svg" txt="TypeScipt" />
        <FooterIcon url="skillIcons/mongodb.svg" txt="MongoDB" />
        <FooterIcon url="skillIcons/react.svg" txt="ReactJS" />
        <FooterIcon url="skillIcons/sass.svg" txt="Sass" />
        <FooterIcon url="skillIcons/html.svg" txt="HTML" />
        <FooterIcon url="skillIcons/css.svg" txt="CSS" />
        <FooterIcon url="skillIcons/azure.svg" txt="Azure" />
        <FooterIcon url="skillIcons/nodejs.svg" txt="NodeJS" />
        <FooterIcon url="skillIcons/express.svg" txt="Express" />
        <FooterIcon url="skillIcons/docker.svg" txt="Docker" />
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
