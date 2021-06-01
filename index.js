


function initGrid() {
    
    const pixelsBoardSize = 550;
    const minDensity = 5;
    const maxDensity = 100;
    const pixelsGridGap = 1;
    let density = 0;

    do {
         density = parseInt(prompt(`How many blocks per side? enter a value from ${minDensity} to ${maxDensity}`));
    } while (!((density >= minDensity) && (density <= maxDensity)))
    
    const cellSize = (pixelsBoardSize - ((density - 1) * pixelsGridGap)) / density;    
    
    const container = document.querySelector('#container');
    container.style.cssText = `display: grid;
                                grid-template-columns: repeat(${density},${cellSize}px);
                                grid-template-rows: repeat(${density},${cellSize}px);
                                grid-gap: ${pixelsGridGap}px ${pixelsGridGap}px;`;
    
    
    plotGrid( density * density)
}


initGrid();


const btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', function () {

    initGrid();

    let n = 0;
    do {
        const divItem = document.querySelector(`#id${n}`);
        divItem.style.cssText = `background-color: ${blankColor}`;
        n = n + 1;

    } while (n < (boxes))
});


function plotGrid(boxes) {

    const blankColor = 'gray', paintColor = 'greenyellow';

    let n = 0;
    do {

        const newDiv = document.createElement('div');

        newDiv.addEventListener('mouseover', function () {
            this.style.cssText = `background-color: ${paintColor};`;
        });

        newDiv.setAttribute('id', 'id' + n);
        newDiv.style.cssText = `background-color: ${blankColor};`;
        container.appendChild(newDiv);

        n = n + 1;
    } while (n < (boxes))


}