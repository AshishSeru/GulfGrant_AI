# GulfGrant AI

**AI writing assistant for Gulf-region NGOs — built in 7 days.**

🌐 **Live app:** https://gulf-grant-ai.vercel.app  
📁 **GitHub:** https://github.com/AshishSeru/GulfGrant_AI  
🎥 **Demo video:** (https://drive.google.com/drive/folders/17JcXl2TMZrUCWcb5cKioWzC_Z0LiEqsi?usp=sharing)

---

## What it does

GulfGrant AI helps NGO volunteers across Oman and the UAE produce professional written content in minutes — no communications team needed.

**4 core tools:**

| Tool | What it generates |
|---|---|
| Grant Application Writer | Complete 7-section grant proposal tailored to your funder |
| Donor Outreach Email | Personal, story-first email with subject line included |
| Social Media Post | Platform-specific posts for Instagram, LinkedIn, X, Facebook |
| Gulf Funder Matching | Matches your cause to 25 real Gulf funders with explanations |

**Plus:**
- **Proposal Quality Scorer** — GPT scores your grant on 5 criteria with improvement tips
- **Full Arabic UI + RTL layout** — every element translates including all 4 tabs
- **Output history** — last 4 generations saved in session, click to restore
- **Download as Word** — one-click .doc download of any output
- **NGO Profile save** — saves org name/mission locally, pre-fills next visit
- **Tone preview** — describes what each tone produces before you generate
- **Response time + cost display** — transparent about what each generation costs

---

## No setup required

Open the URL and start generating. No signup. No API key. No installation.

The OpenAI API key is stored securely as a Vercel environment variable — never in code, never in the browser.

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | HTML5 + CSS3 + Vanilla JavaScript (single file) |
| Fonts | Playfair Display + DM Sans via Google Fonts |
| AI Model | GPT-4o via OpenAI API |
| Backend | Vercel Serverless Function (`/api/generate.js`) |
| Deployment | Vercel — auto-deploys on every GitHub push |
| Languages | English + Arabic with full RTL layout |

---

## Architecture

```
User browser
    │
    ├── index.html (complete app — HTML + CSS + JS)
    │
    └── POST /api/generate
            │
            └── api/generate.js (Vercel serverless)
                        │
                        └── OpenAI GPT-4o
```

No database. No user accounts. No data stored. Fully stateless.

---

## Running locally

```bash
git clone https://github.com/AshishSeru/GulfGrant_AI.git
cd GulfGrant_AI
npm i -g vercel
```

Create `.env.local`:
```
OPENAI_API_KEY=your_key_here
```

Run:
```bash
vercel dev
```

Open `http://localhost:3000`

---

## Gulf Funder Database (25 funders)

Mohammed Bin Rashid Foundation · Khalifa Fund · Emirates Foundation · Community Development Authority Dubai · Abu Dhabi Social Support Authority · Sharjah Charity International · PDO Social Investment · Oman Oil & Gas CSR Fund · Bank Muscat Al Wathbah Fund · Oman Charitable Organisation · Diwan of Royal Court Grants · Qatar Foundation · Qatar Charity · Kuwait Awqaf Public Foundation · Kuwait Fund for Arab Economic Development · Bahrain Endowment Authority · Islamic Development Bank · HSBC Middle East Foundation · Shell Oman · Etisalat Foundation UAE · Dubai Cares · Zakat Fund UAE · Gulf International Bank Foundation · Saudi Aramco Sustainability · Abdul Latif Jameel Community Initiatives

---

## Built for DDS AI Challenge 2026

**Path:** LLM/API Integration | **Participant:** Ashish Seru

---

MIT License
