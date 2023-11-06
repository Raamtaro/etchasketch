const grid = document.querySelector(".Grid");
const row = document.querySelector(".Row");

// const square = document.createElement("div");
// square.classList.add("square");

function createGrid(size) {
    // row.style.height = (grid.clientHeight/size).toString();
    
    for (let i = 0; i < size; i++){
        let square = document.createElement("div");
        square.classList.add("square");

        square.style.height = (grid.clientHeight/size).toString() + 'px';
        square.style.width = (grid.clientWidth/size).toString() + 'px';

        // console.log(typeof(square.style.height));
        // console.log(square.style.width);

        row.appendChild(square);
    };
    
    for (let j = 0; j < size - 1; j++){
        const clone = row.cloneNode(true);
        grid.appendChild(clone);
    };

};


createGrid(16);
// console.log(typeof((grid.clientHeight/16).toString() + 'px'))
console.log((grid.clientHeight/16).toString() + 'px');


// row.appendChild(square);