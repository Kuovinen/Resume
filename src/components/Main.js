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
    name="Restaurant template"
    class="project"
    img={restaScreenshot}
    using="React, Redux, SessionStorage"
    hosted="Netlify"
    code="https://github.com/RomanZujev/Restaurant"
    url="https://restlacasa.netlify.app/"
  />,
  <Project
    key="p2"
    name="Task manager"
    class="project"
    img={taskManagerScreen}
    using="React and LocalStorage"
    hosted="Netlify"
    code="https://github.com/RomanZujev/TaskManager"
    url="https://rztaskmanager.netlify.app/"
  />,
  <Project
    key="p6"
    name=" Weather report"
    class="project"
    img={weatherMap}
    using="
    GoogleMaps API, 
    7Timer weather API, 
    Geonames API,
    Bootstrap "
    hosted="Netlify"
    code="https://github.com/RomanZujev/weathermap"
    url="https://rztaskmanager.netlify.app/"
  />,
  <Project
    key="p4"
    name="Cookbook"
    class="project"
    img={cookbookDBScreen}
    using="pure JavaScript"
    hosted="FireBase"
    code="https://github.com/RomanZujev/CookBook/tree/portfolio"
    url="https://zrcookbook.firebaseapp.com/"
  />,
  <Project
    key="p5"
    name="ChatApp"
    class="projectU"
    img={chatAppScreen}
    using="React"
    hosted="FireBase"
    code="https://github.com/RomanZujev/chat-app"
    url="https://rztaskmanager.netlify.app/"
  />,

  <Project
    key="p3"
    name="ChatApp server api"
    class="projectU"
    img={movieDBScreen}
    using="NodeJs"
    hosted="LightSale"
    code="https://github.com/RomanZujev/chat-app/tree/main/jabi_server"
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
