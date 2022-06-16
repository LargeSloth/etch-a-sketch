let slider = document.getElementById("gSlider");
let output = document.getElementById("GS");
output.innerText = slider.value;

slider.oninput = function() {
    output.innerText = this.value;
};

let color = "black";
let click = true;

function createGrid(size) {
let board = document.querySelector('.board')
let squares = board.querySelectorAll('div');
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let amount = size * size;
for(let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square);
    }
}

createGrid(16);

function changeSize(input) {
    if(input  >= 2 && input <= 100){
    createGrid(input);
    }
    else {
        console.log("Hello");
    }
}

function colorSquare() {
  if (click) {
    if(color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board')
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != `BUTTON`)
    if(e.target.tagName != `INPUT`){
        click = !click;
        if(click) {
            document.querySelector('.mode').textContent = "Mode: Drawing"
        } else {
            document.querySelector('.mode').textContent = "Mode: Not Drawing"
        }
    }  
});

