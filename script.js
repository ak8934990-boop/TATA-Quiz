// State variables
let userData = {};
let startTime;
let endTime;
let timerInterval;
let userAnswers = new Array(questions.length).fill(null);
let score = 0;
let currentQuestionIndex = 0;

// Elements
const regForm = document.getElementById('registration-form');
const viewReg = document.getElementById('registration-view');
const viewQuiz = document.getElementById('quiz-view');
const viewResult = document.getElementById('result-view');
const viewCertificate = document.getElementById('certificate-view');
const questionsContainer = document.getElementById('questions-container');
const btnSubmitQuiz = document.getElementById('btn-submit-quiz');
const btnPrevQuiz = document.getElementById('btn-prev-quiz');
const btnNextQuiz = document.getElementById('btn-next-quiz');
const btnSkipQuiz = document.getElementById('btn-skip-quiz');
const loader = document.getElementById('loader');

// Custom Modal Elements
const customModal = document.getElementById('custom-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const btnModalOk = document.getElementById('btn-modal-ok');
const btnModalCancel = document.getElementById('btn-modal-cancel');

let modalConfirmCallback = null;

function showCustomModal(title, msg, isConfirm, callback) {
    modalTitle.innerText = title;
    modalText.innerText = msg;
    customModal.classList.remove('hidden');
    modalConfirmCallback = callback;

    if (isConfirm) {
        btnModalCancel.classList.remove('hidden');
    } else {
        btnModalCancel.classList.add('hidden');
    }
}

btnModalOk.addEventListener('click', () => {
    customModal.classList.add('hidden');
    if (modalConfirmCallback) modalConfirmCallback(true);
});

btnModalCancel.addEventListener('click', () => {
    customModal.classList.add('hidden');
    if (modalConfirmCallback) modalConfirmCallback(false);
});

// Initialize Quiz form submission
regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    userData = {
        name: document.getElementById('reg-name').value,
        empId: document.getElementById('reg-empid').value,
        email: document.getElementById('reg-email').value,
        phone: document.getElementById('reg-phone').value,
        dept: document.getElementById('reg-dept').value,
    };
    startQuiz();
});

function startQuiz() {
    viewReg.classList.remove('active');
    viewQuiz.classList.remove('hidden');
    viewQuiz.classList.add('active');

    renderQuestions();

    // Start Timer
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const now = new Date();
    const diff = Math.floor((now - startTime) / 1000);
    const m = String(Math.floor(diff / 60)).padStart(2, '0');
    const s = String(diff % 60).padStart(2, '0');
    document.getElementById('timer-display').innerText = `Time: ${m}:${s}`;
}

function renderQuestions() {
    questionsContainer.innerHTML = '';
    questions.forEach((q, qIndex) => {
        const qBlock = document.createElement('div');
        qBlock.className = 'question-block';
        qBlock.id = `qblock-${qIndex}`;
        qBlock.style.display = qIndex === currentQuestionIndex ? 'block' : 'none';

        let optionsHtml = '';
        q.options.forEach((opt, oIndex) => {
            optionsHtml += `
                <div class="option-btn" onclick="selectOption(${qIndex}, ${oIndex})">
                    <div class="option-circle"></div>
                    <span>${opt}</span>
                </div>
            `;
        });

        qBlock.innerHTML = `
            <div class="q-badge">Q${qIndex + 1} / प्रश्न ${qIndex + 1}</div>
            <div class="question-text">${q.q}</div>
            <div class="options-container" id="options-${qIndex}">
                ${optionsHtml}
            </div>
        `;
        questionsContainer.appendChild(qBlock);
    });
    updateProgress();
    updateNavigationButtons();
}

function showQuestion(index) {
    // Hide all
    for (let i = 0; i < questions.length; i++) {
        const block = document.getElementById(`qblock-${i}`);
        if (block) block.style.display = 'none';
    }
    // Show target
    currentQuestionIndex = index;
    const activeBlock = document.getElementById(`qblock-${currentQuestionIndex}`);
    if (activeBlock) activeBlock.style.display = 'block';

    updateNavigationButtons();
}

function updateNavigationButtons() {
    btnPrevQuiz.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';

    if (currentQuestionIndex === questions.length - 1) {
        btnNextQuiz.style.display = 'none';
        btnSkipQuiz.style.display = 'none';
        btnSubmitQuiz.style.display = 'inline-block';
    } else {
        btnNextQuiz.style.display = 'inline-block';
        btnSkipQuiz.style.display = 'inline-block';
        btnSubmitQuiz.style.display = 'none';
    }
}

btnPrevQuiz.addEventListener('click', () => {
    if (currentQuestionIndex > 0) showQuestion(currentQuestionIndex - 1);
});

btnNextQuiz.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) showQuestion(currentQuestionIndex + 1);
});

btnSkipQuiz.addEventListener('click', () => {
    // Leave answer null and go next
    if (currentQuestionIndex < questions.length - 1) showQuestion(currentQuestionIndex + 1);
});

// Ensure function is attached to window so inline onclick works
window.selectOption = function (qIndex, oIndex) {
    userAnswers[qIndex] = oIndex;

    // Update UI
    const optionsContainer = document.getElementById(`options-${qIndex}`);
    const btns = optionsContainer.querySelectorAll('.option-btn');
    btns.forEach((btn, idx) => {
        if (idx === oIndex) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    updateProgress();
};

function updateProgress() {
    const answeredCount = userAnswers.filter(ans => ans !== null).length;
    document.getElementById('question-progress-text').innerText = `Answered: ${answeredCount} of ${questions.length}`;

    const progressPercent = (answeredCount / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;
}

btnSubmitQuiz.addEventListener('click', () => {
    const unanswered = userAnswers.filter(ans => ans === null).length;
    if (unanswered > 0) {
        showCustomModal("Warning", `You have ${unanswered} skipped/unanswered questions. Do you want to submit anyway?`, true, (confirmed) => {
            if (confirmed) submitQuiz();
        });
    } else {
        submitQuiz();
    }
});

function submitQuiz() {
    clearInterval(timerInterval);
    endTime = new Date();

    score = 0;
    let wrong = 0;
    let skipped = 0;

    userAnswers.forEach((ans, idx) => {
        if (ans === null) {
            skipped++;
        } else if (ans === questions[idx].answer) {
            score++;
        } else {
            wrong++;
        }
    });

    const timeTakenSec = Math.floor((endTime - startTime) / 1000);
    const m = String(Math.floor(timeTakenSec / 60)).padStart(2, '0');
    const s = String(timeTakenSec % 60).padStart(2, '0');
    const timeTakenStr = `${m}:${s}`;

    userData.score = score;
    userData.total = questions.length;
    userData.skipped = skipped;
    userData.wrong = wrong;
    userData.timeTaken = timeTakenStr;
    userData.timeTakenSec = timeTakenSec;
    userData.timestamp = new Date().toISOString();

    showLoader(true);

    // Save data (Local DB or Spreadsheet via App Script)
    saveDataToSpreadsheet(userData).then(() => {
        showLoader(false);
        showResults();
    }).catch(err => {
        console.error(err);
        showLoader(false);
        showCustomModal("Notice", "There was an issue saving your result, but your score will be shown.", false, () => {
            showResults();
        });
    });
}

function showResults() {
    viewQuiz.classList.remove('active');
    viewQuiz.classList.add('hidden');
    viewResult.classList.remove('hidden');
    viewResult.classList.add('active');

    const percent = Math.round((score / questions.length) * 100);
    document.getElementById('final-score').innerText = `${score} / ${questions.length}`;
    document.getElementById('final-percentage').innerText = `${percent}%`;
    document.getElementById('time-taken-text').innerText = userData.timeTaken;

    // Render result chart
    const ctx = document.getElementById('resultChart').getContext('2d');

    // Destroy previous chart instance if exists so we can redraw
    if (window.resultChartInstance) {
        window.resultChartInstance.destroy();
    }

    window.resultChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Wrong', 'Skipped'],
            datasets: [{
                data: [userData.score, userData.wrong, userData.skipped],
                backgroundColor: [
                    '#2ecc71', // Success green
                    '#e74c3c', // Danger red
                    '#95a5a6'  // Gray for skipped
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Your Performance'
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });

    loadLeaderboard();
}

async function saveDataToSpreadsheet(data) {
    if (!API_URL) {
        // Fallback to local storage if no URL provided
        let allResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
        allResults.push(data);
        localStorage.setItem('quizResults', JSON.stringify(allResults));
        return Promise.resolve();
    }

    // Replace with your Google Apps Script Web App URL
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
        mode: 'no-cors' // Use no-cors to prevent preflight errors for Google Apps Script Web App
    });
}

function loadLeaderboard() {
    // Generate Leaderboard
    let allResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    // Sort by score (desc), then time (asc)
    allResults.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.timeTakenSec - b.timeTakenSec;
    });

    const lbList = document.getElementById('leaderboard-list');
    lbList.innerHTML = '';

    const top5 = allResults.slice(0, 5);
    if (top5.length === 0) {
        lbList.innerHTML = '<li>No data yet.</li>';
    } else {
        top5.forEach((r, i) => {
            lbList.innerHTML += `<li>
                <span>#${i + 1} ${r.name}</span>
                <span><strong>${r.score}</strong> (${r.timeTaken})</span>
            </li>`;
        });
    }
}

document.getElementById('btn-view-certificate').addEventListener('click', () => {
    // Fill certificate data
    document.getElementById('cert-name-text').innerText = userData.name.toUpperCase();
    document.getElementById('cert-empid-text').innerText = userData.empId.toUpperCase();

    const percent = Math.round((userData.score / userData.total) * 100);
    document.getElementById('cert-score-text').innerText = `${userData.score} / ${userData.total} (${percent}%)`;

    const d = new Date();
    document.getElementById('cert-date-text').innerText = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    document.getElementById('cert-dept-text').innerText = userData.dept || 'Safety Department';

    // Attempting to match the generic "Best of Luck from Anish Kumar" template structure
    // We will use the generic Tata Projects name
    document.getElementById('cert-wisher-text').innerText = "TATA PROJECTS";

    viewResult.classList.remove('active');
    viewResult.classList.add('hidden');
    viewCertificate.classList.remove('hidden');
    viewCertificate.classList.add('active');
});

document.getElementById('btn-back-home').addEventListener('click', () => {
    location.reload();
});

document.getElementById('btn-download-cert').addEventListener('click', () => {
    const certEl = document.getElementById('certificate-border-outer') || document.getElementById('certificate-element');

    showLoader(true);

    // HTML2Canvas
    html2canvas(certEl, { scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = `Certificate_${userData.name.replace(/\s+/g, '_')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        showLoader(false);
    }).catch(err => {
        console.error(err);
        showLoader(false);
        showCustomModal("Error", 'Failed to generate certificate.', false);
    });
});

function showLoader(show) {
    if (show) {
        loader.classList.remove('hidden');
    } else {
        loader.classList.add('hidden');
    }
}
