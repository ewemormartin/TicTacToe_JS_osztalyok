export default class Elem{
    #ertek="";
    #szuloElem;
    #divElem;
    #id = 0;
    constructor(ertek,szuloElem){
        this.#ertek = ertek;
        this.#szuloElem = szuloElem;
        this.megjelenit();

        this.#divElem = this.#szuloElem.children("div:last-child");
        console.log(this.#divElem);
        this.#divElem.on("click",()=>{
            console.log(this.#id);
            this.#trigger("lepes");
        })
    }
    megjelenit(){
        let txt =`<div><p>${this.#ertek}</p></div>`;
        this.#szuloElem.append(txt);
    }
    #trigger(esemenynev){
        const e= new CustomElement(esemenynev,{detail:this.#id});
        window.dispatchEvent(e);
    }
}

/* A this function nevtelen fuggvenyen belul hasznalva arra az elemre mutat 
    amelyik az eseményt kiváltotta, nyíl fugveny esetén pedig az objektum példányra fog mutatni */

/* Az osztály ugy tud informáciot adni magárol egy adott esemény bekovetkeztekor hogy létrehozunk egy saját 
eseményt amire egy másik osztály fel tud iratkozni
 */

