import dotenv from "dotenv";

dotenv.config();

export const isAdmin = (
    req,
    res,
    next
) => {

    const walletAddress =
        req.headers[
            "wallet-address"
        ];

    if (
        !walletAddress
    ) {

        return res.status(401)
        .json({
            success: false,
            message:
                "Wallet address required"
        });
    }

    if (
        walletAddress
        .toLowerCase() !==
        process.env.ADMIN_WALLET
        .toLowerCase()
    ) {

        return res.status(403)
        .json({
            success: false,
            message:
                "Admin access only"
        });
    }

    console.log(
        "Admin access granted"
    );

    next();
};