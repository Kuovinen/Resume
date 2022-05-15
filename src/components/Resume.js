export default function Resume(props) {
  return (
    <div id="resume" style={{ display: props.visibility }}>
      <div className="closer" onClick={props.handler}>
        X
      </div>
      <p id="bio">
        Hello, my name is Roman and I'm a self taught web developer. I've always
        had a love for all things programming and on this page you will find
        both projects and information on the skills I have acquired in this
        field.
      </p>
      <section id="skills">
        <ul>
          <li className="li1">
            WebDev:{" "}
            <span className="tech">
              HTML, CSS, JavaScript, React, Redux, Bootstrap, NodeJS, SQL
            </span>
          </li>
          <li className="li1">
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
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}
