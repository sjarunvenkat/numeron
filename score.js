// Iteration 5: Store the player score and display it on the game over screen
const scoreboard = document.getElementById("score-board");
scoreboard.innerHTML = localStorage.getItem("score");

const playagain = document.getElementById("play-again-button");
playagain.onclick = () => {
  location.href = "./game.html";
};
