/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

//import needed for css in webpack
import "../pages/index.css";

import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";

import Section from "../components/Section.js";

import PopUpWithImage from "../components/PopupWithImage.js";

import PopupWithForm from "../components/PopupWithForm.js";

import Userinfo from "../components/UserInfo.js";

import {
  initialCards,
  profileEditButton,
  profileEditModal,
  profileCloseButton,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  cardListEl,
  addCardButton,
  addCardModal,
  addCardCloseButton,
  addCardForm,
  cardTitleInput,
  cardUrlInput,
  previewImageModal,
  previewImageCloseButton,
  previewImageTitle,
  previewImageCard,
  settings,
} from "../utils/constants.js";

/* -------------------------------------------------------------------------- */
/*                                  Classes                                   */
/* -------------------------------------------------------------------------- */

/*                                 Card Class                                 */

//Create a new card
function getCardElement(cardData) {
  const getCard = new Card(cardData, "#card-template", handleImageClick);
  return getCard.getView();
}

//Add created card
function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

/*                              Validation Class                              */

//Add Validation class to forms
const profileFormValidator = new FormValidator(settings, profileEditForm);
profileFormValidator.enableValidation();

const addCardValidator = new FormValidator(settings, addCardForm);
addCardValidator.enableValidation();

/*                                Section Class                               */

const cardSection = new Section(
  { items: initialCards, renderer: getCardElement },
  ".cards__list"
);

cardSection.renderItems();

/*                            PopupWithImage Class                            */

const imageModal = new PopUpWithImage("#preview-image-modal");
imageModal.setEventListeners();

function handleImageClick(data) {
  imageModal.open(data);
}

/*                             PopupWithForm Class                            */

const profileEditPopup = new PopupWithForm(
  profileEditModal,
  handleProfileEditSubmit
);

const addCardPopup = new PopupWithForm(addCardModal, handleAddCardFormSubmit);

function handleAddCardFormButton() {
  addCardPopup.open();
}

profileEditPopup.setEventListeners();
addCardPopup.setEventListeners();

profileEditButton.addEventListener("click", handleFormButton);
addCardButton.addEventListener("click", handleAddCardFormButton);

/*                               UserInfo Class                               */

const user = new Userinfo(profileTitle, profileDescription);

function handleProfileEditSubmit(data) {
  user.setUserInfo({ name: data.title, description: data.description });
  profileEditPopup.close();
}

function handleAddCardFormSubmit(info) {
  const name = info.title;
  const link = info.url;
  const card = getCardElement({ name, link });
  cardSection.addItem(card);
  addCardPopup.close();
}

function handleFormButton() {
  const userInformation = user.getUserInfo();
  profileTitleInput.value = userInformation.name;
  profileDescriptionInput.value = userInformation.description;
  profileEditPopup.open();
}

function handleProfileSubmit(data) {
  user.setUserInfo({ name: data.title, description: data.description });
  profileEditPopup.close();
}

//Open modal
// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", closeWithEscape);
// }

//Close modal
// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", closeWithEscape);
// }

//Close modal with escape button
// function closeWithEscape(evt) {
//   if (evt.key === "Escape") {
//     const openModal = document.querySelector(".modal_opened");
//     closeModal(openModal);
//   }
// }

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

// function handleImageClick(cardData) {
//   previewImageCard.src = cardData.link;
//   previewImageCard.alt = cardData.name;
//   previewImageTitle.textContent = cardData.name;
//   openModal(previewImageModal);
// }

// function handleProfileEditSubmit(e) {
//   e.preventDefault();
//   profileTitle.textContent = profileTitleInput.value;
//   profileDescription.textContent = profileDescriptionInput.value;
//   closeModal(profileEditModal);
// }

// function handleAddCardFormSubmit(e) {
//   e.preventDefault();
//   const name = cardTitleInput.value;
//   const link = cardUrlInput.value;
//   renderCard({ name, link }, cardListEl);
//   addCardForm.reset();
//   closeModal(addCardModal);
// }

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */
// profileEditButton.addEventListener("click", () => {
//   profileTitleInput.value = profileTitle.textContent;
//   profileDescriptionInput.value = profileDescription.textContent;
//   openModal(profileEditModal);
// });

// profileCloseButton.addEventListener("click", () =>
//   closeModal(profileEditModal)
// );

// profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  renderCard(cardData, cardListEl);
});

//add new card button
// addCardButton.addEventListener("click", () => {
//   openModal(addCardModal);
// });

//close card button
// addCardCloseButton.addEventListener("click", () => {
//   closeModal(addCardModal);
// });

// addCardForm.addEventListener("submit", handleAddCardFormSubmit);

// //preview image modal
// previewImageCloseButton.addEventListener("click", () => {
//   closeModal(previewImageModal);
// });

// const modals = document.querySelectorAll(".modal");

// modals.forEach((modal) => {
//   modal.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("modal")) {
//       closeModal(modal);
//     }
//   });
// });
