import { notFound } from "next/navigation"

const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop", price: 1000 },
  { id: 2, name: "Phone", description: "Smartphone with great camera", price: 600 },
]

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.id === Number(params.id))
  if (!product) return notFound()

  return (
    <div className="p-8">
      <h1 className="text-3xl">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-semibold mt-2">${product.price}</p>
    </div>
  )
}
