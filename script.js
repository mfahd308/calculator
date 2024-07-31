const buttonValues = '789/456x123-.0=+';
let index = 0;
console.log(buttonValues);

const grid = document.querySelector('.buttons');
createButtons();

function createButtons() {
    for (let i = 0; i < 4; i++) {
        const row = document.createElement('div');
        row.classList.add("row");
        for (let j = 0; j < 4; j++) {
            const button = document.createElement('div');
            button.classList.add("button");
            button.textContent = buttonValues[index];
            index++;
            row.appendChild(button); 
        }
        grid.appendChild(row);
    }
}

function add(x, y) {
    return x + y; 
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operand1, operator, operand2) {
    switch (operator) {
        case 'add':
            return add(operand1, operand2);
        case 'subtract':
            return subtract(operand1, operand2);
        case 'multiply':
            return multiply(operand1, operand2);
        case 'divide':
            return divide(operand1, operand2);
    }
    return 'invalid';
}



