function gameTimer() {
    let time = 6 * 30000;
    //Timer function
    setInterval(function () {
        if (time > 0) {
            time = time - 1000;
            let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((time % (1000 * 60)) / 1000);
            timer.textContent = minutes + ":" + seconds;
        }
        if (time <= 0) {
            let tryAgain = confirm(
                "Sorry, you ran out of time! Do you want to play again?"
            );
            if (tryAgain == true) {
                time = wordArray.length * 30000;
            }
        }
    }, 1000);
}

function startGame() {}

function nextQuestion() {}
function viewScores() {}
function playAgain() {}

console.log(quizQuestions);


const viewScore = document.querySelector("#view-score");
const timer = document.querySelector("#timer");
const quizBox = document.querySelector("#quiz-box");
const startGame = document.querySelector("#start-game")
const hint = document.querySelector("#hint");
const choiceBox = document.querySelector("#choice-box");
const choiceOne = document.querySelector(".choice-1")
const choiceOne = document.querySelector(".choice-2")
const choiceOne = document.querySelector(".choice-3")
const feedback = document.querySelector("#feedback");
const quizQuestions = {
    variable: {
        question:
            "This is a named reference to any value in javascript; It is a container for data",
        options: { a: "variable", b: "querySelector()", c: "function" },
        answer: "a",
    },
    function: {
        question:
            "A ________ is a set of statements which performs a task or calculates a value",
        options: { a: "keydown", b: "iteration", c: "function" },
        answer: "c",
    },
    querySelector: {
        question:
            "This method returns the first element within the HTML document which matches the specified selector",
        options: { a: "slice()", b: "querySelector()", c: "concat()" },
        answer: "b",
    },
    scope: {
        question:
            "____ is a concept which helps us manage the visibilty of variables in a javascript file",
        options: { a: "scope", b: "global", c: "constant" },
        answer: "a",
    },
    DOM: {
        question:
            "A data representation of the objects which make up the content of an HTML document",
        options: {
            a: "Document Object Model (DOM)",
            b: "local storage",
            c: "function",
        },
        answer: "a",
    },
    object: {
        question:
            "This class is used to store keyed data and complex entities in javascript",
        options: { a: "constant", b: "variable", c: "object" },
        answer: "c",
    },
};