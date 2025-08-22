import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/db";
import { getProducts } from "@/app/actions/getProductsPage";

export default async function ProductDetailPage({ params }) {
  const p = await params;
  const product = await getProducts(p.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen shadow-lg py-8">
      <div className="container mx-auto px-4">
        <Link
          href="/products"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium mb-4 inline-block"
        >
          ← Back to Products
        </Link>

        <div className="max-w-4xl mx-auto rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold mb-4">${product.price}</p>
              <p className=" mb-6">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
