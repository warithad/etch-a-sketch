const container = document.querySelector(".container");

for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const a = document.createElement('div')
        a.classList.add('box');
        a.setAttribute('id', i + '_' + j);
        container.appendChild(a);
    }
}



