import Deque from './myWorks/Fila/fila-dupla.js'
import Queue from './myWorks/Fila/fila.js'
import Stack from './myWorks/Pilha/stack.js'
import { LinkedList } from './myWorks/Lista/lista-encadeada.js'
import SortedLinkedList from './myWorks/Lista/lista-ordenada-encadeada.js'

function MainSortedLinkedList () {
    const lista = new SortedLinkedList();
    lista.insereNaPosicao(4);
    lista.insereNaPosicao(3);
    lista.insereNaPosicao(2);
    lista.insereNaPosicao(1);

    console.log(lista.imprime());

    lista.removeElemento(2)

    console.log(lista.imprime());
}
// MainSortedLinkedList();


// Chamada da classe Lista Encadeada
function MainLinkedList () {
    const lista = new LinkedList();
    console.log("Inserindo no Fim : 1, 2, 3, 4")
    lista.insereFim(1)
    lista.insereFim(2)
    lista.insereFim(3)
    lista.insereFim(4)

    console.log("Inserindo 8 na posição 3")
    lista.insereNaPosicao(8, 3)
    console.log("Depois da inserção: " + lista.imprime())

    console.log("Inserindo 5 na posição 0")
    lista.insereNaPosicao(5, 0)
    console.log("Depois da inserção: " + lista.imprime())

    console.log("Inserindo 7 na posição 2")
    lista.insereNaPosicao(7, 2)
    console.log("Depois da inserção: " + lista.imprime())

    console.log("Inserindo 6 na posição 1")
    lista.insereNaPosicao(6, 1)
    console.log("Depois da inserção: " + lista.imprime())

    console.log("Removendo elemento 1")
    lista.removeElemento(1)
    console.log("Depois da remoção: " + lista.imprime())

    console.log("Removendo elemento 4")
    lista.removeElemento(4)
    console.log("Depois da remoção: " + lista.imprime())

    console.log("Removendo elemento 3")
    lista.removeElemento(3)
    console.log("Depois da remoção: " + lista.imprime())

    console.log(lista.imprime());
}
// MainLinkedList();

// Verificador de palavras palíndromas usando a classe fila dupla
function palindromeCheck (aString) {
    if(aString === undefined  || aString === null || (aString !== null && aString.length === 0))
        return false;
    const deque = new Deque();
    const strLower = aString.toLocaleLowerCase().split(' ').join('');
    let lastChar, firstChar;
    let isPalindrome = true;

    for(let i = 0; i < strLower.length; i++) 
        deque.insereElementoNoFim(strLower.charAt(i));

    while (deque.size() > 1 && isPalindrome) {
        firstChar = deque.removeElementoNaFrente();
        lastChar = deque.removeElementoNoFim();

        if(firstChar !== lastChar)
            isPalindrome = false;
    }
    return isPalindrome;
}
/*
console.log("arara: " + palindromeCheck('arara'))
console.log("kayak: " + palindromeCheck('kayak'))
console.log("was it a car or a cat I saw: " + palindromeCheck('was it a car or a cat I saw'))
console.log("Step on no pets: " + palindromeCheck("Step on no pets"))
console.log("pizza: " + palindromeCheck('pizza'))
*/


// Jogo Batata Quente usando a classe fila simples
function hotPotato(elementsList = names, num) {
    const queue = new Queue();

    const elimidatedList = [];
    for(let i = 0; i < elementsList.length; i++) 
        queue.insereElemento(elementsList[i])

    while(queue.size() > 1) {
        for(let i = 0; i < num; i++)
            queue.insereElemento(queue.removeElemento());
        elimidatedList.push(queue.removeElemento());
    }

    return {
        eliminated: elimidatedList,
        winner: queue.removeElemento()
    }
}
/*
const names = ['John', 'jack', 'Camila', 'Ingrid', 'Carl'] 
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
    console.log(`${name} was eliminated`)
})
console.log("The winner was: " + result.winner);
*/

/* Conversor de Base usando classe Pilha */
function baseConverter (decNumber, base) {
    
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decNumber;
    let rem;
    let baseString = '';
    if(!(base >= 2 && base <= 36)) {
        return '';
    }
    while(number > 0) {
        rem = Math.floor(number % base);
        remStack.insereElemento(rem);
        number = Math.floor(number / base);
    }
    while(! remStack.isEmpty()){
        baseString += digits[remStack.removeElemento()]
    }
    return baseString;
}
// console.log(baseConverter(100345, 35))

/* Conversor de Base decimal para binário usando classe Pilha */
function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while (number > 0){
        rem = Math.floor(number % 2);
        remStack.insereElemento(rem);
        number = Math.floor(number / 2);
    }
    while(!remStack.isEmpty()){
        binaryString += remStack.removeElemento()
    }
    return binaryString;

}
// for(let i = 0; i < 20; i++) console.log(i + ": " + decimalToBinary(i))

/* Chamada da classe fila dupla */
function MainDeque() {
    const deque = new Deque();
    console.log(deque.isEmpty());
    deque.insereElementoNoFim('John')
    deque.insereElementoNoFim('Jack')
    console.log(deque.imprime());
    deque.insereElementoNoFim('Camila')
    console.log(deque.imprime());
    console.log(deque.size());
    console.log(deque.isEmpty());
    console.log(deque.imprime());    
    console.log("Removido Frente: " + deque.removeElementoNaFrente());
    console.log(deque.imprime());
    console.log("Removido Trás: " + deque.removeElementoNoFim());
    console.log(deque.imprime());
    console.log("John retorna para pedir informação: ")
    deque.insereElementoNaFrente('John');
    console.log(deque.imprime());
}
