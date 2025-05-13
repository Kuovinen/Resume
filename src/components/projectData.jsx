//THIS CONTAINS ALL THE INFORMATION NEEDED TO OUTPUT THE PROJECT INFORMATION

const projects = [
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
    tech: ["ReactJS", "JavaScript", "Bootstrap", "Jest", "HTML", "CSS"],
    using: "GoogleMaps API, 7Timer weather API,  Geonames API, Bootstrap ",
    hosted: "Netlify",
    code: "https://github.com/RomanZujev/weathermap",
    url: "https://rzweathermap.netlify.app/",
  },
  {
    key: "p7",
    name: "ChatApp",
    description: (
      <span>
        This is a fullstack MERN chat application with socket io. The front-end
        is <b>JavaScript</b> code using the <b>ReactJS</b> library, The backend
        is <b>NodeJS</b> using <b>ExpressJS</b> and <b>Mongoose</b>, the
        database is <b>MongoDB</b>.
      </span>
    ),
    img: process.env.PUBLIC_URL + "projectImages/chatAppScreen.jpg",
    tech: [
      "JavaScipt",
      "ReactJS",
      "MongoDB",
      "NodeJS",
      "Express",
      "HTML",
      "CSS",
    ],
    using: "React, TypeScript",
    hosted: "Not yet",
    code: "https://github.com/Kuovinen/ChatApp",
    url: "https://chatapp-o2zq.onrender.com",
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
    tech: ["ReactJS", "JavaScript", "Sass", "HTML", "CSS"],
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
    tech: ["ReactJS", "JavaScript", "HTML", "CSS"],
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
    tech: ["JavaScript", "HTML", "CSS"],
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
    tech: ["TypeScipt", "HTML", "CSS"],
    using: "TypeScript, Webpack",
    hosted: "FireBase",
    code: "https://github.com/RomanZujev/CookBook/tree/portfolio",
    url: "https://zrcookbook.firebaseapp.com/",
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
  {
    key: "p2",
    name: "ExpenseTracker",
    description: (
      <span>
        A{" "}
        <u>
          <b>Python</b>
        </u>{" "}
        expense traking app that uses <b>PySide6</b> to create a graphical
        interface, <b>Matplotlib</b> to generate graphs and <b>Pandas</b> for
        some lightweight data analysis sourced from .csv files that are used for
        data retention.
      </span>
    ),
    img: process.env.PUBLIC_URL + "projectImages/espenseTracker.jpg",
    tech: [],
    using: "",
    hosted: "",
    code: "https://github.com/Kuovinen/ExpenseTracker",
    url: "https://github.com/Kuovinen/ExpenseTracker",
  },
];
export default projects;
