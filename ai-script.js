javascript
function showModal(modalId) {
    // Close all modals first
    document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('active'));
    console.log('Opening modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    } else {
        console.error('Modal not found:', modalId);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    } else {
        console.error('Modal not found:', modalId);
    }
}

// AI Demo Functions
function startAIDemo() {
    alert('Starting AI Demo! Upload a photo or type a question.');
}

function loadSubjectPrompts() {
    const subject = document.getElementById('subjectSelector').value;
    const promptsDiv = document.getElementById('subjectPrompts');
    promptsDiv.innerHTML = '';

    const prompts = {
        math: ['Solve 2x + 5 = 15', 'What is the Pythagorean theorem?', 'Calculate the area of a circle with radius 7'],
        science: ['Explain photosynthesis', 'What is gravity?', 'Describe the water cycle'],
        english: ['Write a paragraph about Kenya', 'Correct this sentence: She go to school.', 'Define a metaphor'],
        history: ['Who was Jomo Kenyatta?', 'What happened in 1963 in Kenya?', 'Explain the Mau Mau uprising']
    };

    if (prompts[subject]) {
        prompts[subject].forEach(prompt => {
            const btn = document.createElement('button');
            btn.textContent = prompt;
            btn.className = 'prompt-btn';
            btn.onclick = () => sendAIMessage(prompt);
            promptsDiv.appendChild(btn);
        });
    }
}

// Chat and AI Interaction
function sendAIMessage(message = null) {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const inputText = message || chatInput.value.trim();

    if (!inputText) return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = `
        <div class="message-avatar">👤</div>
        <div class="message-content">
            <div class="message-text">${inputText}</div>
            <div class="message-time">${new Date().toLocaleTimeString()}</div>
        </div>
    `;
    chatMessages.appendChild(userMessage);
    chatInput.value = '';

    // Simulate AI response
    const aiMessage = document.createElement('div');
    aiMessage.className = 'message ai';
    aiMessage.innerHTML = `
        <div class="message-avatar ai-avatar">🤖</div>
        <div class="message-content">
            <div class="ai-thinking-indicator">
                <span class="ai-brain">🧠</span>
                <span>AI Processing...</span>
            </div>
            <div class="message-text" style="display: none;">Processing your request...</div>
            <div class="message-time" style="display: none;">Just now</div>
            <div class="ai-confidence" style="display: none;">
                <span class="confidence-label">AI Confidence:</span>
                <div class="confidence-bar">
                    <div class="confidence-fill" style="width: 95%"></div>
                </div>
                <span class="confidence-value">95%</span>
            </div>
            <div class="feedback-buttons" style="display: none;">
                <button class="quick-action-btn ai-btn" onclick="handleFeedback('positive', this)">✅ Got it</button>
                <button class="quick-action-btn ai-btn" onclick="handleFeedback('negative', this)">❌ Still confused</button>
                <button class="quick-action-btn ai-btn" onclick="speakText(this.closest('.message-content').querySelector('.message-text').textContent)">🔊 Read Aloud</button>
            </div>
        </div>
    `;
    chatMessages.appendChild(aiMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate AI thinking
    const typingIndicator = document.getElementById('typingIndicator');
    typingIndicator.classList.add('active');

    setTimeout(() => {
        typingIndicator.classList.remove('active');
        const aiText = aiMessage.querySelector('.message-text');
        const aiTime = aiMessage.querySelector('.message-time');
        const aiConfidence = aiMessage.querySelector('.ai-confidence');
        const feedbackButtons = aiMessage.querySelector('.feedback-buttons');

        aiText.textContent = `Sample response: ${inputText} (Demo Mode - Switch to Live AI for real answers)`;
        aiText.style.display = 'block';
        aiTime.style.display = 'block';
        aiConfidence.style.display = 'block';
        feedbackButtons.style.display = 'flex';

        // Update gamification points
        updateQuestPoints(10); // Award 10 points per question
        checkQuestProgress();
    }, 2000); // Simulate 2-second processing
}

function switchInputMethod(method) {
    const methods = ['text', 'photo', 'voice', 'payment', 'airtel', 'card'];
    methods.forEach(m => {
        document.getElementById(`${m}MethodBtn`).classList.remove('active');
    });
    document.getElementById(`${method}MethodBtn`).classList.add('active');

    if (method === 'photo') {
        document.getElementById('fileUploadArea').style.display = 'block';
    } else {
        document.getElementById('fileUploadArea').style.display = 'none';
    }
}

function handleFeedback(type, btn) {
    const message = btn.closest('.message');
    const notification = document.createElement('div');
    notification.className = `notification ${type === 'positive' ? 'notification-success' : 'notification-error'}`;
    notification.textContent = type === 'positive' ? 'Glad to help! 😊' : 'Let me improve! 🤔';
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 3000);

    if (type === 'positive') {
        updateQuestPoints(5); // Bonus points for positive feedback
        checkQuestProgress();
    }
}

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
}

// OCR and File Upload
document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        Tesseract.recognize(file, 'eng', {
            logger: m => console.log(m)
        }).then(({ data: { text } }) => {
            document.getElementById('ocrText').value = text;
            showModal('ocrPreviewModal');
        });
    }
});

function submitOcrText() {
    const text = document.getElementById('ocrText').value;
    sendAIMessage(text);
    closeModal('ocrPreviewModal');
}

// Payment Demo
// ...existing code...

function showPaymentDemo(method = 'mpesa') {
    document.getElementById('paymentMethod').value = method;
    // Update modal content based on method
    let logo = '';
    let label = '';
    let placeholder = '';
    let demoText = '';
    if (method === 'mpesa') {
        logo = 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200';
        label = 'Phone Number';
        placeholder = '+254712345678';
        demoText = 'Process a Payment (Demo Mode)';
    } else if (method === 'airtel') {
        logo = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Airtel_logo.png';
        label = 'Airtel Number';
        placeholder = '+254735123456';
        demoText = 'Airtel Money Payment (Demo)';
    } else if (method === 'card') {
        logo = 'https://cdn-icons-png.flaticon.com/512/633/633611.png';
        label = 'Card Number';
        placeholder = '1234 5678 9012 3456';
        demoText = 'Bank Card Payment (Demo)';
    } else {
        // Default fallback
        logo = 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200';
        label = 'Phone Number';
        placeholder = '+254712345678';
        demoText = 'Process a Payment (Demo Mode)';
    }

    // Update DOM elements if they exist
    const logoImg = document.querySelector('.mpesa-logo');
    if (logoImg) logoImg.src = logo;
    const headerH4 = document.querySelector('.mpesa-header h4');
    if (headerH4) headerH4.textContent = demoText;
    const phoneLabel = document.querySelector('label[for="paymentPhone"]');
    if (phoneLabel) phoneLabel.textContent = label;
    const phoneInput = document.getElementById('paymentPhone');
    if (phoneInput) phoneInput.placeholder = placeholder;

    showModal('paymentModal');
}

// Login and OTP
function processLogin() {
    const phone = document.getElementById('loginPhone').value;
    const sendBtn = document.getElementById('sendOtpBtn');
    if (!sendBtn) {
        console.error('Send OTP button not found');
        return;
    }
    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';
    
    if (phone) {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        localStorage.setItem('otp', otp);
        localStorage.setItem('phone', phone);
        const notification = document.createElement('div');
        notification.className = 'notification notification-success';
        notification.textContent = `OTP ${otp} sent to ${phone}! Enter it to verify. (Demo Mode)`;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 5000);
        showModal('otpModal');
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send OTP';
    } else {
        alert('Please enter a phone number.');
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send OTP';
    }
}

function verifyOTP() {
    const enteredOTP = document.getElementById('otpInput').value;
    const storedOTP = localStorage.getItem('otp');
    const phone = localStorage.getItem('phone');

    if (enteredOTP === storedOTP) {
        const notification = document.createElement('div');
        notification.className = 'notification notification-success';
        notification.textContent = `Login successful for ${phone}! (Demo Mode)`;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
        closeModal('otpModal');
        closeModal('loginModal');
    } else {
        alert('Invalid OTP. Please try again.');
    }
}

// Quick Actions
function askAIQuestion(subject) {
    const questions = {
        math: 'Solve 2x + 5 = 15',
        science: 'Explain photosynthesis',
        english: 'Write a paragraph about Kenya'
    };
    sendAIMessage(questions[subject] || 'What can I help you with?');
}

function showAICapabilities() {
    sendAIMessage('I can: Solve math, explain science, read homework photos, and more!');
}

function viewPastQuestions() {
    sendAIMessage('Past questions feature coming soon!');
}

function saveGradeLevel() {
    const grade = document.getElementById('gradeLevel').value;
    localStorage.setItem('gradeLevel', grade); // Fixed typo
    alert(`Grade level set to ${grade || 'default'}`);
}

function switchAIMode() {
    const mode = document.getElementById('aiMode').value;
    alert(`Switched to ${mode} mode! (Demo Mode - No real API calls)`);
}

// Gamification - Study Quest System
function updateQuestPoints(points) {
    let currentPoints = parseInt(localStorage.getItem('questPoints') || '0');
    currentPoints += points;
    localStorage.setItem('questPoints', currentPoints);
    document.getElementById('questPoints').textContent = currentPoints;
    updateProgressBar(currentPoints);
}

function updateProgressBar(points) {
    const progress = document.getElementById('questProgress');
    const percentage = Math.min((points / 250) * 100, 100); // Cap at 250 points
    progress.style.width = `${percentage}%`;
}

function checkQuestProgress() {
    const points = parseInt(localStorage.getItem('questPoints') || '0');
    const badges = document.getElementById('questBadges');
    const nextBadgeSpan = document.getElementById('nextBadge');

    const badgeLevels = [
        { name: 'Math Wizard', points: 50 },
        { name: 'Science Explorer', points: 100 },
        { name: 'Homework Hero', points: 250 }
    ];

    badgeLevels.forEach((level, index) => {
        if (points >= level.points && !localStorage.getItem(`badge_${level.name}`)) {
            const badge = document.createElement('span');
            badge.className = 'badge';
            badge.textContent = level.name;
            badges.appendChild(badge);
            localStorage.setItem(`badge_${level.name}`, 'unlocked');
            showNotification(`Congratulations! You unlocked the ${level.name} badge!`);
        }
    });

    const nextLevel = badgeLevels.find(level => points < level.points);
    nextBadgeSpan.textContent = nextLevel ? `${nextLevel.name} (${nextLevel.points} pts)` : 'Max Level Achieved!';
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification notification-success';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Language Switching
function changeLanguage() {
    const lang = document.getElementById('languageSelector').value;
    const elements = {
        en: {
            heroTitle: "The Future of Homework Help is Here",
            heroSubtitle: "Real AI integration, photo recognition, and M-Pesa payments. Built for Kenyan students and parents.",
            tutorialTitle: "🎓 Welcome to StudyBuddy AI Pro",
            step1: "Step 1: Ask a Question",
            step1Desc: "Type your question in the text box or upload a photo.",
            step2: "Step 2: Get AI Response",
            step2Desc: "Wait for the AI to process and provide an answer with confidence.",
            step3: "Step 3: Earn Points",
            step3Desc: "Earn points and badges via the Study Quest panel!"
        },
        sw: {
            heroTitle: "Mstari wa Mbele wa Msaada wa Kazi za Nyumbani Uko Hapa",
            heroSubtitle: "Uingizaji wa AI halisi, utambuzi wa picha, na malipo ya M-Pesa. Imetengenezwa kwa ajili ya wanafunzi na wazazi wa Kenya.",
            tutorialTitle: "🎓 Karibu na StudyBuddy AI Pro",
            step1: "Hatua ya 1: Uliza Swali",
            step1Desc: "Andika swali lako kwenye kisanduku cha maandishi au pakia picha.",
            step2: "Hatua ya 2: Pata Jibu la AI",
            step2Desc: "Subiri AI ichukue muda na kutoa jibu kwa ujasiri.",
            step3: "Hatua ya 3: Pata Pointi",
            step3Desc: "Pata pointi na beji kupitia paneli ya Study Quest!"
        }
    };

    const data = elements[lang];
    document.querySelector('.hero-title').textContent = data.heroTitle;
    document.querySelector('.hero-subtitle').textContent = data.heroSubtitle;
    document.querySelector('#tutorialModal .modal-header h3').textContent = data.tutorialTitle;
    document.querySelectorAll('.tutorial-step')[0].querySelector('h4').textContent = data.step1;
    document.querySelectorAll('.tutorial-step')[0].querySelector('p').textContent = data.step1Desc;
    document.querySelectorAll('.tutorial-step')[1].querySelector('h4').textContent = data.step2;
    document.querySelectorAll('.tutorial-step')[1].querySelector('p').textContent = data.step2Desc;
    document.querySelectorAll('.tutorial-step')[2].querySelector('h4').textContent = data.step3;
    document.querySelectorAll('.tutorial-step')[2].querySelector('p').textContent = data.step3Desc;
}

// Tutorial Navigation
let currentTutorialStep = 0;
const totalSteps = document.querySelectorAll('#tutorialSteps .tutorial-step').length;

function nextTutorialStep() {
    const steps = document.querySelectorAll('#tutorialSteps .tutorial-step');
    const prevBtn = document.getElementById('prevTutorialBtn');
    const nextBtn = document.getElementById('nextTutorialBtn');

    if (currentTutorialStep < totalSteps - 1) {
        steps[currentTutorialStep].classList.remove('active');
        currentTutorialStep++;
        steps[currentTutorialStep].classList.add('active');
        prevBtn.style.display = 'inline-block';
        if (currentTutorialStep === totalSteps - 1) {
            nextBtn.textContent = 'Finish';
        }
    } else {
        closeModal('tutorialModal');
    }
}

function prevTutorialStep() {
    const steps = document.querySelectorAll('#tutorialSteps .tutorial-step');
    const prevBtn = document.getElementById('prevTutorialBtn');
    const nextBtn = document.getElementById('nextTutorialBtn');

    if (currentTutorialStep > 0) {
        steps[currentTutorialStep].classList.remove('active');
        currentTutorialStep--;
        steps[currentTutorialStep].classList.add('active');
        nextBtn.textContent = 'Next';
        if (currentTutorialStep === 0) {
            prevBtn.style.display = 'none';
        }
    }
}

function toggleTutorialPreference() {
    console.log('Tutorial preference toggled');
}

// Analytics Canvas
function showAnalyticsCanvas() {
    showModal('canvasPanel');
    const ctx = document.getElementById('analyticsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Math', 'Science', 'English', 'History'],
            datasets: [{
                label: 'Questions Answered',
                data: [400, 300, 200, 100],
                backgroundColor: 'rgba(16, 185, 129, 0.7)',
                borderColor: 'rgba(6, 95, 70, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: { y: { beginAtZero: true } },
            plugins: { legend: { labels: { color: getComputedStyle(document.documentElement).getPropertyValue('--text-color').trim() } } }
        }
    });
}

function downloadChart() {
    const link = document.createElement('a');
    link.download = 'analytics_chart.png';
    link.href = document.getElementById('analyticsChart').toDataURL();
    link.click();
}

function downloadPitchDeck() {
    alert('Pitch deck download feature coming soon!');
}

function scheduleDemo() {
    alert('Demo scheduled! Contact us at support@studybuddy.ai');
}

function closeCanvasPanel() {
    closeModal('canvasPanel');
}

// Additional utility functions
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function toggleTheme() {
    document.body.classList.toggle('theme-dark');
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.textContent = document.body.classList.contains('theme-dark') ? '☀️' : '🌙';
}

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Clear all modal active states and localStorage on load
    document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('active'));
    localStorage.removeItem('otp'); // Clear stale OTP
    localStorage.removeItem('phone'); // Clear stale phone
    updateQuestPoints(0);
    checkQuestProgress();
    switchInputMethod('text');
    const steps = document.querySelectorAll('#tutorialSteps .tutorial-step');
    if (steps.length > 0) {
        steps[0].classList.add('active');
    }
    // Prevent default form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', e => e.preventDefault());
    });
    // Debug login button
    document.getElementById('loginBtn').addEventListener('click', () => {
        console.log('Login button clicked');
        showModal('loginModal');
    });
    document.getElementById('investorBtn').addEventListener('click', () => {
        console.log('Investor button clicked');
        showModal('investorModal');
    });
});