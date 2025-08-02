# MiniLinkedIn

A mini LinkedIn clone built with the MERN stack. This project includes user authentication, profile creation, posts, and animations for a smooth user experience.

## 🚀 Tech Stack

### Frontend
- **React** – Component-based UI library
- **Tailwind CSS** – Utility-first CSS framework
- **Framer Motion** – Animation library for React

### Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Minimalist web framework

### Database
- **MongoDB** – NoSQL database for storing users, posts, etc.

### Authentication
- **JWT (JSON Web Token)** – Secure authentication mechanism

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- MongoDB (Local or MongoDB Atlas)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/minilinkedin.git
cd minilinkedin
cd server
npm install
Create .env file in /server directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Start Backend Server

npm run dev

3. Frontend Setup

cd ../client
npm install
npm start