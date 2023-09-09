//THI COMPONENT RETURNS A GROUP CONTAINING AND ARRAY OF 3D BOXES, EACH WITH A
//PROJECT SET AS A TEXUTURE

import projects from "./projectData";
import IndividualProject from "./IndividualProject";

import {
  Selection,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
function ProjectBoxes(props) {
  //TEXTURES ARRAY iterated and applied to boxes
  const textures = [];
  projects.forEach((element) => textures.push(element.img));

  //(x, y) = (r * cos(θ), r * sin(θ)) positions for objects along a circle
  const radius = 10; //arbitrary, what looks good
  const numberOfElements = projects.length * 2;
  //x2 because I need a wide circle so I double the number of elements
  //const sectorUnits = 360 / numberOfElements;
  //  ^ which in radians is '2 * Math.PI /numberOfElements'
  const radians = (2 * Math.PI) / numberOfElements;
  const boxArray = [];

  for (let i = 1; i <= numberOfElements; i++) {
    const positionx = radius * Math.cos(radians * i);
    const positiony = radius * Math.sin(radians * i);
    const rotation = radians * i;

    boxArray.push(
      <IndividualProject
        positionx={positionx}
        positiony={positiony}
        rotation={rotation}
        i={i}
        key={crypto.randomUUID()}
        textures={textures}
        numberOfElements={numberOfElements}
        projects={projects}
        currentPr={props.currentPr}
      />
    );
  }
  return (
    <>
      <group rotation-z={Math.PI * 0.29}>
        <Selection>
          <EffectComposer multisampling={8} autoClear={false}>
            <Outline
              blur
              visibleEdgeColor="white"
              edgeStrength={10}
              width={2000}
            />
          </EffectComposer>
          {boxArray}
        </Selection>
      </group>
    </>
  );
}
export default ProjectBoxes;
