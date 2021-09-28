const viewScore = document.querySelector("#view-score");
const timer = document.querySelector("#timer");
const quizBox = document.querySelector("#quiz-box");
const title = document.querySelector("#title");
const hint = document.querySelector("#question");
const startGameButton = document.getElementById("start-game");
const choiceBox = document.querySelector("#choice-box");
const form = document.querySelector("form");
const formInitials = document.getElementById("name");
const feedback = document.querySelector("#feedback");
const playAgainButton = document.getElementById("play-again");
const localScores = document.getElementById("local-scores");
let userChoice;
let questNumber = -1;
let time = 120000;
let score;
let tryAgainStatus = false;
let highScores = [];
const quizQuestions = [
    {
        question:
            "This is a named reference to any value in javascript; It is a container for data",
        options: ["a: variable", "b: querySelector()", "c: function"],
        answer: "a: variable",
    },
    {
        question:
            "A ________ is a set of statements which performs a task or calculates a value",
        options: ["a: keydown", "b: iteration", "c: function"],
        answer: "c: function",
    },
    {
        question:
            "This method returns the first element within the HTML document which matches the specified selector",
        options: ["a: slice()", "b: querySelector()", "c: concat()"],
        answer: "b: querySelector()",
    },
    {
        question:
            "____ is a concept which helps us manage the visibilty of variables in a javascript file",
        options: ["a: scope", "b: global", "c: constant"],
        answer: "a: scope",
    },
    {
        question:
            "A data representation of the objects which make up the content of an HTML document",
        options: [
            "a: Document Object Model (DOM)",
            "b: local storage",
            "c: function",
        ],
        answer: "a: Document Object Model (DOM)",
    },
    {
        question:
            "This class is used to store keyed data and complex entities in javascript",
        options: ["a: constant", "b: variable", "c: object"],
        answer: "c: object",
    },
];

startGameButton.addEventListener("click", startGame);
viewScore.addEventListener("click", scoreRender);
choiceBox.addEventListener("click", questionValidation);
form.addEventListener("submit", scoreSubmit);

function hide(target) {
    target.className = "hidden";
}

function show(target) {
    target.className = "visible";
}

function bananaLog() {
    return console.log("banana");
}

function startGame() {
    hide(title);
    hide(startGameButton);
    gameTimer();
    nextQuestion();
}

function gameTimer() {
    //Timer function
    let gameTimer = setInterval(function () {
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
                location.reload();
            }
        }
        if (tryAgainStatus == true) {
            clearInterval(gameTimer);
        }
    }, 1000);
}

function feedbackFade() {
    setInterval(function () {
        hide(feedback);
    }, 1500);
}

function nextQuestion() {
    if (choiceBox.childElementCount > 0) {
        choiceBox.innerHTML = "";
    }
    //If the array index number is the same as the
    if (questNumber + 1 === quizQuestions.length) {
        score = time / 1000;
        choiceBox.innerHTML = "";
        show(title);
        // title.className = "visible";
        title.textContent = "All Done!";
        hint.textContent =
            "You have finished taking the quiz and have a score of " + score;
        show(form);
        tryAgainStatus = true;
    }
    questNumber++;
    show(feedback)
    if (questNumber <= quizQuestions.length - 1) {
        for (let i = 0; i < quizQuestions[questNumber].options.length; i++) {
            hint.textContent = quizQuestions[questNumber].question;
            let userChoices = document.createElement("button");
            choiceBox.appendChild(userChoices);
            userChoices.setAttribute("id", "choice");
            // userChoices.setAttribute("id", "choice" + [i + 1]);
            userChoices.textContent = quizQuestions[questNumber].options[i];
            // userChoices.addEventListener("click", scoring);
            userChoices.addEventListener("click", nextQuestion);
        }
    }
}

function questionValidation(event) {
    let userClick = event.target;
    if (userClick.textContent == quizQuestions[questNumber - 1].answer) {
        feedback.textContent = "Correct!";
        feedbackFade()
        return;
    } else {
        feedback.textContent = "Incorrect!";
        time = time - 20000;
        feedbackFade()
    }
}

function scoreSubmit(event) {
    event.preventDefault();
    let savedScore = {
        initial: formInitials.value,
        highScore: score,
    };
    highScores.push(savedScore);
    localStorage.setItem("highScore", JSON.stringify(highScores));
    formInitials.value = "";
    scoreRender();
}

function scoreRender() {
    let userScores = JSON.parse(localStorage.getItem("highScore"));
    let playAgain = document.createElement("button");
    console.log(userScores);
    if (playAgainButton.childElementCount < 1) {
        playAgainButton.appendChild(playAgain);
        playAgain.textContent = "Play Again";
    }
    title.textContent = "High Scores";
    hide(hint);
    hide(form);
    clearInterval(gameTimer);
    show(localScores);
    for (i = 0; i < userScores.length; i++) {
        localScores.textContent =
            "Intials:" +
            userScores[i].initial +
            " Score: " +
            userScores[i].highScore;
    }
    playAgain.addEventListener("click", nextQuestion);
    playAgain.addEventListener("click", function () {
        location.reload();
    });
}
