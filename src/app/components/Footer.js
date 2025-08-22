import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ProductStore</h3>
            <p>Your one-stop shop for amazing products at great prices.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className=" not-italic">
              <p>123 Product Street</p>
              <p>Retail City, RC 10001</p>
              <p>Email: info@productstore.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>
            &copy; {new Date().getFullYear()} ProductStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
