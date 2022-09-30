import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBox = document.querySelector(".gallery");
const render = createGalleryListMarkup(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", render)


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

galleryBox.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault()
    if (!event.target.dataset.source) {
      return;
    }
       
    console.log(event.target.dataset.source);

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
        `)
  instance.show();
  
  galleryBox.addEventListener("keydown", event => {
    if (event.code === "Escape") {
      instance.close();
    }
  });

}



    console.log(galleryItems);
