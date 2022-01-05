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

// display values
const displayValue = document.querySelector(`#output`);

// TO IMPLEMENT - run function to ensure window stays within size

// adding numbers to display like how a calculator does it
function appendToDisplay(e) {
    switch(e.id) {
        case 'zero':
            (displayValue.textContent != '0' && !isNewValue) ? displayValue.textContent += '0': displayValue.textContent = '0';
            break;
        case 'one':
            (displayValue.textContent != '0' && !isNewValue) ? displayValue.textContent += '1': displayValue.textContent = '1';
            break;
        case 'two':
            (displayValue.textContent != '0' && !isNewValue) ? displayValue.textContent += '2': displayValue.textContent = '2';
            break;
        case 'three':
            (displayValue.textContent != '0' && !isNewValue) ? displayValue.textContent += '3': displayValue.textContent = '3';
            break;  
        case 'four':
            (displayValue.textContent != '0' && !isNewValue) ? displayValue.textContent += '4': displayValue.textContent = '4';
            break;
        case 'five':
            (displayValue.textContent != '0' && !isNewValue) ? displayValue.textContent += '5': displayValue.textContent = '5';
            break;  
        case 'six':
            (displayValue.textContent != '0' && !isNewValue) ? displayValue.textContent += '6': displayValue.textContent = '6';
            break;
        case 'seven':
            (displayValue.textContent != '0' && !isNewValue) ? displayValue.textContent += '7': displayValue.textContent = '7';
            break;
        case 'eight':
            (displayValue.textContent != '0' && !isNewValue) ? displayValue.textContent += '8': displayValue.textContent = '8';
            break;
        case 'nine':
            (displayValue.textContent != '0' && !isNewValue) ? displayValue.textContent += '9': displayValue.textContent = '9';
            break;
    }
}

// number button event listeners
// unfortunately, js does not like it when you have numbers
// as ids so i can't just loop through this and do this more efficiently
const buttonZero = document.querySelector(`#zero`);
const buttonOne = document.querySelector(`#one`);
const buttonTwo = document.querySelector(`#two`);
const buttonThree = document.querySelector(`#three`);
const buttonFour = document.querySelector(`#four`);
const buttonFive = document.querySelector(`#five`);
const buttonSix = document.querySelector(`#six`);
const buttonSeven = document.querySelector(`#seven`);
const buttonEight = document.querySelector(`#eight`);
const buttonNine = document.querySelector(`#nine`);


// to add digits to the calculator display
buttonZero.addEventListener('click', (e) => {
    let clicked = document.querySelector('#zero');
    appendToDisplay(clicked);
});
buttonOne.addEventListener('click', (e) => {
    let clicked = document.querySelector('#one');
    appendToDisplay(clicked);
});
buttonTwo.addEventListener('click', (e) => {
    let clicked = document.querySelector('#two');
    appendToDisplay(clicked);
});
buttonThree.addEventListener('click', (e) => {
    let clicked = document.querySelector('#three');
    appendToDisplay(clicked);
});
buttonFour.addEventListener('click', (e) => {
    let clicked = document.querySelector('#four');
    appendToDisplay(clicked);
});
buttonFive.addEventListener('click', (e) => {
    let clicked = document.querySelector('#five');
    appendToDisplay(clicked);
});
buttonSix.addEventListener('click', (e) => {
    let clicked = document.querySelector('#six');
    appendToDisplay(clicked);
});
buttonSeven.addEventListener('click', (e) => {
    let clicked = document.querySelector('#seven');
    appendToDisplay(clicked);
});
buttonEight.addEventListener('click', (e) => {
    let clicked = document.querySelector('#eight');
    appendToDisplay(clicked);
});
buttonNine.addEventListener('click', (e) => {
    let clicked = document.querySelector('#nine');
    appendToDisplay(clicked);
});

// buttons for special operations (clear, sign, percent)
const clearButton = document.querySelector('#clear');
const signButton = document.querySelector('#sign');
const percentButton = document.querySelector('#percent');
const decimalButton = document.querySelector('#decimal')

// event listener for special operations listed above
clearButton.addEventListener('click', () => {displayValue.textContent = '0'; prevValue = 0});
signButton.addEventListener('click',  () => {
    (displayValue.textContent[0] == '-') ? displayValue.textContent = displayValue.textContent.slice(1) : displayValue.textContent = `-${displayValue.textContent}`;
});
percentButton.addEventListener('click', () =>  {displayValue.textContent = `${+(displayValue.textContent) / 100}`});
decimalButton.addEventListener('click', () => displayValue.textContent += '.');

//operators
let operatorActive = false;
let isNewValue = false;
let prevOperation = ' ';
let prevValue = 0;
const addButton = document.querySelector('#add');
const minusButton = document.querySelector('#subtract');
const multButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalButton = document.querySelector('#equal');

function setPrevValues(setPrevOp) {
    operatorActive = true;
    prevValue = +displayValue.textContent;
    prevOperation = setPrevOp;
    isNewValue = true;
}

function displayNewValue(prevOp, nextOp) {
    switch (prevOp) {
        case 'add':
            displayValue.textContent = add(prevValue, +displayValue.textContent)
            break;
        case 'subtract':
            console.table(prevValue, +displayValue.textContent);
            displayValue.textContent = subtract(prevValue, +displayValue.textContent);
            console.log(displayValue.textContent)
            break;
        case 'multiply':
            displayValue.textContent = multiply(prevValue, +displayValue.textContent);
            break;
        case 'divide':
            displayValue.textContent = divide(prevValue, +displayValue.textContent);
            break;
    }
    if (+displayValue.textContent === Infinity || +displayValue.textContent === -Infinity) {
        prevValue = 0;
    } else {
        prevValue = +displayValue.textContent;
    }
    prevOp = nextOp;
}

addButton.addEventListener('click', () => {
    if (operatorActive) {
        displayNewValue(prevOperation, 'add');
    } else {
        setPrevValues('add');
    }
});
minusButton.addEventListener('click', () => {
    if (operatorActive) {
        displayNewValue(prevOperation, 'subtract');
    } else {
        setPrevValues('subtract');
    }
});
multButton.addEventListener('click', () => {
    if (operatorActive) {
        displayNewValue(prevOperation, 'multiply');
    } else {
        setPrevValues('multiply');
    }
});
divideButton.addEventListener('click', () => {
    if (operatorActive) {
        displayNewValue(prevOperation, 'divide');
    } else {
        setPrevValues('divide');
    }
});
equalButton.addEventListener('click', () => {
    if (operatorActive) {
        displayNewValue(prevOperation, '');
        operatorActive = false;
    }
    
});