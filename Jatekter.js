import Elem  from "./Elem.js";




export default class Jatekter{
    #aktElem="X";
    #lista=[" ", " ", " ",  " ", " ", " ", " " ," "," "];
    constructor(){
        this.#megjelenit();

        $(window).on("lepes",(event)=>{
            console.log(event.detail);
            let id=event.detail;
            this.#beallit(id);
        })
    }
    #beallit(){
        this.#lista[id]=this.#aktElem;
        /* if (this.#aktElem == "X"){this.#aktElem ="O"} {

            
        } */
        this.#aktElem=== "X"?this.#aktElem="O":this.#aktElem="X";
        this.#megjelenit();
    }
    #megjelenit(){

        this.#lista.forEach((elem,index)=>{
            new Elem(elem,$(".jatekter"));
        });
    }
}