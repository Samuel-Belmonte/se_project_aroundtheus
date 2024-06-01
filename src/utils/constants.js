/* -------------------------------------------------------------------------- */
/*                                    Array                                   */
/* -------------------------------------------------------------------------- */

// export const initialCards = [
//   {
//     name: "Hanging Lake",
//     link: "https://media.cntraveler.com/photos/5bb4f467db225a4f50684c9f/master/w_1920%2Cc_limit/Hanging-Lake-GettyImages-688127462.jpg",
//   },
//   {
//     name: "Oneonta Gorge",
//     link: "https://beautifuloregon.com/wp-content/uploads/2021/03/Oneonta-Gorge-Columbia-River-Gorge-Oregon-102-0142-533.jpg",
//   },
//   {
//     name: "Antelope Canyon",
//     link: "https://detoursamericanwest.com/wp-content/uploads/2023/03/Antelope-Canyon-Tours-from-Phoenix-DETOURS-LP.jpg",
//   },
//   {
//     name: "Kilauea",
//     link: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/C5PGPXNRNFNP5P4YBQ3EIJNX5I.jpg",
//   },
//   {
//     name: "Mendenhall Ice Caves",
//     link: "https://media.cntraveler.com/photos/65486a46d7063616dabe4e7c/master/w_1920%2Cc_limit/Mendenhall%2520Glacier%2520kyson-dana-i0XNwkEnAWo-unsplash.jpg",
//   },
//   {
//     name: "Niagara Falls",
//     link: "https://www.fodors.com/wp-content/uploads/2020/03/venti-views-mNs_6VmbaiA-unsplash.jpg",
//   },
// ];

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

//Profile Modal
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const profileEditForm = profileEditModal.querySelector(".modal__form");

//Add Card Modal
export const addCardButton = document.querySelector(".profile__add-button");
export const addCardModal = document.querySelector("#card-add-modal");
export const addCardForm = addCardModal.querySelector(".modal__form");

//For Validation Class
export const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

//Delete Card Modal
// export const deleteCardButton = document.querySelector('.')
