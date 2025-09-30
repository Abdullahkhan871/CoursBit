import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface IUsers {
  email: string;
  password: string;
}

interface IUserDocument extends IUsers, Document {
  generateAuthToken(): string;
}

const schema = new mongoose.Schema<IUserDocument>({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    select: false,
  },
});

schema.methods.generateAuthToken = function (): string {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1h",
    }
  );
};

schema.pre<IUserDocument>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

export const usersModel = mongoose.model<IUserDocument>("users", schema);
