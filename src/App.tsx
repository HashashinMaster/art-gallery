import { Canvas } from "@react-three/fiber";
import Frame from "./components/Frame";
import { OrbitControls } from "@react-three/drei";
import Form from "./components/Form";
import { createContext, useState } from "react";

export const PaintContext = createContext<PaintingContext | null>(null);
function App() {
  const [paint, setPaint] = useState<string>("");
  const [frame, setFrame] = useState<string>("");
  return (
    <PaintContext.Provider value={{ paint, frame, setPaint, setFrame }}>
      <div className="flex h-screen">
        <Form />
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <axesHelper />
          <Frame />
          <OrbitControls />
        </Canvas>
      </div>
    </PaintContext.Provider>
  );
}

export default App;
