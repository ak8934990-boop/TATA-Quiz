// Constants for Admin configuration
const ADMIN_ID = "admin";
const ADMIN_PASS = "tata@123";

const loginForm = document.getElementById('admin-login-form');
const viewLogin = document.getElementById('admin-login-view');
const viewDashboard = document.getElementById('admin-dashboard');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('admin-id').value;
    const pass = document.getElementById('admin-password').value;

    if (id === ADMIN_ID && pass === ADMIN_PASS) {
        showDashboard();
    } else {
        alert("Invalid ID or Password.");
    }
});

function showDashboard() {
    viewLogin.style.display = 'none';
    viewDashboard.style.display = 'flex';
    document.body.style.backgroundColor = 'var(--background)'; // reset body background for dashboard

    loadData();
}

function loadData() {
    const API_URL = "https://script.google.com/macros/s/AKfycbzztz3yy1jngN2YmgiNOhg6X8lxtyS75URf6gRudoNB8e9-yJ0RgCm9KwzLHpZy1mv0kQ/exec";

    // Show loading UI
    const loader = document.getElementById('loader');
    if (loader) loader.classList.remove('hidden');

    // Fetch data via GET request to the Apps Script endpoint
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            if (loader) loader.classList.add('hidden');
            renderTable(data);
        })
        .catch(err => {
            console.error(err);
            if (loader) loader.classList.add('hidden');

            // Fallback to local storage if API fails or is not setup properly
            const localData = JSON.parse(localStorage.getItem('quizResults') || '[]');
            renderTable(localData);

            // Show proper error Modal
            const modal = document.getElementById('custom-modal');
            const title = document.getElementById('modal-title');
            const text = document.getElementById('modal-text');
            if (title) title.innerText = "Connection Failed";
            if (text) text.innerText = "Could not fetch data from the spreadsheet. Displaying locally cached records instead.";
            if (modal) modal.classList.remove('hidden');
        });
}

document.getElementById('btn-modal-ok')?.addEventListener('click', () => {
    document.getElementById('custom-modal')?.classList.add('hidden');
});

function renderTable(data) {
    const tbody = document.getElementById('admin-table-body');
    tbody.innerHTML = '';

    if (!data || data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;">No data available yet.</td></tr>';
        return;
    }

    let totalScore = 0;
    let highestScore = 0;
    let scoreDist = {
        '0-10': 0, '11-15': 0, '16-20': 0, '21-25': 0, '26-30': 0
    };
    let totalCorrect = 0;
    let totalWrong = 0;
    let totalSkipped = 0;

    data.forEach(row => {
        // Calculate stats
        totalScore += row.score;
        if (row.score > highestScore) highestScore = row.score;

        totalCorrect += row.score; // Assumption: 1 score = 1 correct
        totalWrong += row.wrong || 0;
        totalSkipped += row.skipped || 0;

        // Distribution logic
        if (row.score <= 10) scoreDist['0-10']++;
        else if (row.score <= 15) scoreDist['11-15']++;
        else if (row.score <= 20) scoreDist['16-20']++;
        else if (row.score <= 25) scoreDist['21-25']++;
        else scoreDist['26-30']++;

        const d = new Date(row.timestamp);
        const dateStr = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${dateStr}</td>
            <td>${row.empId}</td>
            <td><strong>${row.name}</strong></td>
            <td style="color: var(--primary-color); font-weight: bold;">${row.score}</td>
            <td style="color: var(--success);">${row.score}</td>
            <td style="color: var(--danger);">${row.wrong}</td>
            <td style="color: var(--text-secondary);">${row.skipped}</td>
            <td>${row.timeTaken}</td>
        `;
        tbody.appendChild(tr);
    });

    // Update summary stats
    document.getElementById('stat-total').innerText = data.length;

    // Average
    const avgScore = (totalScore / data.length);
    const avgPercent = (avgScore / 30) * 100;
    document.getElementById('stat-avg').innerText = `${avgPercent.toFixed(1)}%`;

    document.getElementById('stat-highest').innerText = highestScore;

    renderAdminCharts(scoreDist, totalCorrect, totalWrong, totalSkipped);
}

// Chart mapping handlers
let adminScoreChart = null;
let adminAccuracyChart = null;

function renderAdminCharts(dist, correct, wrong, skipped) {
    const scoreCtx = document.getElementById('scoreChart');
    const accCtx = document.getElementById('accuracyChart');

    if (!scoreCtx || !accCtx) return; // Do not crash if view is bad

    if (adminScoreChart) adminScoreChart.destroy();
    if (adminAccuracyChart) adminAccuracyChart.destroy();

    // 1. Bar Chart - Score Distributions
    adminScoreChart = new Chart(scoreCtx, {
        type: 'bar',
        data: {
            labels: Object.keys(dist),
            datasets: [{
                label: 'Number of Participants',
                data: Object.values(dist),
                backgroundColor: 'rgba(0, 80, 135, 0.7)',
                borderColor: '#005087',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: { display: true, text: 'Score Distribution' },
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true, ticks: { precision: 0 } }
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            }
        }
    });

    // 2. Pie Chart - Overall Accuracy Breakdown
    adminAccuracyChart = new Chart(accCtx, {
        type: 'doughnut',
        data: {
            labels: ['Answers Correct', 'Answers Wrong', 'Skipped Questions'],
            datasets: [{
                data: [correct, wrong, skipped],
                backgroundColor: ['#2ecc71', '#e74c3c', '#95a5a6'],
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: { display: true, text: 'Overall Question Outcomes' },
                legend: { position: 'bottom' }
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
}
