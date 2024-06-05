//import Popup class
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector }, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popup.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputValues = {};
    this._formInputs = this._popup.querySelectorAll(".modal__input");
    this._submitButton = this._popup.querySelector(".modal__button");
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
      //resets the form
      this._popupForm.reset();
    });
  }

  saving = (saving) => {
    if (saving) {
      this._submitButton.textContent = "Saving...";
    } else {
      this._submitButton.textContent = "Save";
    }
  };

  creating = (creating) => {
    if (creating) {
      this._submitButton.textContent = "Creating...";
    } else {
      this._submitButton.textContent = "Create";
    }
  };
}
