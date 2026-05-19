import express from "express";

import multer from "multer";

import axios from "axios";

import FormData from "form-data";

import Document
from "../models/Document.js";

const router = express.Router();

const upload = multer({
    storage:
      multer.memoryStorage()
});

router.post(
    "/",

    upload.single("file"),

    async (req, res) => {

        try {

            const {
                documentName,
                documentType,
                walletAddress
            } = req.body;

            const formData =
                new FormData();

            formData.append(
                "file",
                req.file.buffer,
                req.file.originalname
            );

            const aiResponse =
                await axios.post(
                    "http://127.0.0.1:8000/verify",
                    formData,
                    {
                        headers:
                          formData.getHeaders(),
                    }
                );

            const aiStatus =
                aiResponse.data.status;

            const newDocument =
                new Document({

                documentName,
                documentType,
                walletAddress,
                aiStatus,
            });

            await newDocument.save();

            res.json({
                success: true,
                aiStatus,
                document:
                  newDocument,
            });

        } catch (error) {

            console.log(error);

            res.status(500).json({
                error:
                  "Upload failed"
            });
        }
    }
);

export default router;