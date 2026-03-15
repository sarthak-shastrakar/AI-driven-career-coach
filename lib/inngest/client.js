import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "Nextstep-AI",
  name: "Nextstep-AI",
  credentials: {
    gemini: {
      apiKey: process.env.GENRATIVE_AI_KEY,
    },
  },
});
