import { OrbitControls, Text } from "@react-three/drei";
import ProjectBoxes from "./ProjectBox";

function Experience() {
  return (
    <>
      <group>
        <OrbitControls />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <ProjectBoxes />
        <Text>HELLO WORLD</Text>
      </group>
    </>
  );
}
export default Experience;

//<boxGeometry args={[0.01, 3, 4]} />
//<OrbitControls />
/*
        <mesh scale={100} position={[0, 0, -2]}>
          <planeGeometry />
          <meshStandardMaterial color="black" />
        </mesh>
*/
