import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
  const models = await genAI.listModels();
  console.log("AVAILABLE MODELS:\n");

  for await (const model of models) {
    console.log(model.name, "→", model.supportedGenerationMethods);
  }
}

listModels();
