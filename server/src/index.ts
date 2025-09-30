import dotenv from "dotenv";
dotenv.config();

import express from "express";
import userRouter from "./routes/user.route";
import cors from "cors";
import cookieParser from "cookie-parser";
import { mongoDB } from "./db/mongoDB";

const app = express();
mongoDB();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/user", userRouter);
const port = process.env.PORT;
app.listen(port, () => {
  console.log("working");
});
