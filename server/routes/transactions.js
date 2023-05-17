import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("transactions");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  let collection = await db.collection("transactions");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});



export default router;