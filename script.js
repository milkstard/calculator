const numbers = document.querySelector(".button-content");
const btns = numbers.addEventListener('click', (event) => {
    if(event.target.tagName === "BUTTON")
        console.log(event.target.textContent);
});

for( let i = 0; i < 10; i++){
    let numberChild = document.createElement("button");
    numberChild.classList.toggle("btn-"+i);
    numberChild.textContent = i;
    numbers.appendChild(numberChild);
}

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function operate(operator, num1, num2){
    switch(operator){
        case "+":{
            break;
        }
        case "-":{
            break;
        }
        case "*":{
            break;
        }
        case "/":{
            break;}
    }
}

