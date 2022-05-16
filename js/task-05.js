// Напиши скрипт который, при наборе текста в
// инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name -
// output.Если инпут пустой,
//  в спане должна отображаться строка "Anonymous".

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
// console.dir(inputRef);
console.log(spanRef.textContent);

spanRef.textContent = 'Anonymous';

inputRef.addEventListener('input', event => {
  //   console.dir(event.currentTarget);
  //   console.log(event.currentTarget.value);
  spanRef.textContent = event.currentTarget.value || 'Anonymous';
});
