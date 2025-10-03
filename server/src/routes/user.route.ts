import express from "express";
import {
  login,
  register,
  forgetPassword,
  logout,
} from "../controllers/user.controller";
import { body } from "express-validator";
import { authMiddleware } from "../middleware/auth.middleware";

const userRouter = express.Router();

userRouter.post(
  "/register",
  [
    body("email")
      .isEmail()
      .withMessage("Must be a valid email")
      .normalizeEmail(),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  register
);

userRouter.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Must be a valid email")
      .normalizeEmail(),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  login
);
userRouter.post("/logout", authMiddleware, logout);
userRouter.post("/foget-passwrod", forgetPassword);

export default userRouter;
