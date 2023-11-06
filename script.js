const grid = document.querySelector(".Grid");
const row = document.querySelector(".Row");


function createGrid(size) {

    
    for (let i = 0; i < size; i++){
        let square = document.createElement("div");
        square.classList.add("square");

        square.style.height = (grid.clientHeight/size).toString() + 'px';
        square.style.width = (grid.clientWidth/size).toString() + 'px';

        row.appendChild(square);
    };
    
    for (let j = 0; j < size - 1; j++){
        const clone = row.cloneNode(true);
        grid.appendChild(clone);
    };

};


createGrid(17);