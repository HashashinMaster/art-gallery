import { ChangeEventHandler, useContext, useRef } from "react";
import { PaintContext } from "../../pages/Add";
import PositionButton from "./components/PositionButton";
import { AiOutlineFormatPainter } from "react-icons/ai";
import Avatar from "./components/Avatar";
import { IconContext } from "react-icons";
import LoopButton from "./components/LoopButton";
import voices from "./voices.json";
import axios from "axios";
export default function Form() {
  const paintNameRef = useRef<HTMLInputElement>(null!);
  const paintDescriptionRef = useRef<HTMLTextAreaElement>(null!);
  const paintAiVoiceRef = useRef<HTMLSelectElement>(null!);
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

  const savePaint = async () => {
    const payload = {
      paint: paintRef.current.files![0],
      frame: paintContext?.frame,
      position: paintContext?.position,
      name: paintNameRef.current.value,
      description: paintDescriptionRef.current.value,
      aiVoice: paintAiVoiceRef.current.value,
    };
    console.log(payload);
    await axios.post("/api/store", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  return (
    <IconContext.Provider value={{ size: "1.25rem" }}>
      <div className="w-4/12  p-2">
        <label className="label">
          <span className="label-text">Paint name</span>
        </label>
        <input
          type="text"
          placeholder="eg. Monaliza"
          ref={paintNameRef}
          className="input input-bordered w-full max-w-xs"
        />
        <h1 className="my-2">Tools:</h1>
        <div className="flex gap-2 justify-center">
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
        <textarea
          ref={paintDescriptionRef}
          className="textarea textarea-bordered w-full max-w-xs mt-4"
          placeholder="Paint short description"
        ></textarea>
        <label className="label">
          <span className="label-text">AI Voice</span>
        </label>
        <select
          ref={paintAiVoiceRef}
          className="input w-full max-w-xs mb-4 select-bordered"
        >
          {voices.voices.map((voice) => (
            <option value={voice.voice_id} key={voice.voice_id}>
              {voice.name}
            </option>
          ))}
        </select>
        <button
          onClick={savePaint}
          className="w-full max-w-xs btn btn-outline btn-info"
        >
          Confirm
        </button>
      </div>
    </IconContext.Provider>
  );
}
