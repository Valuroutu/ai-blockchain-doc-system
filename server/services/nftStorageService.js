import axios from "axios";

import fs from "fs";

import FormData from "form-data";

export const uploadToNFTStorage =
async (filePath, originalName) => {

    try {

        const data =
            new FormData();

        data.append(
            "file",
            fs.createReadStream(filePath),
            originalName
        );

        const response =
            await axios.post(

            "https://api.nft.storage/upload",

            data,

            {
                maxBodyLength:
                  Infinity,

                headers: {

                    Authorization:
                    `Bearer ${process.env.NFT_STORAGE_KEY}`,

                    ...data.getHeaders(),
                },
            }
        );

        return response.data.value.cid;

    } catch (error) {

        console.log(error.response?.data || error);

        throw new Error(
            "NFT.Storage Upload Failed"
        );
    }
};