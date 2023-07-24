import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Euler, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useContext } from "react";
import { PaintContext } from "../../App";
type GLTFResult = GLTF & {
  nodes: {
    frame: THREE.Mesh;
    paint: THREE.Mesh;
  };
  materials: {
    T_frame: THREE.MeshStandardMaterial;
    T_glass: THREE.MeshStandardMaterial;
  };
};
export default function Frame(props: JSX.IntrinsicElements["group"]) {
  const paintContext = useContext(PaintContext);
  const { nodes, materials } = useGLTF(
    `/assets/models/frames/box-frame-${paintContext?.position}.glb`
  ) as GLTFResult;
  const paint = useTexture(
    paintContext?.paint!
      ? paintContext.paint
      : `/assets/textures/default-${paintContext?.position}.jpg`
  );
  const rotation =
    paintContext?.position === "up"
      ? [Math.PI / 2, 0, 0]
      : [0, (3 * Math.PI) / 2, -Math.PI / 2];
  const groupRef = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    if (!paintContext?.loop) return;
    if (paintContext?.position === "down") {
      groupRef.current.rotateX(delta);
    }
    if (paintContext?.position === "up") {
      groupRef.current.rotation.z += delta;
    }
  });
  return (
    <group
      ref={groupRef}
      scale={[3, 3, 3]}
      rotation={rotation as Euler}
      {...props}
      dispose={null}
    >
      <mesh geometry={nodes.frame.geometry} material={materials.T_frame} />
      <mesh geometry={nodes.paint.geometry}>
        <meshStandardMaterial map={paint} />
      </mesh>
    </group>
  );
}
