let answer='';
const display = document.querySelector('.js-display');
const sqButton = document.getElementById('square');
const cubeButton = document.getElementById('cube');
const factButton = document.getElementById('factorial');

sqButton.addEventListener('click', () => {
    if(answer !== '') {
        answer = calcSquare(answer);
        displayCalculation(answer);
    }
});

cubeButton.addEventListener('click', () => {
    if(answer !== '') {
        answer = calcCube(answer);
        displayCalculation(answer);
    }
});

factButton.addEventListener('click', () => {
    if(answer !=='') {
        answer = calcFactorial(answer);
        displayCalculation(answer);
    }
});

function getValue(value) {
    answer += value;
    displayCalculation(answer);
}

function calculate() {
    answer = eval(answer);
    displayCalculation(answer);
}

function displayCalculation(answer) {
    display.innerHTML = answer;
}

function calcSquare(num) {
    return num * num;
}

function calcCube(num) {
    return num * num * num;
}

function calcFactorial(num) {
    if(num === 1 || num === 0) return '1';
    else return num * calcFactorial(num - 1);
}

