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
