# NanoBot Project Status & Next Steps

## 🚀 Deployment & Networking
- [x] **Bind to 0.0.0.0**: Configure Next.js to listen on all network interfaces.
    - [x] Update `dev` script in `package.json`: `next dev -H 0.0.0.0`
    - [ ] For production, set environment variable `HOSTNAME=0.0.0.0`
- [ ] **Port Configuration**: Ensure the app runs on the correct port (default 3000).

## 📡 Streaming & API
- [x] **Verify Real-time Streaming**:
    - [x] Connected frontend to `http://localhost:8000/chat` for NanoBot backend.
    - [x] Streaming implemented via raw fetch proxy.
- [x] **Multi-modal Support Check**: Images/file parts forwarded to backend.

## 🎨 UI & UX Improvements (PicoClaw)
- [ ] **Finalize PicoClaw Aesthetic**:
    - [ ] [DONE] Simplify MessageItem to minimalist text-only prefixes.
    - [ ] [DONE] Implement ultra-fine borders and high-transparency headers.
    - [ ] [DONE] Integrate monospaced typography for all chat content.
- [ ] **Mobile Optimization**: Ensure the narrow column layout (`max-w-2xl`) works well on small screens.

## 📦 Maintenance
- [ ] **Dependency Audit**: Keep `@ai-sdk/react` and `ai` packages updated to match the v6.x experimental features.
- [ ] **Client Components**: Ensure `"use client"` is maintained on all hook-dependent pages.
