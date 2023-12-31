import Gallery from "./components/Gallery";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loading from "../../components/Loading";
import { createContext, useState, useRef } from "react";
import Actions from "./components/Actions";
export const SliderContext = createContext<SliderContext | null>(null);
export const PlayContext = createContext<PlayContext | null>(null);
export const ActionsContext = createContext<ActionsContext | null>(null);
export default function App() {
  const [index, setIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(false);
  const [startSliding, setStartSliding] = useState(false);
  const [slidePosition, setSlidePosition] = useState<"right" | "left">("left");
  const [play, setPlay] = useState(false);
  const [disablePlay, setDisablePlay] = useState(false);
  const [startAudio, setStartAudio] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const ambientLightRef = useRef<THREE.AmbientLight>(null!);
  return (
    <div className="h-screen">
      <Suspense fallback={<Loading />}>
        <PlayContext.Provider
          value={{
            play,
            setPlay,
            ambientLightRef,
            startAudio,
            setStartAudio,
            disablePlay,
            setDisablePlay,
          }}
        >
          <SliderContext.Provider
            value={{
              lastIndex,
              setLastIndex,
              index,
              setIndex,
              startSliding,
              setStartSliding,
              slidePosition,
              setSlidePosition,
            }}
          >
            <ActionsContext.Provider value={{ showActions, setShowActions }}>
              <Canvas>
                <ambientLight ref={ambientLightRef} />
                <Gallery />
              </Canvas>
              <Actions />
            </ActionsContext.Provider>
          </SliderContext.Provider>
        </PlayContext.Provider>
      </Suspense>
    </div>
  );
}
