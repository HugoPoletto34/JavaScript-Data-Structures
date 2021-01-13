import Deque from './myWorks/Fila/fila-dupla.js'
import Queue from './myWorks/Fila/fila.js'
import Stack from './myWorks/Pilha/stack.js'

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
