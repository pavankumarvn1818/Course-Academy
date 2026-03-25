# 🎓 Course Academy – MERN E-learning Platform

## 📌 Overview

**Course Academy** is a full-stack **E-learning platform** built using the **MERN stack**, designed to deliver a seamless online learning experience with role-based access control.

The platform enables users to browse and purchase courses, while providing administrators with complete control over course creation and management. Integrated with **Razorpay**, it supports secure and efficient payment processing.

---

## 🚀 Live Demo

🔗 https://course-academy.vercel.app/

---

## 📂 Repository

🔗 https://github.com/pavankumarvn1818/Course-Academy.git

---

## 🧠 Key Features

### 👤 User Functionality

* 🔐 User authentication (Register / Login)
* 📚 Browse and view available courses
* 💳 Purchase courses via **Razorpay integration**
* 🎓 Access and study enrolled courses
* 📦 Persistent course enrollment tracking

---

### 🛠️ Admin Functionality

* ➕ Add new courses
* 🎥 Upload and manage lectures
* ✏️ Edit course details
* 🗂️ Manage course content lifecycle

---

## 🧱 Tech Stack

### Frontend

* **React.js** – UI development
* **JavaScript (ES6+)** – Application logic
* **Tailwind CSS** – Modern styling

### Backend

* **Node.js** – Runtime environment
* **Express.js** – API framework

### Database

* **MongoDB** – NoSQL database

### Payments

* **Razorpay API** – Secure payment gateway integration

---

## 🏗️ Project Structure

```bash id="y2apqk"
Course-Academy/
│── client/              # React frontend
│── server/              # Node.js + Express backend
│── models/              # MongoDB schemas
│── routes/              # API routes
│── controllers/         # Business logic
│── middleware/          # Auth & validation
│── config/              # DB & environment configs
```

---

## ⚙️ Core Architecture

### 1. Authentication System

* Secure login/signup flow
* Role-based access (User / Admin)
* Token-based authentication (JWT)

---

### 2. Course Management System

* Admin-controlled course creation
* Lecture upload and structuring
* Dynamic course rendering on frontend

---

### 3. Payment Integration

* Razorpay checkout integration
* Secure transaction handling
* Course access granted post-payment

---

### 4. User Learning Flow

* Browse → Purchase → Access → Learn
* Enrolled courses dashboard
* Lecture-wise content delivery

---

## ▶️ Installation & Setup

### 1. Clone Repository

```bash id="r1z2qj"
git clone https://github.com/pavankumarvn1818/Course-Academy.git
cd Course-Academy
```

---

### 2. Setup Backend

```bash id="9n4u6x"
cd server
npm install
npm start
```

---

### 3. Setup Frontend

```bash id="3u6yfx"
cd client
npm install
npm start
```

---

### 4. Environment Variables

Create a `.env` file in the server directory:

```env id="7h2cme"
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password

```

---

## 🎥 Usage

### User Flow

* Register / Login
* Browse courses
* Purchase course via Razorpay
* Access learning dashboard

### Admin Flow

* Login as admin
* Create and manage courses
* Add lectures and update content

---

## 📈 Learning Outcomes

This project demonstrates:

* Full-stack **MERN application development**
* REST API design and integration
* Authentication and authorization systems
* Payment gateway integration (Razorpay)
* State management and frontend architecture
* Scalable backend structure

---

## 🚀 Deployment

* **Frontend** deployed on Vercel
* Backend can be deployed on platforms like Render / Railway

---

## 🔮 Future Enhancements

* 📊 Course progress tracking
* ⭐ Ratings and reviews system
* 📹 Video streaming optimization
* 🔔 Notifications and alerts
* 📱 Mobile responsiveness improvements

---

## 🤝 Contribution

Contributions are welcome. Fork the repository and submit pull requests for improvements.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Pavan Kumar**

---

## ⭐ Summary

**Course Academy** is a scalable and production-ready **E-learning platform** built using the MERN stack, integrating authentication, role-based access, and payment systems.

It reflects strong capabilities in:

* Full-stack engineering
* API design
* Payment integration
* Real-world product development

Making it a solid portfolio project for **modern web development roles**.

---
