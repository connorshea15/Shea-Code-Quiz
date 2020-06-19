// Create a variable to represent the main section
var quizContentEl = document.querySelector("#quiz-content");
//This will be my variable that controls which question is displayed
var questionCount = 0;
var contentHeading = document.getElementById("content-heading");


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
    // Create a variable for the question text
    //var displayQuestion = document.createElement("h2");
    // Set the textContent of question variable to the question of my question object
    var displayQuestion = questions[questionCount].question;
    // Append the question to my page
    //quizContentEl.appendChild(displayQuestion);
    console.log(displayQuestion);
    //contentHeading.innerText = displayQuestion;
    contentHeading.innerText = displayQuestion;
    /*
    // Create section for the answers
    var answers = document.createElement("div");
    answers.innerHTML = 
        "<button>" + questions[questionCount].a1 + 
        "</button></br><button>" + questions[questionCount].a2 + 
        "</button></br><button>" + questions[questionCount].a3 +
        "</button></br><button>" + questions[questionCount].a4 + 
        "</button>";
    quizContentEl.append(answers);

    quizContentEl.addEventListener("click", confirmAnswer); */
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
