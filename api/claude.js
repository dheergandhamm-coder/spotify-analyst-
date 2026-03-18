export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    console.log("[api/claude] OPTIONS preflight");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    console.log("[api/claude] Invalid method:", req.method);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

    const { messages, system, max_tokens, model } = body;

    console.log("[api/claude] Incoming request", {
      method: req.method,
      hasSystem: Boolean(system),
      messageCount: Array.isArray(messages) ? messages.length : 0,
      maxTokens: max_tokens || null,
      requestedModel: model || null,
      hasApiKey: Boolean(process.env.GROQ_API_KEY),
    });

    if (!process.env.GROQ_API_KEY) {
      console.error("[api/claude] Missing GROQ_API_KEY");
      return res.status(500).json({ error: "Server misconfiguration: missing GROQ_API_KEY" });
    }

    const groqMessages = [];

    if (system && typeof system === "string") {
      groqMessages.push({ role: "system", content: system });
    }

    if (Array.isArray(messages)) {
      for (const message of messages) {
        if (
          message &&
          (message.role === "user" || message.role === "assistant" || message.role === "system") &&
          typeof message.content === "string"
        ) {
          groqMessages.push({
            role: message.role,
            content: message.content,
          });
        }
      }
    }

    if (!groqMessages.length) {
      console.warn("[api/claude] No valid messages after normalization", { body });
      return res.status(400).json({ error: "No valid messages provided" });
    }

    const groqPayload = {
      model: "llama-3.3-70b-versatile",
      messages: groqMessages,
      max_tokens: max_tokens || 1000,
      temperature: 0.85,
    };

    console.log("[api/claude] Forwarding to Groq", {
      model: groqPayload.model,
      messageCount: groqPayload.messages.length,
      maxTokens: groqPayload.max_tokens,
    });

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify(groqPayload),
    });

    const data = await response.json();

    console.log("[api/claude] Groq response", {
      ok: response.ok,
      status: response.status,
      hasChoices: Boolean(data?.choices?.length),
      error: data?.error || null,
    });

    if (!response.ok) {
      console.error("[api/claude] Groq request failed", data);
      return res.status(response.status).json({
        error: "Groq API request failed",
        detail: data,
      });
    }

    const text = data?.choices?.[0]?.message?.content;

    if (!text) {
      console.error("[api/claude] No text content returned", data);
      return res.status(500).json({
        error: "No response text returned from Groq",
        detail: data,
      });
    }

    console.log("[api/claude] Success", {
      contentLength: text.length,
    });

    return res.status(200).json({
      id: data.id || null,
      model: groqPayload.model,
      content: [{ type: "text", text }],
    });
  } catch (err) {
    console.error("[api/claude] Handler error", {
      message: err?.message,
      stack: err?.stack,
    });

    return res.status(500).json({
      error: err?.message || "Unknown server error",
    });
  }
}
