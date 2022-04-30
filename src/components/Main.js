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
    using="React."
    hosted="Netlify"
    code="https://github.com/RomanZujev/Restaurant"
    url="https://rztaskmanager.netlify.app/"
  />,
  <Project
    key="p2"
    name="Task manager app"
    class="project"
    img={taskManagerScreen}
    using="React and localstrogae."
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
    code="https://github.com/RomanZujev/CookBook"
    url="https://zrcookbook.firebaseapp.com/"
  />,
  <Project
    key="p5"
    name="Chat app"
    class="projectU"
    img={chatAppScreen}
    using="React, Redux."
    hosted="FireBase"
    code="https://github.com/RomanZujev/chat-app"
    url="https://rztaskmanager.netlify.app/"
  />,

  <Project
    key="p3"
    name="Chat app server api"
    class="projectU"
    img={movieDBScreen}
    using="NodeJs."
    hosted="LightSale"
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
