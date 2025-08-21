import { getServerSession } from "next-auth";
import Link from "next/link"

export default async function HomePage() {
    const session = await getServerSession();
    console.log("Session:", session);
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar bg-base-200 p-4">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">MyShop</Link>
        </div>
        <div>
          <Link href="/products" className="btn btn-sm">Products</Link>
          <Link href="/login" className="btn btn-sm btn-primary ml-2">Login</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero min-h-[60vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to MyShop</h1>
            <p className="py-6">Discover amazing products at great prices!</p>
            <Link href="/products" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-md p-4">Featured Product 1</div>
        <div className="card bg-base-100 shadow-md p-4">Featured Product 2</div>
        <div className="card bg-base-100 shadow-md p-4">Featured Product 3</div>
      </section>

      {/* Footer */}
      <footer className="footer p-4 bg-base-200 text-center">
        <p>© 2025 MyShop. All rights reserved.</p>
      </footer>
    </div>
  )
}
