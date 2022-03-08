import Project from "./Project.js";

const projects = [
  <Project name="RESTAURANT" />,
  <Project name="TASK MANAGER" />,
  <Project name="MOVIE DATABASE" />,
  <Project name="COOCKBOOK" />,
  <Project name="CHATAPP" />,
  <Project name="MOVIE DATABASE" />,
];

export default function Main() {
  return (
    <div id="main">
      <span>PROJECTS</span>
      <br />
      <div className="projectsContainer">{projects}</div>
    </div>
  );
}
