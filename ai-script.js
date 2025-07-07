// --- TRANSLATIONS OBJECT ---
const translations = {
    en: {
        navHome: 'Home',
        navFeatures: 'AI Features',
        navDashboard: 'School Dashboard',
        navPricing: 'Pricing',
        navInvestor: 'For Investors',
        loginBtn: 'Login',
        getStartedBtn: 'Get Started',
        forInvestorsBtn: 'For Investors',
        chatPlaceholder: 'Ask your homework question...',
        subjectLabel: 'Select Subject',
        modeLabel: 'AI Mode:',
        gradeLabel: 'Grade:',
        questHeader: 'Study Quest',
        heroTitle: 'Welcome to StudyBuddy AI Pro!',
        heroSubtitle: 'Explore our AI-powered features to get instant homework help, upload photos, use voice input, or pay seamlessly.',
        photoBtn: 'Photo',
        textBtn: 'Text',
        voiceBtn: 'Voice',
        mpesaBtn: 'M-Pesa',
        airtelBtn: 'Airtel',
        cardBtn: 'Card',
        mathPrompts: ['Solve 2x + 5 = 15', 'What is the Pythagorean theorem?', 'Calculate the area of a circle with radius 7'],
        sciencePrompts: ['Explain photosynthesis', "What is Newton's first law?", 'Describe the water cycle'],
        englishPrompts: ['What is a metaphor?', 'Correct this sentence: She run fast.', 'Explain the plot of Romeo and Juliet'],
        historyPrompts: ['What caused the World War I?', 'Who was Jomo Kenyatta?', 'Explain the Mau Mau uprising'],
        paymentTitle: 'M-Pesa Payment Demo',
        paymentHeader: 'Pay with M-Pesa, Airtel, or Card',
        paymentDesc: 'Enter your details to proceed.',
        paymentPhone: 'Phone Number',
        paymentAmount: 'Amount (KES)',
        paymentMethod: 'Payment Method',
        paymentBtn: 'Pay Now',
        paymentHow: 'How it Works',
        paymentStep1: 'Enter phone number and amount',
        paymentStep2: 'Receive OTP on your phone',
        paymentStep3: 'Confirm payment',
        ocrTitle: 'OCR Preview',
        ocrExtracted: 'Extracted Text',
        ocrBtn: 'Send to AI',
        loginTitle: 'Login to StudyBuddy',
        loginPhone: 'Phone Number',
        loginBtnModal: 'Send OTP',
        otpTitle: 'Enter OTP',
        otpLabel: 'OTP Code',
        otpBtn: 'Verify',
        investorTitle: 'Investor Portal',
        investorMarket: 'Market Opportunity',
        investorFunding: 'Funding Needs',
        investorDownload: 'Download Pitch Deck',
        investorSchedule: 'Schedule a Demo',
        analyticsTitle: 'Analytics Dashboard',
        analyticsBtn: 'Download Chart'
    },
    sw: {
        navHome: 'Nyumbani',
        navFeatures: 'Vipengele vya AI',
        navDashboard: 'Dashibodi ya Shule',
        navPricing: 'Bei',
        navInvestor: 'Kwa Wawekezaji',
        loginBtn: 'Ingia',
        getStartedBtn: 'Anza',
        forInvestorsBtn: 'Kwa Wawekezaji',
        chatPlaceholder: 'Uliza swali lako la kazi ya nyumbani...',
        subjectLabel: 'Chagua Somo',
        modeLabel: 'Hali ya AI:',
        gradeLabel: 'Daraja:',
        questHeader: 'Shindano la Kusoma',
        heroTitle: 'Karibu kwa StudyBuddy AI Pro!',
        heroSubtitle: 'Chunguza vipengele vyetu vya AI ili kupata msaada wa kazi za nyumbani mara moja, pakia picha, tumia ingizo la sauti, au lipia bila mshono.',
        photoBtn: 'Picha',
        textBtn: 'Andika',
        voiceBtn: 'Sauti',
        mpesaBtn: 'M-Pesa',
        airtelBtn: 'Airtel',
        cardBtn: 'Kadi',
        mathPrompts: ['Tatua 2x + 5 = 15', 'Je, nadharia ya Pythagorean ni nini?', 'Hesabu eneo la duara lenye radius 7'],
        sciencePrompts: ['Elezea fotosinthesis', 'Je, sheria ya kwanza ya Newton ni nini?', 'Elezea mzunguko wa maji'],
        englishPrompts: ['Je, tashbihi ni nini?', 'Sahihisha sentensi hii: Yeye anakimbia haraka.', 'Elezea njama ya Romeo na Juliet'],
        historyPrompts: ['Nini kilisababisha Vita vya Kwanza vya Dunia?', 'Jomo Kenyatta alikuwa nani?', 'Elezea maasi ya Mau Mau'],
        paymentTitle: 'Demo ya Malipo ya M-Pesa',
        paymentHeader: 'Lipa kwa M-Pesa, Airtel, au Kadi',
        paymentDesc: 'Weka maelezo yako ili kuendelea.',
        paymentPhone: 'Nambari ya Simu',
        paymentAmount: 'Kiasi (KES)',
        paymentMethod: 'Njia ya Malipo',
        paymentBtn: 'Lipa Sasa',
        paymentHow: 'Jinsi Inavyofanya Kazi',
        paymentStep1: 'Weka nambari ya simu na kiasi',
        paymentStep2: 'Pokea OTP kwenye simu yako',
        paymentStep3: 'Thibitisha malipo',
        ocrTitle: 'Muhtasari wa OCR',
        ocrExtracted: 'Maandishi Yaliyotolewa',
        ocrBtn: 'Tuma kwa AI',
        loginTitle: 'Ingia kwa StudyBuddy',
        loginPhone: 'Nambari ya Simu',
        loginBtnModal: 'Tuma OTP',
        otpTitle: 'Weka OTP',
        otpLabel: 'Msimbo wa OTP',
        otpBtn: 'Thibitisha',
        investorTitle: 'Lango la Wawekezaji',
        investorMarket: 'Fursa ya Soko',
        investorFunding: 'Mahitaji ya Ufadhili',
        investorDownload: 'Pakua Pitch Deck',
        investorSchedule: 'Panga Demo',
        analyticsTitle: 'Dashibodi ya Takwimu',
        analyticsBtn: 'Pakua Chati'
    }
};

function showModal(modalId) {
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

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    } else {
        console.error('Section not found:', sectionId);
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') === `showSection('${sectionId}')`) {
            link.classList.add('active');
        }
    });

    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function startAIDemo() {
    alert('Starting AI Demo! Upload a photo or type a question.');
}

function loadSubjectPrompts() {
    const subject = document.getElementById('subjectSelector').value;
    const promptsDiv = document.getElementById('subjectPrompts');
    promptsDiv.innerHTML = '';

    const prompts = {
        math: ['Solve 2x + 5 = 15', 'What is the Pythagorean theorem?', 'Calculate the area of a circle with radius 7'],
        science: ['Explain photosynthesis', "What is Newton's first law?", 'Describe the water cycle'],
        english: ['What is a metaphor?', 'Correct this sentence: She run fast.', 'Explain the plot of Romeo and Juliet'],
        history: ['What caused the World War I?', 'Who was Jomo Kenyatta?', 'Explain the Mau Mau uprising']
    };

    prompts[subject].forEach(prompt => {
        const btn = document.createElement('button');
        btn.className = 'prompt-btn';
        btn.textContent = prompt;
        btn.onclick = () => askAIQuestion(subject, prompt);
        promptsDiv.appendChild(btn);
    });
}

function switchInputMethod(method) {
    document.querySelectorAll('.input-method-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`${method}MethodBtn`).classList.add('active');
    
    const fileUploadArea = document.getElementById('fileUploadArea');
    fileUploadArea.style.display = method === 'photo' ? 'block' : 'none';
}

function switchAIMode() {
    const mode = document.getElementById('aiMode').value;
    console.log('AI Mode switched to:', mode);
}

function saveGradeLevel() {
    const grade = document.getElementById('gradeLevel').value;
    console.log('Grade level set to:', grade);
}

async function sendAIMessage() {
    console.log('sendAIMessage called');
    const input = document.getElementById('chatInput');
    const messageText = input.value.trim();
    if (!messageText) return;

    const chatMessages = document.getElementById('chatMessages');
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = `
        <div class="message-content">
            <div class="message-text">${messageText}</div>
            <div class="message-time">${new Date().toLocaleTimeString()}</div>
        </div>
        <div class="message-avatar user-avatar">🙂</div>
    `;
    chatMessages.appendChild(userMessage);
    input.value = '';

    const typingIndicator = document.getElementById('typingIndicator');
    typingIndicator.classList.add('active');

    setTimeout(() => {
        typingIndicator.classList.remove('active');
        const aiMessage = document.createElement('div');
        aiMessage.className = 'message ai';
        aiMessage.innerHTML = `
            <div class="message-avatar ai-avatar">🤖</div>
            <div class="message-content">
                <div class="message-text">Here's the answer to "${messageText}" (Demo Response)</div>
                <div class="message-time">${new Date().toLocaleTimeString()}</div>
                <div class="ai-confidence">
                    <span class="confidence-label">Confidence:</span>
                    <div class="confidence-bar"><div class="confidence-fill" style="width: 95%"></div></div>
                    <span class="confidence-value">95%</span>
                </div>
                <div class="feedback-buttons">
                    <button onclick="provideFeedback(true)">✅ Helpful</button>
                    <button onclick="provideFeedback(false)">❌ Not Helpful</button>
                </div>
            </div>
        `;
        chatMessages.appendChild(aiMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        updateQuestPoints(10);
    }, 2000);
}

function askAIQuestion(subject, prompt = null) {
    const chatInput = document.getElementById('chatInput');
    chatInput.value = prompt || `Ask about ${subject}`;
    sendAIMessage();
}

function showAICapabilities() {
    const capabilities = {
        en: [
            'Real-time homework answers',
            'Photo recognition with OCR',
            'Multilingual support (English, Swahili)',
            'M-Pesa payment integration'
        ],
        sw: [
            'Majibu ya kazi za nyumbani ya wakati halisi',
            'Utambuzi wa picha na OCR',
            'Msaada wa lugha nyingi (Kiingereza, Kiswahili)',
            'Ujumuishaji wa malipo ya M-Pesa'
        ]
    };
    const lang = document.getElementById('languageSelector').value;
    alert('AI Capabilities:\n' + capabilities[lang].join('\n'));
}

function viewPastQuestions() {
    alert('Past questions feature coming soon!');
}

function showPaymentDemo(method) {
    document.getElementById('paymentMethod').value = method;
    showModal('paymentModal');
}

async function processPayment() {
    const phone = document.getElementById('paymentPhone').value;
    const amount = document.getElementById('paymentAmount').value;
    const method = document.getElementById('paymentMethod').value;

    if (!phone || !amount) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }

    showNotification(`Processing ${method} payment of KES ${amount} for ${phone}...`, 'success');
    setTimeout(() => {
        closeModal('paymentModal');
        showModal('otpModal');
    }, 1000);
}

function processLogin() {
    console.log('processLogin called');
    const phone = document.getElementById('loginPhone').value;
    if (!phone) {
        showNotification('Please enter a phone number.', 'error');
        return;
    }

    showNotification(`Sending OTP to ${phone}...`, 'success');
    setTimeout(() => {
        closeModal('loginModal');
        showModal('otpModal');
    }, 1000);
}

function verifyOTP() {
    const otp = document.getElementById('otpInput').value;
    if (otp.length !== 6 || !/^\d+$/.test(otp)) {
        showNotification('Please enter a valid 6-digit OTP.', 'error');
        return;
    }

    showNotification('OTP verified successfully!', 'success');
    setTimeout(() => {
        closeModal('otpModal');
        if (document.getElementById('investorModal').classList.contains('active')) {
            showNotification('Access granted to Investor Portal.', 'success');
        }
    }, 1000);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function toggleTutorialPreference() {
    const dontShow = document.querySelector('#tutorialModal input[type="checkbox"]').checked;
    console.log('Tutorial preference:', dontShow ? 'Don\'t show again' : 'Show again');
}

function nextTutorialStep() {
    const steps = document.querySelectorAll('.tutorial-step');
    const currentStep = document.querySelector('.tutorial-step.active');
    const currentIndex = Array.from(steps).indexOf(currentStep);
    
    if (currentIndex < steps.length - 1) {
        currentStep.classList.remove('active');
        steps[currentIndex + 1].classList.add('active');
        document.getElementById('prevTutorialBtn').style.display = 'inline-block';
        if (currentIndex + 1 === steps.length - 1) {
            document.getElementById('nextTutorialBtn').textContent = 'Finish';
        }
    } else {
        closeModal('tutorialModal');
    }
}

function prevTutorialStep() {
    const steps = document.querySelectorAll('.tutorial-step');
    const currentStep = document.querySelector('.tutorial-step.active');
    const currentIndex = Array.from(steps).indexOf(currentStep);
    
    if (currentIndex > 0) {
        currentStep.classList.remove('active');
        steps[currentIndex - 1].classList.add('active');
        document.getElementById('nextTutorialBtn').textContent = 'Next';
        if (currentIndex - 1 === 0) {
            document.getElementById('prevTutorialBtn').style.display = 'none';
        }
    }
}

function downloadPitchDeck() {
    alert('Downloading pitch deck... (Demo mode)');
}

function scheduleDemo() {
    alert('Scheduling demo... Please contact support@studybuddy.ai');
}

function closeCanvasPanel() {
    document.getElementById('canvasPanel').classList.remove('active');
}

function updateQuestPoints(points) {
    let questPoints = parseInt(localStorage.getItem('questPoints') || '0');
    questPoints += points;
    localStorage.setItem('questPoints', questPoints);
    document.getElementById('questPoints').textContent = questPoints;

    const progressBar = document.getElementById('questProgress');
    const progress = Math.min((questPoints / 250) * 100, 100);
    progressBar.style.width = `${progress}%`;

    const badges = [
        { name: 'Math Wizard', points: 50 },
        { name: 'Science Explorer', points: 100 },
        { name: 'Homework Hero', points: 250 }
    ];

    const nextBadge = badges.find(b => questPoints < b.points) || badges[badges.length - 1];
    document.getElementById('nextBadge').textContent = nextBadge.name + ` (${nextBadge.points} pts)`;

    const questBadges = document.getElementById('questBadges');
    questBadges.innerHTML = '';
    badges.forEach(badge => {
        if (questPoints >= badge.points) {
            const badgeEl = document.createElement('div');
            badgeEl.className = 'badge';
            badgeEl.textContent = badge.name;
            questBadges.appendChild(badgeEl);
            showNotification(`Unlocked badge: ${badge.name}!`, 'success');
        }
    });
}

function provideFeedback(isHelpful) {
    showNotification(isHelpful ? 'Thanks for your feedback!' : 'Sorry, we will improve!', 'success');
    if (isHelpful) {
        updateQuestPoints(5);
    }
}

function initializeAnalyticsChart() {
    const ctx = document.getElementById('analyticsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Math', 'Science', 'English', 'History'],
            datasets: [{
                label: 'Questions Answered',
                data: [150, 120, 80, 50],
                backgroundColor: 'rgba(16, 185, 129, 0.6)',
                borderColor: '#10b981',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function downloadChart() {
    const canvas = document.getElementById('analyticsChart');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'analytics-chart.png';
    link.click();
}

function changeLanguage() {
    console.log('changeLanguage called');
    const lang = document.getElementById('languageSelector').value;
    const t = translations[lang];
    document.getElementById('navHome').textContent = t.navHome;
    document.getElementById('navFeatures').textContent = t.navFeatures;
    document.getElementById('navDashboard').textContent = t.navDashboard;
    document.getElementById('navPricing').textContent = t.navPricing;
    document.getElementById('navInvestor').textContent = t.navInvestor;
    document.getElementById('loginBtn').textContent = t.loginBtn;
    document.getElementById('getStartedBtn').textContent = t.getStartedBtn;
    document.getElementById('forInvestorsBtn').textContent = t.forInvestorsBtn;
    document.getElementById('chatInput').placeholder = t.chatPlaceholder;
    document.querySelector('label[for="subjectSelector"]').textContent = t.subjectLabel;
    document.querySelector('label[for="aiMode"]').textContent = t.modeLabel;
    document.querySelector('label[for="gradeLevel"]').textContent = t.gradeLabel;
    document.querySelector('.study-quest-panel h3').textContent = t.questHeader;
    document.getElementById('heroTitle').textContent = t.heroTitle;
    document.getElementById('heroSubtitle').textContent = t.heroSubtitle;
    document.getElementById('textMethodBtn').innerHTML = `<span class="input-method-icon">📝</span>${t.textBtn}`;
    document.getElementById('photoMethodBtn').innerHTML = `<span class="input-method-icon">📸</span>${t.photoBtn}`;
    document.getElementById('voiceMethodBtn').innerHTML = `<span class="input-method-icon">🎤</span>${t.voiceBtn}`;
    document.getElementById('paymentMethodBtn').innerHTML = `<span class="input-method-icon">💸</span>${t.mpesaBtn}`;
    document.getElementById('airtelMethodBtn').innerHTML = `<span class="input-method-icon">💳</span>${t.airtelBtn}`;
    document.getElementById('cardMethodBtn').innerHTML = `<span class="input-method-icon">💳</span>${t.cardBtn}`;
    document.getElementById('paymentModalTitle').textContent = t.paymentTitle;
    document.getElementById('paymentModalHeader').textContent = t.paymentHeader;
    document.getElementById('paymentModalDesc').textContent = t.paymentDesc;
    document.getElementById('paymentHowTitle').textContent = t.paymentHow;
    document.getElementById('ocrPreviewTitle').textContent = t.ocrTitle;
    document.getElementById('ocrExtractedTitle').textContent = t.ocrExtracted;
    document.getElementById('ocrSendBtn').textContent = t.ocrBtn;
    document.getElementById('loginModalTitle').textContent = t.loginTitle;
    document.getElementById('loginPhoneLabel').textContent = t.loginPhone;
    document.getElementById('sendOtpBtn').textContent = t.loginBtnModal;
    document.getElementById('otpModalTitle').textContent = t.otpTitle;
    document.getElementById('otpInputLabel').textContent = t.otpLabel;
    document.getElementById('otpModalTitle').textContent = t.otpTitle;
    document.getElementById('investorModalTitle').textContent = t.investorTitle;
    document.getElementById('investorMarketTitle').textContent = t.investorMarket;
    document.getElementById('investorFundingTitle').textContent = t.investorFunding;
    document.getElementById('investorDownloadBtn').textContent = t.investorDownload;
    document.getElementById('investorScheduleBtn').textContent = t.investorSchedule;
    document.getElementById('analyticsTitle').textContent = t.analyticsTitle;
    document.getElementById('analyticsDownloadBtn').textContent = t.analyticsBtn;
    const subject = document.getElementById('subjectSelector').value;
    const promptsDiv = document.getElementById('subjectPrompts');
    promptsDiv.innerHTML = '';
    t[`${subject}Prompts`].forEach(prompt => {
        const btn = document.createElement('button');
        btn.className = 'prompt-btn';
        btn.textContent = prompt;
        btn.onclick = () => askAIQuestion(subject, prompt);
        promptsDiv.appendChild(btn);
    });
}

document.getElementById('fileInput').addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    showNotification('Processing image...', 'success');
    const { data: { text } } = await Tesseract.recognize(file, 'eng');
    document.getElementById('ocrText').value = text;
    showModal('ocrPreviewModal');
});

function submitOcrText() {
    const ocrText = document.getElementById('ocrText').value;
    document.getElementById('chatInput').value = ocrText;
    closeModal('ocrPreviewModal');
    sendAIMessage();
}

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
    const isDark = document.body.classList.contains('theme-dark');
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
});

document.addEventListener('DOMContentLoaded', () => {
    updateQuestPoints(0);
    initializeAnalyticsChart();
    showSection('main');
    changeLanguage(); // Initialize language
});

if (document.getElementById('fileInput') && document.querySelector('.file-upload-btn')) {
    document.querySelector('.file-upload-btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('fileInput').click();
    });
}

// --- VOICE INPUT ---
function startVoiceInput() {
    if (!('webkitSpeechRecognition' in window)) {
        showNotification('Voice recognition not supported in this browser.', 'error');
        return;
    }
    const recognition = new webkitSpeechRecognition();
    recognition.lang = document.getElementById('languageSelector').value === 'sw' ? 'sw-KE' : 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('chatInput').value = transcript;
    };
    recognition.onerror = function(event) {
        showNotification('Voice input error: ' + event.error, 'error');
    };
    recognition.start();
}

// Attach to the voice button
document.getElementById('voiceMethodBtn').addEventListener('click', startVoiceInput);

// --- ENSURE GLOBAL ACCESS ---
window.changeLanguage = changeLanguage;
window.sendAIMessage = sendAIMessage;
window.submitOcrText = submitOcrText;
window.startVoiceInput = startVoiceInput;
window.showModal = showModal;
window.closeModal = closeModal;
window.showSection = showSection;
window.switchInputMethod = switchInputMethod;
window.switchAIMode = switchAIMode;
window.saveGradeLevel = saveGradeLevel;
window.askAIQuestion = askAIQuestion;
window.showAICapabilities = showAICapabilities;
window.viewPastQuestions = viewPastQuestions;
window.showPaymentDemo = showPaymentDemo;
window.processPayment = processPayment;
window.processLogin = processLogin;
window.verifyOTP = verifyOTP;
window.showNotification = showNotification;
window.toggleTutorialPreference = toggleTutorialPreference;
window.nextTutorialStep = nextTutorialStep;
window.prevTutorialStep = prevTutorialStep;
window.downloadPitchDeck = downloadPitchDeck;
window.scheduleDemo = scheduleDemo;
window.closeCanvasPanel = closeCanvasPanel;
window.updateQuestPoints = updateQuestPoints;
window.provideFeedback = provideFeedback;
window.initializeAnalyticsChart = initializeAnalyticsChart;
window.downloadChart = downloadChart;