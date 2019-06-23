import {drag, drop, allowDrow} from './drag';

function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => {

    element.addEventListener("dragstart", drag);

    if (key.startsWith('for')) {
        element.setAttribute(key, props[key]);
    } else {
        element[key] = props[key];
    }
    });

    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }

        element.appendChild(child);
    });

    return element;
}


// drag and drop

var arr = [];
function allowDrow(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("content", ev.target.textContent);
}

function drop(ev, block) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var content = ev.dataTransfer.getData("content");
    if(block.id == "div2"){
        arr.push(content);
    }
        
    if(block.id == "div1"){   
        arr.splice(arr.indexOf(content), 1);  
    }

    block.appendChild(document.getElementById(data));
}

document.getElementById('drag-1').addEventListener("dragstart", drag);
document.getElementById('drag-2').addEventListener("dragstart", drag);
document.getElementById('drag-3').addEventListener("dragstart", drag);

document.getElementById('div1').addEventListener("drop", function(e){
    drop(e, this);
});
document.getElementById('div2').addEventListener("drop", function(e){
    drop(e, this);
});

document.getElementById('div1').addEventListener("dragover", allowDrow);
document.getElementById('div2').addEventListener("dragover", allowDrow);


//Получить список продуктов на столе
function getArrProducts(){
    return arr.sort();
}


class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    emit(type, arg) {
        if (this.events[type]) {
            this.events[type].forEach(listener => listener(arg));
        }
    }
}

export { createElement, EventEmitter, getArrProducts};