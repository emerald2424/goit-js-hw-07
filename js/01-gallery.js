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

const options = {
	/*
	 * Prevents the lightbox from closing when clicking its background.
	 */
	closable: true,
	/*
	 * One or more space separated classes to be added to the basicLightbox element.
	 */
	className: '',
	/*
	 * Function that gets executed before the lightbox will be shown.
	 * Returning false will prevent the lightbox from showing.
	 */
	onShow: (instance) => {
		
        gallery.addEventListener('keydown', (event) => {
			if (event.code === 'Escape') {
				instance.close();
			}
		})
			
	},
	/*
	 * Function that gets executed before the lightbox closes.
	 * Returning false will prevent the lightbox from closing.
	 */
	onClose: (instance) => {
        // console.log("ПІСЛЯ")
    }
}



const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', openModal);

function openModal(event) {
    event.preventDefault();
	
    if(event.target.nodeName !== 'IMG') {
        return;
    }

	const largeImage = event.target.getAttribute('data-source');
	const instance = basicLightbox.create(`<img
	src="${largeImage}"
	/>`, options);
	
	instance.show();

}