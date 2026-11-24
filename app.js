// ==================== بنك الأسئلة للمواد الثلاث ====================
const examsData = {
  algorithms: {
    title: "Algorithms & problem solving",
    bannerTitle: "Algorithms & Data Structures Basics",
    durationMinutes: 15,
    questions: [
      {
        q: "What is an Algorithm ?",
        options: [
          "a) A programming language",
          "b) A step-by-step procedure to solve a problem",
          "c) A computer",
          "d) A database"
        ],
        answer: 1
      },
      {
        q: "Which of the following represents the first step in problem-solving ?",
        options: [
          "a) Coding",
          "b) Testing",
          "c) Understanding the problem",
          "d) Debugging"
        ],
        answer: 2
      },
      {
        q: "What is a Flowchart used for ?",
        options: [
          "a) Storing user passwords",
          "b) Visually representing the steps of an algorithm",
          "c) Compiling C++ code",
          "d) Designing databases"
        ],
        answer: 1
      },
      {
        q: "Which Big-O notation represents constant time complexity ?",
        options: [
          "a) O(n)",
          "b) O(log n)",
          "c) O(1)",
          "d) O(n^2)"
        ],
        answer: 2
      },
      {
        q: "Which data structure works on the LIFO (Last In, First Out) principle ?",
        options: [
          "a) Queue",
          "b) Stack",
          "c) Array",
          "d) Linked List"
        ],
        answer: 1
      },
      {
        q: "Which searching algorithm requires the array to be sorted first ?",
        options: [
          "a) Linear Search",
          "b) Binary Search",
          "c) Jump Search only on strings",
          "d) Random Search"
        ],
        answer: 1
      },
      {
        q: "What is Pseudocode ?",
        options: [
          "a) Machine binary code",
          "b) Informal high-level description of an algorithm",
          "c) A syntax error in Python",
          "d) A compiled executable file"
        ],
        answer: 1
      },
      {
        q: "Which data structure uses FIFO (First In, First Out) ?",
        options: [
          "a) Stack",
          "b) Tree",
          "c) Queue",
          "d) Graph"
        ],
        answer: 2
      },
      {
        q: "What does debugging mean ?",
        options: [
          "a) Writing documentation",
          "b) Finding and fixing errors in code",
          "c) Installing an operating system",
          "d) Formatting a hard drive"
        ],
        answer: 1
      },
      {
        q: "Which symbol in a flowchart represents a decision (if/else) ?",
        options: [
          "a) Oval",
          "b) Rectangle",
          "c) Diamond",
          "d) Circle"
        ],
        answer: 2
      }
    ]
  },

  database: {
    title: "Database",
    bannerTitle: "Relational Databases & SQL Fundamentals",
    durationMinutes: 15,
    questions: [
      {
        q: "What does SQL stand for ?",
        options: [
          "a) Structured Query Language",
          "b) Simple Question Language",
          "c) System Query Logic",
          "d) Standard Quick Language"
        ],
        answer: 0
      },
      {
        q: "Which key uniquely identifies each record in a database table ?",
        options: [
          "a) Foreign Key",
          "b) Primary Key",
          "c) Secondary Key",
          "d) Composite Attribute"
        ],
        answer: 1
      },
      {
        q: "Which SQL command is used to retrieve data from a database ?",
        options: [
          "a) GET",
          "b) EXTRACT",
          "c) SELECT",
          "d) OPEN"
        ],
        answer: 2
      },
      {
        q: "What is a Foreign Key ?",
        options: [
          "a) A key used to encrypt passwords",
          "b) A field that links to the Primary Key of another table",
          "c) The first column in any table",
          "d) A deleted record"
        ],
        answer: 1
      },
      {
        q: "Which SQL clause is used to filter records ?",
        options: [
          "a) ORDER BY",
          "b) GROUP BY",
          "c) WHERE",
          "d) JOIN"
        ],
        answer: 2
      },
      {
        q: "What is Normalization in databases ?",
        options: [
          "a) Deleting all tables",
          "b) Organizing data to reduce redundancy",
          "c) Backing up data to cloud",
          "d) Increasing duplicate rows"
        ],
        answer: 1
      },
      {
        q: "Which SQL statement is used to insert new data into a table ?",
        options: [
          "a) ADD NEW",
          "b) INSERT INTO",
          "c) UPDATE",
          "d) CREATE ROW"
        ],
        answer: 1
      },
      {
        q: "What does ERD stand for ?",
        options: [
          "a) Entity Relationship Diagram",
          "b) External Record Data",
          "c) Easy Relational Database",
          "d) Entity Row Definition"
        ],
        answer: 0
      },
      {
        q: "Which command removes a table and its structure completely ?",
        options: [
          "a) DELETE TABLE",
          "b) REMOVE TABLE",
          "c) DROP TABLE",
          "d) CLEAR TABLE"
        ],
        answer: 2
      },
      {
        q: "Which aggregate function returns the number of rows ?",
        options: [
          "a) SUM()",
          "b) TOTAL()",
          "c) COUNT()",
          "d) MAX()"
        ],
        answer: 2
      }
    ]
  },

  web: {
    title: "Web Programming",
    bannerTitle: "Modern HTML, CSS & JavaScript",
    durationMinutes: 15,
    questions: [
      {
        q: "What does HTML stand for ?",
        options: [
          "a) Hyper Text Markup Language",
          "b) High Tech Modern Language",
          "c) Hyperlinks and Text Management",
          "d) Home Tool Markup Language"
        ],
        answer: 0
      },
      {
        q: "Which language is used for styling web pages ?",
        options: [
          "a) Python",
          "b) CSS",
          "c) SQL",
          "d) C++"
        ],
        answer: 1
      },
      {
        q: "Which HTML tag is used to link an external JavaScript file ?",
        options: [
          "a) <js>",
          "b) <link>",
          "c) <script>",
          "d) <javascript>"
        ],
        answer: 2
      },
      {
        q: "Which CSS property changes the text color of an element ?",
        options: [
          "a) background-color",
          "b) font-style",
          "c) color",
          "d) text-align"
        ],
        answer: 2
      },
      {
        q: "Inside which HTML element do we put the CSS link ?",
        options: [
          "a) <footer>",
          "b) <head>",
          "c) <body>",
          "d) <section>"
        ],
        answer: 1
      },
      {
        q: "How do you select an element with id 'demo' in CSS ?",
        options: [
          "a) .demo",
          "b) *demo",
          "c) #demo",
          "d) demo"
        ],
        answer: 2
      },
      {
        q: "Which JavaScript method selects an element by its ID ?",
        options: [
          "a) document.queryId()",
          "b) document.getElementById()",
          "c) document.getElement()",
          "d) window.findId()"
        ],
        answer: 1
      },
      {
        q: "What does DOM stand for ?",
        options: [
          "a) Document Object Model",
          "b) Data Object Management",
          "c) Digital Ordinance Model",
          "d) Desktop Oriented Mode"
        ],
        answer: 0
      },
      {
        q: "Which CSS layout module is best for 2D rows and columns ?",
        options: [
          "a) Float",
          "b) CSS Grid",
          "c) Inline-block",
          "d) Position absolute"
        ],
        answer: 1
      },
      {
        q: "Which HTTP method is typically used to submit form data securely ?",
        options: [
          "a) GET",
          "b) POST",
          "c) FETCH",
          "d) PUSH"
        ],
        answer: 1
      }
    ]
  }
};

// ==================== حالة التطبيق (State) ====================
let studentInfo = { name: "", id: "", dept: "" };
let currentSubjectKey = "algorithms";
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;
let totalSeconds = 900; // 15 دقيقة
let remainingSeconds = 900;

// ==================== التنقل بين الشاشات ====================
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

// ==================== 1. تسجيل الدخول ====================
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("student-name").value.trim();
  const id = document.getElementById("student-id").value.trim();
  const dept = document.getElementById("academic-dept").value;
  const errorEl = document.getElementById("login-error");

  if (!name || !id || !dept) {
    errorEl.textContent = "Please fill in all fields and select your department.";
    return;
  }

  errorEl.textContent = "";
  studentInfo = { name, id, dept };
  document.getElementById("welcome-student").textContent = `${name} • ${dept} (ID: ${id})`;
  showScreen("screen-subjects");
});

function logout() {
  document.getElementById("login-form").reset();
  showScreen("screen-login");
}

// ==================== 2. اختيار المادة ====================
function selectSubject(subjectKey) {
  currentSubjectKey = subjectKey;
  const exam = examsData[subjectKey];

  document.getElementById("start-banner-title").textContent = exam.bannerTitle;
  document.getElementById("start-subject-name").textContent = exam.title;
  document.getElementById("start-total-q").textContent = exam.questions.length;
  document.getElementById("start-total-time").textContent = `${exam.durationMinutes} min`;
  document.getElementById("start-pill-time").textContent = `${exam.durationMinutes}:00`;

  showScreen("screen-start");
}

// ==================== 3. بدء الامتحان والعداد ====================
function startQuiz() {
  const exam = examsData[currentSubjectKey];
  currentQuestionIndex = 0;
  userAnswers = new Array(exam.questions.length).fill(null);
  totalSeconds = exam.durationMinutes * 60;
  remainingSeconds = totalSeconds;

  buildQuickNav();
  renderQuestion();
  startTimer();
  showScreen("screen-quiz");
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    remainingSeconds--;
    updateTimerDisplay();

    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      submitQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;
  document.getElementById("quiz-timer").textContent =
    `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// ==================== 4. عرض الأسئلة والاختيارات ====================
function buildQuickNav() {
  const exam = examsData[currentSubjectKey];
  const container = document.getElementById("quick-nav-numbers");
  container.innerHTML = "";

  exam.questions.forEach((_, idx) => {
    const btn = document.createElement("button");
    btn.className = "q-dot";
    btn.textContent = idx + 1;
    btn.onclick = () => {
      currentQuestionIndex = idx;
      renderQuestion();
    };
    container.appendChild(btn);
  });
}

function updateQuickNav() {
  const dots = document.querySelectorAll(".q-dot");
  dots.forEach((dot, idx) => {
    dot.classList.remove("active", "answered");
    if (userAnswers[idx] !== null) {
      dot.classList.add("answered");
    }
    if (idx === currentQuestionIndex) {
      dot.classList.add("active");
    }
  });
}

function renderQuestion() {
  const exam = examsData[currentSubjectKey];
  const totalQ = exam.questions.length;
  const currentQ = exam.questions[currentQuestionIndex];

  document.getElementById("question-counter").textContent =
    `Q.${currentQuestionIndex + 1}/${totalQ}`;
  document.getElementById("question-text").textContent = currentQ.q;

  const optionsList = document.getElementById("options-list");
  optionsList.innerHTML = "";

  currentQ.options.forEach((optText, optIndex) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    if (userAnswers[currentQuestionIndex] === optIndex) {
      btn.classList.add("selected");
    }
    btn.textContent = optText;
    btn.onclick = () => selectOption(optIndex);
    optionsList.appendChild(btn);
  });

  // تحديث أزرار Previous و Next
  document.getElementById("btn-prev").disabled = currentQuestionIndex === 0;
  const nextBtn = document.getElementById("btn-next");
  if (currentQuestionIndex === totalQ - 1) {
    nextBtn.textContent = "Finish";
  } else {
    nextBtn.textContent = "Next";
  }

  updateQuickNav();
}

function selectOption(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  renderQuestion();
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function nextQuestion() {
  const totalQ = examsData[currentSubjectKey].questions.length;
  if (currentQuestionIndex < totalQ - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    submitQuiz();
  }
}

function confirmExitQuiz() {
  if (confirm("Are you sure you want to exit the quiz? Your progress will be lost.")) {
    clearInterval(timerInterval);
    showScreen("screen-subjects");
  }
}

// ==================== 5. تسليم الامتحان وحساب النتيجة ====================
function submitQuiz() {
  clearInterval(timerInterval);
  const exam = examsData[currentSubjectKey];
  const totalQ = exam.questions.length;

  let correctCount = 0;
  exam.questions.forEach((q, idx) => {
    if (userAnswers[idx] === q.answer) {
      correctCount++;
    }
  });

  const wrongCount = totalQ - correctCount;
  const percentage = Math.round((correctCount / totalQ) * 100);

  // حساب الوقت المستغرق
  const elapsedSeconds = totalSeconds - remainingSeconds;
  const takenMins = Math.floor(elapsedSeconds / 60);
  const takenSecs = elapsedSeconds % 60;

  document.getElementById("result-subject-name").textContent = exam.title;
  document.getElementById("score-fraction").textContent = `${correctCount}/${totalQ}`;
  document.getElementById("stat-correct").textContent = correctCount;
  document.getElementById("stat-wrong").textContent = wrongCount;
  document.getElementById("stat-total-time").textContent = `${exam.durationMinutes}m`;
  document.getElementById("stat-time-taken").textContent = `${takenMins}m ${takenSecs}sec`;

  const msgEl = document.getElementById("score-message");
  const circleEl = document.getElementById("score-circle");

  if (percentage >= 50) {
    msgEl.textContent = `Congratulations ! you have passed this test with ${percentage}%`;
    circleEl.style.borderColor = "#1ea7e1";
  } else {
    msgEl.textContent = `You scored ${percentage}%. Keep practicing and try again!`;
    circleEl.style.borderColor = "#e85353";
  }

  showScreen("screen-result");
}

// ==================== 6. مراجعة الإجابات ====================
function openReviewScreen() {
  const exam = examsData[currentSubjectKey];
  const reviewList = document.getElementById("review-list");
  reviewList.innerHTML = "";

  exam.questions.forEach((q, idx) => {
    const userChoice = userAnswers[idx];
    const isCorrect = userChoice === q.answer;

    const item = document.createElement("div");
    item.className = `review-item ${isCorrect ? "correct" : "wrong"}`;

    const userText = userChoice !== null ? q.options[userChoice] : "Not Answered";
    const correctText = q.options[q.answer];

    item.innerHTML = `
      <h4>Q.${idx + 1}: ${q.q}</h4>
      <p><strong>Your Answer:</strong> ${userText}</p>
      <p><strong>Correct Answer:</strong> ${correctText}</p>
    `;
    reviewList.appendChild(item);
  });

  showScreen("screen-review");
}