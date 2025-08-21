"use client"
import { postSingleProduct } from "@/app/actions/postSingleProduct";
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  console.log("Session:", session, "Status:", status);
  // Check the status
  if (status === "loading") {
    // Session is being fetched
    return <div>Loading...</div>; // Show a loading spinner
  }

  if (status === "unauthenticated") {
    // No session exists
    return (
      <div>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const product = {
      name: form.name.value,
      description: form.description.value,
      price: form.price.value,
    }
    const data = await postSingleProduct(product);
    setLoading(false)
    if (data.success) {
      alert("Product added successfully!")
      form.reset()
    } else {
      alert("Failed to add product")
    }
      router.push(`/products`);
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
        <input name="name" placeholder="Name" className="input input-bordered" />
        <textarea name="description" placeholder="Description" className="textarea textarea-bordered" />
        <input name="price" type="number" placeholder="Price" className="input input-bordered" />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  )
}
