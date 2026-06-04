import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({

    documentName: {
        type: String,
        required: true
    },

    documentType: {
        type: String,
        required: true
    },

    walletAddress: {
        type: String,
        required: true
    },

    // AI Results
    aiStatus: {
        type: String,
        default: "pending"
    },

    detectedDocumentType: {
        type: String,
        default: "Unknown"
    },

    confidence: {
        type: Number,
        default: 0
    },

    fraudScore: {
        type: Number,
        default: 0
    },

    // Extracted Data
    ownerName: {
        type: String,
        default: ""
    },

    accountNumber: {
        type: String,
        default: ""
    },

    ifsc: {
        type: String,
        default: ""
    },

    // OCR Data
    extractedText: {
        type: String,
        default: ""
    },

    summary: {
        type: String,
        default: ""
    },

    // IPFS
    pinataCID: {
        type: String,
        default: ""
    },

    pinataURL: {
        type: String,
        default: ""
    },

    // Blockchain
    blockchainTxHash: {
        type: String,
        default: ""
    },

    blockchainDocumentId: {
        type: Number,
        default: -1
    }

}, {
    timestamps: true
});

export default mongoose.model(
    "Document",
    documentSchema
);