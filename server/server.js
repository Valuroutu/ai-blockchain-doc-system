import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import cors from "cors";

import documentRoutes
from "./routes/documentRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

// ROUTES
app.use(
    "/api/documents",
    documentRoutes
);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log(
      "MongoDB Connected"
    );
});

app.listen(5000, () => {
    console.log(
      "Server running on port 5000"
    );
});