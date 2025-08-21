import { getProducts } from "@/app/actions/getProductsPage";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation"

export default async function ProductDetail({ params }) {
  const p = await params;
  const product = await getProducts(p.id);

  if (!product) return notFound()
  return (
    <div className="p-8">
      <h1 className="text-3xl">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-semibold mt-2">${product.price}</p>
    </div>
  )
}
