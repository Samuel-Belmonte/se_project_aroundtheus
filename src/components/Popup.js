export default class Popup {
  constructor({ popupSelector }) {
    this._popup = document.querySelector(popupSelector);
    // this._handleEscClose = this._handleEscClose.bind(this);
  }

  //listens for esc button
  _handleEscClose = (e) => (e.key === "Escape" ? this.close() : null);

  //open modal
  open() {
    this._popup.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  //close modal
  close() {
    this._popup.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  //sets event listeners
  setEventListeners() {
    this._popup.addEventListener("mousedown", (e) => {
      if (
        e.target.classList.contains("modal") ||
        e.target.classList.contains("modal__close")
      ) {
        this.close();
      }
    });
  }
}
