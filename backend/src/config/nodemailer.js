const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Set true if using SSL (465), false for TLS (587 or other)
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

module.exports = transporter;
