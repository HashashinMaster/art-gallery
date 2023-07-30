import { useGLTF, useTexture } from "@react-three/drei";
import { Euler } from "@react-three/fiber";
import { useRef } from "react";
import { GLTF } from "three-stdlib";
import { PlayContext } from "../../../..";
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

export default function Frame({ position, paint, frame, aiVoice }: Paint) {
  const { nodes: frameNodes, materials: frameMaterials } = useGLTF(
    `/assets/models/frames/${frame}.glb`
  ) as GLTFFrame;
  const paintTexture = useTexture(`/storage/images/${paint}`);
  const frameRef = useRef<THREE.Group>(null!);

  const rotation =
    position === "up"
      ? [Math.PI / 2, 0, Math.PI / 2]
      : [Math.PI, 0, Math.PI / 2];
  return (
    <group
      scale={[1, 1, 1]}
      ref={frameRef}
      rotation={rotation as Euler}
      dispose={null}
    >
      <mesh
        geometry={frameNodes.frame.geometry}
        material={frameMaterials.T_frame}
      />
      <mesh geometry={frameNodes.paint.geometry}>
        <meshStandardMaterial map={paintTexture} />
      </mesh>
    </group>
  );
}
