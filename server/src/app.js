import dotenv from "dotenv";
dotenv.config(); // Load this FIRST before any other imports

import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// CORS Configuration - Define FIRST, then use
const corsOptions = {
  origin: [
    'http://localhost:5173', // Vite dev server
    'http://localhost:3000', // CRA dev server (if you use it)
    'https://altocumulustechnologies.com', // Your production domain
    'https://alto-cumulus.vercel.app' // Your Vercel URL (NO trailing slash!)
  ],
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // Use ONCE

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString() 
  });
});

// Routes
app.use("/api/contact", contactRoutes);

// Debug logs (remove in production)
console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS ? "✓ loaded" : "✗ missing");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

export default app;