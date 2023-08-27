//import { useThree } from "@react-three/fiber";

function Experience() {
  // const three = useThree();
  // three.camera.rotateY(-Math.PI * 0.11);
  //(x, y) = (r * cos(θ), r * sin(θ))
  const radius = 11;
  const numberOfElements = 16;
  //const sectorUnits = 360 / numberOfElements;
  //  ^ which in radians is '2 * Math.PI /numberOfElements'
  const radians = (2 * Math.PI) / numberOfElements;

  const boxArray = [];
  for (let i = 1; i <= numberOfElements; i++) {
    const positionx = radius * Math.cos(radians * i);
    const positiony = radius * Math.sin(radians * i);
    const rotation = radians * i;
    boxArray.push(
      <mesh position-x={positionx} position-y={positiony} rotation-z={rotation}>
        <boxGeometry args={[0.01, 3, 4]} />
        <meshPhongMaterial
          opacity={i === 1 ? 1 : 0.2}
          transparent
          color={i === 1 ? "#cfac33" : "rgb(92, 88, 92)"}
          // side={THREE.DoubleSide}
        />
      </mesh>
    );
  }

  return (
    <>
      <group>
        <pointLight position={[0, 0, 0]} intensity={2} />
        {boxArray}
        <mesh scale={100}>
          <planeGeometry />
          <meshStandardMaterial color="greenyellow" />
        </mesh>
      </group>
    </>
  );
}
export default Experience;

//<boxGeometry args={[0.01, 3, 4]} />
