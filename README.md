# etchasketch
etchasketch TOP capstone


understand:

etchasketch
- Need to be able to move my mouse to draw on the screen
- Assignment states to create a 16 x 16 grid of square divs to draw on (should be done first)

- Needs to look nice lol (CSS)


-----Top Level------
1. create a container <div> in the html to hold the squares
2. create a function and maybe an event listener for a slider which takes a "squareSize" argument and iterates through to add the elements in the row, and then clone the node to create the equivalent amount of columns



---------Grid Size------------
Next, need to figure out the grid size:

1. use the grid.min-height and grid.min-width (look these up, I'm not sure what the proper js identifers are), and then set the `square` node (in the js) to be min-width/size (double check this)

2. CHECK THE MATH BY DRAWING THIS OUT ON PEN AND PAPER

3. I'm going to have to play around with flex (CSS) in order to get this to work *sad-face*



---------Hover effect-------------
1. This one should likely be an event listener which changes the .square backgroundColor to some dark shade

2. I think there should be some DOM manipulation way to access the children of a certain query selector

3. so in essence, I think what I would be doing is setting the event listener wrt any of the .Row nodes



pseudo-code:

addEventListener('mouseenter', () => {
    //function needs to set any square backgroundColor to black
    //hmmm....

    let cell = document.querySelector(".square")
})




I think I'm going to need to refactor the createGrid loops and turn them into one loop after all.

for (let j=0; j < size - 1; j++) {
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
    let clone = row.cloneNode(false);
    grid.appendChild(clone);
};

