/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";

/* -------------------------------------------------------------------------- */
/*                                    Array                                   */
/* -------------------------------------------------------------------------- */

const initialCards = [
  {
    name: "Hanging Lake",
    link: "https://media.cntraveler.com/photos/5bb4f467db225a4f50684c9f/master/w_1920%2Cc_limit/Hanging-Lake-GettyImages-688127462.jpg",
  },
  {
    name: "Oneonta Gorge",
    link: "https://beautifuloregon.com/wp-content/uploads/2021/03/Oneonta-Gorge-Columbia-River-Gorge-Oregon-102-0142-533.jpg",
  },
  {
    name: "Antelope Canyon",
    link: "https://detoursamericanwest.com/wp-content/uploads/2023/03/Antelope-Canyon-Tours-from-Phoenix-DETOURS-LP.jpg",
  },
  {
    name: "Kilauea",
    link: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/C5PGPXNRNFNP5P4YBQ3EIJNX5I.jpg",
  },
  {
    name: "Mendenhall Ice Caves",
    link: "https://media.cntraveler.com/photos/65486a46d7063616dabe4e7c/master/w_1920%2Cc_limit/Mendenhall%2520Glacier%2520kyson-dana-i0XNwkEnAWo-unsplash.jpg",
  },
  {
    name: "Niagara Falls",
    link: "https://www.fodors.com/wp-content/uploads/2020/03/venti-views-mNs_6VmbaiA-unsplash.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

//Profile Modal
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseButton = document.querySelector("#profile-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");

//Add Card Modal
const cardListEl = document.querySelector(".cards__list");
const addCardButton = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#card-add-modal");
const addCardCloseButton = document.querySelector("#card-close-button");
const addCardForm = addCardModal.querySelector(".modal__form");
const cardTitleInput = addCardForm.querySelector(".modal__input_type_title");
const cardUrlInput = addCardForm.querySelector(".modal__input_type_url");

//Preview Image Modal
const previewImageModal = document.querySelector("#preview-image-modal");
const previewImageCloseButton =
  previewImageModal.querySelector(".modal__close");
const previewImageTitle = document.querySelector(".modal__preview-title");
const previewImageCard = document.querySelector(".modal__preview-image");

//For Validation Class
const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

//Add Validation class to forms
const profileFormValidator = new FormValidator(settings, profileEditForm);
profileFormValidator.enableValidation();

const addCardValidator = new FormValidator(settings, addCardForm);
addCardValidator.enableValidation();

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

//Create a new card
function getCardElement(cardData) {
  const getCard = new Card(cardData, "#card-template", handleImageClick);
  return getCard.getView();
}

//Open modal
function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeWithEscape);
}

//Close modal
function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeWithEscape);
}

//Add created card
function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

//Close modal with escape button
function closeWithEscape(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal_opened");
    closeModal(openModal);
  }
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

function handleImageClick(cardData) {
  previewImageCard.src = cardData.link;
  previewImageCard.alt = cardData.name;
  previewImageTitle.textContent = cardData.name;
  openModal(previewImageModal);
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  addCardForm.reset();
  closeModal(addCardModal);
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileCloseButton.addEventListener("click", () =>
  closeModal(profileEditModal)
);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  renderCard(cardData, cardListEl);
});

//add new card button
addCardButton.addEventListener("click", () => {
  openModal(addCardModal);
});

//close card button
addCardCloseButton.addEventListener("click", () => {
  closeModal(addCardModal);
});

addCardForm.addEventListener("submit", handleAddCardFormSubmit);

//preview image modal
previewImageCloseButton.addEventListener("click", () => {
  closeModal(previewImageModal);
});

const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closeModal(modal);
    }
  });
});
