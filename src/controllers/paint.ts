import { Request, Response } from "express";
import Paint from "../models/paint";

export default class PaintController {
  static async store(req: Request, res: Response) {
    const paintName = req.file?.filename;
    const paintDocument = {
      paint: paintName,
      frame: req.body.frame,
      position: req.body.position,
      name: req.body.name,
      description: req.body.description,
      aiVoice: req.body.aiVoice,
    };
    try {
      await Paint.create(paintDocument);
      return res.send({
        success: true,
        message: "paint created successfully",
      });
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).send({
        success: false,
        message: "something is wrong! Try later.",
      });
    }
  }

  static async all(req: Request, res: Response) {
    try {
      const paints = await Paint.find().sort({ _id: -1 });
      return res.send({
        success: true,
        data: paints,
      });
    } catch (error: any) {
      console.log(error.message);
      return res.status(500).send({
        success: false,
        message: "something is wrong! Try later.",
      });
    }
  }
}
