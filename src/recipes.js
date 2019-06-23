class Recipes {
  constructor(name, ...arrProducts) {
    this.name = name;
    this.arrProducts = arrProducts;
  }
}

export function getObjectRecipes() {
  const obj1 = new Recipes('Шоколадный чай', 'Чай', 'Шоколад');
  const obj2 = new Recipes('Английский чай', 'Чай', 'Молоко');

  return [obj1, obj2];
}

export { Recipes };
