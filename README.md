# 🔐 AI + Blockchain Document Storage & Verification System

A secure AI-powered decentralized document verification, storage, and management platform built using the MERN Stack, FastAPI, Blockchain, IPFS, and Web3 technologies.

This system automatically verifies uploaded documents using Artificial Intelligence, stores files on IPFS, records document metadata on the blockchain, and maintains document records in MongoDB for secure and transparent document management.

---

# 🚀 Features

## ✅ Frontend (React + Vite)

* Modern React frontend using Vite
* Multi-page routing with React Router DOM
* Responsive UI design
* Upload document interface
* Document dashboard page
* Verification page
* QR code generation
* MetaMask wallet integration
* Admin dashboard interface

---

## ✅ Backend (Node.js + Express)

* REST API architecture
* File upload handling using Multer
* API route management
* Environment variable support using dotenv
* CORS configuration
* Error handling
* MongoDB integration
* Blockchain integration
* Admin middleware protection

---

## ✅ AI Verification Service (FastAPI)

* AI-powered document verification
* OCR text extraction
* Document classification
* Owner name extraction
* Account number extraction
* IFSC extraction
* Confidence score generation
* Fraud score analysis
* Approval / rejection system

---

## ✅ MongoDB Integration

* MongoDB Atlas integration
* Document metadata storage
* Upload history tracking
* Verification history management

### Stored Metadata

* Document Name
* Document Type
* Wallet Address
* AI Verification Status
* Confidence Score
* Fraud Score
* Owner Name
* Account Number
* IFSC
* Extracted Text
* Summary
* IPFS CID
* IPFS URL
* Blockchain Transaction Hash
* Blockchain Document ID
* Upload Timestamp

---

## ✅ IPFS Integration

* Decentralized file storage using IPFS
* Pinata integration
* CID generation
* Public gateway access
* Permanent decentralized file storage

---

## ✅ Blockchain & Web3

* MetaMask wallet integration
* Ethers.js v6 integration
* Solidity smart contracts
* Foundry development environment
* Local blockchain testing using Anvil
* On-chain document metadata storage
* Blockchain transaction tracking

---

## ✅ Admin Dashboard

Admin Features:

* View all uploaded documents
* Monitor AI verification results
* View approved documents
* View rejected documents
* Monitor fraud alerts
* Access document information
* Admin-only route protection

---

## ✅ QR Verification

* QR code generation
* Verification page access
* Document verification details
* Downloadable QR codes
* Easy document sharing

---

# 🏗️ System Architecture

```text
Frontend (React + Vite)
          ↓
Backend API (Express.js)
          ↓
AI Verification Service (FastAPI)
          ↓
IPFS Storage (Pinata)
          ↓
Blockchain Storage (Ethereum + Solidity)
          ↓
MongoDB Atlas
```

---

# ⚙️ Tech Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* QRCode React
* CSS

---

## Backend

* Node.js
* Express.js
* Multer
* Mongoose
* Axios
* FormData
* Dotenv
* CORS

---

## AI Service

* Python
* FastAPI
* Uvicorn
* OCR Processing
* NLP Processing

---

## Blockchain

* Solidity
* Foundry
* Anvil
* Ethers.js v6
* MetaMask

---

## Database

* MongoDB Atlas

---

## Decentralized Storage

* IPFS
* Pinata

---

# ⛓ Smart Contract

The platform stores document metadata on-chain using Solidity smart contracts.

### Stored On Blockchain

* IPFS CID
* Document Type
* Owner Name
* Verification Status
* Owner Wallet Address
* Upload Timestamp

### Smart Contract Functions

```solidity
uploadDocument()
getDocument()
```

---

# 🔄 Project Workflow

```text
User Uploads Document
          ↓
Backend Receives File
          ↓
AI Verification Service
          ↓
OCR + Classification
          ↓
Confidence & Fraud Analysis
          ↓
Approved / Rejected
          ↓
Upload File to IPFS
          ↓
Generate CID
          ↓
Store Metadata on Blockchain
          ↓
Save Complete Record in MongoDB
          ↓
Generate Verification Page & QR Code
```

---

# 📂 Project Structure

```text
ai-blockchain-doc-system/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.jsx
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   └── server.js
│
├── ai-service/
│   ├── services/
│   ├── main.py
│   └── requirements.txt
│
├── contract/
│   ├── src/
│   ├── script/
│   └── test/
│
└── README.md
```

---

# 🛠️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Valuroutu/ai-blockchain-doc-system.git
cd ai-blockchain-doc-system
```

---

# 💻 Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# ⚡ Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

# 🤖 AI Service Setup

```bash
cd ai-service

pip install -r requirements.txt

uvicorn main:app --reload --port 8000
```

AI Service runs on:

```text
http://127.0.0.1:8000
```

---

# ⛓️ Blockchain Setup

Start local blockchain:

```bash
anvil
```

Deploy contract:

```bash
forge build

forge script script/Deploy.s.sol \
--rpc-url http://127.0.0.1:8545 \
--broadcast
```

---

# 🧪 API Testing

## Upload Endpoint

```http
POST /api/documents
```

### Request Body (form-data)

| KEY           | TYPE |
| ------------- | ---- |
| file          | File |
| documentName  | Text |
| documentType  | Text |
| walletAddress | Text |

---

## Get User Documents

```http
GET /api/documents?walletAddress=<wallet>
```

---

## Get Single Document

```http
GET /api/documents/:id
```

---

## Admin Documents

```http
GET /api/documents/admin/documents
```

---

# 📌 Sample API Response

```json
{
  "success": true,
  "aiStatus": "approved",
  "pinataCID": "QmX123456789",
  "pinataURL": "https://gateway.pinata.cloud/ipfs/QmX123456789",
  "blockchainTxHash": "0xabc123...",
  "blockchainDocumentId": 0
}
```

---

# 🔐 Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000

MONGO_URI=

PINATA_JWT=

RPC_URL=http://127.0.0.1:8545

PRIVATE_KEY=

CONTRACT_ADDRESS=

ADMIN_WALLET=
```

Frontend `.env`

```env
VITE_ADMIN_WALLET=
```

---

# ✅ Current Working Features

* AI document verification
* OCR text extraction
* Document classification
* Fraud detection
* Confidence score generation
* MongoDB document storage
* IPFS decentralized storage
* Blockchain document storage
* Smart contract interaction
* MetaMask integration
* User document dashboard
* Admin dashboard
* QR code verification
* Transaction tracking
* REST API architecture

---

# 🚧 Future Enhancements

* Sepolia deployment
* File encryption layer
* Role-Based Access Control (RBAC)
* Email notifications
* Multi-chain support
* Advanced fraud detection
* Public blockchain verification
* AI-powered document comparison

---

# 🎯 Project Goal

To build a secure AI-powered decentralized document verification and storage platform using Artificial Intelligence, Blockchain, IPFS, and Web3 technologies while ensuring transparency, authenticity, and security of digital documents.

---

# 👨‍💻 Author

**Santosh Kumar Valuroutu**

* B.Tech CSE
* RGUKT Nuzvid
* Blockchain Developer
* AI/ML Enthusiast

GitHub:
https://github.com/Valuroutu

---

# 📄 License

This project is developed for educational, research, and learning purposes.

---

# ⭐ Support

If you found this project useful, please consider giving it a star on GitHub.
