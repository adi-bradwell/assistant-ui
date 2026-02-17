import { createOpenAI } from "@ai-sdk/openai";
import { DEFAULT_DOCS_MODEL, MODELS } from "@/constants/model";

const GATEWAY_BASE_URL = "https://ai-gateway.vercel.sh/v1";

const ALLOWED_MODEL_NAMES = new Set<string>(
  MODELS.filter((model) => !model.disabled).map((model) => model.value),
);

const DEFAULT_MODEL_NAME =
  MODELS.find((model) => model.value === DEFAULT_DOCS_MODEL)?.value ??
  MODELS.find((model) => !model.disabled)?.value ??
  DEFAULT_DOCS_MODEL;

type DocsModelContext = {
  modelName?: string;
};

type DocsChatRequestBody = {
  config?: DocsModelContext;
};

export function resolveDocsModelFromConfig(config?: DocsModelContext): string {
  const requestedModelName =
    typeof config?.modelName === "string" ? config.modelName : undefined;
  const normalizedRequestedModelName = requestedModelName?.trim();

  if (
    normalizedRequestedModelName &&
    ALLOWED_MODEL_NAMES.has(normalizedRequestedModelName)
  ) {
    return normalizedRequestedModelName;
  }

  return DEFAULT_MODEL_NAME;
}

export function createGatewayModelProvider() {
  const apiKey = process.env["AI_GATEWAY_API_KEY"];
  const baseURL = process.env["AI_GATEWAY_BASE_URL"] ?? GATEWAY_BASE_URL;

  if (!apiKey) {
    throw new Error(
      "AI_GATEWAY_API_KEY is required. Set AI_GATEWAY_API_KEY in your docs environment.",
    );
  }

  return createOpenAI({
    apiKey,
    baseURL,
  });
}

export function extractModelFromRequestBody(body: DocsChatRequestBody): string {
  return resolveDocsModelFromConfig(body.config);
}
