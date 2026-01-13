# 📚 BookLoop — Used Books Marketplace

BookLoop is a web application for browsing and listing second-hand books. Users can publicly explore available books and view detailed information, while authenticated users can register, log in, and add new book listings.

The project is built using **Next.js (App Router)** with **Server Actions**, **Prisma** for database access, **NextAuth.js** for authentication, and **shadcn/ui** for a clean and accessible user interface.

---

## ✨ Features

- Public landing page with multiple informative sections
- Public book listings page
- Public book details page
- User registration and login
- Authentication using NextAuth.js
- Protected route for adding new books
- Server Actions for data mutations
- Prisma ORM for database interaction
- Modern UI using shadcn/ui
- Responsive design

---

## 🧭 Routes Overview

| Route | Description | Access |
|------|------------|--------|
| `/` | Landing page | Public |
| `/login` | Login page | Public |
| `/register` | Register page | Public |
| `/books` | Book listings | Public |
| `/books/[id]` | Book details | Public |
| `/add-book` | Add a new book | Protected |

---

## 🛠 Technologies Used

- Next.js 15/16 (App Router)
- React
- Next.js Server Actions
- Prisma ORM
- NextAuth.js
- shadcn/ui
- Tailwind CSS
- PostgreSQL / SQLite (via Prisma)

---

## 🔐 Authentication

Authentication is handled using **NextAuth.js** with a credentials-based provider.

Users can:

- Register with email and password
- Log in using registered credentials
- Access protected routes when authenticated

Unauthenticated users attempting to access protected routes are redirected to the login page.

---

## ⚙️ Setup & Installation

 1. Clone the repository

    ```bash
    git clone <repository-url>
    ```

 2. Install dependencies

    ```bash
    npm install
    ```

 3. Setup environment variables

    ```env
    DATABASE_URL="your-database-url"
    NEXTAUTH_SECRET="your-secret-key"
    NEXTAUTH_URL="http://localhost:3000"
    ```

 4. Initialize Prisma

    ```bash
    npx prisma migrate dev
    ```

 5. Start the development server

    ```bash
    npm run dev
    ```

 6. Open the application

    ```url
    http://localhost:3000
    ```
