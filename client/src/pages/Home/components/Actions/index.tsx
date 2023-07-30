import Play from "./components/Play";
import SliderArrows from "./components/SliderArrows";

export default function Actions() {
  return (
    <div className="flex inset-0 fixed  w-full h-full items-center justify-between p-4">
      <SliderArrows />
      <Play />
    </div>
  );
}
