# BetterAgents — Frontend ↔ Docker Backend Integration TODO

## 🎯 Goal

Build a Next.js frontend that talks cleanly to your Dockerized FastAPI backend (Nanobot).

---

## ✅ Phase 1 — Verify Backend Stability (DONE)

* [x] FastAPI runs locally
* [x] Docker image built
* [x] Container runs on port 8000
* [x] `/` endpoint works
* [x] `/chat` endpoint exists

---

## ⚙️ Phase 2 — Setup Next.js App

* [ ] Create fresh Next.js app
* [ ] Setup UI library (shadcn / heroui)
* [ ] Create basic layout (chat UI placeholder)
* [ ] Add input box + send button
* [ ] Add message display area

---

## 🔗 Phase 3 — Connect Frontend → Backend

* [ ] Call backend API (`/chat`) from frontend
* [ ] Send test message ("hello")
* [ ] Receive and display response
* [ ] Handle loading state (user sees "thinking...")
* [ ] Handle errors (backend down, network issue)

---

## ⚠️ Phase 4 — Fix Common Issues

* [ ] CORS configured in backend
* [ ] Correct backend URL used (`localhost:8000`)
* [ ] No hardcoded URLs (use env variables)
* [ ] Test with backend running in Docker only (not local Python)

---

## 🧪 Phase 5 — Test Full Flow

* [ ] Start Docker backend
* [ ] Start Next.js frontend
* [ ] Send message from UI
* [ ] Confirm response comes from backend
* [ ] Test multiple messages

---

## 🎨 Phase 6 — Improve Agent UI (Core BetterAgents feel)

* [ ] Show "Thinking..." state
* [ ] Show steps (e.g. Searching, Processing)
* [ ] Stream responses (token by token)
* [ ] Auto-scroll chat
* [ ] Clean minimal UI

---

## 🧠 Phase 7 — Plug Real Nanobot Logic

* [ ] Replace mock `/chat` response with real AI logic
* [ ] Connect OpenRouter / LLM
* [ ] Add tool usage (search, etc.)
* [ ] Handle longer responses

---

## 🌍 Phase 8 — Deployment Prep

* [ ] Backend works fully in Docker
* [ ] Move backend to hosting (HF / Railway / VPS)
* [ ] Replace localhost URL with deployed URL
* [ ] Test frontend → deployed backend

---

## 🚀 Final Goal

```text
User → Next.js UI → API call → Docker Backend → AI Response → UI
```

---

## 🧠 Rules to Follow

* Do NOT skip steps
* Always test after each step
* If something breaks → debug before moving on
* Keep backend and frontend separate in your mind

---

## 🔥 Definition of “Working”

* You type message in UI
* Click send
* Backend responds
* UI shows response

That’s your first real BetterAgent.

---

## 📌 Tomorrow Start From

👉 Phase 2 — Setup Next.js App
