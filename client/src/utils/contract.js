import { Contract }
from "ethers";

const contractAddress =
  "YOUR_CONTRACT_ADDRESS";

const abi = [
  // paste ABI here
];

export function getContract(signer) {

    return new Contract(
        contractAddress,
        abi,
        signer
    );
}