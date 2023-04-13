export default function Resume(props) {
  function hideResume() {
    props.resRef.current.className = "resumeContainer";
  }
  return (
    <div
      className="resumeContainer"
      ref={props.resRef}
      onClick={() => hideResume()}
    >
      {/*`<button className="closer" onClick={props.handler}>close</button>`*/}
      <div className="content">
        <p id="bio">
          Hello, my name is Roman and I'm a self taught web developer. I've
          always had a love for all things programming and on this page you will
          find both projects and information on the skills I have acquired in
          this field.
        </p>
        <section id="skills">
          Skills:
          <ul>
            <li className="li1">
              Front-End:
              <span className="tech">
                {" "}
                React, JavaScript, TypeScript, Redux,HTML, CSS, Bootstrap, Sass
              </span>
            </li>
            <li className="li1">
              Back-End:
              <span className="tech">
                {" "}
                Node.js, Express.js, MongoDb, SQL, Python
              </span>
            </li>
            <li className="li1">
              Full stack: <span className="tech"> Azure, Docker, AWS, Git</span>
            </li>
          </ul>
        </section>
        <section>
          Tools:
          <ul id="toolsList">
            <li>
              Image edititng:
              <span className="tools">Photoshop, Krita, ClipStudioPaint</span>
            </li>
            <li>
              3D modeling:{" "}
              <span className="tools">ArchiCAD, Revit, Blender</span>
            </li>
            <li>
              Vector drawing:{" "}
              <span className="tools">Figma, AutoCAD, Inkscape</span>
            </li>
          </ul>{" "}
        </section>
      </div>
    </div>
  );
}
