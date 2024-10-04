const quizData = [
  {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: 2,
  },
  {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      answer: 1,
  },
  {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Mark Twain"],
      answer: 2,
  },
  {
      question: "What is the chemical symbol for water?",
      options: ["O2", "CO2", "H2O", "NaCl"],
      answer: 2,
  },
  {
      question: "Who was the first president of the United States?",
      options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
      answer: 1,
  },
  {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: 3,
  },
  {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
      answer: 2,
  },
  {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Silver"],
      answer: 2,
  },
  {
      question: "In which year did the Titanic sink?",
      options: ["1912", "1905", "1920", "1898"],
      answer: 0,
  },
  {
      question: "What is the largest planet in our solar system?",
      options: ["Saturn", "Earth", "Jupiter", "Neptune"],
      answer: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const quizContainer = document.getElementById("quiz");
  const currentQuestion = quizData[currentQuestionIndex];

  quizContainer.innerHTML = `
      <div class="question">${currentQuestion.question}</div>
      ${currentQuestion.options.map((option, index) => `
          <label class="answer">
              <input type="radio" name="answer" value="${index}" />
              ${option}
          </label>
      `).join("")}
  `;
}

function submitAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) return alert("Please select an answer!");

  const answerIndex = parseInt(selectedOption.value);
  if (answerIndex === quizData[currentQuestionIndex].answer) {
      score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
      loadQuestion();
  } else {
      displayResult();
  }
}

function displayResult() {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}.`;
  resultContainer.classList.remove("hidden"); // Show the result
  document.getElementById("quiz").style.display = "none";
  document.getElementById("submit").style.display = "none";
}

document.getElementById("submit").addEventListener("click", submitAnswer);

// Load the first question
loadQuestion();
