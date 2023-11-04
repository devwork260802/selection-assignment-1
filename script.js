let currentQuestionIndex = 0;
let score = 0;

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["New York", "London", "Paris", "Dublin"],
    answer: "Paris",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
    answer: "Leonardo Da Vinci",
  },
  // Add more questions here
];

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const resultText = document.getElementById("result-text");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultText.textContent = "";
  displayQuestion(currentQuestionIndex);
  document.querySelector(".quiz").style.display = "block";
  document.querySelector(".result").style.display = "none";
}

function displayQuestion(index) {
  if (index < quizData.length) {
    const question = quizData[index];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = "";

    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(option, question.answer));
      optionsContainer.appendChild(button);
    });
  } else {
    showResult();
  }
}

function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
}

function showResult() {
  document.querySelector(".quiz").style.display = "none";
  document.querySelector(".result").style.display = "block";
  resultText.textContent = `Your score: ${score} out of ${quizData.length}`;
}

function nextQuestion() {
  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
}

startQuiz();
