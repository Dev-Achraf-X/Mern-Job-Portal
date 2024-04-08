import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// import routes
import connectToMongoDB from "./db/mongoDb.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// database connection
connectToMongoDB();

// Middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Routes
app.use("/api/auth", authRoutes);

// Global Error handeling
app.use((err, req, res, next) => {
  err.statuCode = err.statuCode || 500;
  err.status = err.status || "error";

  res.status(err.statuCode).json({
    status: err.status,
    message: err.message,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log("The server run on http://localhost:" + PORT);
});
