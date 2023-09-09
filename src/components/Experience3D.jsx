//THIS COMPONENT CONTAINS EVERYTHING TO DO WITH 3D ELEMENTS

import { OrbitControls, Center, Text3D } from "@react-three/drei";
import ProjectBoxes from "./ProjectBoxes";
import React from "react";
import { useFrame } from "@react-three/fiber";
function Experience(props) {
  const rotationUnit = 1 / props.length; //rotation unit according to my set up
  const rotationUnit2 = (2 * Math.PI) / (2 * props.length);
  //radians per sector per project item, 2 length because using a double number
  //of projects as 3D object while the array holds only one set
  const boxGroup = React.useRef(null);
  const desiredRotation = Math.PI * (props.currentPr * -rotationUnit);
  //desired rotation is where we want to end up (radians) to display current project
  useFrame((state, delta) => {
    const difference = Math.abs(
      Math.abs(desiredRotation) - Math.abs(boxGroup.current.rotation.z)
    ); //use to make a smooth stop when near the desired rotation
    const rotationSpeedUp = 3.5; //controls rotation speed
    const arbitraryTolerance = 0.01; //when has it rotated close enough
    const numericValueSemiFullCircle = rotationUnit2 * (2 * props.length - 1);
    //this is the value we get as the difference between last and first element rotation
    if (difference < arbitraryTolerance) {
      boxGroup.current.rotation.z = desiredRotation;
    } //stop if close enough and assign the desired rotation

    //if first element rotating left
    //(check if difference is huge, exasserbate 1 sector worth further then reset
    //the rotation)
    if (difference > numericValueSemiFullCircle - 1 && desiredRotation < -5) {
      if (boxGroup.current.rotation.z <= rotationUnit2) {
        boxGroup.current.rotation.z += rotationUnit * delta * rotationSpeedUp;
      } else {
        boxGroup.current.rotation.z = desiredRotation;
      }
    }
    //if last element rotating right
    //(check if difference is huge,exasserbate 1 sector worth further then reset
    //the rotation)
    else if (
      difference > numericValueSemiFullCircle - 1 &&
      desiredRotation === -0
    ) {
      if (
        boxGroup.current.rotation.z >=
        -numericValueSemiFullCircle - rotationUnit2
      )
        boxGroup.current.rotation.z -= rotationUnit * delta * rotationSpeedUp;
      else {
        boxGroup.current.rotation.z = desiredRotation;
      }
    }
    //all other rotations
    //(is desired more or less than current, add or substract accordingly)
    else {
      if (boxGroup.current.rotation.z > desiredRotation) {
        boxGroup.current.rotation.z -= rotationUnit * delta * rotationSpeedUp;
      }
      if (boxGroup.current.rotation.z < desiredRotation) {
        boxGroup.current.rotation.z += rotationUnit * delta * rotationSpeedUp;
      }
    }
  });
  return (
    <>
      <group>
        <pointLight position={[0, 0, 0]} intensity={2} />
        <ambientLight intensity={1} color={`rgb(150, 110,10)`} />
        <group ref={boxGroup}>
          <ProjectBoxes currentPr={props.currentPr} />
        </group>

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

//<OrbitControls />//allows rotation of viewport
