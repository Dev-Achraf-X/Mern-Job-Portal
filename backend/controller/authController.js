import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import createError from "../utils/appError.js";

export const signupController = async (req, res, next) => {
  try {
    // Check if user already exist
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return next(new createError("Email already exist!", 400));
    }

    // Hash user password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create new user and save it in database
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    // Asign token (JWT) to user
    const token = jwt.sign({ _id: newUser._id }, "secretkey-jj,d'ajioi", {
      expiresIn: "30d",
    });

    // Send response to client
    res.status(201).json({
      status: "seccess",
      message: "User logged in seccesfully",
      token,
      user: {
        _id: newUser._id,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
      },
    });
  } catch (error) {
    return next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Check if user already exist
    const user = await User.findOne({ email });
    if (!user) {
      return next(new createError("Invalid Email or Password!", 400));
    }

    // Check Password
    const isPaaswordValid = await bcrypt.compare(password, user.password);
    if (!isPaaswordValid) {
      return next(new createError("Invalid Email or Password!", 400));
    }

    // Asign token (JWT) to client
    const token = jwt.sign({ _id: user._id }, "secretkey-jj,d'ajioi", {
      expiresIn: "30d",
    });

    // Send response to client
    res.status(201).json({
      status: "seccess",
      message: "User Logged in seccessfully!",
      token,
      user: {
        _id: user._id,
        firstname: user.firstname,
        lastaname: user.lastname,
        email: user.email,
      },
    });
  } catch (error) {
    return next(error);
  }
};
