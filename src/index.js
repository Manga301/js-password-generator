import "./styles.css";

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/"
];

let passOneEl = document.getElementById("password-opt-one");
let passTwoEl = document.getElementById("password-opt-two");
let passBtn = document.getElementById("password-btn");

// randomize password function
function randomizePassword(textEl) {
  let scramble = characters.sort(() => Math.random() - 0.5);
  // clear previous password
  textEl.value = "";

  for (let i = 0; i < 18; i++) {
    // generate new password
    textEl.value += scramble[i];
  }
}

passBtn.addEventListener("click", function () {
  randomizePassword(passOneEl);
  randomizePassword(passTwoEl);
});

passOneEl.addEventListener("click", function () {
  passOneEl.select();
  document.execCommand("Copy");
  //alert("Copied the text: " + passOneEl.value);
  showSnackbar(passOneEl);
});

passTwoEl.addEventListener("click", function () {
  passTwoEl.select();
  document.execCommand("Copy");
  //alert("Copied the text: " + passTwoEl.value);
  showSnackbar(passTwoEl);
});

function showSnackbar(textEl) {
  // Get the snackbar element
  var snack = document.getElementById("snackbar");

  // Add the "show" class
  snack.className = "show";

  snack.textContent = `Copied: ${textEl.value}`;

  // After 3 seconds, remove the show class
  setTimeout(function () {
    snack.className = snack.className.replace("show", "");
  }, 3000);
}
