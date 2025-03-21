require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middleware/errorHandler");
const formRoutes = require("./routes/formRoutes");
const rateLimit = require("express-rate-limit");

const PORT = 5000;

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());

// Rate Limiting - Max 5 requests per IP in 2 days
const limiter = rateLimit({
  windowMs: 2 * 24 * 60 * 60 * 1000, // 2 days in milliseconds
  max:2, // Max 2 requests per window per IP
  message: "Too many requests, please try again later.",
});

// Apply rate limiter **before the route**
app.use("/api/form", limiter);
app.use("/api/form", formRoutes);

app.use(errorMiddleware);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
