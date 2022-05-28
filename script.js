let userChoices = [];
const resultContent = document.querySelector(".result-child-content");
const pressed = document.querySelector(".pressed");
const numbers = document.querySelector(".button-content");
const btns = numbers.addEventListener('click', (event) => {
    
    if(event.target.tagName === "BUTTON"){
        if(event.target.attributes.class.value === "="){
            process();
            return;
        }

        if(event.target.attributes.class.value === "clear"){
            clearData();
            return;
        }

        pressed.textContent = event.target.textContent;
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

function add(a, b){//creating a default value
    tempObj['btn'] = a+b;
    clearData()
    userChoices.push(tempObj);
    return a+b;
}

function subtract(a, b){
    tempObj['btn'] = a-b;
    clearData()
    userChoices.push(tempObj);
    return a-b;
}

function multiply(a, b){
    tempObj['btn'] = a*b;
    clearData()
    userChoices.push(tempObj);
    return a*b;
}

function divide(a, b){
    let tempObj ={};
    tempObj['btn'] = a/b;
    clearData()
    userChoices.push(tempObj);
    return a/b;
}

function clearData(){
    userChoices = [];
    resultContent.style.visibility = 'hidden';
    pressed.textContent = 0;
}

function process(){
    const x = userChoices.map(userChoice => userChoice['btn'] || userChoice['operator'])
    const q = userChoices.filter(userChoice => userChoice['operator']);
    let y = x.indexOf(q[0]["operator"]);
    const op = q[0]["operator"];
    const first = parseInt(x.slice(0,y).join(''));
    const second = parseInt(x.slice(y+1).join(''));
    resultContent.textContent = operate(op, first, second);
    resultContent.style.visibility = 'visible';
    //console.log(`${parseInt(first)} ${op} ${parseInt(second)}`);
    //console.log("Array of all contents: " + x);
    //console.log("Index of operator: " + y)
    //console.log(x.slice(0,y).join(''));
}

function operate(operator, num1, num2){
    switch(operator){
        case "+":{
            return num1+num2;
            break;
        }
        case "-":{
            return num1-num2;
            break;
        }
        case "*":{
            return num1*num2;
            break;
        }
        case "/":{
            return num1/num2;
            break;}
    }
}

