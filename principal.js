/* Chamada da classe fila dupla */
function MainDeque() {
    import Deque from './myWorks/Fila/fila-dupla.js'
    
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

/* Conversor de Base usando classe Pilha */
function baseConverter (decNumber, base) {
    import Stack from './myWorks/Pilha/stack.js'
    
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
    import Stack from './myWorks/Pilha/stack.js'
    
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