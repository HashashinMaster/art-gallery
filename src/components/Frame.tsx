import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useContext } from "react";
import { PaintContext } from "../App";

type GLTFResult = GLTF & {
  nodes: {
    frame: THREE.Mesh;
    paint: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

export default function Frame(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/assets/models/frames/box-frame.glb"
  ) as GLTFResult;
  const paint = useContext(PaintContext);
  let uploadedPaint = useTexture(
    paint?.paint! ? paint.paint : "/assets/textures/Mona_Lisa.jpg"
  );

  const groupRef = useRef<THREE.Group>(null!);
  useFrame((state, delta) => (groupRef.current.rotation.z += delta));
  return (
    <group
      {...props}
      rotation={[Math.PI / 2, 0, 0]}
      ref={groupRef}
      dispose={null}
    >
      <mesh
        geometry={nodes.frame.geometry}
        material={materials["Material.002"]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.paint.geometry}
        position={[-0.08, 0, 0]}
        rotation={[(Math.PI * 2) / 2, 0, -Math.PI / 2]}
        scale={[1.02, 1, 1.03]}
      >
        <meshStandardMaterial attach={"material"} map={uploadedPaint} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/assets/models/frames/box-frame.glb");
