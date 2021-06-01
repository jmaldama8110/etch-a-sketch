
const xItems = 32, yItems = 32, pixelsSize = 15;
const blankColor = 'gray'

const container = document.querySelector('#container');
container.style.cssText = `display:grid;
                            grid-template-columns: repeat(${xItems},${pixelsSize}px);
                            grid-template-rows: repeat(${yItems},${pixelsSize}px);
                            grid-gap: 1px 1px;`;

const maxItems = xItems * yItems;
let n = 0;

do {

    const newDiv = document.createElement('div');

    newDiv.addEventListener('mouseover', function () {
        this.style.cssText = 'background-color: red;';
    });

    newDiv.setAttribute('id', 'id' + n);
    newDiv.style.cssText = `background-color: ${blankColor};`;
    container.appendChild(newDiv);

    n = n + 1;
} while (n < (maxItems))


const btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', function () {
    let n = 0;
    do {
        const divItem = document.querySelector(`#id${n}`);
        divItem.style.cssText = `background-color: ${blankColor}`;
        n = n + 1;

    }while (n <(maxItems))
});