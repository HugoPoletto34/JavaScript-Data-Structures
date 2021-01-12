MainDeque();
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