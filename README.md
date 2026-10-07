# 📚 Library Management System

A full-stack library management web application for tracking books and members — organized with a clean MVC structure (controllers, models, routes, middleware, and EJS views).

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

## ✨ Features

- 📖 Book catalog management (add / view / update / remove)
- 👤 Member record handling
- 🔀 Clean routing with Express routers
- 🧩 Reusable middleware layer
- 📄 Server-rendered UI with EJS templates

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Templating | EJS |

## 📁 Project Structure

```text
├── config/        # Database configuration
├── controllers/   # Route business logic
├── middleware/    # Request middleware
├── models/        # Mongoose models
├── public/        # Static assets
├── routes/        # Express routers
├── views/         # EJS templates
└── app.js         # Application entry point
```

## 🚀 Getting Started

**Prerequisites:** Node.js 18+, MongoDB (local or [Atlas](https://www.mongodb.com/atlas)).

```bash
git clone https://github.com/sapnasingh4852-source/librarymangement.git
cd librarymangement
npm install
npm start
```

Make sure MongoDB is running and reachable before starting the app.

---

Built as a full-stack learning project by [Sapna Singh](https://github.com/sapnasingh4852-source).
