import { Router } from "express";
import { store } from "./controllers/paint";
import { uploadAiVoice, uploadPaint } from "./middlewares/upload";

const router = Router();

router.route("/store").post(uploadPaint, uploadAiVoice, store);

export default router;
