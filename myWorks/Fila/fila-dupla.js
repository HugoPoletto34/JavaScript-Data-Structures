export default class Deque {

    constructor() {
        this.items = [];
        this.qtde = 0;
        this.lowestCount = 0;
    }

    insereElementoNaFrente(element) {
        if(this.isEmpty())
            this.insereElementoNoFim(element)
        else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        }
        else {
            for(let i = this.qtde; i > 0; i++) 
                this.items[i] = this.items[i - 1]
            this.qtde++;
            this.lowestCount = 0;
            this.items[0] = element;
            
        }
    }

    insereElementoNoFim(element) {
        this.items[this.qtde] = element;
        this.qtde++;
    }

    removeElementoNaFrente () {
        if(this.isEmpty()){
            return undefined;
        }
        const elementoRemovido = this.items[this.lowestCount];
        delete this.items[this.lowestCount]
        this.lowestCount++;
        return elementoRemovido;
    }

    removeElementoNoFim () {
        if(this.isEmpty()){
            return undefined;
        }
        const elementoRemovido = this.items[this.qtde - 1];
        delete this.items[this.qtde - 1]
        this.qtde--;
        return elementoRemovido;
    }

    peekFront() {
        return this.items[this.lowestCount]
    }

    peekBack() {
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


