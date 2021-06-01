

function plotGrid() {

    const pixelsBoardSize = 350;
    const minDensity = 5;
    const maxDensity = 100;
    const pixelsGridGap = 1;
    let density = 0;

    do {
        /// Request number of squares from the user, between min and max values (request as many times needed for a valid entry)
        density = parseInt(prompt(`How many blocks per side? enter a value from ${minDensity} to ${maxDensity}`));
    } while (!((density >= minDensity) && (density <= maxDensity)))

    const cellSize = (pixelsBoardSize - ((density - 1) * pixelsGridGap)) / density;

    const container = document.querySelector('#container');
    container.style.cssText = `display: grid;
                                grid-template-columns: repeat(${density},${cellSize}px);
                                grid-template-rows: repeat(${density},${cellSize}px);
                                grid-gap: ${pixelsGridGap}px ${pixelsGridGap}px;`;

    /// Colors used for blank for the grid boxes
    const blankColor = 'gray';
    const boxes = density * density;
    let boxId = 0;

    do {

        const newDiv = document.createElement('div');

        newDiv.addEventListener('mouseover', colorWhenMouseOver); // asign the action when mouse is over on each box

        newDiv.setAttribute('id', 'id' + boxId);
        newDiv.style.cssText = `background-color: ${blankColor};`;
        container.appendChild(newDiv);

        boxId = boxId + 1;
    } while (boxId < (boxes))

}

function colorWhenMouseOver() {
    const paintColor = 'greenyellow';
    this.style.cssText = `background-color: ${paintColor};`;
}


function clearGrid () {

    
    const container = document.querySelectorAll('#container > *');
    
    container.forEach( (div) => div.remove() );

    plotGrid();

}

plotGrid(); 

/// Adds the action when the button is clicked, it most refresh the grid
const btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', function () {
    // clear the grid
    clearGrid();
});



/*



*/


// function initGrid() {

//     const pixelsBoardSize = 550;
//     const minDensity = 5;
//     const maxDensity = 100;
//     const pixelsGridGap = 1;
//     let density = 0;

//     do {
//          density = parseInt(prompt(`How many blocks per side? enter a value from ${minDensity} to ${maxDensity}`));
//     } while (!((density >= minDensity) && (density <= maxDensity)))

//     const cellSize = (pixelsBoardSize - ((density - 1) * pixelsGridGap)) / density;    

//     const container = document.querySelector('#container');
//     container.style.cssText = `display: grid;
//                                 grid-template-columns: repeat(${density},${cellSize}px);
//                                 grid-template-rows: repeat(${density},${cellSize}px);
//                                 grid-gap: ${pixelsGridGap}px ${pixelsGridGap}px;`;


//     plotGrid( density * density);
// }


// initGrid();


// const btnClear = document.querySelector('#btnClear');
// btnClear.addEventListener('click', function () {

//     initGrid();

//     const blankColor = 'gray'
//     let n = 0;
//     do {
//         const divItem = document.querySelector(`#id${n}`);
//         divItem.style.cssText = `background-color: ${blankColor};`;
//         n = n + 1;

//     } while (n < (boxes))
// });


// function plotGrid(boxes) {

//     const blankColor = 'gray', paintColor = 'greenyellow';

//     let n = 0;
//     do {

//         const newDiv = document.createElement('div');

//         newDiv.addEventListener('mouseover', function () {
//             this.style.cssText = `background-color: ${paintColor};`;
//         });

//         newDiv.setAttribute('id', 'id' + n);
//         newDiv.style.cssText = `background-color: ${blankColor};`;
//         container.appendChild(newDiv);

//         n = n + 1;
//     } while (n < (boxes))


// }