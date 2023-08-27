import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
export default function Project(props) {
  return (
    <div id="projectsContainer">
      <Canvas>
        <Experience></Experience>
      </Canvas>
    </div>
  );
}
