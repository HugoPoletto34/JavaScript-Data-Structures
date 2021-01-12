import Stack from './stack.js'

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
for(let i = 0; i < 20; i++) {
    console.log(i + ": " + decimalToBinary(i))

}
