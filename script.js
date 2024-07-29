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

