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

import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

import {
  profileEditButton,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  addCardButton,
  addCardForm,
  settings,
  avatarButton,
  avatarForm,
} from "../utils/constants.js";

/* -------------------------------------------------------------------------- */
/*                                  Classes                                   */
/* -------------------------------------------------------------------------- */

/* ------------------------------- Card Class ------------------------------- */

function renderCard(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    handleImageClick,
    handleDeleteClick,
    handleLikeClick
  );
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

const avatarPopup = new PopupWithForm(
  {
    popupSelector: "#edit-avatar-modal",
  },
  handleAvatarSubmit
);

avatarPopup.setEventListeners();

function handleAddCardFormButton() {
  addCardPopup.open();
}

profileEditButton.addEventListener("click", handleFormButton);
addCardButton.addEventListener("click", handleAddCardFormButton);

/* ----------------------------- UserInfo Class ----------------------------- */

const user = new Userinfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
  avatarSelector: ".profile__image",
});

function handleAddCardFormSubmit(data) {
  addCardPopup.creating(true);
  api
    .addCard(data.title, data.link)
    .then((res) => {
      renderCard(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => addCardPopup.creating(false));
  addCardPopup.close();
}

function handleFormButton() {
  const userInformation = user.getUserInfo();
  profileTitleInput.value = userInformation.title;
  profileDescriptionInput.value = userInformation.description;
  profileEditPopup.open();
}

function handleProfileSubmit({ name, about }) {
  profileEditPopup.saving(true);
  api
    .updateInfo(name, about)
    .then((data) => {
      user.setUserInfo(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => profileEditPopup.saving(false));
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
  .catch((err) => {
    console.log(err);
  });

//Uploads user information from server to DOM
api
  .getUserInfo()
  .then((userData) => {
    user.setUserInfo(userData);
  })
  .catch((err) => {
    console.log(err);
  });

//handler for like button
function handleLikeClick(card) {
  if (card._isLiked) {
    api
      .dislikeCard(card._id)
      .then(() => {
        card.handleLikeIcon();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (!card._isLiked) {
    api
      .likeCard(card._id)
      .then(() => {
        card.handleLikeIcon();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

//select the delete confirmation modal
const deleteConfirmModal = new PopupWithConfirmation({
  popupSelector: "#card-delete-modal",
});

//handler for delete modal to appear
function handleDeleteClick(card) {
  deleteConfirmModal.open();
  deleteConfirmModal.deleting(false);
  deleteConfirmModal.handleDelete(() => {
    api
      .deleteCard(card._id)
      .then(() => {
        // card.handleDelete(card._id);
        deleteConfirmModal.close();
        card._handleDeleteCard();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(deleteConfirmModal.deleting(true));
  });
}

//adds close with esc and close button
deleteConfirmModal.setEventListeners();

function handleAvatarSubmit(data) {
  avatarPopup.saving(true);
  api
    .updateAvatar(data)
    .then((res) => {
      user.setUserAvatar(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarPopup.saving(false);
      avatarPopup.close();
    });
}

avatarButton.addEventListener("click", () => {
  avatarPopup.open();
});

const avatarValidator = new FormValidator(settings, avatarForm);
avatarValidator.enableValidation();
