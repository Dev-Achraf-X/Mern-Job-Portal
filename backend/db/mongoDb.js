import mongoose from "mongoose";

export default async function connectToMongoDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!");
  } catch (error) {
    console.log("Cannot connecting to mongodb", error.massage);
  }
}
