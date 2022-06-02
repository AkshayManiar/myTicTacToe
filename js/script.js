let turn = "X";
let gameOver = false;
let editText = true;
const reset = document.getElementById("reset");

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 50],
    [3, 4, 5, 5],
    [6, 7, 8, 5],
    [0, 3, 6, -5],
    [1, 4, 7, 5],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      const boxes = document.querySelectorAll(".box");
      boxes[e[0]].classList.add("win");
      boxes[e[1]].classList.add("win");
      boxes[e[2]].classList.add("win");
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + " Win";
      document.querySelector(".info").classList.add("winner");
      gameOver = true;
      editText = false;
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && editText === true) {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  const boxes = document.querySelectorAll(".box");
  Array.from(boxes).forEach((element) => {
    element.classList.remove("win");
  });
  turn = "X";
  gameOver = false;
  editText = true;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".info").classList.remove("winner");
});
