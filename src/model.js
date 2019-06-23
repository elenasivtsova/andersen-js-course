import { EventEmitter } from './helpers';

class Model extends EventEmitter {
  constructor(items = []) {
    super();

    this.items = items;
  }

  getItem(id) {
    return this.items.find(item => item.id == id);
  }

  addItem(item) {
    this.items.push(item);
    this.emit('change', this.items);
    return item;
  }

  addItemRecipes(item) {
    this.items.push(item);
    this.emit('change', this.items);
    return item;
  }
}

export default Model;
