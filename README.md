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

```text
                   ┌──────────────────────┐
                   │   Citizen (Browser)  │
                   │  Speaks in Telugu    │
                   └──────────┬───────────┘
                              │
                              ▼
                   ┌──────────────────────┐
                   │   Next.js Frontend   │
                   │  VoicePanel UI       │
                   └──────────┬───────────┘
                              │
                              ▼
                   ┌──────────────────────┐
                   │  Bolna Web Call SDK  │
                   │ Browser SIP Session  │
                   └──────────┬───────────┘
                              │
                              ▼
                   ┌──────────────────────┐
                   │     Bolna Agent      │
                   │ Telugu AI Assistant  │
                   └──────────┬───────────┘
                              │
                 Confirmed field value
                              │
                              ▼
                   ┌──────────────────────┐
                   │ update_form_field    │
                   │   Custom Function    │
                   └──────────┬───────────┘
                              │
                              ▼
               POST /api/update-field (ngrok)
                              │
                              ▼
                   ┌──────────────────────┐
                   │ Next.js API Route    │
                   │ update-field         │
                   └──────────┬───────────┘
                              │
                              ▼
                   ┌──────────────────────┐
                   │ In-memory Form Store │
                   │ lib/form-store.ts    │
                   └──────────┬───────────┘
                              │
                              ▼
                   ┌──────────────────────┐
                   │ FormProvider Polling │
                   │ /api/form-state      │
                   └──────────┬───────────┘
                              │
                              ▼
                   ┌──────────────────────┐
                   │ CitizenForm UI       │
                   │ Updates Instantly    │
                   └──────────────────────┘
```

---

# 🔄 Complete Data Flow

```text
User clicks Start Voice Session
              │
              ▼
Bolna SIP connection established
              │
              ▼
Agent asks: "What is your full name?"
              │
              ▼
User: "రవి కుమార్"
              │
              ▼
Agent confirms name
              │
              ▼
Bolna calls update_form_field
              │
              ▼
POST /api/update-field
              │
              ▼
form-store.ts updated
              │
              ▼
GET /api/form-state
              │
              ▼
React state updated
              │
              ▼
Full Name appears in the application form
              │
              ▼
Repeat for Phone Number
              │
              ▼
Repeat for District
              │
              ▼
Repeat for New Address
              │
              ▼
All four fields completed
              │
              ▼
Application form fully populated
              │
              ▼
Conversation ends automatically
```

---

# 📋 Fields Collected

The prototype currently captures four fields commonly required in Indian address update workflows.

| Field                   | Voice Collected | Confirmed | Auto-filled |
| ----------------------- | --------------- | --------- | ----------- |
| Full Name               | ✅               | ✅         | ✅           |
| Mobile Number           | ✅               | ✅         | ✅           |
| District                | ✅               | ✅         | ✅           |
| New Residential Address | ✅               | ✅         | ✅           |

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

# 📁 Project Structure

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