import { Link } from "react-router-dom";
import Play from "./components/Play";
import SliderArrows from "./components/SliderArrows";
import { GiWoodFrame } from "react-icons/gi";
export default function Actions() {
  return (
    <div className="flex inset-0 fixed  w-full h-full items-center justify-between p-4">
      <SliderArrows />
      <Play />
      <div className="absolute top-5 right-5">
        <Link to={"/add"}>
          <button className="btn btn-neutral rounded-full">
            <GiWoodFrame size={"1rem"} />
          </button>
        </Link>
      </div>
    </div>
  );
}
