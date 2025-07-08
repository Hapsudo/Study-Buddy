# 🧠 StudyBuddy AI Pro – The Smartest Study Assistant for Kenyan Learners 🇰🇪

**StudyBuddy AI Pro** is an AI-first, mobile-optimized web platform tailored for **Kenyan students and parents**. Whether it's solving a tricky math problem, understanding a science topic, or translating an English grammar rule, **StudyBuddy delivers real-time, conversational learning**.

With **photo recognition**, **voice-based queries**, **Swahili/English multilingual support**, and **M-Pesa-powered microtransactions**, it transforms education into an engaging, gamified experience.

> 🚀 *Designed for impact. Built for scale. Tested by real parents and learners.*

---

## 📚 Table of Contents

- [✨ Features](#-features)  
- [🛠️ Tech Stack](#-tech-stack)  
- [🚀 Installation](#-installation)  
- [📌 Usage](#-usage)  
- [📁 File Structure](#-file-structure)  
- [🧠 AI Integration](#-ai-integration)  
- [💰 Payment Methods](#-payment-methods)  
- [🎮 Gamification](#-gamification)  
- [🤝 Contributing](#-contributing)  
- [🪪 License](#-license)  
- [📞 Contact](#-contact)  

---

## ✨ Features

| Capability                | Description |
|---------------------------|-------------|
| 🎓 **AI Homework Assistant**  | Get instant, step-by-step explanations in Math, Science, English, and History. |
| 📸 **Photo-to-Text (OCR)**     | Upload photos of handwritten/printed homework — StudyBuddy reads and solves them. |
| 🗣️ **Voice Input**            | Ask questions via voice — helpful for young learners or those with accessibility needs. |
| 🔊 **Text-to-Speech**         | AI reads answers aloud to support low-literacy environments. |
| 📱 **Mobile-Optimized**       | Built to work well on low-end Android devices and tablets. |
| 💳 **M-Pesa Integrated**      | Pay-per-question or subscribe — demo mode with M-Pesa, Airtel & card support. |
| 🌍 **Multilingual**           | UI available in English & Swahili. |
| 📊 **Confidence Scoring**     | Each answer shows confidence % and learning level. |
| 🎮 **Study Quest**            | Earn points and badges for interaction — making education fun! |
| 💼 **Investor Portal**        | Market insights, pitch deck, and growth charts for backers. |

---

## 🛠️ Tech Stack

| Layer         | Technology |
|---------------|------------|
| **Frontend**  | HTML5, CSS3, JavaScript (ES6+) |
| **Styling**   | Tailwind-inspired utility classes + custom CSS |
| **AI/OCR**    | Tesseract.js (OCR), OpenAI/xAI Grok API (demo mode) |
| **Voice/Audio** | `webkitSpeechRecognition`, `speechSynthesis` |
| **Backend (Demo)** | Node.js (local JSON APIs for mock flow) |
| **Payments**  | M-Pesa & Airtel (simulated STK push & OTP) |
| **Charts**    | Chart.js for dashboard analytics |

---

## 🚀 Installation

```bash
git clone https://github.com/yourusername/studybuddy-ai-pro.git
cd studybuddy-ai-pro
npm install
📄 Environment Variables
Create a .env file:

env
Copy
Edit
AI_API_KEY=your_openai_or_grok_key
MPESA_API_KEY=your_mpesa_sandbox_key
🔄 Run Locally
bash
Copy
Edit
npm install -g http-server
http-server . -p 8000
Visit: https://study-buddy-aipro.netlify.app/#

📌 Usage
🏠 Homepage
Logo + welcome title with animated background.

Language switch (English/Swahili).

Dark/light mode toggle.

AI feature buttons: Photo, Voice, M-Pesa.

🤖 AI Chat Panel
Choose subject.

Ask via text, voice, or upload a photo.

See AI responses with confidence score + follow-up hints.

💸 Payment Demo
Try simulated M-Pesa, Airtel, or card payment.

Enter phone → fake STK → OTP confirmation → feedback modal.

🎮 Study Quest
Earn XP:

+10 points per question

+5 for positive feedback

Unlock badges:

🧠 Math Wizard – 50 pts

🔬 Science Explorer – 100 pts

🏆 Homework Hero – 250 pts

Progress stored in localStorage.

📊 Investor Dashboard
Access pitch deck, demo stats, and funding CTA.

OTP-protected modal with animated charts via Chart.js.

📁 File Structure
bash
Copy
Edit
studybuddy-ai-pro/
├── index.html              # Main interface
├── style.css               # Mobile-first custom styling
├── ai-script.js            # AI logic, OCR, and interactivity
├── package.json            # Metadata and dependencies
├── .env                    # API keys and secrets (optional)
├── assets/
│   ├── images/             # Logos, mockups, illustrations
│   └── icons/              # Subject icons & buttons
├── README.md               # This file 📘
🧠 AI Integration
🔁 Demo Mode (Default)
Simulated responses from xAI/OpenAI with delay, 95% confidence, and sample text.

☁️ Live Mode (Optional)
js
Copy
Edit
const response = await fetch('https://api.x.ai/grok', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.AI_API_KEY}`
  },
  body: JSON.stringify({ query: message })
});
🖼 OCR (Photo-to-Text)
Uses Tesseract.js v4.0.2 to extract text.

Extracted content appears in a preview modal for submission.

💰 Payment Methods
💡 Demo Flow
Enter fake phone → STK push simulated → OTP entry → success.

🔐 Extend for Production
js
Copy
Edit
await fetch('https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.MPESA_API_KEY}`
  },
  ...
});
Supports:

M-Pesa

Airtel Money

Card (e.g., Stripe or Flutterwave)

🎮 Gamification
Action	Points
Ask a question	+10
Provide feedback	+5
Earn badge (levels)	50/100/250 pts

XP bar updates in real time.

Badges animate on unlock.

Stored in browser via localStorage.

🤝 Contributing
Fork this repo



🪪 License
This project is licensed under the MIT License.
See LICENSE for details.

📞 Contact
📧 Email: support@studybuddy.ai

🐦 Twitter: @StudyBuddyAIPro

🌐 Website: studybuddy.ai

💡 Built with ❤️ by Catherine Abugah – proudly supporting Kenyan learners with smart, accessible, and locally-relevant education solutions.



