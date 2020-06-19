// Create a variable to represent the main section
var quizContentEl = document.querySelector("#quiz-content");
//This will be my variable that controls which question is displayed
var questionCount = 0;
// This is the reference to my h2 element in the body
var contentHeading = document.getElementById("content-heading");
// This is a reference to my content div below my h2 in the body
var contentArea = document.getElementById("content-area");

// Let's actually make it an array of objects (Cool!!)
// Let's create an object for our first question
var questions = [
    { question: "Commonly used data types do NOT include:", a1: "strings", a2: "booleans", a3: "alerts", a4: "numbers", correctAnswer: "alerts" },

    { question: "The condition in an If/Else statement is enclosed with:", a1: "brackets", a2: "parenthesis", a3: "quotes", a4: "apostophes", correctAnswer: "parenthesis" }
];


// I need to create a function to display a specific question
// I will pass "question" + questionId into the function, which has a 
// parameter of questions

var presentQuestion = function() {
    // Set my h2 elements inner text to the current question
    contentHeading.innerText = questions[questionCount].question;
    
    // Create section for the answers
    contentArea.innerHTML = 
        "<button>1. " + questions[questionCount].a1 + 
        "</button></br><button>2. " + questions[questionCount].a2 + 
        "</button></br><button>3. " + questions[questionCount].a3 +
        "</button></br><button>4. " + questions[questionCount].a4 + 
        "</button>";

    quizContentEl.addEventListener("click", confirmAnswer); 
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
        //need to take time off the clock
    }
    questionCount++;
    return presentQuestion();
};




presentQuestion();
