const viewScore = document.querySelector("#view-score");
const timer = document.querySelector("#timer");
const quizBox = document.querySelector("#quiz-box");
const title = document.querySelector("#title");
const hint = document.querySelector("#question");
const startGameButton = document.getElementById("start-game");
const choiceBox = document.querySelector("#choice-box");
let userChoice;
let questNumber = -1;
const feedback = document.querySelector("#feedback");
let score = 0;
const quizQuestions = [
    {
        question:
            "This is a named reference to any value in javascript; It is a container for data",
        options: ["a: variable", "b: querySelector()", "c: function"],
        answer: "variable",
    },
    {
        question:
            "A ________ is a set of statements which performs a task or calculates a value",
        options: ["a: keydown", "b: iteration", "c: getElementById()"],
        answer: "function",
    },
    // {
    //     question:
    //         'This method returns the first element within the HTML document which matches the specified selector',
    //     options: [ 'a: slice()', 'b: querySelector()', 'c: concat()' ],
    //     answer: 'querySelector()',
    // },
    // {
    //     question:
    //         '____ is a concept which helps us manage the visibilty of variables in a javascript file',
    //     options: [ 'a: scope', 'b: global', 'c: constant' ],
    //     answer: 'scope',
    // },
    // {
    //     question:
    //         'A data representation of the objects which make up the content of an HTML document',
    //     options: [
    //         'a: Document Object Model (DOM)',
    //         'b: local storage',
    //         'c: function',
    //     ],
    //     answer: 'Document Object Model (DOM)',
    // },
    // {
    //     question:
    //         'This class is used to store keyed data and complex entities in javascript',
    //     options: [ 'a: constant', 'b: variable', 'c: object' ],
    //     answer: 'c',
    // },
];

startGameButton.addEventListener("click", startGame);

function bananaLog() {
    questNumber++;
    console.log(questNumber);
    return console.log("banana");
}

function startGame() {
    title.remove();
    startGameButton.remove();
    // console.log("banana");
    // gameTimer()
    nextQuestion();
}

function nextQuestion() {
    questNumber++;
    hint.textContent = quizQuestions[questNumber].question;
    for (let i = 0; i < quizQuestions[questNumber].options.length; i++) {
        let userChoices = document.createElement("button");
        choiceBox.appendChild(userChoices);
        userChoices.setAttribute("id", "choice" + [i + 1]);
        userChoices.textContent = quizQuestions[questNumber].options[i];
        userChoices.addEventListener("click", nextQuestion);
        if (choiceBox.childElementCount > 3) {
            choiceBox.removeChild(userChoices);
            console.log(choiceBox);
        }
    }
}

function viewScores() {}

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
