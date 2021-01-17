import { Node, LinkedList } from "./lista-encadeada.js"

export class DoublyLinkedList extends LinkedList{
    constructor() {
        super();
        this.tail = undefined;
    }

    insereNaPosicao (element, index) {
        if (this.count >= index && index >= 0) {
            const novoNo = new DoublyNode(element);
            const atual = this.head;
            if(index == 0){
                if(this.head == undefined) {
                    this.head = novoNo;
                    this.tail = novoNo;
                }
                else {
                    novoNo.next = this.head;
                    atual.prev = novoNo;
                    this.head = novoNo.element;
                }
            }
            else if (index == this.count) {
                atual = this.tail;
                atual.next = novoNo;
                novoNo.prev = atual;
            }
            else {
                const previous = this.getElementoEm(index - 1);
                current = previous.next;

                previous.next = novoNo;
                novoNo.next = current;
                current.prev = node;
                node.prev = previous;
            }
            this.count++;
        }
    }

    removaEm (index) {
        if (this.count >= index && index >= 0) {
            let atual = this.head;
            if(index === 0){
                this.head = atual.next;
                if(this.count == 1)
                    this.tail = undefined;
                else
                    this.head.prev = undefined;
            }
            else if(index == this.count - 1) {
                atual = this.tail;
                this.tail = atual.prev;
                this.tail.next = undefined;
            }
            else {
                atual = this.getElementoEm(index);
                const previous = atual.prev;
                previous.next = atual.next;
                atual.next.prev = previous;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    getElementoEm () {

    }
}

export class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}