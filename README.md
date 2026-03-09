# Tata Safety Awareness Quiz

A premium, interactive web application designed for Tata Projects employees to assess their knowledge of workplace safety practices. This project features a bilingual 30-question quiz, automated certificate generation, dynamic visual analytics, and a protected Admin Dashboard, all built without a traditional backend database.

## 🚀 Features

*   **Interactive 30-Question Assessment:** Bilingual (English/Hindi) safety questions presented one at a time with smooth navigation (Next, Previous, Skip).
*   **Premium User Interface:** Responsive, dynamic design strictly adhering to the Tata Projects brand guidelines and color schemes.
*   **Instant Visual Analytics:** Contestants receive immediate feedback upon completion, including their score, time taken, and an animated Donut Chart summarizing their performance (Correct, Wrong, Skipped).
*   **Automated Certificate Generation:** Generates a visually authentic, high-resolution downloadable "Certificate of Achievement" using `html2canvas` upon passing the quiz.
*   **Leaderboard System:** Highlights top performers dynamically based on score and completion time.
*   **Secure Admin Dashboard:** A protected portal (`ID: admin`, `Pass: tata@123`) where administrators can view all contestant data.
*   **Admin Analytics:** Features powerful interactive graphs powered by `Chart.js`, including a Score Distribution Bar Chart and an Overall Outcome Donut Chart.
*   **Google Sheets "Database":** Operates entirely without a backend server or SQL database. Uses Google Apps Script entirely to write and fetch live data directly to/from a Google Spreadsheet securely.

## 🛠️ Technology Stack

*   **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (Vanilla)
*   **Data Visualization:** [Chart.js](https://www.chartjs.org/) for animations and data graphing.
*   **Certificate Engine:** [html2canvas](https://html2canvas.hertzen.com/) to render DOM elements into downloadable Images.
*   **Backend / Database:** Google Apps Script + Google Spreadsheets (using `fetch` API bypassing CORS via `text/plain`).

## 📁 Project Structure

*   `index.html`: The main entry point for the quiz, registration, results, and certificate view.
*   `admin.html`: The secure admin portal layout and dashboard structure.
*   `style.css`: The global stylesheet defining the Tata branding, layouts, buttons, and animations.
*   `script.js`: The central logic for the quiz navigation, result calculation, timer, chart drawing, certificate generation, and Google Sheet POST requests.
*   `questions.js`: Contains the JSON array of the 30 bilingual quiz questions and answers.
*   `admin.js`: The logic for handling admin authentication, fetching data from the Google Sheet via GET requests, and rendering the dashboard tables and Chart.js analytics.
*   `tataprojectslogo.png` & `OIP.webp`: The branding graphics used in the headers, sidebars, and certificates.

## 🔗 Setup & Deployment

Because this application relies exclusively on frontend technologies and Google Apps Script, it is **100% compatible with static hosting** platforms like **GitHub Pages**, Vercel, or Netlify.

### Linking to Your Google Sheet

To connect the application to your own database:

1.  Create a new Google Sheet.
2.  Go to **Extensions > Apps Script**.
3.  Paste the required `doPost(e)` and `doGet(e)` scripts (provided during setup) to handle incoming data formatting.
4.  Run the `setup()` function once in the Apps Script editor to initialize the column headers.
5.  Deploy the script as a **Web App** (Execute as: You, Access: Anyone).
6.  Copy the resulting Web App URL.
7.  Paste the URL into the `API_URL` variable inside `questions.js` and `admin.js`.

Once linked, any static deployment of this repository will instantly communicate with your Google Sheet!
