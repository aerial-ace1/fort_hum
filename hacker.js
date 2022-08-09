var p1;
var p1_roll = document.getElementById("p1");
p1_roll.disabled = true;
var p1_result = document.getElementById("p1v");
var p1_score;
var p1_sco = document.getElementById("score1");

var p2;
var p2_roll = document.getElementById("p2");
var p2_result = document.getElementById("p2v");
var p2_score;
var p2_sco = document.getElementById("score2");

var count;
var turns;
var playbut = document.getElementById("play");
var turn = document.getElementById("turns");
var tossbut = document.getElementById("tossbut");
var toss = document.getElementById("toss");

const finish = [4, 4, 4, 4, 4];
function start() {
  count = 0;
  p1_score = 0;
  p2_score = 0;
  playbut.innerHTML = "Restart";
  p1 = [0, 0, 0, 0, 0];
  p2 = [0, 0, 0, 0, 0];
  p1_roll.disabled = true;
  p2_roll.disabled = true;
  turns = 50;
  let pics = document.querySelectorAll("img");
  pics.forEach((pic) => (pic.src = ""));
  toss.innerHTML = "";
  tossbut.disabled = false;
  tossbut.addEventListener("click", playtoss);
}

function playtoss() {
  count = randint(2);
  toss.innerHTML = "Player " + (count + 1) + " starts!";
  tossbut.disabled = true;
  play();
}

function play() {
  p1_sco.innerHTML = p1_score;
  p2_sco.innerHTML = p2_score;
  turn.innerHTML = turns;
  if (turns < 1) {
    if (p1_score > p2_score) {
      alert("Player 1 Wins!");
      playerScore(p1_score);
    } else {
      alert("Player 2 Wins");
      playerScore(p1_score);
    }
  } else {
    if (count % 2 === 0) {
      p1_roll.addEventListener("click", play1);
      p1_roll.disabled = false;
    } else {
      p2_roll.addEventListener("click", play2);
      p2_roll.disabled = false;
    }
  }
  turns -= 1;
}

function play1() {
  p1_roll.removeEventListener("click", play1);
  p1_roll.disabled = true;
  let roll = randint(5);
  new_roll = roll + 10;
  let fig = document.getElementById(`${new_roll}`);
  if (p1[roll] < 4) {
    p1[roll] += 1;
    document.getElementById("p1").innerHTML = roll + 1;
    document.getElementById("p2").innerHTML = "Roll";
    fig.src = `${p1[roll]}.png`;
    p1_score += p1[roll] * 10;
    count += 1;
    play();
  } else {
    fig.src = "5.png";
    setTimeout(() => {
      bang(1, fig);
    }, 500);
  }
}

function play2() {
  p2_roll.removeEventListener("click", play2);
  p2_roll.disabled = true;
  let roll = randint(5);
  new_roll = roll + 15;
  let fig = document.getElementById(`${new_roll}`);
  if (p2[roll] < 4) {
    p2[roll] += 1;
    document.getElementById("p2").innerHTML = roll + 1;
    document.getElementById("p1").innerHTML = "Roll";
    fig.src = `${p2[roll]}.png`;
    p2_score += p2[roll] * 10;
    count += 1;
    play();
  } else {
    fig.src = "5.png";
    setTimeout(() => {
      bang(2, fig);
    }, 500);
  }
}

function bang(no, fig) {
  var shooot = parseInt(
    prompt(
      `Who does Player ${no} want to shoot? (Enter a number between 1 and 5)`,
      ""
    )
  );
  if (shooot > 0 && shooot < 6) {
    if (no === 2) {
      p1[shooot - 1] = 0;
      var new_shooot = shooot + 9;
      p1_score += 100;
      document.getElementById("p2").innerHTML = shooot;
      document.getElementById("p1").innerHTML = "Roll";
    } else {
      p2[shooot - 1] = 0;
      var new_shooot = shooot + 14;
      p2_score += 100;
      document.getElementById("p1").innerHTML = shooot;
      document.getElementById("p2").innerHTML = "Roll";
    }
    fig.src = "5a.png";
    let fig1 = document.getElementById(`${new_shooot}`);
    fig1.src = "6.png";
    setTimeout(() => {
      fig1.src = "";
      fig.src = "4.png";
      count += 1;
      play();
    }, 2000);
  } else {
    bang(no, fig);
  }
}

function randint(a) {
  return Math.floor(Math.random() * a);
}
