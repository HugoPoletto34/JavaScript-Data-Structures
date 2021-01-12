export default class Stack {

    constructor() {
        this.items = [];
        this.qtde = 0;
    }

    imprime() {
        if(this.isEmpty()){
            return '';
        }
        let objString = `[ ${this.items[0]}`;
        for(let i = 1; i < this.qtde; i++)
            objString = `${objString}, ${this.items[i]}`;
        return objString + " ]";      
    }
    insereElemento(element) {
        this.items[this.qtde] = element;
        this.qtde++;
    }

    removeElemento () {
        if(this.isEmpty()){
            return undefined;
        }
        const elementoRemovido = this.items[this.qtde - 1];
        delete this.items[this.qtde]
        this.qtde--;
        return elementoRemovido;
    }

    peek() {
        return this.items[this.qtde - 1]
    }

    isEmpty () {
        return this.qtde == 0;
    }

    clear() {
        this.items = [];
        this.qtde = 0;
    }

    size () {
        return this.qtde;
    }
}

