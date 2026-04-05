# 💰 Finance Dashboard Backend

A backend system for managing financial records with **role-based access control**, built using Node.js, Express, and MongoDB.

---

## 🚀 Features

* 🔐 Authentication using JWT (stored in HTTP-only cookies)
* 🛡️ Role-Based Access Control (RBAC)

  * Admin
  * Analyst
  * Viewer
* 💰 Financial Records Management (CRUD)
* 📊 Dashboard Analytics

  * Total Income
  * Total Expense
  * Net Balance
  * Category-wise summary
  * Monthly trends
* ⚠️ Input Validation & Error Handling

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* JWT (Authentication)
* Cookie-Parser

---

## 📁 Project Structure

```
finance-backend/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── .env
├── app.js
└── server.js
```

---

## 🔐 User Roles

| Role    | Permissions                                        |
| ------- | -------------------------------------------------- |
| Admin   | Full access (create, update, delete, manage users) |
| Analyst | View records + analytics                           |
| Viewer  | Read-only access                                   |

---

## 📡 API Endpoints

### 🔑 Auth Routes

* POST `/api/users/register`
* POST `/api/users/login`
* POST `/api/users/logout`

---

### 💰 Records Routes

* POST `/api/records` → Admin only
* GET `/api/records` → Analyst, Admin, Viewer
* PUT `/api/records/:id` → Admin only
* DELETE `/api/records/:id` → Admin only

---

### 📊 Dashboard Routes

* GET `/api/dashboard/summary`
* GET `/api/dashboard/category`
* GET `/api/dashboard/monthly`

---

## ▶️ Run Locally

### 1. Clone the repository

```
git clone <your-repo-link>
```

### 2. Install dependencies

```
npm install
```

### 3. Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Start server

```
npm run dev
```

---

## 🧪 Testing

Use Postman to test APIs.

* Login to receive cookie-based authentication
* Access protected routes based on role

---

## 💡 Key Concepts Implemented

* JWT Authentication (Cookie-based)
* Role-Based Access Control (RBAC)
* MongoDB Aggregation Pipeline
* Secure password hashing (bcrypt)
* Clean project architecture

---

## 📌 Notes

* `.env` file is not included for security reasons
* `node_modules` is ignored via `.gitignore`

---

## 🙌 Author

**Lalit Sharma**

---

## 🎯 Conclusion

This project demonstrates a real-world backend system with authentication, authorization, data management, and analytics.

---
