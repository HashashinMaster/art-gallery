import { ChangeEventHandler, useContext, useRef } from "react";
import { PaintContext } from "../../App";
import PositionButton from "./components/PositionButton";
import { AiOutlineFormatPainter } from "react-icons/ai";
import Avatar from "./components/Avatar";
import { IconContext } from "react-icons";
import LoopButton from "./components/LoopButton";

export default function Form() {
  const paintContext = useContext(PaintContext);
  const paintRef = useRef<HTMLInputElement>(null!);
  const handlePaint: ChangeEventHandler<HTMLInputElement> = (e) => {
    const image = e.target.files![0];
    const reader = new FileReader();
    reader.onload = () => {
      // Base64 Data URL 👇
      console.log(reader.result);
      paintContext?.setPaint(reader.result as string);
    };
    reader.readAsDataURL(image);
  };
  const handleInput = () => {
    paintRef.current?.click();
  };
  return (
    <IconContext.Provider value={{ size: "1.25rem" }}>
      <div className="w-2/5 p-2">
        <h1 className="mb-2">Tools:</h1>

        <div className="flex gap-2">
          <div className="tooltip" data-tip="Add paint">
            <button onClick={handleInput} className="btn btn-neutral">
              <AiOutlineFormatPainter />
              <Avatar />
            </button>
          </div>
          <input
            type="file"
            ref={paintRef}
            className="hidden"
            onChange={handlePaint}
          />
          <div className="tooltip" data-tip="Change frame position">
            <PositionButton />
          </div>
          <div className="tooltip" data-tip="Toggle loop">
            <LoopButton />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
