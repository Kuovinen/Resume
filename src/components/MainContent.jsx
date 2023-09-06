//THIS IS THE GENERAL CONTAINER FOR THE MAIN CONTENT
//3D elements beneath an overlay

import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience3D";
import Overlay from "./Overlay";
import projects from "./projectData";

export default function Project(props) {
  const [currentPr, setCurrentPr] = React.useState(0);
  return (
    <div id="projectsContainer">
      <Overlay
        currentPr={currentPr}
        setCurrentPr={setCurrentPr}
        projects={projects}
      />
      <Canvas
        dpr={[2, 2]}
        camera={{
          zoom: 1.7,
          fov: 45,
          position: [0, -2, 0],
          far: 200,
        }}
      >
        <Experience
          projectName={projects[currentPr].name}
          currentPr={currentPr}
          length={projects.length}
        ></Experience>
      </Canvas>
    </div>
  );
}
/*
      <Canvas
        camera={{
          zoom: 1.7,
          fov: 45,
          position: [0, -2, 0],
          far: 15,
        }}
      >
*/
/*


*/
