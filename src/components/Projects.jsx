import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Overlay from "./Overlay";
export default function Project(props) {
  return (
    <div id="projectsContainer">
      <Overlay />
      <Canvas>
        <Experience></Experience>
      </Canvas>
    </div>
  );
}
