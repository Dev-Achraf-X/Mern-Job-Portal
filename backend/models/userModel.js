import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      minlength: 5,
      maxlength: 50,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    lastname: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

// User model
const User = mongoose.model("User", userSchema);

export default User;
