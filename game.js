// Iteration 2: Generate 2 random number and display it on the screen
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

var random1 = 0;
var random2 = 0;

function getRandom(num) {
  return Math.floor(Math.random() * num);
}

function createRandom() {
  random1 = getRandom(100);
  random2 = getRandom(100);
  number1.innerHTML = random1;
  number2.innerHTML = random2;
}

createRandom();

// Iteration 3: Make the options button functional
const gt = document.getElementById("greater-than");
const eq = document.getElementById("equal-to");
const lt = document.getElementById("lesser-than");
var score = 0;

gt.onclick = () => {
  if (checkAnswer(random1, random2, "gt")) {
    score++;
    resetTimer(timerID);
  } else {
    location.href = "./gameover.html";
  }
  createRandom();
};

eq.onclick = () => {
  if (checkAnswer(random1, random2, "eq")) {
    score++;
    resetTimer(timerID);
  } else {
    location.href = "./gameover.html";
  }
  createRandom();
};

lt.onclick = () => {
  if (checkAnswer(random1, random2, "lt")) {
    score++;
    resetTimer(timerID);
  } else {
    location.href = "./gameover.html";
  }
  createRandom();
};

function checkAnswer(random1, random2, sign) {
  if (sign == "gt") {
    return random1 > random2;
  } else if (sign == "eq") {
    return random1 == random2;
  } else if (sign == "lt") {
    return random1 < random2;
  }
}

// Iteration 4: Build a timer for the game
const timerPane = document.getElementById("timer");
var timer = 5;
var timerID;

function countDown() {
  timer = 5;
  timerPane.innerHTML = timer;
  timerID = setInterval(() => {
    timer--;
    if (timer == 0) {
      location.href = "./gameover.html";
    }
    timerPane.innerHTML = timer;
  }, 1000);
  localStorage.setItem("score", score);
}

function resetTimer(intervalID) {
  clearInterval(intervalID);
  countDown();
}

countDown();
