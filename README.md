🧠 StudyBuddy AI Pro – The Smartest Study Assistant for Kenyan Learners 🇰🇪
StudyBuddy AI Pro is an AI-first, mobile-friendly web platform tailored for Kenyan students and parents. With real AI integrations, image-based homework recognition, voice-assisted queries, and M-Pesa-powered microtransactions, it makes learning personalized, accessible, and rewarding. Whether it’s a tough math equation, a science question, or an English grammar check — StudyBuddy delivers friendly, step-by-step support.

🚀 Designed for impact. Built for scale. Tested by real parents and students.

📚 Table of Contents
✨ Features

🛠️ Tech Stack

🚀 Installation

📌 Usage

📁 File Structure

🧠 AI Integration

💰 Payment Methods

🎮 Gamification

🤝 Contributing

🪪 License

📞 Contact

✨ Features
Capability	Description
🎓 AI Homework Assistant	Get instant, easy-to-understand answers to Math, Science, English, and History questions.
📸 Photo-to-Text	Upload images of handwritten or printed homework — AI extracts and explains!
🗣️ Voice Input	Ask questions via voice for non-typing users.
💬 Text-to-Speech	AI reads answers aloud, perfect for low-literacy or younger learners.
📱 Mobile-Optimized	Fully responsive on low-end Android devices.
💳 M-Pesa Integrated	Pay-per-question or subscribe monthly via M-Pesa. (Demo-ready)
🌍 Multilingual Support	Switch between English and Swahili for inclusivity.
🧠 AI Confidence Scoring	Every answer includes a confidence percentage and learning level.
🧩 Study Quest Gamification	Earn points and badges for learning — education made fun!
💼 Investor Portal	Includes pitch deck, market analysis, and demo for potential backers.

🛠️ Tech Stack
Layer	Tech
Frontend	HTML5, CSS3, JavaScript (ES6+)
Styling	Custom CSS (Tailwind-inspired), gradients, animations
AI Integration	OpenAI GPT-4 API (demo), Tesseract.js (OCR)
Voice Tools	webkitSpeechRecognition & window.speechSynthesis
Backend (Optional)	Node.js (simulated APIs for demo)
Payments	M-Pesa demo integration, scalable to Flutterwave/Paystack
Charts	Chart.js for student/usage analytics

🚀 Installation
bash
Copy
Edit
git clone https://github.com/yourusername/studybuddy-ai-pro.git
cd studybuddy-ai-pro
npm install
📄 Environment Setup
Create a .env file in the root directory:

env
Copy
Edit
AI_API_KEY=your_openai_or_grok_key
MPESA_API_KEY=your_mpesa_key
🔄 Run Locally
bash
Copy
Edit
npm install -g http-server
http-server . -p 8000
Open your browser at: http://localhost:8000

📌 Usage Overview
🏠 Homepage
Hero banner with bold CTA and AI stats.

Toggle between English/Swahili.

Switch Dark/Light theme for readability.

🤖 AI Chat Panel
Select subject (Math, Science, English, History).

Ask via text, voice, or photo upload.

AI responds with confidence, learning level, and follow-up options.

💸 Payment Demo
Try M-Pesa, Airtel Money, or card.

Simulated STK push and OTP flow for demo.

🎮 Study Quest
Earn XP per interaction.

Unlock badges:

Math Wizard – 50 pts

Science Explorer – 100 pts

Homework Hero – 250 pts

Points saved with localStorage.

📊 Investor Dashboard
Navigate to Investor Portal.

View user growth charts, value prop, and download the pitch deck.

Simulated OTP authentication enabled.

📁 File Structure
bash
Copy
Edit
studybuddy-ai-pro/
├── index.html              # Main entry
├── style.css               # Custom mobile-first styles
├── ai-script.js            # Core AI logic + UI interactions
├── package.json            # Project metadata and scripts
├── .env                    # API secrets (optional)
├── assets/
│   ├── images/             # UI & feature illustrations
│   └── icons/              # Subject & tech icons
├── README.md               # You’re reading this file
🧠 AI Integration
Demo Mode (Default)
Simulates realistic AI answers with delay and confidence.

Covers Math, Science, English, History.

Live Mode (Optional)
Update ai-script.js to connect to real APIs:

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
🧪 OCR powered by Tesseract.js extracts text from photos for AI to interpret.

💰 Payment Methods
Demo Flow
Enter phone number → Receive fake STK prompt → Get confirmation.

Simulates M-Pesa, Airtel, and card options.

Extend for Production:
Replace in processPayment():

js
Copy
Edit
await fetch('https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
  method: 'POST',
  headers: { Authorization: `Bearer ${MPESA_API_KEY}` },
  ...
});
🎮 Gamification System
Action	Points
Ask a question	+10
Thumbs up ✅	+5
Earn badge at milestones	50, 100, 250 pts

✅ Progress bar auto-updates
✅ Badges animate in UI
✅ Stored in localStorage for persistence

🤝 Contributing
Fork the repo

Create a feature branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m 'Add feature'

Push to GitHub: git push origin feature/YourFeature

Submit a Pull Request

🪪 License
MIT License. See LICENSE for full terms.

📞 Contact
📧 Email: support@studybuddy.ai

🐦 Twitter/X: @StudyBuddyAIPro

🌐 Website: https://studybuddy.ai

Built with ❤️ by Catherine Abugah, as part of Kenyan developers for Kenyan learners.