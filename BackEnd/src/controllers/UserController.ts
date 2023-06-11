import {Request, RequestHandler, Response} from "express";
import { User } from "../models/User";

export default class UserController {
  createUser: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { userName } = req.body;

      let user = new User(req.body);
      let savedUser = await user.save();
      return res.status(200).json({ message: savedUser });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occurred!" });
      }
    }
  };

  getAllUser: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let user = await User.find();
      return res.status(200).json({ responseData: user });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occurred." });
      }
    }
  };
}