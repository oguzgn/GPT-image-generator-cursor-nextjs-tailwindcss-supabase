# 🧠 Chat & Image Generation Web App – Next.js + Supabase + Task Master

This repository is a **minimal starter** for building a full-stack AI-powered web app. It combines **Next.js 15**, **Supabase**, and **Task Master** (AI task manager) to help you rapidly prototype and expand apps with chat and image generation capabilities.

---

## 📁 Project Structure

```
.
├── app/                 # Next.js 15 application (UI, routes, API)
├── supabase/            # Supabase config, migrations, edge functions
├── docs/                # Technical docs, PRD, and task files
├── scripts/             # Example PRD prompts
├── README-task-master.md
└── mcp_template.json    # Model Control Protocol configuration
```

---

## 1️⃣ Next.js Application (`/app`)

This folder contains the frontend of the project built with:

- **Next.js 15**
- **Tailwind CSS**
- **Radix UI**
- **Supabase JS Client**
- **Vitest** for testing

Example starter page:

```tsx
"use client";
import React from "react";

export default function ChatDemoPage() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <h1>Welcome to the course!</h1>
    </div>
  );
}
```

Also includes:
- `tailwind.config.ts`
- `vitest.config.ts`
- Minimal API test route (`/api/test-connection`)

---

## 2️⃣ Supabase Integration (`/supabase`)

- Contains Supabase project setup, schema migrations, and **Edge Functions**.
- Example: `hello-world` function in **Deno** with CORS and request validation.
- `config.toml` defines local Supabase settings.

---

## 3️⃣ Task Management via Task Master

🧩 `README-task-master.md` explains how to use the **Task Master CLI** to manage your development via AI-assisted commands.

Key files:

- `docs/tasks_course/prd.txt`: example PRD describing features
- `docs/tasks_course/`: auto-generated task files (with subtasks)
- `.env.example`: required variables for Task Master (e.g., API keys)

Useful commands:

```bash
task-master init
task-master parse-prd scripts/prd.txt
task-master list-tasks
```

---

## 4️⃣ Documentation (`/docs`)

`/docs/tech/` includes helpful reference material:

- `NextJS_AppDirectory.md`: routing and layout patterns
- `Supabase_EdgeFunctions.md`: writing/deploying custom APIs
- `OpenAI_ImageGeneration.md`: using GPT for image creation
- Security, CLI, and advanced setup guides

---

## 5️⃣ MCP Template

`mcp_template.json` contains boilerplate config for connecting Supabase’s **Model Control Protocol (MCP)** to the Task Master system.

---

## 🚀 Getting Started

### 1. Development
```bash
cd app
npm run dev  # or pnpm/bun
```

### 2. Supabase
```bash
supabase start  # start local instance
supabase functions deploy hello-world
```

### 3. Task Master
```bash
task-master parse-prd scripts/prd.txt
```

### 4. Environment Variables

```bash
cp .env.example .env
```
Fill in your API keys for services like **Anthropic**, **Perplexity**, etc.

---

## 📚 Next Steps

- **Next.js App Structure** → `docs/tech/NextJS_AppDirectory.md`
- **Supabase Edge Functions** → `docs/tech/Supabase_EdgeFunctions.md`
- **Task Management Flow** → `README-task-master.md`
- **Image Generation API** → `docs/tech/OpenAI_ImageGeneration.md`

---

## 🎯 Why This Starter?

This template is intentionally **lightweight** — a solid foundation to incrementally add:

- Chat UX
- Image generation
- Supabase integration
- Organized AI-assisted task workflows

Build fast, build smart. Let the AI do the heavy lifting where possible.

---
