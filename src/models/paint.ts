import { Schema, model } from "mongoose";

const paintSchema = new Schema({
  paint: {
    type: String,
    required: true,
  },
  frame: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

export default model("Paint", paintSchema);
