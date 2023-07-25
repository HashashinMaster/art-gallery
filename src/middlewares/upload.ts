import multer from "multer";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("first");
    cb(null, join(__dirname, "..", "..", "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + ".jpg");
  },
});

const upload = multer({ storage: storage });
export const uploadPaint = upload.single("paint");
