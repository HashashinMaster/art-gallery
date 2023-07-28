import Gallery from "./components/Gallery";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loading from "../../components/Loading";
import SliderArrows from "./components/SliderArrows";
import { createContext, useState } from "react";
export const SliderContext = createContext<SliderContext | null>(null);
export default function App() {
  const [index, setIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(false);
  const [startSliding, setStartSliding] = useState(false);
  return (
    <div className="h-screen">
      <Suspense fallback={<Loading />}>
        <SliderContext.Provider
          value={{
            lastIndex,
            setLastIndex,
            index,
            setIndex,
            startSliding,
            setStartSliding,
          }}
        >
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Gallery />
          </Canvas>
          <SliderArrows />
        </SliderContext.Provider>
      </Suspense>
    </div>
  );
}
