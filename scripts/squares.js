/*Defaults*/
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = 6;
var size = 6
var gridwidth = 600
const gridContainer = document.getElementById('myGrid');
const colorGrid = document.getElementById('colorGrid')

/*Random color generator*/
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const colorList = []
for (let c = 0; c < 16; c++) {
    colorList.push(getRandomColor())
}

/*Generates a table of size nxn*/
function clearGrid() {
    gridContainer.innerHTML = ''
    colorGrid.innerHTML = ''
}

function newGrid(size) {
    var allTiles = []
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            allTiles.push(`${i}-${j}`)
        }
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.id = `${i}-${j}`;
            /* Text content: gridItem.textContent = `${i}-${j}`;*/
            gridItem.setAttribute("style",`height: ${gridwidth/size}; width: ${gridwidth/size};background-color: white`)
            gridContainer.appendChild(gridItem);
        }
        const gridItemColor = document.createElement('div');
        gridItemColor.className = 'grid-item-color';
        gridItemColor.id = `color ${i}`;
        /* Text content: gridItemColor.textContent = `${i}`;*/
        gridItemColor.setAttribute("style",`height: 40px; width: 40px; background-color: ${colorList[i]}`)
        colorGrid.appendChild(gridItemColor);
    }
    for (coord = 0; coord < allTiles.length; coord++) {
        let newTile = document.getElementById(allTiles[coord])
        console.log(newTile)
        newTile.onclick = () => {colorToggle(newTile)}
    }
    function colorPicker() {
        for (i = 0; i < size; i++) {
            let colorTile = document.getElementById(`color ${i}`)
            colorTile.onclick = () => {
                lastColorPicked = colorTile.style.backgroundColor 
                console.log(`yep ${i}`) 
            }  
        }
    }   
    colorPicker()
}


newGrid(size)
gridContainer.setAttribute('style',`grid-template-columns: repeat(${size}, 0fr);`)

/*Slider input*/
slider.oninput = function() {
    clearGrid()
    size = this.value;
    newGrid(size)
    output.innerHTML = slider.value;
    gridContainer.setAttribute('style',`grid-template-columns: repeat(${size}, 0fr);`)
}

/* Rules check:
1. Can't be in same column as same color (can't work on two quilts at once)
2. Can't be in same row as same color (can't work on same quilt twice)
3. Adjacencies must be unique
    a. Can't be behind something it's already behind (can't pass to someone they've already passed to)
    b. Can't be in front of something it's already in front of (can't have passed to someone they already passed to)
*/

function colorInRow(tile) {
    let color = tile.style.backgroundColor
    let checker = false
    let row = tile.id[0]
    for (i = 0; i < size; i++) {
        if (color == document.getElementById(`${row}-${i}`).style.backgroundColor && document.getElementById(`${row}-${i}`) != tile) {
            checker = true
            break
        }
    }
    return checker
}

function colorInCol(tile) {
    let color = tile.style.backgroundColor
    let checker = false
    let col = tile.id[2]
    for (i = 0; i < size; i++) {
        if (color == document.getElementById(`${i}-${col}`).style.backgroundColor && document.getElementById(`${i}-${col}`) != tile) {
            checker = true
            break
        }
    }
    return checker
}

/*Color toggle*/
let lastColorPicked = colorList[0]

function colorToggle(tile) {
    if (tile.style.backgroundColor == `${lastColorPicked}`) {
        tile.style.backgroundColor = `white`
        console.log("Color on.")
    }
    else if (!colorInCol(tile) && !colorInRow(tile) && tile.style.backgroundColor == `white`) {
        tile.style.backgroundColor = `${lastColorPicked}`
        console.log("Color off.")
    }
    else {
        console.log("Nope!")
    }
}