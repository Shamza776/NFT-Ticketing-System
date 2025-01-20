# NFT Ticketing System

A decentralized application (dApp) for ticket management using blockchain technology. This system allows event organizers to create and manage events while enabling users to purchase tickets as NFTs. Each ticket is uniquely identifiable, secure, and transparently stored on the blockchain.

## Features

- **User Registration**: Sign up as either a normal user or an event admin.
- **Event Creation**: Admins can create events specifying ticket details (e.g., total tickets, ticket price).
- **Ticket Purchase**: Users can purchase tickets, which are minted on-demand as NFTs.
- **On-Demand Minting**: Tickets are minted as ERC721 tokens when purchased.
- **Metadata Storage**: Event and ticket metadata are securely stored using IPFS.
- **Blockchain Integration**: Fully integrated with the blockchain for secure and transparent transactions.

---

## Workflow

### 1. User Registration
- **Normal Users**: Register to purchase tickets.
- **Admins**: Register to create and manage events.

### 2. Event Creation (Admin)
- Fill out event details:
  - Event Name
  - Date and Time
  - Number of Tickets
  - Ticket Price
  - Event Description
- Metadata for the event is stored on IPFS.

### 3. Ticket Purchase (User)
- Select an event.
- Specify the number of tickets to purchase.
- Pay for the tickets (in ETH).
- Tickets are minted on-demand and stored in the user's wallet as NFTs.

### 4. On-Demand Minting
- When a user purchases a ticket, the smart contract:
  - Generates a unique token ID.
  - Mints an NFT with associated metadata (stored on IPFS).
  - Transfers the NFT to the user’s wallet.

---

## Metadata Storage
- Event and ticket metadata, such as event details, ticket type, and owner information, are stored on IPFS.
- Metadata is linked to the NFT via the token URI.

---

## Technical Stack

### Backend
- **Blockchain Platform**: Lisk Mainnet (EVM-compatible)
- **Smart Contract Framework**: Hardhat
- **Token Standard**: ERC721 (NFT)

### Frontend
- **Framework**: React.js
- **Wallet Integration**: MetaMask

### Storage
- **Metadata**: IPFS
- **Tickets**: Stored as NFTs on the blockchain

---
