//import Popup class
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector }, handleFormSubmit, loadingButtonText) {
    super({ popupSelector });
    this._popupForm = this._popup.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputValues = {};
    this._formInputs = this._popup.querySelectorAll(".modal__input");
    this._submitButton = this._popup.querySelector(".modal__button");
    this._buttonText = this._submitButton.textContent;
    this._loadingButtonText = loadingButtonText;
  }

  _getInputValues() {
    this._formInputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputValues = this._getInputValues();
      //inserts the inputs in the form
      this._handleFormSubmit(inputValues);
    });
  }

  showLoading() {
    this._submitButton.textContent = this._loadingButtonText;
  }

  hideLoading() {
    this._submitButton.textContent = this._buttonText;
  }
}
