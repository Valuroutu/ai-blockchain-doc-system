// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DocumentStorage {

    struct Document {
        string cid;
        address owner;
        uint256 timestamp;
    }

    mapping(uint256 => Document) public documents;

    uint256 public documentCount;

    function uploadDocument(string memory _cid) public {

        documents[documentCount] = Document({
            cid: _cid,
            owner: msg.sender,
            timestamp: block.timestamp
        });

        documentCount++;
    }

    function getDocument(uint256 _id)
        public
        view
        returns (
            string memory,
            address,
            uint256
        )
    {
        Document memory doc = documents[_id];

        return (
            doc.cid,
            doc.owner,
            doc.timestamp
        );
    }
}