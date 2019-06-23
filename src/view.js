import { EventEmitter, createElement } from './helpers';
import { getArrProducts } from './helpers';
import { Recipes, getObjectRecipes } from './recipes';

class View extends EventEmitter {
  constructor() {
    super();

    // Массив существующих рецептов
    this.arrObjects = getObjectRecipes();

    // Форма добавления ингредиента
    this.form = document.getElementById('todo-form');
    this.input = document.getElementById('add-input');
    this.list = document.getElementById('div1');

    this.form.addEventListener(
      'submit', 
      this.handleAdd.bind(this)
      );

    // Форма Форма добавления блюда
    this.form2 = document.getElementById('todo-form2');
    this.form2.addEventListener(
      'submit', 
      this.handleAddRecipe.bind(this)
      );

    // Форма добавления рецепта
    this.form3 = document.getElementById('todo-form3');
    this.inputRecipes = document.getElementById('add-input3');

    this.list3 = document.getElementById('div3');

    this.form3.addEventListener(
      'submit',
      this.handleAddRecipeObject.bind(this)
    );
  }

  // Создание ингридиентов
  createListItem(todo) {
    const label = createElement('label', { className: 'title' }, todo.title);
    const item = createElement('a', { draggable: 'true', id: todo.id }, label);

    return item;
  }

  // Создание рецептов
  createListItemRecipes(todo) {
    const arrProductsNew = getArrProducts();
    var allProductsName = arrProductsNew.join(', ');

    const inputRecipes = createElement('input', {
      type: 'radio',
      id: todo.id,
      name: 'tab-group'
    });
    const label = createElement(
      'label',
      { className: 'tab-title', for: todo.id },
      todo.title
    );

    const section = createElement(
      'section',
      { className: 'tab-content' },
      allProductsName
    );
    const item = createElement(
      'div',
      { className: 'tab' },
      inputRecipes,
      label,
      section
    );

    return item;
  }

  handleAddRecipe(event) {
    event.preventDefault();
    const arrProductsNew = getArrProducts();

    if (arrProductsNew.length == 0) {
      alert('Ваш стол крафтинга пуст!');
    } else {
      var trueRecipe = false;

      this.arrObjects.forEach(obj => {
        if (
          JSON.stringify(obj.arrProducts.sort()) ==
          JSON.stringify(arrProductsNew)
        ) {
          const value = obj.name;
          this.emit('add', value);
          trueRecipe = true;
          return;
        }
      });
      if (!trueRecipe) {
        alert('Нет такого рецепта!');
      }
    }
  }

  handleAddRecipeObject(event) {
    event.preventDefault();

    if (!this.inputRecipes.value) {
      return alert('Введите название рецепта!');
    }

    if (getArrProducts().length == 0) {
      return alert('На столе крафтинга нет продуктов, чтобы добавить новый рецепт!');
    }

    const value = this.inputRecipes.value;

    this.emit('addRecipes', value);
  }

  handleAdd(event) {
    event.preventDefault();

    if (!this.input.value) {
      return alert('Введите название ингредиента!');
    }

    const value = this.input.value;

    this.emit('add', value);
  }

  show(todos) {
    todos.forEach(todo => {
      const listItem = this.createListItem(todo);

      this.list.appendChild(listItem);
    });

    todos.forEach(todo => {
      const listItem = this.createListItemRecipes(todo);

      this.list3.appendChild(listItem);
    });
  }

  showRecipes(todos) {
    todos.forEach(todo => {
      const listItem = this.createListItemRecipes(todo);

      this.list3.appendChild(listItem);
    });
  }

  // Добавление ингредиента
  addItem(todo) {
    const listItem = this.createListItem(todo);

    this.input.value = '';
    this.list.appendChild(listItem);
  }

  // Добавление рецепта
  addItemRecipes(todo) {
    const listItem = this.createListItemRecipes(todo);

    var checkRecipes = false;
    this.arrObjects.forEach(obj => {
      if (
        JSON.stringify(obj.arrProducts.sort()) ==
        JSON.stringify(getArrProducts())
      ) {
        checkRecipes = true;
        return alert('Рецепт с такими ингридиентами уже есть!');
      }
    });

    this.arrObjects.forEach(obj => {
      if (!checkRecipes && obj.name == this.inputRecipes.value) {
        checkRecipes = true;
        return alert('Рецепт с таким названием уже есть!');
      }
    });

    if (!checkRecipes) {
      const obj = new Recipes(this.inputRecipes.value, ...getArrProducts());
      this.arrObjects.push(obj);

      this.inputRecipes.value = '';
      this.list3.appendChild(listItem);
    }
  }
}

export default View;
