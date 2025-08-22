import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="bg-base-200 h-48 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-400"
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
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold  mb-2">{product.name}</h3>
        <p className=" text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold  ">${product.price}</span>
          <Link
            href={`/products/${product._id}`}
            className="bg-primary text-white font-medium py-2 px-4 rounded transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
