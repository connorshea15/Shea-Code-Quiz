// Create a variable to represent the main section
var quizContentEl = document.querySelector("#quiz-content");

// Let's create an object for our first question
var question1 = {
    question: "Commonly used data types do NOT include:",
    answer1: "strings",
    answer2: "booleans",
    answer3: "alerts",
    answer4: "numbers",
    correctAnswer: "alerts"
};

// I need to create a function to display a specific question
// I will pass "question" + questionId into the function, which has a 
// parameter of currentQuestion

var presentQuestion = function(currentQuestion) {
    // Create a variable for the question text
    var question = document.createElement("h2");
    // Set the textContent of question variable to the question of my question object
    question.textContent = currentQuestion.question;
    // Append the question to my page
    quizContentEl.appendChild(question);

    // Create section for the answers
    // I need to look at my examples to see where they did the div thing
    var answers = document.createElement("div");
    quizContentEl.append()

};

// I need a function to check the answer




var i = 1;
var functionArgument = "question" + i;
console.log(functionArgument);
presentQuestion(functionArgument);