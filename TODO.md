
# ✅ BookLoop — TODO List

## 🏗 Project Setup

- ✅ Initialize Next.js project (App Router)
- ✅ Setup Tailwind CSS
- ✅ Install and configure shadcn/ui
- ✅ Setup Prisma
- ✅ Create database schema
- ✅ Run initial migration

---

## 🔐 Vanilla Authentication

- ✅ Install Security Dependencies: bcryptjs for hashing and jose for JWT session tokens.
- ✅ Create User Schema: Update schema.prisma with email and password fields.
- ✅ Define Session Library: Create utilities to encrypt/decrypt JWTs and set/get cookies.
- ✅ Build Auth Actions: Create login and register Server Actions.
- ✅ Middleware Protection: Implement middleware.ts to check session cookies on protected routes.
- ✅ Create Auth Utilities: Functions like getUser() or logout().

---

## 🔐 NextAuth Authentication

- ⬜ Install NextAuth.js
- ⬜ Configure NextAuth with Prisma adapter
- ⬜ Setup credentials provider
- ⬜ Configure environment variables
- ⬜ Create auth utilities (getSession / auth check)

---

## 🏠 Landing Page

- ✅ Create Navbar
- ✅ Hero section
- ✅ Why Us
- ✅ Categories section
- ✅ How It Works section
- ✅ Featured Books section
- ✅ Call To Action section
- ✅ Newsletter section
- ✅ Footer

---

## 👤 Authentication Pages

- ✅ Create login page
- ✅ Create register page
- ✅ Build forms using shadcn/ui
- ✅ Handle form validation
- ✅ Redirect after successful auth

---

## 📋 Book Listings

- ⬜ Create `/books` page
- ⬜ Fetch books using Server Components
- ⬜ Create reusable BookCard component
- ⬜ Display title, description, price, image, condition

---

## 🔍 Book Details

- ⬜ Create dynamic route `/books/[id]`
- ⬜ Fetch single book using Prisma
- ⬜ Display full book details
- ⬜ Handle loading and not-found states

---

## ✍️ Add Book (Protected)

- ⬜ Create `/add-book` page
- ⬜ Protect route using authentication check
- ⬜ Build add book form with shadcn/ui
- ⬜ Validate form inputs
- ⬜ Create Server Action for adding books
- ⬜ Save book using Prisma
- ⬜ Show success toast
- ⬜ Redirect to book listings

---

## 🧪 Final Touches

- ⬜ Add loading skeletons
- ⬜ Improve UI responsiveness
- ⬜ Clean up code
- ⬜ Final testing
- ⬜ Update README
