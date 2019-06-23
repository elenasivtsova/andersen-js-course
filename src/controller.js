class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Подписка на добавление ингредиентов
    view.on('add', this.addTodo.bind(this));
    // Подписка на добавление рецептов
    view.on('addRecipes', this.addTodoRecipes.bind(this));

    view.show(model.items);
    view.showRecipes(model.items);
  }

  addTodo(title) {
    const item = this.model.addItem({
      id: Date.now(),
      title,
      completed: false
    });

    this.view.addItem(item);
  }
  addTodoRecipes(title) {
    const item = this.model.addItemRecipes({
      id: Date.now(),
      title,
      completed: false
    });

    this.view.addItemRecipes(item);
  }
}

export default Controller;
