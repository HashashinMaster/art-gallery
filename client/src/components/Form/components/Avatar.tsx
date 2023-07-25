import { PaintContext } from "../../../pages/Add";
import { useContext } from "react";
export default function Avatar() {
  const paintContext = useContext(PaintContext);

  return (
    <div className="avatar">
      <div className="w-5 mask mask-circle">
        <img
          src={
            paintContext?.paint!
              ? paintContext.paint
              : `/assets/textures/default-${paintContext?.position}.jpg`
          }
        />
      </div>
    </div>
  );
}
