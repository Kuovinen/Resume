//THIS CONTAINS ALL THE INFORMATION NEEDED TO OUTPUT THE PROJECT INFORMATION

const projects = [
  {
    key: "p2",
    name: "NoteTaker",
    description: (
      <span>
        A{" "}
        <u>
          <b>full-stack</b>
        </u>{" "}
        React memo taking app written in <b>TypeScript</b> and hosted on Netlify
        that also contains it's own <b>Node.Js/Express</b> server that's written
        in <b>JavaScript</b> and hosted on <b>AWS</b> under it's own domain name
        as well as using <b>MongoDB</b> as a database hosted on their{" "}
        <b>Atlas</b> service. Created to bring all the individual components I
        have studied into one cohesive whole.
      </span>
    ),
    img: process.env.PUBLIC_URL + "projectImages/noteTaker.jpg",
    tech: ["MongoDB", "NodeJS", "ReactJS", "TypeScipt", "Express", "AWS"],
    using: "TypeScript, React, Express.js, MongoDb",
    hosted: "AWS & Netlify",
    code: "https://github.com/RomanZujev/rnotes",
    url: "https://rznotes.netlify.app/",
  },
  {
    key: "p3",
    name: "Forecast",
    description: (
      <span>
        A React app written in JavaScript and testesd with <b>Jest</b> that
        coordinates the <b>google maps API</b> for map presentation with a
        Chinese <b>weather data API</b> weather data API for the forecast data
        and a <b>Geonames API</b> for location information all formatted into a
        weather report app using <b>Bootstrap</b> for easy styling.
      </span>
    ),
    img: process.env.PUBLIC_URL + "projectImages/weatherMap.jpg",
    tech: ["ReactJS", "JavaScript", "Bootstrap", "Jest"],
    using: "GoogleMaps API, 7Timer weather API,  Geonames API, Bootstrap ",
    hosted: "Netlify",
    code: "https://github.com/RomanZujev/weathermap",
    url: "https://rzweathermap.netlify.app/",
  },

  {
    key: "p1",
    name: "Restaurant",
    description: (
      <span>
        A React app written in <b>JavaScript</b> uses Redux for state management
        and <b>Sass</b> for styling. Since writing a backend seemed excessive I
        handled the user account creation and login using <b>session storage</b>
        which ofcourse would not a the real life approach, but works as a simple
        alternative.
      </span>
    ),
    img: process.env.PUBLIC_URL + "projectImages/restaurantScreen.jpg",
    tech: ["ReactJS", "JavaScript", "Sass"],
    using: "React, Redux, Sass, SessionStorage",
    hosted: "Netlify",
    code: "https://github.com/RomanZujev/Restaurant",
    url: "https://restlacasa.netlify.app/",
  },
  {
    key: "p4",
    name: "DayPlanEr",
    description: (
      <span>
        A simple React application written in JavaScript that uses LocalStorage
        to save note data into individual daily tasks.
      </span>
    ),
    img: process.env.PUBLIC_URL + "projectImages/taskManagerScreen.jpg",
    tech: ["ReactJS", "JavaScript"],
    using: "React and LocalStorage",
    hosted: "Netlify",
    code: "https://github.com/RomanZujev/TaskManager",
    url: "https://rztaskmanager.netlify.app/",
  },

  {
    key: "p5",
    name: "ColorTools",
    description: (
      <span>
        This was created using purely JavaScript with no front-end or CSS
        frameworks to show that I can indeed work without those prefabricated
        tools.
      </span>
    ),
    img: process.env.PUBLIC_URL + "projectImages/colorTools.jpg",
    tech: ["JavaScript"],
    using: "pure JavaScript",
    hosted: "FireBase",
    code: "https://github.com/RomanZujev/ColorTools",
    url: "https://rzcolortools.firebaseapp.com/",
  },
  {
    key: "p6",
    name: "CookBook",
    description: (
      <span>My first front-end, non framework project, using TypeScript</span>
    ),
    img: process.env.PUBLIC_URL + "projectImages/cookbookDBScreen.jpg",
    tech: ["TypeScipt"],
    using: "TypeScript, Webpack",
    hosted: "FireBase",
    code: "https://github.com/RomanZujev/CookBook/tree/portfolio",
    url: "https://zrcookbook.firebaseapp.com/",
  },
  {
    key: "p7",
    name: "ChatApp*",
    description: (
      <span>
        A React chat applilcation written in TypeScript.
        <br />
        <span className="ylw">* This project is under development</span>
      </span>
    ),
    img: process.env.PUBLIC_URL + "projectImages/chatAppScreen.jpg",
    tech: ["TypeScipt", "ReactJS"],
    using: "React, TypeScript",
    hosted: "Not yet",
    code: "https://github.com/RomanZujev/chat-app",
    url: "https://github.com/RomanZujev/chat-app",
  },

  {
    key: "p7.1",
    name: "TimerApp",
    description: (
      <span>
        A <b>React Native</b> timer app for workouts. Written in JavaScript it
        uses the <b> Expo </b> framework. Runs on both IOS and Android.
        <br />
      </span>
    ),
    img: process.env.PUBLIC_URL + "projectImages/movieDBScreen.jpg",
    tech: ["JavaScript", "ReactJS"],
    using: "ReactJs, JavaScript",
    hosted: "Not yet",
    code: "https://github.com/Kuovinen/workoutTimerApp",
    url: "https://github.com/Kuovinen/workoutTimerApp",
  },
];
export default projects;
