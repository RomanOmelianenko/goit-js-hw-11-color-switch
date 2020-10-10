const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

refs.start.addEventListener("click", startChangeColor);
refs.stop.addEventListener("click", stopChangeColor);

function changeOnRandomColor() {
  const color = colors[randomIntegerFromInterval(colors.length - 1)]
  // console.log(color);
  document.body.style.backgroundColor = color
}

let intervalId = null
let isActive = false

function startChangeColor() {
  if(isActive) {
    return
  }
  isActive = true
  intervalId = setInterval(() => {
    changeOnRandomColor()
  }, 1000);
}

function stopChangeColor() {
  clearInterval(intervalId)
  isActive = false
}