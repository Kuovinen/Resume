//THIS COMPONENT CONTAINS EVERYTHING TO DO WITH 3D ELEMENTS

import { OrbitControls, Center, Text3D } from "@react-three/drei";
import ProjectBoxes from "./ProjectBoxes";
import {
  Selection,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
function Experience(props) {
  const rotationUnit = 1 / props.length;
  console.log(rotationUnit);
  return (
    <>
      <group>
        <OrbitControls />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <ambientLight intensity={1} color={`rgb(150, 110,10)`} />
        <Selection>
          <EffectComposer multisampling={8} autoClear={false}>
            <Outline
              blur
              visibleEdgeColor="white"
              edgeStrength={10}
              width={3000}
            />
          </EffectComposer>
          <group rotation-z={Math.PI * props.currentPr * -rotationUnit}>
            <ProjectBoxes currentPr={props.currentPr} />
          </group>
        </Selection>
        <Center
          position-z={-1.9}
          position-x={2.5} //larger=right, smaller=left
          position-y={8.5} //larger=backwards, smaller=forwards
          rotation-x={Math.PI * 0.5}
          rotation-y={Math.PI * -0.11} //larger=more, smaller=less
        >
          <Text3D font="./fonts/Exo2_Bold.json" height={0.2} size={0.35}>
            {props.projectName.toUpperCase()}
            <meshStandardMaterial color={`rgb(140, 110,10)`} />
          </Text3D>
        </Center>
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
