import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { ActionsContext, PlayContext, SliderContext } from "../../../..";
export default function SliderArrows() {
  const slider = useContext(SliderContext);
  const playContext = useContext(PlayContext);
  const actionsContext = useContext(ActionsContext);
  const setIndex = (index: number, position: string) => () => {
    if (slider?.startSliding === false) slider.setStartSliding(true);
    if (index >= 0) slider?.setIndex(index);
    if (position === "left" && slider?.slidePosition === "right") {
      slider.setSlidePosition("left");
    }
    if (position === "right" && slider?.slidePosition === "left") {
      slider.setSlidePosition("right");
    }
  };
  return (
    <IconContext.Provider value={{ size: "1.2rem" }}>
      <button
        disabled={slider!.index <= 0}
        onClick={setIndex(slider!.index - 1, "left")}
        className={`btn btn-neutral ${
          (playContext?.play || !actionsContext?.showActions) && "hidden"
        }`}
      >
        <AiOutlineDoubleLeft />
      </button>
      <button
        disabled={slider!.lastIndex}
        onClick={setIndex(slider!.index + 1, "right")}
        className={`btn btn-neutral ${
          (playContext?.play || !actionsContext?.showActions) && "hidden"
        }`}
      >
        <AiOutlineDoubleRight />
      </button>
    </IconContext.Provider>
  );
}
