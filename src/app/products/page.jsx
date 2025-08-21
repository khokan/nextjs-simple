import Link from "next/link"

const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop", price: 1000 },
  { id: 2, name: "Phone", description: "Smartphone with great camera", price: 600 },
]

export default function ProductsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((p) => (
          <div key={p.id} className="card bg-base-100 shadow-md p-4">
            <h2 className="text-xl font-bold">{p.name}</h2>
            <p>{p.description}</p>
            <p className="font-semibold">${p.price}</p>
            <Link href={`/products/${p.id}`} className="btn btn-sm mt-2">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
