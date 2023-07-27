import { PaintContext } from "../../../";
import { useContext } from "react";
import { RiLoopRightLine } from "react-icons/ri";
import { LuPersonStanding } from "react-icons/lu";
export default function LoopButton() {
  const paintContext = useContext(PaintContext);
  const toggleLoop = () => paintContext?.setLoop(!paintContext.loop);
  return (
    <button className="btn btn-neutral" onClick={toggleLoop}>
      {paintContext?.loop ? <RiLoopRightLine /> : <LuPersonStanding />}
    </button>
  );
}
