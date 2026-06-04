// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DocumentStorage {

    struct Document {
        uint256 id;
        string cid;
        string documentType;
        string ownerName;
        bool verified;
        address owner;
        uint256 timestamp;
    }

    mapping(uint256 => Document) public documents;

    uint256 public documentCount;

    event DocumentUploaded(
        uint256 indexed id,
        string cid,
        string documentType,
        string ownerName,
        bool verified,
        address owner,
        uint256 timestamp
    );

    function uploadDocument(
        string memory _cid,
        string memory _documentType,
        string memory _ownerName,
        bool _verified
    ) public {

        documents[documentCount] = Document({
            id: documentCount,
            cid: _cid,
            documentType: _documentType,
            ownerName: _ownerName,
            verified: _verified,
            owner: msg.sender,
            timestamp: block.timestamp
        });

        emit DocumentUploaded(
            documentCount,
            _cid,
            _documentType,
            _ownerName,
            _verified,
            msg.sender,
            block.timestamp
        );

        documentCount++;
    }

    function getDocument(uint256 _id)
        public
        view
        returns (
            uint256,
            string memory,
            string memory,
            string memory,
            bool,
            address,
            uint256
        )
    {
        Document memory doc = documents[_id];

        return (
            doc.id,
            doc.cid,
            doc.documentType,
            doc.ownerName,
            doc.verified,
            doc.owner,
            doc.timestamp
        );
    }
}