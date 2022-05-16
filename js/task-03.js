const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// ================================================

//  <li><img src="" alt=""></li>

// <li><img src="" alt=""></li>

// <li><img src="" alt=""></li>

const makeImagesMarkUp = element => {
  console.log(element);
  const { url, alt } = element;
  return ` 
    <li>
      <img src="${url}" alt="${alt}">
    </li>
    `;
};
// console.log(makeImagesMarkUp(images[0]));
const makeImagesGallery = images.map(makeImagesMarkUp).join('');
console.log(makeImagesGallery);

const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('afterbegin', makeImagesGallery);

// const imagesEl = images.map(el => {
//   const listsEl = document.createElement('li');
//   const imgEl = document.createElement('img');
//   listsEl.append(imgEl);
//   imgEl.src = el.url;
//   imgEl.alt = el.alt;

//   // console.log(el);
//   // console.log(listsEl);
//   return listsEl;
// });

// console.log(imagesEl);
// galleryRef.append(...imagesEl);
