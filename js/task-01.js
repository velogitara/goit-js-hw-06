const categoriesRef = document.querySelector('#categories');
console.log('Number of categories:', categoriesRef.childElementCount);

// const firstCategoriesTitleName = document.querySelector('.item');

// console.log('Category:', categoriesTitleName.firstElementChild.textContent);
// console.log('Elements:', categoriesTitleName.lastElementChild.childElementCount);

const categoriesTitleName = categoriesRef.querySelectorAll('.item');
// console.log(categoriesTitleName[0].firstElementChild.textContent);

categoriesTitleName.forEach(el => {
  console.log('Category:', el.firstElementChild.textContent);
  console.log('Elements:', el.lastElementChild.children.length);
});
