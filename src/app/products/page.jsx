import Link from "next/link";
import { getProducts } from "../actions/getProductsPage";
import ProductCard from "../components/ProductCard";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className=" text-lg">No products available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/" className=" font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
