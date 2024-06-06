export default class Card {
  constructor(
    { name, link, isLiked, _id },
    cardSelector,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._name = name;
    this._link = link;
    this._isLiked = isLiked;
    this._id = _id;

    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  /* -------------------------------------------------------------------------- */
  /*                               event listeners                              */
  /* -------------------------------------------------------------------------- */

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick({
          name: this._name,
          link: this._link,
        });
      });

    //.card__like-button
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeClick(this);
      });

    //.card__delete-button
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteClick(this);
      });
  }

  /* -------------------------------------------------------------------------- */
  /*                                  handlers                                  */
  /* -------------------------------------------------------------------------- */

  //delete function
  handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  //like function
  // handleLikeIcon() {
  //   this._cardElement
  //     .querySelector(".card__like-button")
  //     .classList.toggle("card__like-button_active");
  // }

  setIsLiked(isLiked) {
    this._isLiked = isLiked;
    this._renderLikes();
  }

  isLiked() {
    return this._isLiked;
  }

  _renderLikes() {
    if (this._isLiked) {
      this._cardElement
        .querySelector(".card__like-button")
        .classList.add("card__like-button_active");
    } else {
      this._cardElement
        .querySelector(".card__like-button")
        .classList.remove("card__like-button_active");
    }
  }

  createCard() {
    this._renderLikes();
  }

  //function to render the cards
  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    //set src
    this._cardElement
      .querySelector(".card__image")
      .setAttribute("src", this._link);

    //set alt
    this._cardElement
      .querySelector(".card__image")
      .setAttribute("alt", this._name);

    //set description
    this._cardElement.querySelector(".card__title").textContent = this._name;

    if (this._isLiked === true) {
      this._cardElement
        .querySelector(".card__like-button")
        .classList.add("card__like-button_active");
    } else {
      this._cardElement
        .querySelector(".card__like-button")
        .classList.remove("card__like-button_active");
    }

    //set event listeners
    this._setEventListeners();

    //return the card
    return this._cardElement;
  }
}
