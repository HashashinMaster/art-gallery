import express from "express";
import path from "path";
import dotenv from "dotenv";
import router from "./router";
import mongoose from "mongoose";

dotenv.config();
mongoose
  .connect(`${process.env.DB_HOST}/${process.env.DB_NAME}`)
  .then(() => console.log("Db connected!"));

const app = express();

//Production setup
if (process.env.MOD === "PROD") {
  app.use(express.static(path.resolve(__dirname, "client", "dist")));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}
app.use(express.json());
app.use("/storage", express.static("uploads"));
app.use("/api", router);
app.listen(8080, () => console.log("server is listening at port 8080"));
