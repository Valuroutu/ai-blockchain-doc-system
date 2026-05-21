import axios from "axios";

import FormData from "form-data";

import fs from "fs";

export const uploadToPinata =
async (filePath) => {

    try {

        const data =
            new FormData();

        data.append(
            "file",
            fs.createReadStream(filePath)
        );

        const response =
            await axios.post(

            "https://api.pinata.cloud/pinning/pinFileToIPFS",

            data,

            {
                maxBodyLength:
                  Infinity,

                headers: {

                    Authorization:
                    `Bearer ${process.env.PINATA_JWT}`,

                    ...data.getHeaders(),
                },
            }
        );

        return response.data.IpfsHash;

    } catch (error) {

        console.log(error);

        throw new Error(
            "Pinata Upload Failed"
        );
    }
};