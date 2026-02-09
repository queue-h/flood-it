

let introText = document.getElementById("Intro")
introText.innerText += "\nCurrent color: "

// vars
const size = 6
const numColors = 4
let win = false

// create matrix
let matrix = document.getElementById("Matrix")
let matrixArray = createMatrix(size);

// initialize matrix
matrixArray = fillMatrix(matrixArray, numColors);
matrix.innerText = printMatrix(matrixArray);

let newColor = matrixArray[0][0]
let previousColor = -1

setInterval(draw, 100)

function draw() {
    document.addEventListener("keydown", function (event) {
        let key = event.key
        if (key >= 0 && key <= 9) {
            previousColor = newColor
            newColor = key
            console.log(newColor)
            matrixArray = updateMatrix(matrixArray, previousColor, newColor)
            matrix.innerText = printMatrix(matrixArray)
        }
    });
}

// takes in a number to represent side length
// return an array of length "size" containing arrays of length "size"
function createMatrix(size) {
    let matrix = []
    for (let r = 0; r < size; r++) {
        let rArr = [];
        for (let c = 0; c < size; c++) {
            rArr.push(0)
        }
        matrix.push(rArr)
    }
    return matrix
}

// takes in a matrix to edit
// returns the matrix in string format with spaces between the numbers and /n between arrays
function printMatrix(matrix) {
    let outString = "";
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix.length; c++) {
            outString += matrix[r][c] + " "
        }
        outString += "\n"
    }
    return outString
}

// takes in a matrix to edit
// returns a matrix that has been filled with random numbers ranging from 0 (inclusive) to numColors (exclusive)
function fillMatrix(matrix, numColors) {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix.length; c++) {
            matrix[r][c] = Math.floor(Math.random() * numColors)
        }
    }
    return matrix
}

// not quite right. need floodfill to cover u-shape caveat
function updateMatrix(matrix, previousColor, newColor) {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix.length; c++) {
            if (matrix[r][c] === previousColor) {
                matrix[r][c] = newColor
            }
            else {
                break
            }
        }
    }
    return matrix
}



// render a board as text and place in paragraph
// capture a keypress (representing a color)
// on key press, update board state and render