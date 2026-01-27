console.log("Helloooo")

mainText = document.getElementById("Main")
mainText.innerText = "Helloooo"

document.addEventListener("keydown", function(event) {
    mainText.innerText = event.key;
});

// render a board as text and place in paragraph
// capture a keypress (representing a color)
// on key press, update board state and render