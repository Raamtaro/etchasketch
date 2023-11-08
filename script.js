const grid = document.querySelector(".Grid");
const row = document.querySelector(".Row");



function createGrid(size) {
    for (let i = 0; i < size; i++){
        //create the element
        let square = document.createElement("div");
        square.classList.add("square");

        //set the width and height
        square.style.height = (grid.clientHeight/size).toString() + 'px';
        square.style.width = (grid.clientWidth/size).toString() + 'px';
        

        //add event listener for the square
        square.addEventListener('mouseenter', ()=>{
            square.style.backgroundColor = "black";
        });

        //append
        row.appendChild(square);


    };

    //clone the row size - 1 times to create a size x size grid
    for (let j = 0; j < size - 1; j++){
        const clone = row.cloneNode(true);
        grid.appendChild(clone);
    };

    // console.log((document.querySelectorAll(".square")).length)
    // for (let k = 0; k < document.querySelectorAll(".square").length; k++) {
    //     let cell = document.querySelector(".square");
    //     cell.addEventListener('mouseenter', ()=>{
    //         square.style.backgroundColor = "black";
    //     });
    // };

};


//create a hover effect to turn the divs into a different color (via backgroundColor property)

createGrid(16);


