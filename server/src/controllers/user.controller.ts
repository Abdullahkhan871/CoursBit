import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { usersModel } from "../models/user.model";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;
  const isUserExist = await usersModel.findOne({ email });

  if (isUserExist) {
    return res.status(400).json({
      message: "This email already exist",
    });
  }
  const user = await usersModel.create({
    email,
    password,
  });
  user.save();

  const token = user.generateAuthToken();
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
    secure: true,
  });
  const { password: _, ...userWithoutPassword } = user.toObject();

  return res.status(201).json({
    user: userWithoutPassword,
  });
};
export const login = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;
  const user = await usersModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(400).json({
      message: "user not exist",
    });
  }
  const isVerified = await bcrypt.compare(password, user.password);
  if (!isVerified) {
    return res.status(400).json({
      message: "Un Authorized",
    });
  }
  const token = user.generateAuthToken();
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
    secure: true,
  });
  const { password: _, ...userWithoutPassword } = user.toObject();
  return res.status(201).json({
    user: userWithoutPassword,
  });
};

export const logout = async (req: Request, res: Response) => {
  // blaclist old token
  // remove token from client device
};

export const forgetPassword = (req: Request, res: Response) => {};
