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
cloudflare-worker-test/
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

- Node.js 18+
- pnpm package manager
- Cloudflare account with Workers AI enabled

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cloudflare-worker-test
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Configure Wrangler**

   ```bash
   npx wrangler login
   ```

4. **Generate TypeScript types**

   ```bash
   pnpm run cf-typegen
   ```

## 🚀 Development

### Local Development

Start the development server with hot reload:

```bash
pnpm run dev
# or
pnpm start
```

This will start the Wrangler development server, typically accessible at `http://localhost:8787`

### Available Scripts

- `pnpm start` - Start development server
- `pnpm run dev` - Start development server (alias)
- `pnpm run deploy` - Deploy to Cloudflare Workers
- `pnpm run check` - Type check and dry-run deployment
- `pnpm test` - Run tests with Vitest
- `pnpm run cf-typegen` - Generate Cloudflare Workers types

## 🌐 API Endpoints

### `POST /api/chat`

Send a chat message and receive streaming AI response.

**Request Body:**

```json
{
  "messages": [
    {
      "role": "user",
      "content": "Hello, how are you?"
    }
  ]
}
```

**Response:**
Streaming JSON responses in the format:

```json
{"response": "Hello! I'm doing well, thank you for asking..."}
```

### Static Assets

- `GET /` - Serves the main chat interface (`index.html`)
- All other non-API routes serve static assets from the `public/` directory

## ⚙️ Configuration

### Worker Configuration (`wrangler.jsonc`)

- **Model**: Uses Meta's Llama 3.3 70B Instruct model
- **Compatibility**: Set for 2025-04-01 with Node.js compatibility
- **Assets**: Serves static files from `public/` directory
- **Observability**: Enabled for monitoring and debugging

### Environment Variables

The application uses Cloudflare Workers bindings:

- `AI` - Cloudflare Workers AI binding
- `ASSETS` - Static assets binding

### AI Gateway (Optional)

The code includes optional AI Gateway integration for caching and analytics. Uncomment and configure in `src/index.ts`:

```typescript
gateway: {
  id: "YOUR_GATEWAY_ID",
  skipCache: false,
  cacheTtl: 3600,
}
```

## 🎨 Frontend Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Auto-resizing Input**: Text area expands as you type
- **Keyboard Shortcuts**: Send messages with Enter (Shift+Enter for new line)
- **Typing Indicators**: Visual feedback during AI response generation
- **Message History**: Maintains conversation context
- **Error Handling**: Graceful error handling and user feedback

## 🚀 Deployment

Deploy to Cloudflare Workers:

```bash
pnpm run deploy
```

This will build and deploy your Worker to Cloudflare's edge network.

### Pre-deployment Check

Run a dry-run deployment to check for issues:

```bash
pnpm run check
```

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

The project uses Vitest with Cloudflare Workers testing pool for comprehensive testing.

## 📝 Development Notes

- The application uses TypeScript for type safety
- Frontend uses vanilla JavaScript for simplicity and performance
- Streaming responses provide real-time chat experience
- Error handling includes both client and server-side validation
- The system prompt can be customized in `src/index.ts`

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

### Styling

Update the CSS variables in `public/index.html` to customize the appearance:

```css
:root {
  --primary-color: #f6821f;
  --primary-hover: #e67e22;
  /* ... other variables */
}
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

This project is private and not licensed for public use.

---

Built with ❤️ using Cloudflare Workers and Workers AI
