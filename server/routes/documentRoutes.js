import express from "express";
import multer from "multer";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";

import Document from "../models/Document.js";
import { uploadToPinata } from "../services/pinataService.js";
import { storeOnBlockchain } from "../services/blockchainService.js";
import { isAdmin } from "../middlewares/adminMiddleware.js";

const router = express.Router();

const upload = multer({
dest: "uploads/",
});

router.get("/", async (req, res) => {


try {

    const walletAddress =
        req.query.walletAddress;

    if (!walletAddress) {

        return res.status(400).json({
            success: false,
            message:
                "walletAddress is required"
        });
    }

    const documents =
        await Document.find({
            walletAddress
        }).sort({
            createdAt: -1
        });

    return res.json(
        documents
    );

} catch (error) {

    return res.status(500).json({
        success: false,
        message:
            error.message
    });
}


});

router.get(
"/admin/documents",
isAdmin,
async (req, res) => {


    try {

        const documents =
            await Document.find()
            .sort({
                createdAt: -1
            });

        return res.json(
            documents
        );

    } catch (error) {

        return res.status(500).json({
            success: false,
            message:
                error.message
        });
    }
}


);

router.get("/:id", async (req, res) => {


try {

    const document =
        await Document.findById(
            req.params.id
        );

    if (!document) {

        return res.status(404).json({
            success: false,
            message:
                "Document not found"
        });
    }

    return res.json(
        document
    );

} catch (error) {

    return res.status(500).json({
        success: false,
        message:
            error.message
    });
}


});

router.post(
"/",
upload.single("file"),
async (req, res) => {


    console.log(
        "BODY =>",
        req.body
    );

    console.log(
        "FILE =>",
        req.file
    );

    try {

        if (!req.file) {

            return res.status(400).json({
                success: false,
                message:
                    "No file uploaded"
            });
        }

        const {
            documentName,
            documentType,
            walletAddress
        } = req.body;

        if (
            !documentName ||
            !documentType ||
            !walletAddress
        ) {

            return res.status(400).json({
                success: false,
                message:
                    "documentName, documentType and walletAddress are required"
            });
        }

        const filePath =
            req.file.path;

        const formData =
            new FormData();

        formData.append(
            "file",
            fs.createReadStream(
                filePath
            ),
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

        const aiResult =
            aiResponse.data;

        const aiStatus =
            aiResult.status;

        const pinataCID =
            await uploadToPinata(
                filePath
            );

        const pinataURL =
            `https://gateway.pinata.cloud/ipfs/${pinataCID}`;

        const blockchainResult =
            await storeOnBlockchain(
                pinataCID,
                aiResult.documentType || "Unknown",
                aiResult.ownerName || "",
                aiStatus === "approved"
            );

        const newDocument =
            new Document({

                documentName,

                documentType,

                walletAddress,

                aiStatus,

                pinataCID,

                pinataURL,

                confidence:
                    aiResult.confidence || 0,

                fraudScore:
                    aiResult.fraudScore || 0,

                summary:
                    aiResult.summary || "",

                extractedText:
                    aiResult.extractedText || "",

                detectedDocumentType:
                    aiResult.documentType || "Unknown",

                ownerName:
                    aiResult.ownerName || "",

                accountNumber:
                    aiResult.accountNumber || "",

                ifsc:
                    aiResult.ifsc || "",

                blockchainTxHash:
                    blockchainResult.txHash,

                blockchainDocumentId:
                    blockchainResult.documentId
            });

        await newDocument.save();

        return res.json({

            success: true,

            aiResponse:
                aiResult,

            aiStatus,

            pinataCID,

            pinataURL,

            blockchainTxHash:
                blockchainResult.txHash,

            blockchainDocumentId:
                blockchainResult.documentId,

            document:
                newDocument
        });

    } catch (error) {

        console.error(
            "ERROR =>",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                error.message
        });

    } finally {

        if (
            req.file &&
            fs.existsSync(
                req.file.path
            )
        ) {

            fs.unlinkSync(
                req.file.path
            );
        }
    }
}

);

export default router;
