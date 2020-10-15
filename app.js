const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

// const refs = {
//   startBtn: document.querySelector('button[data-action="start"]'),
//   stopBtn: document.querySelector('button[data-action="stop"]'),
// };

// ====================== 1 Class =====================

class Color {
  constructor({intervalidId, isActive, rootSelector}) {
    this._intervalidId = intervalidId
    this._isActive = isActive
    this.rootSelector = rootSelector
    this._refs = this._getRefs(rootSelector)
    this._bindEvents()
  }

  randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  changeOnRandomColor() {
    const color = colors[this.randomIntegerFromInterval(0, colors.length - 1)]
    console.log(color);
    document.body.style.backgroundColor = color
  }
  
  _getRefs(rootSelector) {
    const refs = {}
    refs.startBtn = document.querySelector(`${rootSelector} [data-action="start"]`);
    refs.stopBtn = document.querySelector(`${rootSelector} [data-action="stop"]`);
    return refs
  }

  _bindEvents() {
    this._refs.startBtn.addEventListener("click", this._startChangeColor.bind(this));
    this._refs.stopBtn.addEventListener("click", this._stopChangeColor.bind(this));
  }

  _startChangeColor() {
    if(this._isActive) {
    return
  }
  this._isActive = true
  this._intervalId = setInterval(() => {
    this.changeOnRandomColor()
    }, 1000);
  }

  _stopChangeColor() {
    clearInterval(this._intervalId)
    this._isActive = false
  }

  changeOnRandomColor() {
    const color = colors[this.randomIntegerFromInterval(0, colors.length - 1)]
    console.log(color);
    document.body.style.backgroundColor = color
  }
}

const color = new Color({
  intervalidId: null,
  isActive: false,
  rootSelector: '.button',
})

// console.log(color);

// ====================== 2 ===========================

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// function changeOnRandomColor() {
//   const color = colors[randomIntegerFromInterval(0, colors.length - 1)]
//   console.log(color);
//   document.body.style.backgroundColor = color
// }

// let intervalId = null
// let isActive = false

// function startChangeColor() {
//   if(isActive) {
//     return
//   }
//   isActive = true
//   intervalId = setInterval(() => {
//     changeOnRandomColor()
//   }, 1000);
// }

// function stopChangeColor() {
//   clearInterval(intervalId)
//   isActive = false
// }

// refs.start.addEventListener("click", startChangeColor);
// refs.stop.addEventListener("click", stopChangeColor);