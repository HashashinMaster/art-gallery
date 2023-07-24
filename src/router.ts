import { Router } from "express";
import Paint from "./models/paint";
const router = Router();

router.route("/store").post(async (req, res) => {
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
});

export default router;
