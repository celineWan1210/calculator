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

// modulo operator function
function modulo(a, b) {
    return a % b;
}

// reverse sign
// Note: reverse only accpet one number let b be 0 and wont accept in the actual calculate function
function reverse(number) {
    return number * -1;
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
    } else if (operator === "%") {
        return modulo(a, b);
    } else if (operator === "r") {
        return reverse(a);
    }
}

// select sceen
const screenEntered = document.querySelector(".entered");
const screenHistory = document.querySelector(".history")

// screen entered text
const screenEnteredText = document.createElement("span");
// history text (should keep concatenate until equal)
const screenHistoryText = document.createElement("span");
// select numbers button
const sevenButton = document.querySelector(".seven");



// select add button
const addButton = document.querySelector(".add");
// select equal button
const equalButton = document.querySelector(".equal");


// show on screen
// number 7
sevenButton.addEventListener("click", () => {
    screenEnteredText.textContent += "7";
    screenEntered.appendChild(screenEnteredText);
})

// add operator
addButton.addEventListener("click", () => {
    screenEnteredText.textContent += "+";
    screenEntered.appendChild(screenEnteredText);
})

// check index of first number (a) and get the number (a)
function getNumberA(enteredArray) {
    let a = "";
    let i = 0;
    for (i = 0; i < enteredArray.length; i++) {
        if (enteredArray[i] != "+") {
            a += enteredArray[i];
        } else {
            break;
        }
    }
    return [a, i];
}

// get number b
function getNumberB(enteredArray, bIndex) {
    let b = "";
    for (let i = bIndex; i < enteredArray.length; i++) {
        b += enteredArray[i];
    }
    return b;
}

// equal operator
equalButton.addEventListener("click", () => {
    // turn into array
    enteredArray = Array.from(screenEnteredText.textContent);

    // get a, operator and b
    a = Number(getNumberA(enteredArray)[0]);

    operatorIndex = getNumberA(enteredArray)[1];
    bIndex = operatorIndex + 1;

    operator = enteredArray[operatorIndex];
    b = Number(getNumberB(enteredArray, bIndex));

    const finalResult = operate(a, b, operator);

    // append result to each screen
    screenHistoryText.textContent = screenEnteredText.textContent;
    screenHistory.appendChild(screenHistoryText);
    screenEnteredText.textContent = finalResult;
    screenEntered.appendChild(screenEnteredText);
})

// test
// // test for calculate functions
// console.log(add(2, 3));
// console.log(subtract(2, 3));
// console.log(multiple(2, 3));
// console.log(divide(6,3));
// console.log(modulo(10, 9));
// console.log(reverse(100));

// // test for operator function
// console.log(operate(2,3,"+"));
// console.log(operate(2,3,"-"));
// console.log(operate(2,3,"*"));
// console.log(operate(6,3,"/"));
// console.log(operate(10,9,"%"));
// console.log(operate(3,0,"r"));