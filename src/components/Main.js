import Project from "./Project.js";

import restaScreenshot from "../restaurantScreen.jpg";
import chatAppScreen from "../chatAppScreen.jpg";
import cookbookDBScreen from "../cookbookDBScreen.jpg";
import movieDBScreen from "../movieDBScreen.jpg";
import taskManagerScreen from "../taskManagerScreen.jpg";
import weatherMap from "../weatherMap.jpg";
const projects = [
  <Project
    key="p1"
    name="FAKE RESTAURANT"
    class="projectU"
    img={restaScreenshot}
    code="https://github.com/RomanZujev/Restaurant"
  />,
  <Project
    key="p2"
    name="TASK MANAGER"
    class="projectU"
    img={taskManagerScreen}
  />,
  <Project
    key="p3"
    name="MOVIE DATABASE"
    class="projectU"
    img={movieDBScreen}
  />,
  <Project key="p4" name="COOCKBOOK" class="projectU" img={cookbookDBScreen} />,
  <Project
    key="p5"
    name="CHATAPP"
    class="project"
    img={chatAppScreen}
    code="https://github.com/RomanZujev/chat-app"
  />,
  <Project
    key="p6"
    name="API WEATHER"
    class="project"
    img={weatherMap}
    code="https://github.com/RomanZujev/weathermap"
  />,
];

export default function Main() {
  return (
    <div id="main">
      <span id="projectLogo">PROJECTS</span>
      <br />
      <div className="projectsContainer">{projects}</div>
    </div>
  );
}
