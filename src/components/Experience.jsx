function Experience() {
  return (
    <>
      <mesh position-x={5} rotation-y={-Math.PI * 0.4}>
        <planeGeometry args={[2.5, 5]} />
        <meshBasicMaterial color={"#cfac33"} wireframe />
      </mesh>
    </>
  );
}
export default Experience;
