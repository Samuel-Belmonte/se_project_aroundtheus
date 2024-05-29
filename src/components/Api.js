export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  /* ------------------------------- User Routes ------------------------------ */
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateAvatar() {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  /* ------------------------------- Card Routes ------------------------------ */
  getInitalCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addCard() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteCard() {
    return fetch(`${this._baseUrl}/cards/:cardId`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  likeCard() {
    return fetch(`${this._baseUrl}/cards/:cardId/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  dislikeCard() {
    return fetch(`${this._baseUrl}/cards/:cardId/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}
