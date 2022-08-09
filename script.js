var p1;
var p1_roll = document.getElementById("p1");
p1_roll.disabled = true;
var p1_result = document.getElementById("p1v");
var p2;
var p2_roll = document.getElementById("p2");
var p2_result = document.getElementById("p2v");
var count;
var tossbut = document.getElementById("tossbut");
var toss = document.getElementById("toss");
const finish = [4, 4, 4, 4, 4];
function start() {
  count = 0;
  p1 = [0, 0, 0, 0, 0];
  p2 = [0, 0, 0, 0, 0];
  let pics = document.querySelectorAll("img");
  pics.forEach((pic) => (pic.src = ""));
  toss.innerHTML = "";
  tossbut.disabled = false;
  tossbut.addEventListener("click", playtoss);
}

function playtoss() {
  count = randint(2);
  toss.innerHTML = "Player " + (count + 1) + "<br> starts!";
  tossbut.disabled = true;
  play();
}
function play() {
  if (win()) {
    alert(`${win()} Wins!`);
  } else {
    if (count % 2 === 0) {
      p1_roll.addEventListener("click", play1);
      p1_roll.disabled = false;
    } else {
      p2_roll.addEventListener("click", play2);
      p2_roll.disabled = false;
    }
  }
}

function play1() {
  p1_roll.removeEventListener("click", play1);
  p1_roll.disabled = true;
  let roll = randint(5);
  if (p1[roll] < 4) {
    p1[roll] += 1;
  }
  new_roll = roll + 10;
  let fig = document.getElementById(`${new_roll}`);
  document.getElementById("p1").innerHTML = roll + 1;
  document.getElementById("p2").innerHTML = "Roll";
  fig.src = `static_img/${p1[roll]}.png`;
  count += 1;
  play();
}

function play2() {
  p2_roll.removeEventListener("click", play2);
  p2_roll.disabled = true;
  let roll = randint(5);
  if (p2[roll] < 4) {
    p2[roll] += 1;
  }
  new_roll = roll + 15;
  let fig = document.getElementById(`${new_roll}`);
  document.getElementById("p2").innerHTML = roll + 1;
  document.getElementById("p1").innerHTML = "Roll";
  fig.src = `static_img/${p2[roll]}.png`;
  count += 1;
  play();
}

function win() {
  if (JSON.stringify(p1) === JSON.stringify(finish)) {
    return "Player 1";
  } else if (JSON.stringify(p2) === JSON.stringify(finish)) {
    return "Player 2";
  } else {
    return false;
  }
}
function randint(a) {
  return Math.floor(Math.random() * a);
}
