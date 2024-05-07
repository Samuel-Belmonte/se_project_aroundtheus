export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  //open modal
  open() {
    this._popupSelector.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  //close modal
  close() {
    this._popupSelector.classList.remove("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  //listens for esc button
  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  //sets event listeners
  setEventListeners() {
    this._popupSelector
      .querySelector(".modal__close")
      .addEventListener("click", () => {
        this.close();
      });
  }
}
