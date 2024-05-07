import { Counter } from "./../models/counter.js";
import { Notifier } from "./../pattern/notifier.js";

export class Controller extends Notifier{
    #counter;

    constructor(){
        super();
        this.#counter = new Counter();
    }

    incrementCounter(){
        this.#counter.incrementCounter();
        this.notify();
    }

    decrementCounter(){
        this.#counter.decrementCounter();
        this.notify();
    }

    getCounterValue(){
        return this.#counter.value;
    }
}