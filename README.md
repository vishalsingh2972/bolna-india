# 🏛️ Bolna India – Voice-First Government Form Filling (Telugu)

Bolna India is a voice-first prototype that demonstrates how Indian government forms can be filled entirely through a natural Telugu conversation.

Instead of typing into a form, a citizen simply speaks in Telugu. The AI assistant collects, confirms, and submits the information in real time, and the web application updates automatically as the conversation happens.

This prototype showcases how **speech can become the primary interface for public service delivery**, especially for citizens who are not comfortable with English, typing, or navigating government portals.

---

## 🇮🇳 The Problem

Millions of Indian citizens struggle with digital government forms because of:

* Language barriers
* Low digital literacy
* Complex online portals
* Mobile typing difficulties
* Accessibility limitations for elderly and rural users

A simple address update can require multiple screens, text input fields, and careful navigation.

---

## 💡 The Solution

Bolna India replaces manual form filling with a natural voice conversation.

The citizen simply speaks:

* Full Name
* Mobile Number
* District
* New Residential Address

The AI assistant confirms each field, and once confirmed, the information is immediately written into the application form on the screen.

The result is a **live government-style application form populated through speech alone**.

---

## ✨ What the Prototype Demonstrates

* 🎙️ Telugu voice conversation
* 🧠 AI-powered field extraction
* ✅ Confirmation before submission
* 🔄 Real-time UI updates
* 📋 Government-style address update application
* ☎️ Browser-based voice calling
* 🌐 Live webhook integration using ngrok
* ⚡ End-to-end speech-to-form workflow

---

## 🎥 Demo Flow

1. User clicks **Start Voice Session**
2. Browser connects to a **Bolna voice agent**
3. Agent speaks in Telugu
4. Agent asks for one field at a time
5. User responds naturally
6. Agent repeats the value for confirmation
7. After confirmation, Bolna triggers a webhook
8. Next.js updates the form state
9. UI reflects the new value instantly
10. Process repeats for all four fields

---

# 🧠 Voice Conversation

### Agent

> నమస్తే, నేను అనికను. మీరు డెమో కోసం సిద్ధంగా ఉన్నారా?

### User

> అవును

### Agent

> ముందుగా, దయచేసి మీ పూర్తి పేరు చెప్పండి.

### User

> రవి కుమార్

### Agent

> మీరు చెప్పిన పేరు రవి కుమార్. ఇది సరైందా?

### User

> అవును

Immediately after confirmation, the form updates on screen.

The same flow continues for:

* Mobile Number
* District
* New Address

---

# 🏗️ System Architecture

```mermaid
flowchart TD
    A(["🎙️ Citizen (Browser)<br/>Speaks in Telugu"]):::input

    A --> B["🌐 Next.js Frontend<br/>VoicePanel UI"]
    B --> C["📞 Bolna Web Call SDK<br/>Browser SIP Session"]
    C --> D["🤖 Bolna Voice Agent<br/>Telugu AI Assistant"]

    D -->|"🗣️ Confirmed Field Value"| E["⚙️ update_form_field<br/>Bolna Custom Function"]

    E --> F["🔗 ngrok Tunnel<br/>Public Webhook Endpoint"]
    F --> G["🚀 Next.js API Route<br/>/api/update-field"]
    G --> H["💾 In-Memory Form Store<br/>lib/form-store.ts"]

    H --> I["🔄 FormProvider Polling<br/>/api/form-state"]
    I --> J(["📝 Government Application Form<br/>CitizenForm UI Updates Instantly"]):::output

    classDef input fill:#1a1a2e,stroke:#e94560,stroke-width:2px,color:#ffffff
    classDef default fill:#16213e,stroke:#0f3460,stroke-width:1.5px,color:#e0e0e0
    classDef output fill:#0d3b2e,stroke:#00b894,stroke-width:2px,color:#ffffff

    class A input
    class J output
```

---
# 🧱 Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* shadcn/ui

### Voice Infrastructure

* Bolna Web Call SDK
* SIP over WebSocket
* Browser microphone access

### Backend

* Next.js API Routes
* In-memory form store
* REST webhook endpoints

### Networking

* ngrok (public webhook exposure)

---

```text
app/
├── api/
│   ├── bolna-session/
│   ├── form-state/
│   └── update-field/
├── layout.tsx
└── page.tsx

components/
├── CitizenForm.tsx
├── VoicePanel.tsx
├── Header.tsx
└── providers/
    └── FormProvider.tsx

lib/
├── form-store.ts
├── useBolnaCall.ts
└── utils.ts
```

---

# ⚙️ Bolna Integration

The Bolna agent is configured with a custom function:

```json
{
  "name": "update_form_field",
  "field": "full_name | phone_number | district | new_address",
  "value": "confirmed value"
}
```

After each confirmation, Bolna sends a POST request to:

```text
/api/update-field
```

which immediately updates the application state.

---

# 🧪 Tested End-to-End

The prototype has been successfully tested with a complete Telugu conversation.

### Example

```text
Full Name:
రవి కుమార్

Mobile Number:
6303366896

District:
ఈస్ట్ గోదావరి

New Address:
12-3-45, గాంధీ స్ట్రీట్, అమలాపురం
```

All four values were extracted, confirmed, transmitted through Bolna webhooks, and populated into the application form in real time.

---

# 🎯 Why This Matters

This is not merely a speech-to-text demo.

It demonstrates a complete **voice-native government workflow**:

**Conversation → Confirmation → Function Call → Webhook → Form Update**

The same architecture can power:

* Aadhaar address updates
* Ration card applications
* Pension forms
* PM-Kisan registration
* Voter information updates
* Municipal service requests
* Rural citizen service centers

---

# 🚀 Future Improvements

* PDF generation
* Official Aadhaar-style UI
* PIN code validation
* District lookup
* Address normalization
* Multi-language support (Hindi, Tamil, Kannada, Bengali)
* Document upload assistance
* OTP verification flow
* Integration with real government APIs
* WhatsApp voice interface
* Persistent user sessions
* Voice-based form correction
* Digital signature support

---

# ❤️ Built for Accessible Public Services

Bolna India explores a simple idea:

> Government forms should be filled through conversation, not complexity.

One Telugu conversation. Four confirmed fields. A completed government application.

This prototype demonstrates how voice interfaces can make digital public services significantly more accessible for millions of Indian citizens.