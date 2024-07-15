import { GoogleGenerativeAI } from "@google/generative-ai";
import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { DataAPIClient } from "@datastax/astra-db-ts";
import { NextRequest } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT!, {
  namespace: process.env.ASTRA_DB_NAMESPACE,
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const latestMessage = messages[messages.length - 1].content;
    let docContext = "";
    const model = genAI.getGenerativeModel({ model: "text-embedding-004" });
    const result = await model.embedContent(docContext);

    const collection = await db.collection("chat");

    const cursor = collection.find(
      {},
      {
        sort: {
          $vector: result.embedding.values,
        },
        limit: 5,
      },
    );

    const documents = await cursor.toArray();

    docContext = `
  START CONTEXT
  ${documents.map((doc) => doc.description).join("\n")}  
  END CONTEXT
  `;

    const ragPrompt = [
      {
        role: "system",
        content: `
    You are an AI assistant answering questions as Avaneesh Chopdekar in his portfolio app.
    Format responses using markdown wherever applicable.
    ${docContext}
    If the answer is not provided in the context, the AI assistant will say,
    "I am sorry, I do not know the answer".
    `,
      },
    ];

    const response = await streamText({
      model: google("models/gemini-1.5-pro-latest"),
      messages: [...ragPrompt, ...messages],
    });

    return response.toAIStreamResponse();
  } catch (error) {
    console.log(error);
    return Response.json(error, { status: 500 });
  }
}
