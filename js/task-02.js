const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listRef = document.querySelector('#ingredients');

// const listsEl = document.createElement('li');
// console.log(listsEl);
ingredients.forEach(el => {
  const listsEl = document.createElement('li');
  listsEl.classList.add('item');
  listsEl.textContent = el;
  // console.log(listsEl);
  listRef.append(listsEl);
});
// console.log(allIngredients);
