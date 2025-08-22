"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Header() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-sm ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold transition-colors">
          ProductStore
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>

          {status === "authenticated" ? (
            <>
              <Link href="/dashboard/add-product">Add Product</Link>
              <div className="flex items-center space-x-4">
                <span className="text-accent">Hello, {session.user.name}</span>
                <button
                  onClick={() => signOut()}
                  className="btn btn-primary rounded-md"
                >
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <Link href="/login" className="btn btn-primary rounded-md">
              Sign In
            </Link>
          )}

          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-2 shadow-md transition-colors">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
            >
              Products
            </Link>

            {status === "authenticated" ? (
              <>
                <Link
                  href="/dashboard/add-product"
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
                >
                  Add Product
                </Link>
                <div className="py-2">
                  <span className="text-gray-700 dark:text-gray-200">
                    Hello, {session.user.name}
                  </span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-left"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link href="/login" className="btn btn-primary rounded-md">
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
