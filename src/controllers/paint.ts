import { Request, Response } from "express";
import Paint from "../models/paint";
export async function store(req: Request, res: Response) {
  const paintName = req.file?.filename;
  const paintDocument = {
    paint: paintName,
    frame: req.body.frame,
    position: req.body.position,
    name: req.body.name,
    description: req.body.description,
    aiVoice: req.body.aiVoice,
  };
  await Paint.create(paintDocument);
  res.send({
    success: true,
    message: "paint created successfully",
  });
  console.log(req.body);
}
