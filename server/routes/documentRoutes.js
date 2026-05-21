import express from "express";

import multer from "multer";

import axios from "axios";

import FormData from "form-data";

import fs from "fs";

import Document from "../models/Document.js";

import { uploadToPinata }
from "../services/pinataService.js";

const router = express.Router();

const upload = multer({
    dest: "uploads/",
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

            // FILE PATH
            const filePath =
                req.file.path;

            // AI VERIFY
            const formData =
                new FormData();

            formData.append(
                "file",
                fs.createReadStream(filePath)
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

            // PINATA UPLOAD
            const pinataCID =
                await uploadToPinata(
                    filePath
                );

            // SAVE TO MONGODB
            const newDocument =
                new Document({

                documentName,

                documentType,

                walletAddress,

                aiStatus,

                pinataCID,
            });

            await newDocument.save();

            // RESPONSE
            res.json({

                success: true,

                aiStatus,

                pinataCID,

                pinataURL:
                `https://gateway.pinata.cloud/ipfs/${pinataCID}`,

                document:
                  newDocument,
            });

        } catch (error) {

            console.log(error);

            res.status(500).json({

                success: false,

                message:
                  error.message,
            });
        }
    }
);

export default router;