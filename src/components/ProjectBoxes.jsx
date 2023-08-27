import { useTexture } from "@react-three/drei";
import projects from "./projectData";
function ProjectBoxes() {
  //TEXTURES
  const textures = [];
  projects.forEach((element) => textures.push(element.img));
  console.log(textures);
  const textureArray = useTexture([...textures]);

  //TEXTURES
  //(x, y) = (r * cos(θ), r * sin(θ))
  const radius = 10;
  const numberOfElements = projects.length * 2;
  //const sectorUnits = 360 / numberOfElements;
  //  ^ which in radians is '2 * Math.PI /numberOfElements'
  const radians = (2 * Math.PI) / numberOfElements;

  const boxArray = [];
  for (let i = 1; i <= numberOfElements; i++) {
    const positionx = radius * Math.cos(radians * i);
    const positiony = radius * Math.sin(radians * i);
    const rotation = radians * i;
    const a = 140;
    boxArray.push(
      <mesh
        key={crypto.randomUUID()}
        position-x={positionx}
        position-y={positiony}
        rotation-z={rotation}
      >
        <boxGeometry args={[0.01, 3, 4]} />
        <meshStandardMaterial
          opacity={i === 1 ? 1 : 0.05}
          map={
            i > numberOfElements / 2
              ? textureArray[i - numberOfElements / 2 - 1]
              : textureArray[i - 1] //-1 because I init the i from 1, not 0
          }
          transparent
          color={`rgb(${a}, ${a}, ${a})`}
          // side={THREE.DoubleSide}
        />
      </mesh>
    );
  }
  return (
    <>
      <group rotation-z={Math.PI * 0.29}>{boxArray}</group>
    </>
  );
}
export default ProjectBoxes;
