"use server";
import dbConnect from "@/lib/db";
import { revalidatePath } from "next/cache";

export const postSingleProduct = async (data) => {
  try {
    const result = await dbConnect("products").insertOne(data);
    revalidatePath("/products");
    return { success: true, result };
  } catch (error) {
    console.error("Error posting single product:", error);
    return { success: false, error: "Failed to post product" };
  }
};
