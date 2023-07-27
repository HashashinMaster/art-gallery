import { Router } from "express";
import PaintController from "./controllers/paint";
import { uploadAiVoice, uploadPaint } from "./middlewares/upload";

const router = Router();

router.route("/store").post(uploadPaint, uploadAiVoice, PaintController.store);
router.route("/paints").get(PaintController.all);
export default router;
