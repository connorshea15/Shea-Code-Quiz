// Create a variable to represent the main section
var quizContentEl = document.querySelector("#quiz-content");
//This will be my variable that controls which question is displayed
var questionCount = 0;
// This is the reference to my h2 element in the body
var contentHeading = document.getElementById("content-heading");
// This is a reference to my content div below my h2 in the body
var contentArea = document.getElementById("content-area");
//variable for the start of the counter
var counter = 75;
// variable to represent the html 
var countDownEl = document.getElementById("count");

// Function to begin timer upon fulfilling the startQuiz function
var startTimer = function() {
    var countDown = function() {
        countDownEl.innerText = counter;
        counter--;
        if (counter === -1) {
            clearInterval(timer);
        }
    };
    // Create the timer funciton as the quiz starts
    if (counter === 75) {
        //function for the timer 
        var timer = setInterval(countDown, 1000);
    } 
};

// Let's actually make it an array of objects (Cool!!)
// Let's create an object for our first question
var questions = [
    { question: "Commonly used data types do NOT include:", a1: "strings", a2: "booleans", a3: "alerts", a4: "numbers", correctAnswer: "alerts" },

    { question: "The condition in an If/Else statement is enclosed with:", a1: "brackets", a2: "parenthesis", a3: "quotes", a4: "apostrophes", correctAnswer: "parenthesis" }
];

// function to start the quiz
var startQuiz = function() {
    contentHeading.innerText = "Coding Quiz Challenge";
    contentArea.innerHTML = "<p>Click the button below to begin!</p></br><button id='start-button'>Start Quiz!</button>";
    document.getElementById("start-button").addEventListener("click", presentQuestion);
    document.getElementById("start-button").addEventListener("click", startTimer);
    return;
};

// function to handle presentation of questions
var presentQuestion = function() {
    // Set my h2 elements inner text to the current question
    contentHeading.innerText = questions[questionCount].question;
    
    // Create section for the answers
    contentArea.innerHTML = 
        "<button id='answer-button1'>" + questions[questionCount].a1 + 
        "</button></br><button id='answer-button2'>" + questions[questionCount].a2 + 
        "</button></br><button id='answer-button3'>" + questions[questionCount].a3 +
        "</button></br><button id='answer-button4'>" + questions[questionCount].a4 + 
        "</button>";

    document.getElementById("answer-button1").addEventListener("click", confirmAnswer);
    document.getElementById("answer-button2").addEventListener("click", confirmAnswer);
    document.getElementById("answer-button3").addEventListener("click", confirmAnswer);
    document.getElementById("answer-button4").addEventListener("click", confirmAnswer);
};

// I need a function to check the answer and it should be triggered 
// by an event listener at the end of the display question function
var confirmAnswer = function(event) {
    // set targetEl variable equal to the element that was clicked
    var targetEl = event.target;
    // Conditional statement to check if the answer is right
    if (targetEl.textContent === questions[questionCount].correctAnswer) {
        window.alert("CORRECT!!!");
        //need to add time to the clock
    } else {
        window.alert("NOT EVEN CLOSE!!!");
        counter -= 20;
        //need to take time off the clock
    }
    questionCount++;
    return presentQuestion();
};

// I need a funciton here to bring up the all done page

startQuiz();
