let containers = document.querySelectorAll(".color-container");
let button = document.getElementById("btn");

let hex1 = document.querySelector(".hex1");
let hex2 = document.querySelector(".hex2");
let hex3 = document.querySelector(".hex3");

const validCharacters = "0123456789ABCDEF";
const hexDecLength = 6;

let displayHex = new Array(hex1, hex2, hex3);
const styleRandom = () => {
  displayHex.forEach((hex) => {
    const color = getRandomColor();
    console.log(color);
    hex.innerHTML = color;
  });
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.backgroundColor = containers[i].innerText;
  }
};

styleRandom();

function CopyToClipboard(id) {
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  try {
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    console.log("Successfully copy text: " + r);
  } catch (err) {
    console.log("Unable to copy!");
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor() {
  let color = "#";
  let getRandomChar = "";
  for (let i = 0; i < 6; i++) {
    getRandomChar = validCharacters.charAt(randomIntFromInterval(0, 16));
    console.log(getRandomChar);
    color += getRandomChar;
  }
  console.log(color);
  return color;
}
