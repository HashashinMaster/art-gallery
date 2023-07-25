import multer from "multer";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";
import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { createWriteStream } from "fs";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, join(__dirname, "..", "..", "uploads", "images"));
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + ".jpg");
  },
});

const upload = multer({ storage: storage });
export const uploadPaint = upload.single("paint");

export const uploadAiVoice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${req.body.aiVoice}`,
      {
        text: req.body.description,
      },
      {
        headers: {
          accept: "audio/mpeg", // Set the expected response type to audio/mpeg.
          "content-type": "application/json", // Set the content type to application/json.
          "xi-api-key": `${process.env.ELEVENLABS_API_KEY}`, // Set the API key in the headers.
        },
        responseType: "stream",
      }
    );
    const voiceName = uuidv4() + ".mp3";
    data.pipe(
      createWriteStream(
        join(__dirname, "..", "..", "uploads", "audios", voiceName)
      )
    );
    req.body.aiVoice = voiceName;
    next();
  } catch (error: any) {
    console.log("ai voice error: ", error.message);
    res.sendStatus(500);
  }
};
