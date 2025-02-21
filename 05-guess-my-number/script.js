"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
};

const updateBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const updateSecretNumberBox = function (width) {
  document.querySelector(".number").style.width = width;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    displaySecretNumber(secretNumber);
    updateBackgroundColor("#60b347");
    updateSecretNumberBox("30rem");

    if (score > highscore) highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      score--;
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  displaySecretNumber("?");
  updateBackgroundColor("#222");
  updateSecretNumberBox("15rem");
  displayScore(score);
});
