let userChoices = [];
const numbers = document.querySelector(".button-content");
const btns = numbers.addEventListener('click', (event) => {
    
    if(event.target.tagName === "BUTTON"){
        if(event.target.attributes.class.value === "="){
            process();
            return;
        }

        let x = event.target.attributes.class.value;
        let y = event.target.textContent;
        const tempObj = {};
        tempObj[x] = y;
        userChoices.push(tempObj);
        console.log(userChoices);
    }
});


for( let i = 0; i < 10; i++){
    let numberChild = document.createElement("button");
    numberChild.classList.toggle(`btn`);
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

function process(){
    const x = userChoices.map(userChoice => userChoice['btn'] || userChoice['operator'])
    const q = userChoices.filter(userChoice => userChoice['operator']);
    let y = x.indexOf(q[0]["operator"]);
    const op = q[0]["operator"];
    const first = x.slice(0,y).join('');
    const second = x.slice(y+1).join('');
    operate(op, first, second);
    //console.log(`${parseInt(first)} ${op} ${parseInt(second)}`);
    //console.log("Array of all contents: " + x);
    //console.log("Index of operator: " + y)
    //console.log(x.slice(0,y).join(''));
}

function operate(operator, num1, num2){
    switch(operator){
        case "+":{
            console.log(num1+num2);
            break;
        }
        case "-":{
            console.log(num1-num2);
            break;
        }
        case "*":{
            console.log(num1*num2);
            break;
        }
        case "/":{
            console.log(num1/num2);
            break;}
    }
}

