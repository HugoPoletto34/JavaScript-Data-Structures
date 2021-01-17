import { LinkedList } from './lista-encadeada.js'

const Compare = {
    LESS_THAN : -1,
    BIGGER_THAN : 1
};

function defaultCompare (a, b) {
    if (a === b)
        return 0;
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
} 

export default class SortedLinkedList extends LinkedList{
    constructor (compareFn = defaultCompare) {
        super();
        this.compareFn = compareFn;
    }

    insereNaPosicao (element, index = 0) {
        if (this.estaVazio())
            return super.insereNaPosicao(element, 0)
        const pos = this.getIndexNextSortedElement(element);
        return super.insereNaPosicao(element, pos)
    }

    getIndexNextSortedElement (element) {
        let current = this.head;
        
        for (var i = 0; i < this.tam() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if (comp === Compare.LESS_THAN)
                return i;
            current = current.next;
        }
        return i;
    }
}