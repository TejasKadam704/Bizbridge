# 🌉 BizBridge

> A unified marketplace platform connecting businesses and consumers across **B2B**, **B2C**, and **C2C** markets — all in one place.

---

## 📌 About the Project

**BizBridge** is a full-stack marketplace web application that bridges the gap between three core market types:

| Market | Who It Connects |
|--------|----------------|
| 🏢 **B2B** (Business to Business) | Businesses buying from or selling to other businesses |
| 🛍️ **B2C** (Business to Consumer) | Businesses selling products/services directly to customers |
| 🤝 **C2C** (Consumer to Consumer) | Individuals buying and selling among themselves |

Built as a personal learning project to explore full-stack development with a modern React frontend and a robust Django REST backend.

---

## ⚙️ Tech Stack

**Frontend**
- ⚛️ [React](https://react.dev/) — UI library
- ⚡ [Vite](https://vitejs.dev/) — fast dev server & build tool

**Backend**
- 🐍 [Django](https://www.djangoproject.com/) — web framework
- 🔌 [Django REST Framework](https://www.django-rest-framework.org/) — API layer

---

## ✨ Features

- 🏢 **B2B Marketplace** — business listings, bulk inquiries, and vendor discovery
- 🛍️ **B2C Storefront** — product browsing and direct purchase from businesses
- 🤝 **C2C Exchange** — peer-to-peer listings for individual buyers and sellers
- 🔐 **Authentication** — user registration, login, and role-based access
- 📦 **Listing Management** — create, edit, and manage marketplace listings
- 🔍 **Search & Filter** — find products and businesses across all market types

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- Python ≥ 3.10
- pip & virtualenv

---

### 🖥️ Frontend Setup

```bash
# Clone the repository
git clone https://github.com/your-username/bizbridge.git
cd bizbridge/frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

---

### 🛠️ Backend Setup

```bash
cd bizbridge/backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Start the development server
python manage.py runserver
```

The API will be available at `http://localhost:8000`

---

## 📁 Project Structure

```
bizbridge/
├── frontend/               # React + Vite app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route-level pages (B2B, B2C, C2C)
│   │   └── main.jsx        # App entry point
│   └── vite.config.js
│
└── backend/                # Django app
    ├── apps/               # Django apps (users, listings, markets)
    ├── manage.py
    └── requirements.txt
```

---

## 🧠 What I Learned

- Building a **multi-role marketplace** with a single unified backend
- Connecting a **React + Vite** frontend to a **Django REST API**
- Designing a **flexible data model** that supports three distinct market types
- Managing **authentication and authorization** across user roles

---

## 🛣️ Roadmap

- [ ] Real-time chat between buyers and sellers
- [ ] Payment gateway integration
- [ ] Ratings and reviews system
- [ ] Mobile-responsive UI improvements
- [ ] Dockerize the full stack

---

## 🙋 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> 💡 *Built as a personal learning project to explore full-stack development across multi-market e-commerce platforms.*
