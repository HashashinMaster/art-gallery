import { Canvas } from "@react-three/fiber";
import Frame from "./components/Frame";
import Form from "./components/Form";
import { createContext, useState } from "react";

export const PaintContext = createContext<PaintingContext | null>(null);
function Home() {
  const [paint, setPaint] = useState<string>("");
  const [frame, setFrame] = useState<string>("box-frame-up");
  const [position, setPosition] = useState<"up" | "down">("up");
  const [loop, setLoop] = useState(true);
  return (
    <PaintContext.Provider
      value={{
        paint,
        frame,
        position,
        loop,
        setLoop,
        setPaint,
        setFrame,
        setPosition,
      }}
    >
      <div className="flex h-screen">
        <Form />
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Frame />
        </Canvas>
      </div>
    </PaintContext.Provider>
  );
}

export default Home;
