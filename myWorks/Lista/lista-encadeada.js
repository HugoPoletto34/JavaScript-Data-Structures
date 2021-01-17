export class LinkedList {
    constructor() {
        this.head = undefined;
        this.count = 0;
    }

    insereFim(element) {
        const novoNo = new Node(element);
        if (this.head === undefined)
            this.head = novoNo;
        else {
            for (var apont = this.head; apont.next !== undefined; apont = apont.next) { }
            apont.next = novoNo;
        }
        this.count++;
    }

    insereNaPosicao(element, index) {
        if (this.count >= index && index >= 0) {
            const novoNo = new Node(element);
            if (index == 0) {

                novoNo.next = this.head;
                this.head = novoNo;
            }
            else {
                const previous = this.getElementoEm(index - 1);
                const current = previous.next;
                novoNo.next = current;
                previous.next = novoNo;
            }
            this.count++;
        }

    }

    getElementoEm(index) {
        if (this.count >= index && index >= 0) {
            var apont = this.head;
            for (let i = 0; i < index && apont != null; i++, apont = apont.next) { }
            return apont;
        }
        return undefined
    }

    removeElemento(element) {
        for (var temp = this.head, i = 0; temp.element != element; temp = temp.next, i++) { }
        const previous = this.getElementoEm(i - 1);
        previous.next = temp.next;
        this.count--;
    }

    indexDe(element) {
        for (var temp = this.head, i = 0; temp.element != element; temp = temp.next, i++) { }
        return i;
    }

    removaEm(position) {
        for (var i = 0, temp = this.head; i < position; i++, temp = temp.next) { }
        this.removeElemento(temp.element);
    }

    estaVazio() {
        return this.count == 0;
    }

    tam() {
        return this.count;
    }

    getCabeca() {
        return this.head;
    }

    imprime() {
        if(this.estaVazio()){
            return 'Lista vazia.';
        }
        let objString = `[`;
        for(let obj = this.head, i = 0; i < this.count; i++, obj = obj.next){
            objString += ` ${obj.element}`;
            if(i + 1 < this.count)
                objString += ','
        }
        return objString + " ]";      
    }
}

export class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}
