import { ObjectId } from "mongodb";

const { default: dbConnect } = require("@/lib/dbConnect");

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
