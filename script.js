const grid = document.querySelector(".Grid");
const row = document.querySelector(".Row");

const square = document.createElement("div");
square.classList.add("square");

function createGrid(size) {
    for (let i = 0; i < size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    };
};


// createGrid(16);
// row.appendChild(square);