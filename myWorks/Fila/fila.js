export default class Fila {

    constructor() {
        this.items = [];
        this.qtde = 0;
        this.lowestCount = 0;
    }

    insereElemento(element) {
        this.items[this.qtde] = element;
        this.qtde++;
    }

    removeElemento () {
        if(this.isEmpty()){
            return undefined;
        }
        const elementoRemovido = this.items[this.lowestCount];
        delete this.items[this.lowestCount]
        this.lowestCount++;
        return elementoRemovido;
    }

    peek() {
        return this.items[this.lowestCount]
    }

    isEmpty () {
        return this.size() == 0;
    }

    clear() {
        this.items = [];
        this.qtde = 0;
        this.lowestCount = 0;
    }

    size () {
        return this.qtde - this.lowestCount;
    }

    imprime() {
        if(this.isEmpty()){
            return '';
        }
        let objString = `[ ${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i < this.qtde; i++)
            objString = `${objString}, ${this.items[i]}`;
        return objString + " ]";      
    }
}

