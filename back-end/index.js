import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { userRouter } from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errormiddleware.js";
import { connectDB } from "./config/connectDB.js";
// import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
connectDB();

// Apply CORS middleware BEFORE routes
app.use(cors()); // Allow all origins (for development)

// Parse JSON & URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users/", userRouter);

// Error handler (uncomment if needed)
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT.yellow}`);
});
