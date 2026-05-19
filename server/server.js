import express from "express";

import cors from "cors";

import dotenv from "dotenv";

import mongoose from "mongoose";

import uploadRoute
from "./routes/upload.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
    process.env.MONGO_URI
)
.then(() => {

    console.log(
      "MongoDB Connected"
    );

})
.catch((error) => {

    console.log(error);
});

app.use("/upload", uploadRoute);

app.get("/", (req, res) => {

    res.send(
      "Backend Running"
    );
});

const PORT = 5000;

app.listen(PORT, () => {

    console.log(
      `Server running on ${PORT}`
    );
});