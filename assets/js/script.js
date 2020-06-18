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
    
};

// I need a function to check the answer



var test = document.createElement("h1");
test.textContent = "hello";
quizContentEl.appendChild(test);