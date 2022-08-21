import React from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import arialFont from "./assets/Arial_Bold.json";
import { BufferAttribute } from "three";
function Text(props) {
  let sway = props.sway;
  console.log("LOAD TEXT");
  /*////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////LETTER DATA*/
  extend({ TextGeometry });
  const font = new FontLoader().parse(arialFont);
  const txtOptions = { font: font, size: 0.5, height: 0.1 };
  const containerObject = React.useRef(null);

  /*////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////LETTER ANIMATION*/
  function ani(pivot) {
    const aplitude = Math.PI / 20;
    if (sway.current === 0 || sway.current === 2) {
      if (pivot.rotation.z < aplitude) {
        pivot.rotation.z += sway.current === 1 ? 0.01 : 0.03;
      } else {
        console.log("finished sway " + sway.current);
        sway.current += 1;
        console.log("SWAY:" + sway.current + " /pivot" + pivot.rotation.z);
      }
    } else if (sway.current === 1) {
      console.log("starting sway 1");
      if (pivot.rotation.z > -aplitude) {
        pivot.rotation.z += -0.03;
      } else {
        sway.current += 1;
        console.log("SWAY:" + sway.current + "pivot" + pivot.rotation.z);
      }
    } else if (sway.current === 3) {
      console.log("starting sway 3");
      if (pivot.rotation.z > 0) {
        pivot.rotation.z += -0.03;
      } else if (pivot.rotation.z <= 0) {
        sway.current += 1;
        console.log("SWAY:" + sway.current + "pivot" + pivot.rotation.z);
      }
    } else if (sway.current === 4) {
      if (pivot.rotation.x < Math.PI / 2) {
        pivot.rotation.x += 0.1;
      } else {
        sway.current += 1;
      }
    }
  }
  /*////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////ANIMATION LOOP*/
  useFrame(() => {
    if (containerObject.current) {
      ani(containerObject.current);
    }
  });
  /*////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////LETTER REPOSITIONING ON INIT*/
  function centerTxt(geometry) {
    geometry.computeBoundingBox();
    geometry.center();
  }
  //position-y={0.25}>
  return (
    <object3D ref={containerObject}>
      <mesh position-z={-0.05} position-y={0.25}>
        <textGeometry
          args={["O", txtOptions]}
          onUpdate={(geometry) => {
            centerTxt(geometry);
          }}
        />
        <meshStandardMaterial>
          <color args={[0xcfac33]} attach="color" />
        </meshStandardMaterial>
      </mesh>
    </object3D>
  );
}
function Particles(props) {
  let sway = props.sway;
  /*//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////PARTICLE DATA*/
  //setting
  const count = 20;
  const dimensions = 3;
  //references
  //const leftGeometry = React.useRef(null);
  const prtclBufferGeometry = React.useRef(null);
  const parMat = React.useRef(null);
  const particleTime = React.useRef(0);
  //arrays of coordinates:
  const coordinatesRight = React.useMemo(() => {
    const p = new Array(count * dimensions).fill(0.0);
    return new BufferAttribute(new Float32Array(p), dimensions);
  }, [count]);
  //materail for both geometry clusters
  const particleMaterial = (
    <pointsMaterial
      ref={parMat}
      color={0xffff55}
      transparent={true}
      opacity={0.0} //starts out fully transparent and changes to 1 on trigger
      size={0.03}
    />
  );
  //arrays of geometry applying the coordinates data:
  const particleGeometry = (
    <bufferGeometry ref={prtclBufferGeometry}>
      <bufferAttribute attach="attributes-position" {...coordinatesRight} />
    </bufferGeometry>
  );

  /*//////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////PARTICLE MOVER*/
  function moveParticles(cluster) {
    let sign = 1;
    parMat.current.opacity -= 0.02;
    if (sign) {
      //so that it only runs in one of the 2 iterations
      particleTime.current += 0.015; //this affects speed
    }
    const explosionScaleX = 50;
    const explosionScaleY = 7.5;
    if (particleTime.current < 2 * Math.PI) {
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        cluster.current.attributes.position.array[i3 + 1] = Math.abs(
          Math.sin(particleTime.current) / Math.sin(i) / explosionScaleY
        );
        sign = i % 2 === 0 ? 1 : -1; //every other loop the direction changes
        cluster.current.attributes.position.array[i3] =
          sign * (particleTime.current + i / explosionScaleX);
      }
    }
    cluster.current.attributes.position.needsUpdate = true;
  }
  /*////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////PARTICLE ANIMATION LOOP*/
  useFrame(() => {
    if (sway.current === 5) {
      parMat.current.opacity = 1;
      sway.current = 6;
    }
    if (prtclBufferGeometry.current !== undefined && sway.current === 6) {
      moveParticles(prtclBufferGeometry);
    }
  });
  return (
    <points>
      {particleGeometry}
      {particleMaterial}
    </points>
  );
}
export default function App() {
  const sway = React.useRef(0);
  return (
    <div
      className="dic"
      style={{
        height: "300%",
        width: "300%",
        display: "inline-block",
        position: "absolute",
        top: "-57%",
        left: "-120.5%",
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 1.1] }}>
        <pointLight position={[0, 0, 10]} />
        <Text sway={sway} />
        <Particles sway={sway} />
      </Canvas>
    </div>
  );
}
