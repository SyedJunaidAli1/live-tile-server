# ⚡ Live Tile Board — Backend

The backend powers a real-time multiplayer tile board where users can claim tiles and see updates instantly across all connected clients.

It is designed to handle concurrent actions safely while keeping all clients synchronized using WebSockets.

---

## 🚀 Live API
👉 [Add your deployed backend URL]

---

## 🧠 Overview

This server manages tile ownership, handles real-time communication, and ensures data consistency when multiple users attempt to claim the same tile simultaneously.

The system uses PostgreSQL as the source of truth and Socket.IO to broadcast updates instantly.

---

## ⚙️ Tech Stack

- Node.js  
- Express  
- Socket.IO  
- PostgreSQL (Neon)  

---

## 🔥 Core Responsibilities

✅ Manage tile ownership  
✅ Handle concurrent claims safely  
✅ Broadcast real-time updates  
✅ Provide REST endpoints for initial data fetch  

---

## 🧩 Architecture

### Hybrid Approach

The backend combines:

**REST → Initial State**
- Clients fetch all tiles once on page load.

**WebSockets → Live Updates**
- Tile claims are emitted via Socket.IO.
- Updates are broadcast instantly to all connected users.

This avoids polling and keeps the application highly responsive.

---

## 🛡️ Handling Race Conditions

One of the key challenges in multiplayer systems is preventing multiple users from claiming the same resource.

This is solved using an **atomic SQL update**:
