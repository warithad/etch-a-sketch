const container = document.getElementById("container");
// const reset = document.getElementById('reset');
// const black = document.getElementById('black');
// const rainbow = document.getElementById('rainbow');


// var gridSize = 10;

function setGrid(value){
    // container.setAttribute('style', 'grid-template-columns: repeat('+value+' 1fr)');
    // container.setAttribute('style', 'grid-template-rows: repeat('+value+' 1fr)');
    container.style.gridTemplateColumns = 'repeat(${value}, 1fr)';
    container.style.gridTemplateRows = 'repear(${value}, 1fr)';
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

// const boxes = document.querySelectorAll('.box');
// // function setColorAsBlack(){
// //     boxes.forEach(box => box.classList.add('black-color'));
// // }

// reset.addEventListener('click', function() {
//     prompt('Enter a number');
// });

// black.addEventListener('click', function() {
//     setColorAsBlack();
// });
// window.onload = () =>{
//     setGrid(5);
//     boxes.forEach(box => box.classList.add('black-color'));
// }

window.onload = () =>{
    setGrid(10);
}