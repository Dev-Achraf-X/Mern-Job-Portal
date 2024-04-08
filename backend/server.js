import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

// import routes
import connectToMongoDB from "./db/mongoDb.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// database connection
connectToMongoDB();

// Middlewares
app.use(express.json());
app.use(cors(process.env.CLIENT_BASE_URL, { credentials: true }));

// Routes
app.use("/api/auth", authRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

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
