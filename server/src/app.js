import dotenv from "dotenv";
dotenv.config(); // Load this FIRST before any other imports

import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
app.use(cors());

// CORS configuration
app.use(cors({
  origin: "http://localhost:5173", // Your React app URL
  methods: ["POST"],
  credentials: true
}));

app.use(express.json());
app.use("/api/contact", contactRoutes);

console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS ? "✓ loaded" : "✗ missing");

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

export default app;