import mongoose from "mongoose";

export const mongoDB = async () => {
  const url = process.env.MONGODB_URL;
  if (!url) {
    console.error("MONGODB_URL is empty");
    return;
  }

  try {
    await mongoose.connect(url);
  } catch (error) {
    throw new Error(`Something wrong in MONGODB => ${error}`);
  }
};
