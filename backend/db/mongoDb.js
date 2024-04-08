import mongoose from "mongoose";

export default async function connectToMongoDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected!");
  } catch (error) {
    console.log("Cannot connecting to mongodb", error.massage);
  }
}
