const grid = document.querySelector(".Grid");
const row = document.querySelector(".Row");



function createGrid(size) {
    for (let j=0; j < size - 1; j++) {
        let clone = row.cloneNode(false);
        for (i=0; i < size; i++) {
            let square = document.createElement("div");
            square.classList.add("square");
    
            square.style.height = (grid.clientHeight/size).toString() + 'px';
            square.style.width = (grid.clientWidth/size).toString() + 'px';
            
            square.addEventListener('mouseenter', ()=>{
                square.style.backgroundColor = "black";
            });
            
            if (j === 0) row.appendChild(square);
            else clone.appendChild(square);
            
        };
        
        grid.appendChild(clone);
    };
};


createGrid(48);


