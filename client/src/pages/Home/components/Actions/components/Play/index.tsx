import { BsFillPlayFill } from "react-icons/bs";
import { useContext } from "react";
import { PlayContext } from "../../../..";
import { BsFillStopFill } from "react-icons/bs";
export default function Play() {
  const playContext = useContext(PlayContext);
  const togglePlay = () => {
    playContext?.setPlay(!playContext.play);
  };
  return (
    <div className="absolute bottom-2 w-screen flex justify-center ">
      <button onClick={togglePlay} className="btn btn-neutral rounded-full">
        {!playContext!.play ? <BsFillPlayFill /> : <BsFillStopFill />}
      </button>
    </div>
  );
}
