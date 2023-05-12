import { galleryItems } from "./gallery-items.js";

const cardsContainer = document.querySelector(`.gallery`);
const galleryMarkup = createGalleryMarkup(galleryItems);
cardsContainer.insertAdjacentHTML(`beforeend`, galleryMarkup);
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`;
    })
    .join("");
}

cardsContainer.addEventListener(`click`, openLargeCard);
function openLargeCard(e) {
  e.preventDefault();
  if (e.target.tagName !== `IMG`) {
    return;
  } else {
    let gallery = new SimpleLightbox(".gallery a", {
      captions: true,
      captionSelector: "img",
      captionType: "attr",
      captionsData: "alt",
      captionPosition: "bottom",
      captionDelay: 250,
    });
    gallery.on("show.simplelightbox", function () {});
  }
}
