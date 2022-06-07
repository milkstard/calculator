let userChoices = [];
let totalPressed = 0;
prevTemp = '';
prevOperator = '';
const previousResult = document.querySelector(".previous-result");
const currentResult = document.querySelector(".current-result");
const numbers = document.querySelector(".button-content");
const btns = numbers.addEventListener('click', (event) => {
    if(event.target.tagName === "BUTTON"){
        if(event.target.attributes.class.value === "clear"){
            clearData();
            return;
        }
        else if(event.target.attributes.class.value === "operator"){
            prevOperator = event.target.textContent.toString();
            if(userChoices.length === 0){
                if(currentResult.textContent === ''){
                    alert("Error");
                    currentResult.textContent = '';
                    return;
                }
            }else if(userChoices[userChoices.length - 1] === '+' && currentResult.textContent === '' || userChoices[userChoices.length - 1] === '-'  && currentResult.textContent === '' || userChoices[userChoices.length - 1] === '*' && currentResult.textContent === '' || userChoices[userChoices.length - 1] === '/' && currentResult.textContent === ''){
                alert("Error");
                currentResult.textContent = '';
                return;
            }
                userChoices.push(currentResult.textContent.toString());
                userChoices.push(prevOperator);
                currentResult.textContent = '';
                previousResult.textContent = userChoices.join('');
            return;
        }
        else if(event.target.attributes.class.value === '='){
            userChoices.push(currentResult.textContent);
            previousResult.textContent = userChoices.join('');
            processFinal();
        }
        else{
            currentResult.textContent = currentResult.textContent + event.target.textContent.toString();
            prevTemp = currentResult.textContent;
        }
        // console.log(event.target);
        // console.log(event.target.textContent);
        /*previousResult.textContent = event.target.textContent;
        
        let x = event.target.attributes.class.value;
        console.log(typeof(event.target.textContent));
        let y = event.target.textContent;
        const tempObj = {};
        if(!(parseInt(Number.isNaN(y)))){
            tempObj[x] = y;
            userChoices.push(tempObj);
            console.log(userChoices);
        }else{
            tempObj[x] = y;
            userChoices.push(tempObj);
            console.log(userChoices);
        }*/
        // let y = event.target.textContent;
        //let y = parseInt(event.target.textContent);
        // const tempObj = {};
        // tempObj[x] = y;
        // userChoices.push(tempObj);
        // console.log(userChoices);
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

function clearData(){
    userChoices = [];
    previousResult.textContent = '';
    currentResult.textContent = '';
}

function processFinal(){
    let totalResult = undefined;
    while(userChoices.length !== 1){
        if(userChoices.includes('*')){
           let operationFinder = userChoices.indexOf('*');
            totalResult = operate(userChoices[operationFinder], parseFloat(userChoices[operationFinder-1]),  parseFloat(userChoices[operationFinder+1]));
            userChoices.splice(operationFinder-1,0,totalResult);
            userChoices.splice(operationFinder,3);
        }else if(userChoices.includes('/')){
            let operationFinder = userChoices.indexOf('/');
            if(parseInt(userChoices[operationFinder+1]) === 0){
                alert("Infinity")
                userChoices = [];
            }
                break;
            totalResult = operate(userChoices[operationFinder],  parseFloat(userChoices[operationFinder-1]),parseFloat(userChoices[operationFinder+1]));
            userChoices.splice(operationFinder-1,0,totalResult);
            userChoices.splice(operationFinder,3);
        }else if(userChoices.includes('+')){
            let operationFinder = userChoices.indexOf('+');
            totalResult = operate(userChoices[operationFinder],  parseFloat(userChoices[operationFinder-1]), parseFloat(userChoices[operationFinder+1]));
            userChoices.splice(operationFinder-1,0,totalResult);
            userChoices.splice(operationFinder,3);
        }else{
            let operationFinder = userChoices.indexOf('-');
            totalResult = operate(userChoices[operationFinder],  parseFloat(userChoices[operationFinder-1]), parseFloat(userChoices[operationFinder+1]));
            userChoices.splice(operationFinder-1,0,totalResult);
            userChoices.splice(operationFinder,3);
        }
    }
    currentResult.textContent = userChoices;
    userChoices = [];
}

function process(){
    const x = userChoices.map(userChoice => userChoice['btn'] || userChoice['operator'])
    const q = userChoices.filter(userChoice => userChoice['operator']);
    let y = x.indexOf(q[0]["operator"]);
    const op = q[0]["operator"];
    // const first = parseInt(x.slice(0,y).join(''));
    // const second = parseInt(x.slice(y+1).join(''));
    const first = x.slice(0,y).join('');
    const second = x.slice(y+1).join('') ;
    previousResult.textContent = operate(op, first, second);
    previousResult.style.visibility = 'visible';
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

