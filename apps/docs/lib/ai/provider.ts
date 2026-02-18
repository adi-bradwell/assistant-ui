import { createOpenAI } from "@ai-sdk/openai";
import { DEFAULT_MODEL_ID, isValidModelId } from "@/constants/model";

const GATEWAY_BASE_URL = "https://ai-gateway.vercel.sh/v1";

const gateway = createOpenAI({
  apiKey: process.env["AI_GATEWAY_API_KEY"] ?? "",
  baseURL: process.env["AI_GATEWAY_BASE_URL"] ?? GATEWAY_BASE_URL,
});

export function getModel(modelId?: string) {
  const id =
    typeof modelId === "string" && isValidModelId(modelId.trim())
      ? modelId.trim()
      : DEFAULT_MODEL_ID;

  return gateway(id);
}
