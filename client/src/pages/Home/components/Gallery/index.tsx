import { useGLTF, Html } from "@react-three/drei";
import { Vector3, useThree } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Frame from "./components/Frame";
import axios from "axios";
import Slider from "./components/Slider";
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
  const [paints, loading] = usePaints();
  if (paints.length > 5) {
    paints.length = 5;
  }
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
    camera.position.z = 0.5;
    if (!loading) {
      gsap.to(camera.position, {
        delay: 1,
        z: -12,
        duration: 3,
        onComplete: rotateCamera,
      });
    }
  }, [loading]);
  const framesPositions = {
    frame0: [4.54, 2.06, 3.83],
    frame1: [4.54, 2.06, -0.19],
    frame2: [4.54, 2.06, -4.2],
    frame3: [-4.5, 2.06, 3.85],
    frame4: [-4.5, 2.06, -0.16],
    frame5: [-4.5, 2.06, -4.19],
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
      {paints.map((paint, key) => {
        return (
          key > 0 && (
            <group
              key={paint._id}
              position={
                framesPositions[
                  `frame${key}` as keyof typeof framesPositions
                ] as Vector3
              }
            >
              <Html as="div" position={[-1.03, 0, 0.07]}>
                <p className="text-red-400 font-art">{paint.name}</p>
              </Html>
              <Frame {...paint} />
            </group>
          )
        );
      })}
      {!loading && <Slider paints={paints} />}
    </group>
  );
}
useGLTF.preload("/assets/models/gallery.glb");

function usePaints(): [Paint[] | [], boolean] {
  const [paints, setPaints] = useState<Paint[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchPaints = async () => {
    setLoading(true);
    const { data } = await axios.get<PaintsResponse>("/api/paints");
    if (data.success) {
      setPaints(data.data!);
      setLoading(false);
    } else {
      console.log(data.message);
    }
  };
  useEffect(() => {
    fetchPaints();
  }, []);
  return [paints, loading];
}
