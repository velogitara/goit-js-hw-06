const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listRef = document.querySelector('#ingredients');

// const listsEl = document.createElement('li');
// console.log(listsEl);

// console.log(allIngredients);

// ingredients.forEach(el => {
// const listsEl = document.createElement('li');
// listsEl.classList.add('item');
// listsEl.textContent = el;
//   // console.log(listsEl);
//   listRef.append(listsEl);
// });

const allElements = ingredients.map(el => {
  console.log(el);
  const listsEl = document.createElement('li');
  listsEl.classList.add('item');
  listsEl.textContent = el;
  return listsEl;
});

listRef.append(...allElements);

console.log(allElements);
