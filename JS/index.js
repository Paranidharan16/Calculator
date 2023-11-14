"use strict";

// Selecting Rock, Paper, Sis Button

const Btns = document.querySelectorAll(".btn");

// Selecting Score-Board

const t = document.querySelector(".tie-score");
const us = document.querySelector(".player-score");
const cs = document.querySelector(".Computer-score");

// Creating Data Structure for Calculating Score's

let tieScore = 0;
let userScore = 0;
let computerScore = 0;

// Function for Create a random move for computer and compare user move with computer move

const cal = (n) => {
  const randomNumber = Math.trunc(Math.random() * 3 + 1);
  let computerMove;

  if (randomNumber === 1) computerMove = "Rock";
  if (randomNumber === 2) computerMove = "Paper";
  if (randomNumber === 3) computerMove = "Sis";

  const tieScoreFucnction = () => {
    tieScore++;
    t.textContent = tieScore;
  };

  const WinScoreFucnction = () => {
    userScore++;
    us.textContent = userScore;
  };

  const loseScoreFucnction = () => {
    computerScore++;
    cs.textContent = computerScore;
  };

  if (n === "Rock") {
    if (computerMove === "Rock") if (tieScore < 5) tieScoreFucnction();
    if (computerMove === "Paper") if (computerScore < 5) loseScoreFucnction();
    if (computerMove === "Sis") if (userScore < 5) WinScoreFucnction();
  }
  if (n === "Paper") {
    if (computerMove === "Rock") if (userScore < 5) WinScoreFucnction();
    if (computerMove === "Paper") if (tieScore < 5) tieScoreFucnction();
    if (computerMove === "Sis") if (computerScore < 5) loseScoreFucnction();
  }
  if (n === "Sis") {
    if (computerMove === "Rock") if (computerScore < 5) loseScoreFucnction();
    if (computerMove === "Paper") if (userScore < 5) WinScoreFucnction();
    if (computerMove === "Sis") if (tieScore < 5) tieScoreFucnction();
  }

  // If Any Score Reach The Score 5 First It Get's Executed

  const winner = (player) => {
    document.querySelector(".score-card").classList.add("hidden");
    document.querySelector(`.${player}`).classList.remove("hidden");
    document.querySelector(".result").classList.remove("hidden");
    if (player === "win")
      document.querySelector("body").style.backgroundColor = "lightgreen";
    if (player === "lose")
      document.querySelector("body").style.backgroundColor = "red";
  };

  if (userScore === 5) winner(`win`);
  if (computerScore === 5) winner(`lose`);
  if (tieScore === 5) winner(`tie`);
};

// Adding addEventListener for the Rock, Paper, Sis Buttom to perform the function

Btns.forEach((e) => {
  e.addEventListener("click", function (e) {
    const h = e.target.dataset.type;
    if (userScore !== 5 && computerScore !== 5 && tieScore !== 5) {
      cal(h);
    }
  });
});
