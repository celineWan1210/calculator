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
let a = "";
let operator = "";
let b = "";


// operator function that call the calculate functions
function operate(a, b, operator) {
    if (operator ==="+") {
        return add(a, b);
    } else if (operator === "−") {
        return subtract(a, b);
    } else if (operator === "×") {
        return multiple(a, b);
    } else if (operator === "÷") {
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
// append child 
screenEntered.appendChild(screenEnteredText);
screenHistory.appendChild(screenHistoryText);
screenEntered.appendChild(screenEnteredText);


// select button
const calculateButton = document.querySelectorAll(".button-set");

// button selector and result show
inputString = "";
const operatorArray = ["+", "−", "×", "÷"]
calculateButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        // select button only
        if (e.target.tagName === "BUTTON") {
            // enter array until operator
            inputString += e.target.textContent;
            screenEnteredText.textContent += e.target.textContent;

            if (e.target.textContent === "+" || e.target.textContent === "−" || e.target.textContent === "×" || e.target.textContent === "÷") {
                operator = e.target.textContent;

                for (let i = 0; i < inputString.length-1; i++) {
                    a += inputString[i];
                }   
            }

            if (operator.length != 0) {
                for (let i = inputString.indexOf(operator) + 1; i < inputString.length; i++) {
                    b += inputString[i];
                }
            }

            if (b.length != 0) {
                const finalNumber = operate(Number(a), Number(b), operator);

                inputString = "";
                a = finalNumber;
                b = "";
                operator = "";

                console.log(a);
            }

            console.log(a);
            console.log(b);
            console.log(operator);
        } 
    });
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