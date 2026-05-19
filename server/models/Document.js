import mongoose from "mongoose";

const documentSchema =
    new mongoose.Schema({

    documentName: {
        type: String,
        required: true,
    },

    documentType: {
        type: String,
        required: true,
    },

    aiStatus: {
        type: String,
        required: true,
    },

    walletAddress: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Document =
    mongoose.model(
        "Document",
        documentSchema
    );

export default Document;