"use client";
import { postSingleProduct } from "@/app/actions/postSingleProduct";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Show loading state while checking authentication
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="mt-4">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Show sign-in prompt if not authenticated
  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-base-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Authentication Required</h2>
          <p className="mb-6">You need to be signed in to access this page.</p>
          <button onClick={() => signIn()} className="btn btn-primary">
            Sign In
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const product = {
      name: form.name.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
    };

    try {
      const data = await postSingleProduct(product);

      if (data.success) {
        toast.success("Product added successfully!");
        form.reset();
        // Small delay before redirecting to show the toast
        setTimeout(() => {
          router.push("/products");
        }, 1000);
      } else {
        toast.error(data.message || "Failed to add product");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while adding the product");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-base-100 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Add New Product
          </h1>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                name="name"
                placeholder="Enter product name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Enter product description"
                className="textarea textarea-bordered w-full"
                rows={4}
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Price ($)</span>
              </label>
              <input
                name="price"
                type="number"
                step="0.01"
                min="0"
                placeholder="Enter price"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Adding Product...
                </>
              ) : (
                "Add Product"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
