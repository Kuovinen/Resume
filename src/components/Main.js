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
    name="Restaurant expample"
    class="project"
    img={restaScreenshot}
    desc="Restaurant page using React."
    code="https://github.com/RomanZujev/Restaurant"
    url="https://rztaskmanager.netlify.app/"
  />,
  <Project
    key="p2"
    name="Task manager app"
    class="project"
    img={taskManagerScreen}
    desc="Task manager app page using React and localstrogae."
    code="https://github.com/RomanZujev/TaskManager"
    url="https://rztaskmanager.netlify.app/"
  />,
  <Project
    key="p6"
    name=" Weather report"
    class="project"
    img={weatherMap}
    desc="Using:
    GoogleMaps API, 
    7Timer weather API 
    Geonames API
    Bootstrap "
    code="https://github.com/RomanZujev/weathermap"
    url="https://rztaskmanager.netlify.app/"
  />,
  <Project
    key="p4"
    name="Cookbook"
    class="project"
    img={cookbookDBScreen}
    desc="Simple coockbook website using pure JavaScript"
    code="https://github.com/RomanZujev/CookBook"
    url="https://zrcookbook.firebaseapp.com/"
  />,
  <Project
    key="p5"
    name="Chat app"
    class="projectU"
    img={chatAppScreen}
    desc="React based chat application with it's own messaging server."
    code="https://github.com/RomanZujev/chat-app"
    url="https://rztaskmanager.netlify.app/"
  />,

  <Project
    key="p3"
    name="Chat app server api"
    class="projectU"
    img={movieDBScreen}
    desc="Messaging server for the React based chat application."
    url="https://rztaskmanager.netlify.app/"
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
