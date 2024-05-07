//import Popup class
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupSelector.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputValues = {};
    this._formInputs = this._popupSelector.querySelectorAll(".modal__input");
  }

  close() {
    this._popupForm.reset();
    //super kind of like this but refers to parent class
    //closes the modal from the parent class
    super.close();
  }

  _getInputValues() {
    this._formInputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      inputValues = this._getInputValues();
      //inserts the inputs in the form
      this._handleFormSubmit(inputValues);
      //resets the form
      this._popupForm.reset();
    });
  }
}
