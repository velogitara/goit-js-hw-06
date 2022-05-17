const btnRef = document.querySelector('.change-color');
const bgColorValue = document.querySelector('.color');

const onClickColorChanger = () => {
  // console.dir(element.currentTarget.offsetParent.background);
  document.body.style.backgroundColor = getRandomHexColor();
  // console.dir(bgColorValue.textContent);
  console.dir(document.body.style);
  bgColorValue.textContent = document.body.style.backgroundColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnRef.addEventListener('click', onClickColorChanger);
