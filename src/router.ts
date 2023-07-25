import { Router } from "express";
import { store } from "./controllers/paint";
import { uploadPaint } from "./middlewares/upload";

const router = Router();

router.route("/store").post(uploadPaint, store);

export default router;
