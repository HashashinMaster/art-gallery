import { Canvas } from "@react-three/fiber";
import Frame from "./components/Frame";
import { OrbitControls } from "@react-three/drei";
function App() {
  return (
    <>
      <div className="flex gap-1 h-screen">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <axesHelper />
          <Frame />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default App;
