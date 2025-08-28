# Ein Chat App

A modern chat application powered by Cloudflare Workers and Cloudflare Workers AI, featuring the Llama 3.3 70B language model.

## 🚀 Features

- **AI-Powered Conversations**: Utilizes Cloudflare Workers AI with Meta's Llama 3.3 70B Instruct model
- **Real-time Streaming**: Streaming responses for smooth chat experience
- **Modern Web Interface**: Clean, responsive design with auto-resizing text input
- **Edge Computing**: Deployed on Cloudflare's global edge network for low latency
- **Static Asset Serving**: Integrated static file serving for the frontend

## 🏗️ Architecture

This application is built using:

- **Backend**: Cloudflare Workers (TypeScript)
- **AI Model**: `@cf/meta/llama-3.3-70b-instruct-fp8-fast`
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Build Tool**: Wrangler CLI
- **Package Manager**: pnpm

## 📁 Project Structure

```text
llm-chat-app-worker/
├── src/
│   ├── index.ts          # Main Worker handler and API routes
│   └── types.ts          # TypeScript type definitions
├── public/
│   ├── index.html        # Frontend HTML interface
│   └── chat.js          # Client-side chat functionality
├── package.json         # Project configuration and dependencies
├── wrangler.jsonc       # Cloudflare Workers configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 22+
- pnpm package manager
- Cloudflare account(For Deployment)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ehsanghaffar/llm-chat-app-worker.git
   cd llm-chat-app-worker
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Deploy your worker to Cloudflare**

   ```bash
   pnpm run deploy
   ```

4. **To view logs after deployment**

   ```bash
   npx wrangler tail
   ```

## 🚀 Development

### Local Development

Start the development server with hot reload:

```bash
pnpm run dev
# or
pnpm run start
```

This will start the Wrangler development server, typically accessible at `http://localhost:8787`


## ⚙️ Configuration

### Worker Configuration (`wrangler.jsonc`)

- **Model**: Uses Meta's Llama 3.3 70B Instruct model
- **Compatibility**: Set for 2025-04-01 with Node.js compatibility
- **Assets**: Serves static files from `public/` directory
- **Observability**: Enabled for monitoring and debugging

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

## 🔧 Customization

### Changing the AI Model

Update the `MODEL_ID` constant in `src/index.ts`:

```typescript
const MODEL_ID = "@cf/meta/llama-3.3-70b-instruct-fp8-fast";
```

### Customizing the System Prompt

Modify the `SYSTEM_PROMPT` constant in `src/index.ts`:

```typescript
const SYSTEM_PROMPT = "Your custom system prompt here...";
```

## 📚 Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Cloudflare Workers AI Documentation](https://developers.cloudflare.com/workers-ai/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Available AI Models](https://developers.cloudflare.com/workers-ai/models/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
