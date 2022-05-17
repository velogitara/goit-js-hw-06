const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const onClick = element => {
  console.log(element.currentTarget.value + 'px');
  spanRef.style.fontSize = element.currentTarget.value + 'px';
};
inputRef.addEventListener('input', onClick);
