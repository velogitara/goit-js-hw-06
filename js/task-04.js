// const CounterPlugin = function ({ rootSelector, initialValue = 0, step = 1 } = {}) {
//   this._rootSelector = rootSelector;
//   this._value = initialValue;
//   this._step = step;

//   this._refs = this._getRefs(rootSelector);

//   this._bindEvents();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   //   console.log(rootSelector);
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
//   refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
//   refs.value = refs.container.querySelector('#value');
//   //   console.log(refs.container);
//   //   console.log(refs.incrementBtn);

//   return refs;
// };
// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener('click', () => {
//     console.log(this);
//     this.increment();
//     this.updateValueUI();
//   });
//   this._refs.decrementBtn.addEventListener('click', () => {
//     console.log(this);
//     this.decrement();
//     this.updateValueUI();
//   });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// const counter = new CounterPlugin({ rootSelector: '#counter', step: 1 });

// console.log(counter);

const decrementBtn = document.querySelector('[data-action="decrement"]');
// console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(incrementBtn);
const value = document.querySelector('#value');
// console.log(value);
const buttons = document.querySelectorAll('.btn');
// console.log(buttons);

let counterValue = +value.textContent;
// const changeValue = x => el => {
//   console.log(x);
//   // if (condition) {
//   // }
// };

const changeValue = x => {
  return el => {
    if (isNaN(counterValue)) {
      return console.log('?????? ???? ??????????');
    }
    // console.log(typeof x);
    // x === 'increment'  ? (counterValue += 1) : (counterValue -= 1);
    if (x === 'increment') {
      counterValue += 1;
    } else if (x === 'decrement') {
      counterValue -= 1;
    }
    value.textContent = counterValue;
  };
};
buttons.forEach(function (x, y) {
  // console.log(x.dataset.action);
  x.addEventListener('click', changeValue(x.dataset.action));
});

// const decrementValue = () => {
//   counterValue -= 1;
//   value.textContent = counterValue;
// };

// const incrementValue = () => {
//   counterValue += 1;
//   value.textContent = counterValue;
// };

// decrementBtn.addEventListener('click', decrementValue);
// incrementBtn.addEventListener('click', incrementValue);
