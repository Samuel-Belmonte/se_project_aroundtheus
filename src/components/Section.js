export default class Section {
  constructor({ items, renderer }, cardSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardSelector);
  }

  //renders all elements on the page
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  //takes a DOM element and adds it to the container
  addItem(item) {
    this._container.prepend(item);
  }
}
