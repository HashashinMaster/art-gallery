import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import { useEffect } from "react";
import { gsap } from "gsap";
import Frame from "./components/Frame";
type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
  };
};

export default function Gallery() {
  const { nodes, materials } = useGLTF(
    "/assets/models/gallery.glb"
  ) as GLTFResult;

  const { camera } = useThree();
  useEffect(() => {
    const closingTheCamera = () => {
      gsap.to(camera.position, {
        x: -3,
      });
    };
    const rotateCamera = () => {
      gsap.to(camera.rotation, {
        y: Math.PI / 2,
        onComplete: closingTheCamera,
      });
    };
    camera.position.y = -1.3;
    camera.position.z = -1;
    gsap.to(camera.position, {
      z: -12,
      duration: 2,
      onComplete: rotateCamera,
    });
  });
  const framesPositions = {
    frame1: [4.54, 2.06, 3.83],
    frame2: [4.54, 2.06, -0.19],
    frame3: [4.54, 2.06, -4.2],
    frame4: [-4.5, 2.06, 3.85],
    frame5: [-4.5, 2.06, -0.16],
    frame6: [-4.5, 2.06, -4.19],
  };
  return (
    <group position={[0, -3, -8]} rotation={[0, Math.PI, 0]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material}
        />
      </group>

      <OrbitControls />
    </group>
  );
}
useGLTF.preload("/assets/models/gallery.glb");
