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

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  cardSection.addItem(card.getView());
}

/* ---------------------------- Validation Class ---------------------------- */

//Add Validation class to forms
const profileFormValidator = new FormValidator(settings, profileEditForm);
profileFormValidator.enableValidation();

const addCardValidator = new FormValidator(settings, addCardForm);
addCardValidator.enableValidation();

/* ------------------------------ Section Class ----------------------------- */

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
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

function handleAddCardFormSubmit(data) {
  renderCard({ name: data.title, link: data.link });
  addCardPopup.close();
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
