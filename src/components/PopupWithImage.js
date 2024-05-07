//import Popup class
import Popup from "./Popup";

export default class PopUpWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    //selects the current modal image
    this._popupImage = document.querySelector(".modal__preview-image");
    //selects the current modal title
    this._popupTitle = document.querySelector(".modal__preview-title");
  }

  open(data) {
    //sets modal src
    this._popupImage.src = data.link;
    //sets modal alt
    this._popupImage.alt = data.name;
    //sets modal title
    this._popupTitle.textContent = data.name;
    super.open();
  }
}
