# AI + Blockchain Document Storage System

## Overview

AI + Blockchain Document Storage System is a secure decentralized application (DApp) designed to verify, manage, and securely store important documents using Artificial Intelligence, Blockchain, IPFS, and MERN stack technologies.

The system validates uploaded documents using an AI verification layer before allowing them to be securely stored in decentralized storage.

---

# Current Project Status

## Completed Features

### Frontend (React)

* React frontend setup using Vite
* Multi-page routing using React Router
* Responsive navigation bar
* Upload document page
* Documents dashboard page
* Wallet connection UI
* Modern CSS styling

### Backend (Node.js + Express)

* Express server setup
* REST API integration
* File upload handling using Multer
* CORS configuration
* Environment variable support using dotenv

### AI Service (FastAPI)

* FastAPI AI microservice
* File type validation
* File size validation
* Suspicious filename detection
* AI approval/rejection response system

### MongoDB Integration

* MongoDB Atlas integration
* Metadata storage for uploaded documents
* Mongoose schema creation
* Database connection handling

### Web3 Integration

* MetaMask wallet connection
* Ethers.js integration
* Smart contract setup using Foundry
* Local blockchain testing using Anvil

---

# Current Architecture

```text
Frontend (React)
        ↓
Backend (Express)
        ↓
AI Verification (FastAPI)
        ↓
MongoDB Storage
```

---

# Technologies Used

## Frontend

* React.js
* React Router DOM
* Axios
* CSS
* Vite

## Backend

* Node.js
* Express.js
* Multer
* Mongoose
* Dotenv
* CORS

## AI Service

* Python
* FastAPI
* Uvicorn

## Blockchain

* Solidity
* Foundry
* Anvil
* Ethers.js
* MetaMask

## Database

* MongoDB Atlas

---

# Project Workflow

```text
User Uploads Document
        ↓
Backend Receives File
        ↓
AI Verification
        ↓
Approval / Rejection
        ↓
Metadata Stored in MongoDB
```

---

# Planned Features

## Upcoming Features

* File encryption layer
* IPFS decentralized storage
* Blockchain CID storage
* Sepolia Ethereum deployment
* AI-based certificate validation
* OCR integration
* Fraud detection system
* Access control system
* Dashboard improvements

---

# Folder Structure

```text
ai-blockchain-doc-system/
│
├── client/
├── server/
├── contract/
└── ai-service/
```

---

# Installation

## Clone Repository

```bash
git clone YOUR_REPOSITORY_URL
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# Backend Setup

```bash
cd server
npm install
npm run dev
```

---

# AI Service Setup

```bash
cd ai-service
pip install fastapi uvicorn python-multipart
python -m uvicorn main:app --reload
```

---

# Smart Contract Setup

```bash
cd contract
forge build
anvil
```

---

# Environment Variables

Create `.env` inside the `server` folder.

```env
MONGO_URI=YOUR_MONGODB_URI
```

-

# Future Goal

Build a secure AI-powered decentralized document verification and storage platform using blockchain and Web3 technologies.
