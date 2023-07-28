import Gallery from "./components/Gallery";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loading from "../../components/Loading";
export default function App() {
  return (
    <div className="h-screen">
      <Suspense fallback={<Loading />}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Gallery />
        </Canvas>
      </Suspense>
    </div>
  );
}
