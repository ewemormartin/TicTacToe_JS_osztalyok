import Elem  from "./Elem.js";




export default class Jatekter{
    #aktElem="X";
    #lista=[" ", " ", " ",  " ", " ", " ", " " ," "," "];
    constructor(){
        this.#megjelenit();
    }
    #megjelenit(){

        this.#lista.forEach((elem,index)=>{
            new Elem(elem,$(".jatekter"));
        });
    }
}