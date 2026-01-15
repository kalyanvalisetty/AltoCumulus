import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config(); // Load this FIRST before any other imports


console.log("Creating transporter with:");
console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS ? "✓ exists" : "✗ missing");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default transporter;