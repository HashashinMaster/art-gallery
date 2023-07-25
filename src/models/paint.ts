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
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  aiVoice: {
    type: String,
    required: true,
  },
});

export default model("Paint", paintSchema);
