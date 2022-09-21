const container = document.getElementById("container");
const reset = document.getElementById('reset');
const black = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
const meter = document.getElementById('meter');
const range = document.getElementById('value');

var r = 0;
var g = 0;
var b = 0;

var gridSize = meter.value;

function setGrid(value){

    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    console.log(value);
    for(let i = 0; i < value; i++){
        for(let j = 0; j < value; j++){
            const a = document.createElement('div');
            a.classList.add('box');
            a.setAttribute('id', i + '_' + j);
            container.appendChild(a);
        }
    }
}


function generateRandomNumber(){
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
}

//set grids to random colors
function setRainbowMode(){
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => 
        box.addEventListener('mouseover', () => {
            generateRandomNumber();
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }));
}

// sets paint to black mode 
function setBlackMode(){
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => 
        box.addEventListener('mouseover', () => {
            box.setAttribute('style', 'background-color: black');
        }));
}

// resets grid to current value of slider and paint to white mode
function resetToValue(){
    gridSize = meter.value;
    setGrid(gridSize);
    setText();
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.setAttribute('style', 'background-color: white'));
    setBlackMode();
}

// resets grid to 1
function resetToDefault(){
    meter.value = 1;
    gridSize = meter.value;
    setGrid(gridSize);
    setText();
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.setAttribute('style', 'background-color: white'));
}

function setText(){
    range.textContent = gridSize + 'X' + gridSize;
}

reset.addEventListener('click', () =>{
    resetToDefault();
});


black.addEventListener('click', () =>{
    setBlackMode();
});


rainbow.addEventListener('click', () =>{
    setRainbowMode();
});

meter.addEventListener('change', () => {
    resetToValue();
})


window.onload = () =>{
    setGrid(gridSize);
    setBlackMode();
}