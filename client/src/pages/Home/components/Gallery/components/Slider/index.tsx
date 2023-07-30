import { Html } from "@react-three/drei";
import Frame from "../Frame";
import { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { PlayContext, SliderContext } from "../../../..";
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
  const playContext = useContext(PlayContext);
  useEffect(() => {
    const documentryAudio = new Audio();
    documentryAudio.src = `/storage/audios/${currentFrame.aiVoice}`;
    if (playContext?.play) {
      documentryAudio.play();
    } else {
      documentryAudio.pause();
    }
  }, [playContext?.play]);
  const resetPosition = () => {
    console.log(groupRef.current.position);
    gsap.to(groupRef.current.position, {
      z: 3.83,
      duration: 1,
    });
  };
  const goSlide = () => {
    setCurrentFrame({ ...paints[slider!.index] });
  };
  const slidePositionMultiplier = slider?.slidePosition === "left" ? -1 : 1;
  useEffect(() => {
    if (slider?.index === paints.length - 1) slider.setLastIndex(true);
    if (slider?.index !== paints.length - 1 && slider?.lastIndex === true)
      console.log(slider?.startSliding);
    if (slider?.startSliding) {
      gsap.to(groupRef.current.position, {
        z: 8 * slidePositionMultiplier,
        duration: 1,
        onComplete: goSlide,
      });
    }
  }, [slider?.index]);

  useEffect(() => {
    if (slider?.startSliding) {
      groupRef.current.position.set(
        position[0],
        position[1],
        slider?.slidePosition === "left" ? -4 : 7
      );
      resetPosition();
    }
  }, [currentFrame]);
  useEffect(() => {
    groupRef.current.position.set(position[0], position[1], position[2]);
  }, []);
  return (
    <group ref={groupRef} key={currentFrame._id}>
      <Html as="div" position={[-1.3, 0, -0.05]}>
        <p className="text-red-400 font-art text-xl">{currentFrame.name}</p>
      </Html>
      <Frame {...currentFrame} />
    </group>
  );
}
