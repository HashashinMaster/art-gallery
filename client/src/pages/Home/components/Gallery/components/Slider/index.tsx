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
  const [aiAudio, setAiAudio] = useState(
    new Audio(`/storage/audios/${currentFrame.aiVoice}`)
  );
  const [backgroundMusic] = useState(
    new Audio("assets/audios/backgroundmusic.mp3")
  );
  const groupRef = useRef<THREE.Group>(null!);
  const playContext = useContext(PlayContext);
  useEffect(() => {
    aiAudio.currentTime = 0;
    backgroundMusic.currentTime = 0;
    backgroundMusic.volume = 0.5;
    if (playContext?.startAudio) {
      backgroundMusic.play();
      backgroundMusic.onplay = () => {
        aiAudio.play();
        aiAudio.onplay = () => {
          playContext.setDisablePlay(false);
        };
        aiAudio.onended = () => {
          playContext?.setPlay(false);
        };
      };
    } else {
      aiAudio.pause();
      backgroundMusic.pause();
    }
  }, [playContext?.startAudio]);
  const resetPosition = () => {
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
    if (slider!.index < paints.length - 1) slider!.setLastIndex(false);
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
      setAiAudio(new Audio(`/storage/audios/${currentFrame.aiVoice}`));
    }
  }, [currentFrame]);
  useEffect(() => {
    groupRef.current.position.set(position[0], position[1], position[2]);
  }, []);
  return (
    <group ref={groupRef} key={currentFrame._id}>
      <Html
        as="div"
        position={
          currentFrame.position === "down"
            ? [-1.34, 0, -0.19]
            : [-1.34, 0, -0.14]
        }
      >
        <p className="text-red-400 w-[500px] font-art text-xl">
          {currentFrame.name}
        </p>
      </Html>
      <Frame {...currentFrame} />
    </group>
  );
}
