import Gallery from "../components/Gallery";
import { Canvas } from "@react-three/fiber";
export default function App() {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Gallery />
      </Canvas>
    </div>
  );
}
