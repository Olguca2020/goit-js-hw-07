import { galleryItems } from './gallery-items.js';
const cardsContainer = document.querySelector(`.gallery`);
const cardsMarkup = createGalleryMarkup(galleryItems);
cardsContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);

function createGalleryMarkup(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<li class="marcupgallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}
cardsContainer.addEventListener(`click`, openLargeCard);
function openLargeCard(event) {
  event.preventDefault();
  if (event.target.nodeName !== `IMG`) {
    return;
  } else {      
    const path = event.target.dataset.source;
    const instance = basicLightbox.create(
      `<img src = "${path}" alt="${event.target.alt}"/>`
    );
    instance.show();
  
  window.addEventListener(`keydown`, closeLargeCard);
    function closeLargeCard(event) {
      if (event.code === "Escape");
      instance.close();
    }
  }
}



