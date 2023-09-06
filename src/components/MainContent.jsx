//THIS IS THE GENERAL CONTAINER FOR THE MAIN CONTENT
//3D elements beneath an overlay
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience3D";
import Overlay from "./Overlay";
export default function Project(props) {
  return (
    <div id="projectsContainer">
      <Overlay />
      <Canvas
        dpr={[2, 2]}
        camera={{
          zoom: 1.7,
          fov: 45,
          position: [0, -2, 0],
          far: 200,
        }}
      >
        <Experience></Experience>
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
