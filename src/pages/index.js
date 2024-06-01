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

import Api from "../components/Api.js";

import {
  initialCards,
  profileEditButton,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  addCardButton,
  addCardForm,
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

const cardSection = new Section({ renderer: renderCard }, ".cards__list");

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
  api.addCard(data.name, data.link).then((res) => {
    renderCard(res);
  });
  //call render card in then statement
  // renderCard({ name: data.title, link: data.link });
  addCardPopup.close();
}

function handleFormButton() {
  const userInformation = user.getUserInfo();
  profileTitleInput.value = userInformation.title;
  profileDescriptionInput.value = userInformation.description;
  profileEditPopup.open();
}

function handleProfileSubmit({ name, about }) {
  api.updateInfo(name, about).then((data) => {
    user.setUserInfo(data);
  });
  profileEditPopup.close();
}

/* -------------------------------- Api Class ------------------------------- */
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "c6c362c5-eda0-4373-9004-84a264f04392",
    "Content-Type": "application/json",
  },
});

//Upload initial cards to the DOM
api
  .getInitialCards()
  .then((cardData) => {
    cardSection.renderItems(cardData);
  })
  .catch(console.error("Unsuccessful"));

//Uploads user information from server to DOM
api
  .getUserInfo()
  .then((userData) => {
    user.setUserInfo(userData);
  })
  .catch(console.error("Unsuccessful"));
