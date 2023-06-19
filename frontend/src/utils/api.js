export default class Api {
  constructor(baseUrl, token) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  _getHeaders() {
    return {
      authorization: this._token,
      "Content-Type": "application/json",
    };
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  createNewCard(item) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify(item),
    }).then(this._getJson);
  }

  getCurrentUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._getJson);
  }

  setUserAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._getJson);
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  putLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  changeLikeCardStatus(id, isLiked) {
    return !isLiked ? this.deleteLike(id) : this.putLike(id);
  }
}

export const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-61",
  "666d34ff-30b6-4309-9a25-485bb128c35e"
);
