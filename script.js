// operators
function add(a, b) {return a + b};
function subtract(a, b) {return a - b};
function multiply(a, b) {return a * b};
// perhaps functionality could be added for division by 0
function divide(a, b) {
    return a / b;
}

function operate(operation, a, b) {
    if (operation == 'add') {
        return add(a, b);
    } else if (operation == 'subtract') {
        return subtract(a, b);
    } else if (operation == 'multiply') {
        return multiply(a, b);
    } else {
        return divide(a, b);
    }
}

console.log(operate('add', 1, 2));
console.log(operate('subtract', 3, 4));
console.log(operate('multiply', 3, 4));
console.log(operate('divide',6, 2));