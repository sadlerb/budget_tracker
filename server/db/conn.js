import { MongoClient } from "mongodb";

const connectionString = process.env.DB_URI || "";


const client = new MongoClient(connectionString);

try {
  await client.connect();
} catch(e) {
  console.log("DB Connection Error")
  console.error(e);
}

let db = client.db("expense_tracker");


export default db;