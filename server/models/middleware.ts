import { User } from "./../userModel";
import { Request, Response, NextFunction } from "express";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let user;

  try {
    user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "The user does not exist" });
    }
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }

  res.locals.user = user;
  next();
};
