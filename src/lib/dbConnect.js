import { MongoClient, ServerApiVersion } from "mongodb";

function dbConnect(collectionName) {
  // const uri = `mongodb+srv://${process.env.DB_USER_COFFEE}:${process.env.DB_PASS_COFFEE}@cluster0.vqav3xl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  console.log("Connecting to MongoDB...", client);
  return client.db("coffeDB").collection(collectionName);
}

export default dbConnect;
