import { BsFillImageFill, BsFillFileImageFill } from "react-icons/bs";
import { PaintContext } from "../../../App";
import { MouseEventHandler, useContext } from "react";

export default function PositionButton() {
  const paintContext = useContext(PaintContext);
  const handlePosition: MouseEventHandler<HTMLButtonElement> = () => {
    paintContext?.setPosition(togglePosition(paintContext.position!));
  };
  return (
    <button onClick={handlePosition} className="btn btn-neutral">
      {paintContext?.position === "up" ? (
        <BsFillFileImageFill />
      ) : (
        <BsFillImageFill />
      )}
    </button>
  );
}

function togglePosition(position: string) {
  return position === "up" ? "down" : "up";
}
