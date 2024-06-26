import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._popupForm = this._popup.querySelector(".modal__form");
    this._submitButton = this._popup.querySelector(".modal__button");
  }

  handleDelete(handleDeleteSubmit) {
    this._handleDeleteSubmit = handleDeleteSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleDeleteSubmit();
    });
  }

  renderLoading = (deleting) => {
    this._submitButton.textContent = deleting ? "Deleting..." : "Yes";
  };
}
