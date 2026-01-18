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

function clear() {
    screenEnteredText.textContent = "";
    screenHistoryText.textContent = "";
    a = "";
    b = "";
    operator = "";
}

let isError = false;
// button selector and result show
calculateButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        // select button only
        if (e.target.tagName === "BUTTON") {
            // show button click with saturate change 
            e.target.style.filter = 'saturate(50%)  brightness(80%)';
            setTimeout(() => {
                e.target.style.filter = "";
            }, 150)


            // check if current input is error
            if (isError) {
                if (e.target.textContent === "AC") {
                    clear();
                    isError = false;
                } else {
                    return;
                }
            }

            // when number is pressed
            // if operator is empty store in a else store in b
            if (Number.isFinite(Number(e.target.textContent))) {
                screenEnteredText.textContent += e.target.textContent;
                if (operator.length === 0) {
                    a += e.target.textContent;
                } else {
                    b += e.target.textContent;
                }
            }

            //  when operator is pressed  
            // if b havent been entered -> append the operator to the screen and store the operator
            // if b has been entered (a, b which means its the next calculation) -> show final result and the operator (clear b and wait for b number)
            if (e.target.textContent === "+" || e.target.textContent === "−" || e.target.textContent === "×" || e.target.textContent === "÷" || e.target.textContent === "%") {
                if (b.length === 0) {
                    operator = e.target.textContent;
                    screenEnteredText.textContent += e.target.textContent;
                } else {
                    const finalResult = Math.round((operate(Number(a), Number(b), operator)) * 100000) / 100000;
                    if (finalResult === Infinity) {
                        screenEnteredText.textContent = "Undefined";
                        isError = true;
                    } else {
                        a = finalResult;
                        b = "";
                        operator = e.target.textContent;

                        screenHistoryText.textContent = screenEnteredText.textContent;
                        screenEnteredText.textContent = finalResult + operator;
                    }
                }
            }
            
            // show result when = is pressed
            if (e.target.textContent === "=") {
                if (! (b.length === 0 || a.length === 0 || operator.length === 0)) {
                    const finalResult = Math.round((operate(Number(a), Number(b), operator)) * 100000) / 100000;
                    
                    if (finalResult === Infinity) {
                        screenEnteredText.textContent = "Undefined";
                        isError = true;
                    } else {
                        a = finalResult;
                        b = "";
                        operator = "";

                        screenHistoryText.textContent = screenEnteredText.textContent;
                        screenEnteredText.textContent = finalResult;
                      }
                } else {
                    // = too early just ignore
                    return;
                }
            }

            if (e.target.textContent === "AC") {
                clear();
            }
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