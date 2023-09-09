import { Select } from "@react-three/postprocessing";
import React from "react";
import { useTexture } from "@react-three/drei";
function IndividualProject(props) {
  const textureArray = useTexture([...props.textures]);
  const [hovered, hover] = React.useState(null);

  const numberOfElements = props.numberOfElements;
  const iteration = props.i;
  const rgb = 140; //the RGB color constant for boxes baseline color
  const rgb2 = 100; //the RGB color constant for boxes baseline color
  const checkIfCurrent =
    iteration === props.currentPr + 1 || //if this is the CURRENT project
    iteration - props.projects.length === props.currentPr + 1;
  const realProjectNumber = //because I have double the amount 3D project boxes
    iteration > numberOfElements / 2
      ? iteration - numberOfElements / 2 - 1
      : iteration - 1;
  const currentProjectTexture =
    iteration > numberOfElements / 2
      ? textureArray[realProjectNumber]
      : textureArray[realProjectNumber]; //-1 because I init the i from 1, not 0
  const currentProjectColor = checkIfCurrent
    ? `rgb(${rgb}, ${rgb}, ${rgb})`
    : `rgb(${rgb2}, ${rgb2}, ${rgb2})`;

  function openLive() {
    window.open(props.projects[realProjectNumber].url, "_blank");
  }
  const theMesh = (
    <mesh
      onClick={checkIfCurrent ? () => openLive() : () => {}} //only current project
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      key={crypto.randomUUID()}
      position-x={props.positionx}
      position-y={props.positiony}
      rotation-z={props.rotation}
    >
      <boxGeometry args={[0.01, 3, 4]} />
      <meshStandardMaterial
        opacity={checkIfCurrent ? 1 : 0.01} // all but current are dimmed
        map={checkIfCurrent ? currentProjectTexture : currentProjectTexture}
        transparent
        color={currentProjectColor}
        // side={THREE.DoubleSide}
      />
    </mesh>
    //theMesh needs to be it's own value so that I can either return it wrapped or
    //unwrapped in a SELECT component. This way only the active one is outlined
  );
  if (checkIfCurrent) {
    return <Select enabled={hovered}>{theMesh}</Select>; //outlineable
  } else return theMesh; //non-outlineable
}
export default IndividualProject;
