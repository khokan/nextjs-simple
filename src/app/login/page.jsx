"use client"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-6">Login</h1>
      <button
        className="btn btn-primary mb-2"
        onClick={() => signIn("google", { callbackUrl: "/products" })}
      >
        Sign in with Google
      </button>
      <button
        className="btn"
        onClick={() => signIn("credentials", { email: "test@test.com", password: "123456", callbackUrl: "/products" })}
      >
        Login
      </button>
    </div>
  )
}
