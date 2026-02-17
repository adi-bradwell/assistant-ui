export const DEFAULT_DOCS_MODEL = "google/gemini-3-flash";

export const MODELS = [
  {
    name: "GPT-5 Nano",
    value: "gpt-5-nano",
    icon: "/icons/openai.svg",
    disabled: false,
    contextWindow: 400_000,
  },
  {
    name: "Gemini 3.0 Flash",
    value: "google/gemini-3-flash",
    icon: "/icons/google.svg",
    disabled: false,
    contextWindow: 1_000_000,
  },
  {
    name: "Kimi K2.5",
    value: "moonshotai/kimi-k2.5",
    icon: "/icons/kimi.svg",
    disabled: false,
    contextWindow: 256_000,
  },
  {
    name: "GLM 5",
    value: "zai/glm-5",
    icon: "/icons/zai.svg",
    disabled: false,
    contextWindow: 202_752,
  },
  {
    name: "Deepseek R1",
    value: "deepseek-r1",
    icon: "/icons/deepseek.svg",
    disabled: true,
    contextWindow: 128_000,
  },
  {
    name: "Claude 4.5 Sonnet",
    value: "claude-4.5-sonnet",
    icon: "/icons/anthropic.svg",
    disabled: true,
    contextWindow: 200_000,
  },
] as const;

export type Model = (typeof MODELS)[number];
