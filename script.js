const container = document.getElementById('canvas')

let slider = document.getElementById("gridSize");
let output = document.getElementById("GS");
output.innerText = slider.value;

slider.oninput = function() {
    output.innerText = this.value;
}


function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item"

       
         cell.addEventListener('mouseover',
         e => e.target.classList.add('my-color-class')
         )
    };
};

makeGrid(16,16);

