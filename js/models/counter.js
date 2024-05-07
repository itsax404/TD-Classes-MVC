export class Counter {
    #value;

    constructor(){
        this.#value = 0;
    }
   
    incrementCounter(){
        this.#value += 1;
    }

    decrementCounter(){
        this.#value -= 1;
    }

    get value() { return this.#value;}
}