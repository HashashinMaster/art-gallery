import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PlayContext } from "../../../..";
type GLTFResult = GLTF & {
  nodes: {
    Cube_0: THREE.Mesh;
    Cube_1: THREE.Mesh;
    lens_0: THREE.Mesh;
    lens_1: THREE.Mesh;
    hanger_0: THREE.Mesh;
    hanger_1: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

export default function TrackLight() {
  const { nodes, materials } = useGLTF(
    "/assets/models/stage_light.glb"
  ) as GLTFResult;
  const spotLightRef = useRef<THREE.SpotLight>(null!); // Add a reference to the spotlight
  const lightTargetRef = useRef<THREE.Group>(null!);
  const playContext = useContext(PlayContext);
  const turnOnSpotLight = () => {
    lightTargetRef.current.visible = true;
    gsap.to(lightTargetRef.current.position, {
      x: 4.54,
      duration: 1,
      onComplete: () => {
        gsap.to(playContext!.ambientLightRef!.current, {
          visible: false,
          duration: 0,
          delay: 0.5,
          onComplete: () => {
            gsap.to(spotLightRef.current, {
              visible: true,
              delay: 1,
            });
          },
        });
      },
    });
  };
  const turnOffSpotLight = () => {
    spotLightRef.current.visible = false;
    playContext!.ambientLightRef!.current.visible = true;
    gsap.to(lightTargetRef.current.position, {
      x: -5,
      duration: 2.5,
      onComplete: () => {
        lightTargetRef.current.visible = false;
      },
    });
  };
  useEffect(() => {
    if (playContext?.play) {
      turnOnSpotLight();
    } else {
      console.log("called for no reason");
      turnOffSpotLight();
    }
  }, [playContext!.play]);
  useEffect(() => {
    spotLightRef.current.target = lightTargetRef.current;
    lightTargetRef.current.visible = false;
    spotLightRef.current.visible = false;
  }, []);
  return (
    <>
      <group
        position={[3.54, 2.06, 4.83]}
        ref={lightTargetRef}
        scale={[0.2, 0.2, 0.2]}
        dispose={null}
      >
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group
            position={[-0.66, 0, 1.09]}
            rotation={[0, 0.46, 0]}
            scale={[1.65, 1, 1]}
          >
            <mesh
              geometry={nodes.Cube_0.geometry}
              material={materials.Material}
            />
            <mesh
              geometry={nodes.Cube_1.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-0.66, 0, 1.09]}
            rotation={[0, 0.46, 0]}
            scale={[1.65, 1, 1]}
          >
            <mesh
              geometry={nodes.lens_0.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.lens_1.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            position={[-0.75, -0.02, 1.73]}
            rotation={[0, 0.1, 0]}
            scale={[1.65, 1, 1]}
          >
            <mesh
              geometry={nodes.hanger_0.geometry}
              material={materials.Material}
            />
            <mesh
              geometry={nodes.hanger_1.geometry}
              material={materials["Material.001"]}
            />
          </group>
        </group>
        <spotLight
          ref={spotLightRef}
          castShadow
          intensity={1}
          position={[-5, 0, 5]}
          angle={0.5}
        />
        <axesHelper />
      </group>
    </>
  );
}

useGLTF.preload("/assets/models/stage_light.glb");
