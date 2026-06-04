import dotenv from "dotenv";
dotenv.config();

import { ethers } from "ethers";

export const storeOnBlockchain =
async (
    cid,
    documentType,
    ownerName,
    verified
) => {

    try {

        const provider =
            new ethers.JsonRpcProvider(

                // process.env.SEPOLIA_RPC_URL

                process.env.RPC_URL
            );

        const wallet =
            new ethers.Wallet(
                process.env.PRIVATE_KEY,
                provider
            );

        const contract =
            new ethers.Contract(
                process.env.CONTRACT_ADDRESS,
                [
                    "function uploadDocument(string,string,string,bool) public",
                    "function documentCount() view returns(uint256)"
                ],
                wallet
            );

        const tx =
            await contract.uploadDocument(
                cid,
                documentType,
                ownerName,
                verified
            );

        const receipt =
            await tx.wait();

        const count =
            await contract.documentCount();

        return {
            success: true,
            txHash: receipt.hash,
            documentId:
                Number(count) - 1
        };

    } catch (error) {

        console.error(
            "Blockchain Error:",
            error
        );

        throw new Error(
            "Blockchain Storage Failed"
        );
    }
};