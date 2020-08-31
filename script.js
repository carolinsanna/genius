let order = [];
let clickedOrder = [];
let score = 0;

//Ordem de cores 0 - verde, 1 - vermelho, 2 - amarelo, 3 - azul

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    for(let i in order){
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i)+1);
    }
}

let lightColor = (element, number) => {
    number = number*500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number-250);
    setTimeout(() => {
        element.classList.remove('selected');
    },);
}

let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        console.log(`Pontuação: ${score}. Acertou!`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createElement(color).classList.add('selected');
    setTimeout(() =>{
        createElement(color).classList.remove('selected');
        checkOrder();
    }, 250);  
}

let createElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

let nextLevel = () =>{
    score++;
    shuffleOrder();
}

let gameOver = () => {
    console.log(`Pontuação: ${score}. O jogo acabou! Clique em OK para iniciar um novo jogo`);
    order=[];
    clickedOrder=[];
    playGame();
}

let playGame = () => {
    console.log('Iniciando nova sequencia!');
    score = 0;
    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();