import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// console.log(basicLightbox)
console.log(SimpleLightbox);

const markup = galleryItems.map(({ preview, original, description }) => 
`<li>
	<a class="gallery__item" href="${original}" onclick="return false";>
  		<img class="gallery__image" src="${preview}" alt="${description}" />
	</a>
</>`).join('');




const galleryUl = document.querySelector('.gallery');
galleryUl.insertAdjacentHTML('beforeend', markup);


let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionsDelay: 250,});


