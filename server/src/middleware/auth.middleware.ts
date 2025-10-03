import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { usersModel } from "../models/user.model";
import { JwtPayload } from "jsonwebtoken";

interface customeJwtPayload extends JwtPayload {
  _id: string;
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"]?.split(" ")[1];
  const token = req.cookies?.token || authHeader;
  if (!token) {
    return res.status(400).json({ message: "Un Authorized" });
  }
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as customeJwtPayload;

  if (!decoded) {
    return res.status(400).json({ message: "Un Authorized" });
  }
  const isUserExist = await usersModel.findOne({ _id: decoded._id });
  if (!isUserExist) {
    return res.status(400).json({ message: "Un Authorized" });
  }
  req.user = isUserExist;
  next();
};
