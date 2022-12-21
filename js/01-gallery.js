import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const markup = galleryItems.map(({ preview, original, description }) => 
`<div class="gallery__item">
    <a class="gallery__link" href="${original}" onclick="return false";>
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</div>`).join('');




const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', openModal);

function openModal(event) {
    event.preventDefault();
	
    if(event.target.nodeName !== 'IMG') {
        return;
    }
	
	const options = {
		
		onShow: (instance) => {
			
			gallery.addEventListener('keydown', onEscPress)
				
		},
		
		onClose: (instance) => {
			gallery.removeEventListener('keydown', onEscPress)
		}
	}

	
	const largeImage = event.target.getAttribute('data-source');
	
	const instance = basicLightbox.create(`<img
	src="${largeImage}"
	/>`, options);
	
	instance.show();
	
	function onEscPress(event) {
		if (event.code === 'Escape') {
			instance.close();
		}
	}
}