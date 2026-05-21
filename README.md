# 🔐 AI + Blockchain Document Storage System

A secure AI-powered decentralized document verification and storage platform built using the MERN stack, FastAPI, Blockchain, and IPFS.

This system verifies uploaded documents using an AI verification layer before securely storing them on decentralized storage (IPFS). The platform is designed to improve document authenticity, transparency, and security using Web3 technologies.

---

## 🚀 Features

### ✅ Frontend (React + Vite)

- Modern React frontend using Vite
- Multi-page routing with React Router DOM
- Responsive UI design
- Upload document interface
- Document dashboard page
- MetaMask wallet connection UI

---

### ✅ Backend (Node.js + Express)

- REST API architecture
- File upload handling using Multer
- API route management
- Environment variable support using dotenv
- CORS configuration
- Error handling middleware

---

### ✅ AI Verification Service (FastAPI)

- AI-based document verification microservice
- File type validation
- File size validation
- Suspicious filename detection
- Approval / rejection response system
- FastAPI + Uvicorn integration

---

### ✅ MongoDB Integration

- MongoDB Atlas integration
- Document metadata storage
- Mongoose schema models
- Upload history tracking

Stored Metadata:
- Document Name
- Document Type
- Wallet Address
- AI Verification Status
- IPFS CID
- Upload Timestamp

---

### ✅ IPFS Integration

- IPFS decentralized storage
- Pinata integration
- CID generation
- Public gateway support

---

### ✅ Blockchain & Web3

- MetaMask wallet integration
- Ethers.js integration
- Solidity smart contract setup
- Foundry development environment
- Local blockchain testing using Anvil

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
MongoDB Atlas
```

---

# ⚙️ Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js
- Multer
- Mongoose
- Axios
- FormData
- Dotenv
- CORS

## AI Service
- Python
- FastAPI
- Uvicorn

## Blockchain
- Solidity
- Foundry
- Anvil
- Ethers.js
- MetaMask

## Database
- MongoDB Atlas

## Decentralized Storage
- IPFS
- Pinata

---

# 🔄 Project Workflow

```text
User Uploads Document
          ↓
Backend Receives File
          ↓
AI Verification
          ↓
Approved / Rejected
          ↓
Upload to IPFS (Pinata)
          ↓
Metadata Stored in MongoDB
```

---

# 📂 Project Structure

```text
ai-blockchain-doc-system/
│
├── client/          # React Frontend
├── server/          # Express Backend
├── ai-service/      # FastAPI AI Service
├── contract/        # Solidity Smart Contracts
└── README.md
```

---

# 🛠️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone YOUR_REPOSITORY_URL
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

pip install fastapi uvicorn python-multipart

python -m uvicorn main:app --reload --port 8000
```

AI service runs on:

```text
http://127.0.0.1:8000
```

---

# ⛓️ Smart Contract Setup

```bash
cd contract

forge build

anvil
```

---

# 🧪 API Testing (Postman)

## Upload Endpoint

```http
POST http://localhost:5000/api/documents
```

---

## Request Body → form-data

| KEY | TYPE |
|------|------|
| file | File |
| documentName | Text |
| documentType | Text |
| walletAddress | Text |

---

# 📌 Sample API Response

```json
{
  "success": true,
  "aiStatus": "approved",
  "pinataCID": "QmX123456789",
  "pinataURL": "https://gateway.pinata.cloud/ipfs/QmX123456789"
}
```

---

# 🔐 Environment Variables

Create a `.env` file inside the `server` folder.

```env
MONGO_URI=YOUR_MONGODB_URI

PINATA_JWT=YOUR_PINATA_JWT
```

---

# ✅ Current Working Features

- AI document verification
- Decentralized IPFS storage
- MongoDB metadata storage
- File upload API
- REST API architecture
- Multi-service backend communication
- Wallet connection UI

---

# 🚧 Upcoming Features

- Blockchain CID storage
- Sepolia Ethereum deployment
- OCR-based document extraction
- AI certificate validation
- Fraud detection system
- JWT authentication
- Role-based access control
- File encryption layer
- Smart contract integration
- Admin dashboard
- Ownership verification

---

# 🎯 Future Goal

To build a secure AI-powered decentralized document verification and storage platform using Blockchain, AI, IPFS, and Web3 technologies.

---

# 👨‍💻 Author

**Santosh Kumar Valuroutu**

---

# 📄 License

This project is developed for educational and research purposes.
