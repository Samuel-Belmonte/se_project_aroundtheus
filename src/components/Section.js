export default class Section {
  constructor({ items, renderer }, cardSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardSelector);
  }

  //renders all elements on the page
  renderItems() {
    this._items.forEach((item) => {
      const cardElement = this._renderer(item);
      this._container.append(cardElement);
    });
  }

  //takes a DOM element and adds it to the container
  addItem() {
    this._container.prepend();
  }
}
