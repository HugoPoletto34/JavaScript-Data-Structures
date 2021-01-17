import { DoublyNode, DoublyLinkedList } from "./lista-duplamente-encadeada.js"

export class CircularDoublyLinkedList extends DoublyLinkedList {
    constructor () {
        super();
    }

    insereNaPosicao (element, index) {
        if (this.count >= index && index >= 0) {
            const novoNo = new DoublyNode(element);
            const atual = this.head;
            if(index == 0){
                if(this.head == undefined) {
                    this.head = novoNo;
                    novoNo.next = this.head;
                    novoNo.prev = this.head;
                    this.tail = novoNo;
                }
                else {
                    atual.prev = novoNo;
                    novoNo.next = atual;
                    atual = this.getElementoEm(this.tam())
                    this.head = novoNo;
                    atual.next = this.head;
                    this.head.prev = atual;
                }
            }
            else if (index === this.count) {
                atual = this.getElementoEm(index);
                atual.next = novoNo;
                novoNo.next = this.head;
                this.tail = novoNo;
            }
            else {
                const previous = this.getElementoEm(index - 1);
                novoNo.next = previous.next;
                previous.next = novoNo;
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
                    this.head = undefined;
                else{
                    const removido = this.head;
                    atual = this.getElementoEm(this.tam());
                    this.head = this.head.next;
                    atual.next = this.head;
                    current = removido;
                }
            }
            else {
                const previous = this.getElementoEm(index - 1);
                atual = previous.next;
                previous.next = atual.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}