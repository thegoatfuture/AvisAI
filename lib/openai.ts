// lib/openai.ts

export interface OpenAIStreamPayload {
  model: string;
  messages: { role: string; content: string }[];
  temperature: number;
  stream: boolean;
}

export async function OpenAIStream(payload: OpenAIStreamPayload) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  const reader = res.body?.getReader();
  const stream = new ReadableStream({
    async start(controller) {
      if (!reader) return controller.close();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        controller.enqueue(value);
      }

      controller.close();
    },
  });

  return stream;
}