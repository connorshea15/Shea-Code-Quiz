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
// Make the correct or wrong variable global so I can affect it  in functions
var correctOrWrong = "";
// this array will store my objects containing initials and high scores
var scores = [];

// Function to begin timer upon fulfilling the startQuiz function
var startTimer = function() {
    var countDown = function() {
        countDownEl.innerText = counter;
        counter--;
        // This is my conditional statement to check if the quiz is still going
        // by checking the timer and the question count
        if (counter === 0 || questionCount === questions.length) {
            clearInterval(timer);
            allDone();
        }
    };
    // Create the timer funciton as the quiz starts
    if (counter === 75) {
        //function for the timer 
        var timer = setInterval(countDown, 1000);
    } 
};

// Create an array ofobjects for my questions and answers
var questions = [
    { question: "Commonly used data types do NOT include:", a1: "strings", a2: "booleans", a3: "alerts", a4: "numbers", correctAnswer: "alerts" },

    { question: "The condition in an If/Else statement is enclosed with:", a1: "brackets", a2: "parenthesis", a3: "quotes", a4: "apostrophes", correctAnswer: "parenthesis" },

    { question: "Arrays in Javascript can be used to store________.", a1: "numbers and strings", a2: "other arrays", a3: "booleans", a4: "all of the above", correctAnswer: "all of the above" }
];

// function to start the quiz
var startQuiz = function() {
    // I probably need to dynamically create the header at the start of each quiz
    questionCount = 0;
    counter = 75;
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

    // Create a reference for the heading that will say correct or wrong
    var feedback = document.createElement("h2");
    feedback.textContent = correctOrWrong;
    contentArea.appendChild(feedback);

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
        correctOrWrong = "Correct!"
    } else {
        correctOrWrong = "Wrong!";
        counter -= 20;
    }
    questionCount++;
    return presentQuestion();
};

// I need a funciton here to bring up the all done page
var allDone = function() {
    // Create a new heading for the all done page
    contentHeading.innerText = "All Done!";
    // Editing HTML elements to show end of quiz info
    contentArea.innerHTML = "<p>Your final score is " + counter + "</p><br/>";
    // create text input field for user initials
    var enterHighScore = document.createElement("input");
    // set the name of the input so we can grab it later
    enterHighScore.name = "user-initials";
    // Add input field to the content area
    contentArea.appendChild(enterHighScore);
    // create a button to submit the user initials
    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.id = "submit-button";
    contentArea.appendChild(submitButton);
    document.getElementById("submit-button").addEventListener("click", handleSubmit);
};

//function that is triggered by the submit of the initials
var handleSubmit = function() {
    // grab the user inputted initials
    var initialInput = document.querySelector("input[name='user-initials'");
    // create object to score initials and score
    var scoreAndInitials = {
        initials: initialInput.value,
        score: counter
    };
    scores.push(scoreAndInitials);
    saveScores();
    getScores();
    // sort my array of objects in descending order of scores
    scores.sort((a, b) => b.score - a.score);
    printHighScores();
};

var saveScores = function() {
    localStorage.setItem("scores", JSON.stringify(scores));
};

// this function will update my scores array every time the browser is refreshed
var getScores = function() {
    if (scores.length > 0) {
        scores = localStorage.getItem("scores");
        scores = JSON.parse(scores);
   }
}; 

// this function will print the highscores in li elements in the contentSection
var printHighScores = function() {
    // set the new content heading to 'High Scores'
    contentHeading.innerText = "High Scores";
    contentArea.textContent = "";
    // create ordered list element
    var orderedListEl = document.createElement("ol");
    for (i = 0; i < scores.length; i++) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = scores[i].initials + " - " + scores[i].score;
        orderedListEl.appendChild(listItemEl);
        contentArea.appendChild(orderedListEl);
    };
    // create a button to go back to the start
    var goBackButton = document.createElement("button");
    goBackButton.textContent = "Go Back";
    goBackButton.id = "go-back";
    contentArea.appendChild(goBackButton);
    document.getElementById("go-back").addEventListener("click", startQuiz);

    // Create a button to clear the high scores
    var clearStorage = document.createElement("button");
    clearStorage.textContent = "Clear High Scores";
    clearStorage.id = "clear-storage";
    contentArea.appendChild(clearStorage);
    document.getElementById("clear-storage").addEventListener("click", clearHighScores);
}; 

var clearHighScores = function() {
    localStorage.clear();
    scores = [];
    startQuiz();
};

//getScores();
startQuiz();
document.getElementById("high-score-button").addEventListener("click", printHighScores);
getScores();