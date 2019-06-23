import { EventEmitter, createElement } from './helpers';
import {getArrProducts} from './helpers';
import {Recipes, getObjectRecipes} from './recipes'

class View extends EventEmitter {
    constructor() {
        super();

        this.arrObjects = getObjectRecipes();

        this.form = document.getElementById('todo-form');
        this.input = document.getElementById('add-input');
        this.list = document.getElementById('div1');

        this.form.addEventListener('submit', this.handleAdd.bind(this));

        this.form2 = document.getElementById('todo-form2');
        this.form2.addEventListener('submit', this.handleaddRecipe.bind(this));

 
        this.form3 = document.getElementById('todo-form3');
        this.inputRecipes = document.getElementById('add-input3');

        this.list3 = document.getElementById('div3');

        this.form3.addEventListener('submit', this.handleaddRecipeObject.bind(this));
    }

    createListItem(todo) {
        const label = createElement('label', { className: 'title' }, todo.title);
        const item = createElement('a', {draggable: 'true', id: todo.id }, label);

        return item;
    }

    createListItemRecipes(todo) {
        const arrProductsNew = getArrProducts();
        var allProductsName = arrProductsNew.join(', ');
        
        const inputRecipes = createElement('input', { type: 'radio', id: todo.id, name:"tab-group"});        
        const label = createElement('label', { className: 'tab-title' , 'for': todo.id}, todo.title);

        const section = createElement('section', { className: 'tab-content' }, allProductsName);
        const item = createElement('div', {className: 'tab' }, inputRecipes, label, section);

        return item;
    }

    handleaddRecipe(event){
        event.preventDefault();
        const arrProductsNew = getArrProducts();
       
        if (arrProductsNew.length == 0){
            alert('Ваш стол пуст!');
        } else{
        var trueRecipe = false;

        this.arrObjects.forEach(obj => {
            if (JSON.stringify(obj.arrProducts.sort()) == JSON.stringify(arrProductsNew)){
                
                const value = obj.name;
                this.emit('add', value);
                trueRecipe = true;
                return;
            }
        });
            if (!trueRecipe){
                alert('Нет такого рецепта!');
            }
        }
    }

    handleaddRecipeObject(event){
        event.preventDefault();

        if (!this.inputRecipes.value) {
            return alert('Необходимо заполнить название рецепта!');
        }
        
        if (getArrProducts().length == 0){
            
            return alert('На столе нет продуктов, чтобы добавить новый рецепт!');
        }
    
        const value = this.inputRecipes.value;

        this.emit('addRecipes', value);
    }

    handleAdd(event) {
        event.preventDefault();

        if (!this.input.value) {
            return alert('Необходимо ввести имя продукта!');
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

    show3(todos) {
        todos.forEach(todo => {
            const listItem = this.createListItemRecipes(todo);

            this.list3.appendChild(listItem);
        });
    }

    addItem(todo) {
        const listItem = this.createListItem(todo);

        this.input.value = '';
        this.list.appendChild(listItem);
    }

    addItemRecipes(todo) {
        const listItem = this.createListItemRecipes(todo);


        var checkRecipes = false;
        this.arrObjects.forEach(obj => {
            if (JSON.stringify(obj.arrProducts.sort()) == JSON.stringify(getArrProducts())){
                checkRecipes = true;
                return alert('Блюдо с такими ингридиентами уже есть!'); 
            } 

        });

        this.arrObjects.forEach(obj => {
        if (!checkRecipes && obj.name == this.inputRecipes.value) {
            checkRecipes = true;
            return alert('Блюдо с таким именем уже есть!'); 
            
        }
    });

        if (!checkRecipes){
            const obj = new Recipes(this.inputRecipes.value, ...getArrProducts()); 
            this.arrObjects.push(obj);
        
            this.inputRecipes.value = '';
            this.list3.appendChild(listItem);
        }
    }
}

export default View;