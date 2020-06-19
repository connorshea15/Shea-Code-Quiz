// Create a variable to represent the main section
var quizContentEl = document.querySelector("#quiz-content");
var questionCount = 0;


// Let's actually make it an array of objects (Cool!!)
// Let's create an object for our first question
var questions = [
    { question: "Commonly used data types do NOT include:", a1: "strings", a2: "booleans", a3: "alerts", a4: "numbers", correctAnswer: "alerts" },

    { question: "The condition in an If/Else statement is enclosed with:", a1: "brackets", a2: "parenthesis", a3: "quotes", a4: "apostophes", correctAnswer: "parenthesis" }
];


// I need to create a function to display a specific question
// I will pass "question" + questionId into the function, which has a 
// parameter of currentQuestion

var presentQuestion = function(currentQuestion) {
    // Create a variable for the question text
    var displayQuestion = document.createElement("h2");
    // Set the textContent of question variable to the question of my question object
    displayQuestion.textContent = currentQuestion[questionCount].question;
    // Append the question to my page
    quizContentEl.appendChild(displayQuestion);

    // Create section for the answers
    // I need to look at my examples to see where they did the div thing
    var answers = document.createElement("div");
    answers.innerHTML = 
        "<button>" + currentQuestion[questionCount].a1 + 
        "</button></br><button>" + currentQuestion[questionCount].a2 + 
        "</button></br><button>" + currentQuestion[questionCount].a3 +
        "</button></br><button>" + currentQuestion[questionCount].a4 + 
        "</button>";
    quizContentEl.append(answers);


    // questionCount++
};

// I need a function to check the answer and it should be triggered 
// by an event listener at the end of the display question function





presentQuestion(questions);
