
introText = document.getElementById("Intro")
introText.innerText += "\nCurrent color: "

// vars
const size = 6
const numColors = 4
var win = false

// create matrix
matrix = document.getElementById("Matrix")
var matrixArray = createMatrix(size);

// initialize matrix
matrixArray = fillMatrix(matrixArray, numColors);
matrix.innerText = printMatrix(matrixArray);

var currentColor = matrixArray[0][0]
var previousColor = -1

while (!win) {
    introText.innerText += currentColor
    
    document.addEventListener("keydown", function (event) {
        const key = event.key
        if (key >= 0 && key <= 9) {
            previousColor = currentColor
            currentColor = key

            matrixArray = updateMatrix(matrixArray, previousColor, currentColor)
            matrix.innerText = printMatrix(matrixArray);
        }
    });
}

// takes in a number to represent side length
// return an array of length "size" containing arrays of length "size"
function createMatrix(size) {
    var matrix = []
    for (let r = 0; r < size; r++) {
        var rArr = []
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
    var outString = ""
    for (var r = 0; r < matrix.length; r++) {
        for (var c = 0; c < matrix.length; c++) {
            outString += matrix[r][c] + " "
        }
        outString += "\n"
    }
    return outString
}

// takes in a matrix to edit
// returns a matrix that has been filled with random numbers ranging from 0 (inclusive) to numColors (exclusive)
function fillMatrix(matrix, numColors) {
    for (var r = 0; r < matrix.length; r++) {
        for (var c = 0; c < matrix.length; c++) {
            var num = Math.floor(Math.random() * numColors);
            matrix[r][c] = num
        }
    }
    return matrix
}

function updateMatrix(matrix, previousColor, newColor) {
    for (var r = 0; r < matrix.length; r++) {
        for (var c = 0; c < matrix.length; c++) {
            if (matrix[r][c] === previousColor) {
                matrix[r][c] = newColor
            }
        }
    }
    return matrix
}

// render a board as text and place in paragraph
// capture a keypress (representing a color)
// on key press, update board state and render