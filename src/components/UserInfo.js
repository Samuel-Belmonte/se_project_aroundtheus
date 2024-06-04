export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  //returns an object containing information about the user
  getUserInfo() {
    return {
      title: this._name.textContent,
      description: this._job.textContent,
      avatar: this._avatar.src,
    };
  }

  //takes new user data and adds it to the page
  setUserInfo({ name, about }) {
    this._name.textContent = name;
    this._job.textContent = about;
  }

  setUserAvatar(link) {
    this._avatar.src = link;
  }
}
