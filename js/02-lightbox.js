import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector(".gallery");
const render = createGalleryListMarkup(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", render);

function createGalleryListMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>
            `;
        })
        .join("");
}

    
var lightbox = new SimpleLightbox(".gallery a", {
    captionData: "alt",
    captionDelay: 250,

});

console.log(galleryItems);
