const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
  const { value, dataset } = inputRef;
  console.log(value.length);
  console.log(dataset.length);
  if (value.length === +dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else inputRef.classList.remove('valid'), inputRef.classList.add('invalid');
});

// const input = document.querySelector('#validation-input');

// const check = e => {
//   input.classList.add('invalid');
//   if (e.currentTarget.value.length === Number(input.dataset.length)) {
//     input.classList.replace('invalid', 'valid');
//   }
//   //   else input.classList.replace('valid', 'invalid');
// };
// input.addEventListener('blur', check);
