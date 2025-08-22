# Product Management App

A modern Next.js application with authentication and product management capabilities.

## Project Description

This is a full-stack Next.js application that allows users to browse products and manage a product inventory. It features authentication using NextAuth.js, a responsive design with light/dark mode support, and a clean, modern UI built with Tailwind CSS and daisyUI.

### Key Features:

- Public landing page with product highlights
- User authentication (credentials and Google OAuth)
- Product listing and detail pages
- Protected dashboard for adding new products
- Responsive design with theme support
- Toast notifications for user feedback

## Setup & Installation Instructions

### Prerequisites

- Node.js 18+ installed on your system
- MongoDB database (local or Atlas)

### 1. Clone and Install Dependencies

```bash
# Create a new Next.js project
npx create-next-app@latest ./

# Install required dependencies
npm install next-auth react-hot-toast lucide-react
npm install -D tailwindcss postcss autoprefixer
npm install daisyui


# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Build the application
npm run build

# Start the production server:
npm start

# Route Summary
nextjs-simple/
├── app/
│   ├── (auth)/
│   │   └── login/
│   │       └── page.js
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.js
│   │   └── products/
│   │       └── route.js
│   ├── dashboard/
│   │   └── add-product/
│   │       └── page.js
│   ├── products/
│   │   ├── [id]/
│   │   │   └── page.js
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Footer.js
│   ├── Header.js
│   ├── ProductCard.js
│   ├── ProductForm.js
│   ├── ThemeToggle.js
│   └── Toast.js
├── lib/
│   ├── db.js
├── public/
│   └── images/
├── .env.local
├── postcss.config.mjs
└── package.json
```
