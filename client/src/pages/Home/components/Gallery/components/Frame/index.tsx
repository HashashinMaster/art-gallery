import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
type GLTFFrame = GLTF & {
  nodes: {
    frame: THREE.Mesh;
    paint: THREE.Mesh;
  };
  materials: {
    T_frame: THREE.MeshStandardMaterial;
    T_glass: THREE.MeshStandardMaterial;
  };
};
export default function Frame() {
  const { nodes: frameNodes, materials: frameMaterials } = useGLTF(
    `/assets/models/frames/box-frame-up.glb`
  ) as GLTFFrame;
  const paint = useTexture(`/assets/textures/default-up.jpg`);
  return (
    <group scale={[3, 3, 3]} dispose={null}>
      <mesh
        geometry={frameNodes.frame.geometry}
        material={frameMaterials.T_frame}
      />
      <mesh geometry={frameNodes.paint.geometry}>
        <meshStandardMaterial map={paint} />
      </mesh>
    </group>
  );
}
