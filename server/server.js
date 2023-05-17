import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
import transactions from "./routes/transactions.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/transactions", transactions);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});