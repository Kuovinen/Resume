import { Canvas } from "@react-three/fiber";

import Experience from "./Experience";
import Overlay from "./Overlay";
export default function Project(props) {
  return (
    <div id="projectsContainer">
      <Overlay />
      <Canvas
        camera={{
          zoom: 2,
          fov: 45,
          position: [0, -2, 0],
        }}
      >
        <Experience></Experience>
      </Canvas>
    </div>
  );
}
//<Canvas camera={{ zoom: 2, fov: 45, position: [0, -2, 0]}}>
