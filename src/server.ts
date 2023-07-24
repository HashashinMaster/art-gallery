import express from "express";
import path from "path";
import { appendFile } from "fs/promises";
import { createWriteStream } from "fs";

import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const app = express();
if (process.env.MOD === "PROD") {
  app.use(express.static(path.resolve(__dirname, "client", "dist")));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}
app.get("/api/test", (req, res) => {
  res.json({ success: true });
});
app.listen(8080, () => console.log("server is listening at port 8080"));
// (async () => {
//   try {
//     const { data } = await axios.post(
//       `https://api.elevenlabs.io/v1/text-to-speech/${"21m00Tcm4TlvDq8ikWAM"}`,
//       {
//         text: "hello im just testing sdskoas",
//       },
//       {
//         headers: {
//           accept: "audio/mpeg", // Set the expected response type to audio/mpeg.
//           "content-type": "application/json", // Set the content type to application/json.
//           "xi-api-key": `${process.env.ELEVENLABS_API}`, // Set the API key in the headers.
//         },
//         responseType: "stream",
//       }
//     );
//     data.pipe(createWriteStream("test.mp3"));
//   } catch (error: any) {
//     console.log(error.message);
//   }
// })();
