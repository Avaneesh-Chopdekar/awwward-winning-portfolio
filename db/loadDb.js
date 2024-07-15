import { DataAPIClient } from "@datastax/astra-db-ts";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

import data from "./data.json" with { type: "json" };

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, {
  namespace: process.env.ASTRA_DB_NAMESPACE,
});

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});

async function createCollection() {
  try {
    await db.createCollection("chat", { vector: { dimension: 768 } });
  } catch (err) {
    console.error("Collection already exists");
  }
}

async function loadData() {
  const collection = await db.collection("chat");
  for await (const { id, info, description } of data) {
    const chunks = await splitter.splitText(description);
    let i = 0;
    for await (const chunk of chunks) {
      const model = genAI.getGenerativeModel({ model: "text-embedding-004" });
      const result = await model.embedContent(chunk);

      const res = await collection.insertOne({
        document_id: id,
        $vector: result.embedding.values,
        info,
        description: chunk,
      });

      i++;
    }
  }

  console.log("data added");
}

createCollection().then(() => loadData());
