import dbConnect from "@/lib/db";
import { ObjectId } from "mongodb";

export const getProducts = async (id) => {
  try {
    if (id) {
      return await dbConnect("products").findOne({ _id: new ObjectId(id) });
    }
    return await dbConnect("products").find({}).toArray();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
