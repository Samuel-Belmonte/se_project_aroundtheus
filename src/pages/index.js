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

/* ------------------------------- Card Class ------------------------------- */

//Create a new card
function getCardElement(cardData) {
  const getCard = new Card(cardData, "#card-template", handleImageClick);
  return getCard.getView();
}

// Add created card
function renderCard(cardData) {
  const getCard = new Card(cardData, "#card-template", handleImageClick);
  const cardElement = getCardElement(cardData);
  getCard.getView();
  return cardElement;
}

/* ---------------------------- Validation Class ---------------------------- */

//Add Validation class to forms
const profileFormValidator = new FormValidator(settings, profileEditForm);
profileFormValidator.enableValidation();

const addCardValidator = new FormValidator(settings, addCardForm);
addCardValidator.enableValidation();

/* ------------------------------ Section Class ----------------------------- */

const cardSection = new Section(
  { items: initialCards, renderer: getCardElement },
  ".cards__list"
);

cardSection.renderItems();

/* -------------------------- PopupWithImage Class -------------------------- */

const imageModal = new PopUpWithImage({
  popupSelector: "#preview-image-modal",
});
imageModal.setEventListeners();

function handleImageClick(data) {
  imageModal.open(data);
}

/* --------------------------- PopupWithForm Class -------------------------- */

const profileEditPopup = new PopupWithForm(
  { popupSelector: "#profile-edit-modal" },
  handleProfileSubmit
);

profileEditPopup.setEventListeners();

const addCardPopup = new PopupWithForm(
  { popupSelector: "#card-add-modal" },
  handleAddCardFormSubmit
);

addCardPopup.setEventListeners();

function handleAddCardFormButton() {
  addCardPopup.open();
}

profileEditButton.addEventListener("click", handleFormButton);
addCardButton.addEventListener("click", handleAddCardFormButton);

/* ----------------------------- UserInfo Class ----------------------------- */

const user = new Userinfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

// function handleProfileEditSubmit(user) {
//   const name = cardTitleInput.textContent;
//   const description = cardUrlInput.textContent;
//   user.setUserInfo({ title: name, description: description });
//   profileEditPopup.close();
// }

// function handleAddCardFormSubmit() {
//   const name = cardTitleInput;
//   const link = cardUrlInput;
//   const data = { name, link };
//   renderCard(data, "cards__list");
//   addCardForm.reset();
//   // cardSection.addItem(card);
//   addCardPopup.close();
// }

function handleAddCardFormSubmit(data) {
  const cardValue = renderCard(data);
  cardSection.addItem(cardValue);
  profileEditPopup.close();
  return cardValue;
}

function handleFormButton() {
  const userInformation = user.getUserInfo();
  profileTitleInput.value = userInformation.title;
  profileDescriptionInput.value = userInformation.description;
  profileEditPopup.open();
}

function handleProfileSubmit({ title, description }) {
  user.setUserInfo({ title, description });
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

// initialCards.forEach((cardData) => {
//   renderCard(cardData, cardListEl);
// });

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
