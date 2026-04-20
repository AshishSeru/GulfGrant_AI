GulfGrant AI

AI Writing Assistant for Gulf Region NGOs

Grant proposals. Donor emails. Social media posts. In Arabic and English. In minutes.

The Problem
Small NGOs across Oman and the UAE do important work — but they're run by small teams of volunteers with no communications budget. Writing a grant application takes days. Writing a personalised donor email, another hour. Keeping up a social media presence, another challenge entirely.
Most AI writing tools are built for English-speaking marketing teams. None of them understand Gulf civil society, speak Arabic properly, or know what a GCC funder expects to read.
GulfGrant AI was built to fix that.

What It Does
Three tools in one clean interface:
FeatureWhat it generatesGrant Application WriterA complete, structured grant proposal with 7 sectionsDonor Outreach EmailA warm, personalised email with subject line includedSocial Media PostPlatform-optimised posts with hashtags for Instagram, LinkedIn, X, or Facebook
Every output is available in Arabic and English — switch with one click. Arabic outputs use Modern Standard Arabic (فصحى) with right-to-left formatting applied automatically.

Screenshots
(Add screenshots here after deployment)

Tech Stack

HTML5, CSS3, Vanilla JavaScript — no frameworks, no build step
OpenAI GPT-4o API
Cloudflare Pages (free hosting + serverless backend proxy)


Architecture
The app is entirely frontend — no database, no user accounts, nothing stored. The only moving part is a single serverless function (functions/api/generate.js) that acts as a secure proxy between the browser and OpenAI.
Browser (HTML/CSS/JS)
    │
    │  POST /api/generate
    ▼
Cloudflare Pages Function
    │
    │  OpenAI API key (stored as env variable, never in browser)
    ▼
OpenAI GPT-4o
    │
    ▼
Response → Browser → Displayed to user
The API key never touches the browser. NGO users just visit the URL and start generating.

Running Locally
Install the Cloudflare CLI:
bashnpm install -g wrangler
Run the app locally with your API key:
bashwrangler pages dev . --binding OPENAI_API_KEY=sk-your-key-here
Opens at http://localhost:8788. The serverless function runs locally too.

Deploying to Cloudflare Pages

Push this repo to GitHub
Go to pages.cloudflare.com → Create a project → Connect GitHub
Select this repo. Leave build settings blank (no build command needed)
Go to Settings → Environment Variables → Add variable:

Name: OPENAI_API_KEY
Value: your OpenAI API key


Deploy — your app will be live at your-project.pages.dev


Project Structure
gulfgrant-ai/
├── index.html              # Full app — UI, CSS, and JS
├── README.md
├── .gitignore
└── functions/
    └── api/
        └── generate.js     # Serverless proxy — keeps API key server-side

Security

The OpenAI API key is stored as a Cloudflare environment variable only
It is never included in any client-side code or sent to the browser
User inputs (org name, cause, etc.) are sent to OpenAI for generation only — nothing is logged or stored
The /api/generate endpoint accepts POST requests only


Why This Matters
Gulf NGOs are almost entirely underserved by AI writing tools. The tools that exist are English-only, built for Western marketing teams, and have no awareness of Gulf culture, Islamic giving traditions, or GCC funder expectations.
GulfGrant AI treats Arabic as a first-class language — not an afterthought. It understands the cultural context of Gulf civil society. And it's free to use.

Built For
DDS 8-Day Building AI Application Challenge 2026
Path: LLM/API Integration
Region: Gulf (Oman / UAE)
