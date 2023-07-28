import { Html, OrbitControls } from "@react-three/drei";
import Frame from "../Frame";
import { Vector3 } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SliderContext } from "../../../..";
interface Props {
  paints: Paint[];
}
export default function Slider({ paints }: Props) {
  const position = [4.54, 2.06, 3.83];
  const slider = useContext(SliderContext);

  const [currentFrame, setCurrentFrame] = useState<Paint>(
    paints[slider!.index]
  );
  const groupRef = useRef<THREE.Group>(null!);
  const resetPosition = () => {
    console.log(groupRef.current.position);
    gsap.to(groupRef.current.position, { z: 3.83, duration: 1 });
  };
  const goLeft = () => {
    setCurrentFrame({ ...paints[slider!.index] });
  };
  useEffect(() => {
    if (slider?.index === paints.length - 1) slider.setLastIndex(true);
    if (slider?.index !== paints.length - 1 && slider?.lastIndex === true)
      slider.setLastIndex(false);
    if (slider?.startSliding) {
      gsap.to(groupRef.current.position, {
        z: 7,
        duration: 1,
        onComplete: goLeft,
      });
    }
  }, [slider?.index]);

  useEffect(() => {
    groupRef.current.position.set(position[0], position[1], 1);
    resetPosition();
  }, [currentFrame]);
  useEffect(() => {
    groupRef.current.position.set(position[0], position[1], position[2]);
  }, []);
  return (
    <group ref={groupRef} key={currentFrame._id}>
      <Html as="div" position={[-1.03, 0, 0.07]}>
        <p className="text-red-400 font-art">{currentFrame.name}</p>
      </Html>
      <Frame {...currentFrame} />
    </group>
  );
}
