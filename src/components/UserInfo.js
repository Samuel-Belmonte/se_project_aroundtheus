export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  //returns an object containing information about the user
  getUserInfo() {
    return {
      title: this._name.textContent,
      description: this._job.textContent,
    };
  }

  //takes new user data and adds it to the page
  setUserInfo({ title, description }) {
    this._name.textContent = title;
    this._job.textContent = description;
  }
}
