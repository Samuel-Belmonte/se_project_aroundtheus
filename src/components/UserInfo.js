export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
  }

  //returns an object containing information about the user
  getUserInfo() {
    return {
      title: this._nameSelector.textContent,
      description: this._jobSelector.textContent,
    };
  }

  //takes new user data and adds it to the page
  setUserInfo({ title, description }) {
    this._nameSelector.textContent = title;
    this._jobSelector.textContent = description;
  }
}
