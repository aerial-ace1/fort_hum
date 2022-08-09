//Generate Leaderboard --
leaderBoard = ["first", "second", "third"];

for (let i = 0; i < 3; i++) {
  if (null == localStorage.getItem(leaderBoard[i])) {
    localStorage.setItem(leaderBoard[i], 0);
  }
}

updateLeader();

//Function which updates leaderboard --

function updateLeader() {
  for (let i = 0; i < 3; i++) {
    document.getElementById(`${leaderBoard[i]}`).innerHTML =
      localStorage.getItem(leaderBoard[i]);
  }
}

//Function which takes the user score and add it to the leaderboard --
function playerScore(sessionScore) {
  scoreList = [];
  for (let i = 0; i < 3; i++) {
    scoreList.push(localStorage.getItem(leaderBoard[i]));
  }
  scoreList.push(sessionScore);
  scoreList.sort();
  scoreList.reverse();

  for (let i = 0; i < 3; i++) {
    localStorage.setItem(leaderBoard[i], scoreList[i]);
  }

  updateLeader();
}
