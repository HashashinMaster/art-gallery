import { OrbitControls, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import { useEffect } from "react";
import { gsap } from "gsap";
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
    "/assets/models/rusty_metal_gallery.glb"
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
      {/* <OrbitControls /> */}
    </group>
  );
}
useGLTF.preload("/assets/models/rusty_metal_gallery.glb");
