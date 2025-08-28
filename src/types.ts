
export interface Env {
  /**
   * Binding for the Workers AI API.
   */
  AI: Ai;

  /**
   * Binding for static assets.
   */
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

/**
 * Represents a chat message.
 */
export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
  timestamp?: number;
}

/**
 * API request body for chat endpoint
 */
export interface ChatRequest {
  messages: ChatMessage[];
}

/**
 * API response body for errors
 */
export interface ErrorResponse {
  error: string;
  details?: string;
}

/**
 * Streaming response chunk from Workers AI
 */
export interface StreamChunk {
  response?: string;
  done?: boolean;
}
