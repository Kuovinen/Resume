import "./Header.scss";
import FooterIcon from "./Footer/FooterIcon";
export default function Footer(props) {
  return (
    <footer>
      <FooterIcon url="skillIcons/docker.svg" txt="Docker" />
      <FooterIcon url="skillIcons/mongodb.svg" txt="MongoDB" />
      <FooterIcon url="skillIcons/react.svg" txt="ReactJS" />
      <FooterIcon url="skillIcons/sass.svg" txt="Sass" />
      <FooterIcon url="skillIcons/html.svg" txt="HTML" />
      <FooterIcon url="skillIcons/css.svg" txt="CSS" />
      <FooterIcon url="skillIcons/azure.svg" txt="Azure" />
      <FooterIcon url="skillIcons/nodejs.svg" txt="NodeJS" />
      <FooterIcon url="skillIcons/js.svg" txt="JavaScript" />
      <FooterIcon url="skillIcons/ts.svg" txt="TypeScipt" />
      <FooterIcon url="skillIcons/express.svg" txt="Express" />
    </footer>
  );
}
