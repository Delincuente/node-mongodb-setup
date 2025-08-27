import dotenv from "dotenv";
dotenv.config({ quiet: true });
import express from "express";

import route from "./routes/index.route.js";

const port = process.env.port;
const app = express();

// Built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middlewares
app.use((req, res, next) => {
    // Logs method and URL for each request
    console.log(new Date(), req.method, req.url);
    next();
});

app.use('/api', route);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Custom error-handling middleware
import errorHandler from "./middlewares/errorHandler.middleware.js";
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
}); 