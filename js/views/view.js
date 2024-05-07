import { Observer } from "./../pattern/observer.js";

export class View extends Observer{
    #controller;

    constructor(controller){
        super();
        this.#controller = controller;
        controller.addObserver(this);
        this.#addEventOnIncrementButton();
        this.#addEventOnDecrementButton();

    }

    #addEventOnIncrementButton(){
        const incrementButton = document.querySelector("#btn-increment");
        incrementButton.addEventListener("click", (event) => {
            this.#controller.incrementCounter();
        });
    }

    #addEventOnDecrementButton(){
        const decrement = document.querySelector("#btn-decrement");
        decrement.addEventListener("click", (event) => {
            this.#controller.decrementCounter();
        });
    }

    notify(){
        const counterElement = document.querySelector("#txt-counter");
        counterElement.innerHTML = this.#controller.getCounterValue(); 
    }
}