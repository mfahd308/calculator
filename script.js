// test

const buttonValues = '789/456x123-.0=+';
let index = 0;

let operands = ["", ""];
let operator = "";
currentAffect = 0;
currentDisplay = 0;

const display = document.querySelector('.display');
display.textContent = "0";
let displayNum = "";

const exponents = document.querySelector('.exponents');
exponents.textContent = ''

const grid = document.querySelector('.buttons');
createButtons();

const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');

clear.addEventListener('click', (event) => {
    operands[0] = "";
    operands[1] = "";
    operator = "";
    display.textContent = "0";
    currentAffect = 0;
    currentDisplay = 0;
    exponents.textContent = '';
});

del.addEventListener('click', (event) => {
    console.log(operands[currentAffect].length);
    if (operands[currentAffect].length > 1) {
        operands[currentAffect] = operands[currentAffect].slice(0, -1); 
    } 
    else if (operands[currentAffect].length == 1) {
        operands[currentAffect] = "";
    }

    if (operands[currentDisplay].length > 8) {
        console.log(Number(operands[currentDisplay]).toPrecision(8));
        display.textContent = Number(operands[currentDisplay]).toPrecision(8).slice(0, 9);
        exponents.textContent = Number(operands[currentDisplay]).toPrecision(8).slice(9);
    }
    else {
        exponents.textContent = '';
        if (operands[currentDisplay] == "") {
            display.textContent = "0"; 
        }
        else {
            display.textContent = operands[currentDisplay]; 
        }
        
    }
    
});

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

            button.addEventListener('click', (event) => {
                if (isNumber(button.textContent)) {

                    if (operands[currentAffect].length < 8) {
                        operands[currentAffect] += button.textContent;
                        currentDisplay = currentAffect;
                    }
                }
                else if ( button.textContent == ".") {
                    if (!operands[currentAffect].includes('.')) {
                        if (operands[currentAffect] != "") {
                            if (operands[currentAffect].length < 8) {
                                operands[currentAffect] += button.textContent;
                                currentDisplay = currentAffect;
                            }  
                        }
                        else {
                            if (operands[currentAffect].length < 8) {
                                operands[currentAffect] += "0" + button.textContent;
                                currentDisplay = currentAffect;
                            }  
                        }
                    }
                }
                else if (button.textContent == "=") {
                    if (operands[1] != "") {
                        operands[0] = String(operate(operands[0], operator, operands[1]));
                        operands[1] = "";
                        operator = "";
                        currentAffect = 0;
                        currentDisplay = 0;
                    }
                }
                else {
                    
                    if (operands[0] != "") {
                        if (operands[1] != "") {
                            operands[0] = String(operate(operands[0], operator, operands[1]));
                            operands[1] = "";

                        }
                        operator = button.textContent;
                        currentAffect = 1;
                        currentDisplay = 0;
                    }

                }

                if (operands[currentDisplay].length > 8) {
                    console.log(Number(operands[currentDisplay]).toPrecision(8));
                    display.textContent = Number(operands[currentDisplay]).toPrecision(8).slice(0, 9);
                    exponents.textContent = Number(operands[currentDisplay]).toPrecision(8).slice(9);
                }
                else {
                    exponents.textContent = '';
                    if (operands[currentDisplay] == "") {
                        display.textContent = "0"; 
                    }
                    else {
                        display.textContent = operands[currentDisplay]; 
                    }
                    
                }
                
            });
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
    operand1 = Number(operand1);
    operand2 = Number(operand2);
    switch (operator) {
        case '+':
            return add(operand1, operand2);
        case '-':
            return subtract(operand1, operand2);
        case 'x':
            return multiply(operand1, operand2);
        case '/':
            return divide(operand1, operand2);
    }
    return 'invalid';
}

function isNumber(str) {
    const num = Number(str);
    return !isNaN(num) && Number.isFinite(num);
}



