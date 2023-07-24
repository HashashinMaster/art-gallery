import { ChangeEventHandler, useContext } from "react";
import { PaintContext } from "../App";
export default function Form() {
  const paintContext = useContext(PaintContext);

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
  const handlePosition: ChangeEventHandler<HTMLSelectElement> = (e) => {
    paintContext?.setPosition(e.target.value as "up" | "down");
  };
  return (
    <div>
      <input
        type="file"
        onChange={handlePaint}
        className="file-input w-full max-w-xs"
      />
      <select onChange={handlePosition} className="file-input w-full max-w-xs">
        <option value="up">up</option>
        <option selected value="down">
          down
        </option>
      </select>
    </div>
  );
}
