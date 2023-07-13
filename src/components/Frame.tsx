import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Plane_1: THREE.Mesh;
    Plane_2: THREE.Mesh;
  };
  materials: {
    ["paint material"]: THREE.MeshStandardMaterial;
    ["wood  material"]: THREE.MeshStandardMaterial;
  };
};

export default function Frame(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/assets/models/frames/wood_frame.glb"
  ) as GLTFResult;
  const groupRef = useRef<THREE.Group>(null!);
  useFrame((state, delta) => (groupRef.current.rotation.z += delta));
  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <mesh
        geometry={nodes.Plane_1.geometry}
        material={materials["paint material"]}
      />
      <mesh
        geometry={nodes.Plane_2.geometry}
        material={materials["wood  material"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/frames/wood_frame.glb");
