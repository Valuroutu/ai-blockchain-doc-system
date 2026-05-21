import mongoose from "mongoose";

const DocumentSchema =
new mongoose.Schema({

    documentName: {
        type: String,
        required: true,
    },

    documentType: {
        type: String,
        required: true,
    },

    walletAddress: {
        type: String,
        required: true,
    },

    aiStatus: {
        type: String,
    },

    pinataCID: {
        type: String,
    },

    nftCID: {
        type: String,
    },

}, {
    timestamps: true,
});

export default mongoose.model(
    "Document",
    DocumentSchema
);