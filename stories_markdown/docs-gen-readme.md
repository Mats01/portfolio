# AI Documentation Generator

This tool enables you to generate documentation and instructions by speaking out loud, leveraging advanced AI models for transcription and text processing. It is built with the [TanStack Start](https://tanstack.com/start) framework and uses [Clerk](https://clerk.com/) for user authentication.

## Features
- 🎤 **Voice-powered documentation generation**: Record audio or upload a file, and the tool will automatically transcribe and generate structured documentation.
- 🤖 **AI processing**: Utilizes advanced AI models (Google Gemini, Whisper, local models) for transcription and instruction generation.
- 📝 **Edit & export**: Edit, copy, or download the generated documentation as HTML.
- 🔒 **Authentication**: All features are protected by Clerk authentication.

## Getting Started

1. **Install dependencies**

```bash
pnpm install
```

2. **Start the development server**

```bash
pnpm dev
```

3. **Configuration**
- Set your Clerk and Google API keys in a `.env` file.
- Optionally, run the local Whisper server for transcription:

```bash
python whisper-server.py
```

4. **Access the app**
- Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- Sign in using Clerk authentication.
- Select "Generate Doc" to generate documentation:
  - Record audio or upload a file.
  - The AI will transcribe and generate the documentation.
  - Edit, copy, or download the generated document.
- Use "Conversation" for Q&A with the AI.

## Tech Stack
- [TanStack Start](https://tanstack.com/start) (React, TypeScript)
- [Clerk](https://clerk.com/) (authentication)
- [Tailwind CSS](https://tailwindcss.com/) (styling)
- [Google Gemini, Whisper, OpenAI](https://ai.google.dev/) (AI models)
- [React-Quill](https://github.com/zenoamaro/react-quill) (document editing)

## Authentication
Clerk authentication is required to use the app. Sign in is available via email or social providers (depending on your Clerk settings).

