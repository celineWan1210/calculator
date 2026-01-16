// calculate functions
// add function
function add(a, b) {
    return a + b;
}
// subtract function
function subtract(a, b) {
    return a - b;
}
// multiple function
function multiple(a, b) {
    return a * b;
}
// divide fuction
function divide(a, b) {
    return a / b;
}


// create variable (exp: 3(a) +(operator) 5(b))
let a = 0;
let operator = "";
let b = 0;


// operator function that call the calculate functions
function operate(a, b, operator) {
    if (operator ==="+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiple(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

// test
// test for calculate functions
console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiple(2, 3));
console.log(divide(6,3));

// test for operator function
console.log(operate(2,3,"+"));
console.log(operate(2,3,"-"));
console.log(operate(2,3,"*"));
console.log(operate(6,3,"/"));