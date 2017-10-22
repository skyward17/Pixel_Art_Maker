// Creates the grid based on user inputs for Grid height and width
function makeGrid() {
    // Select size inputs for grid
    let heightSelect = document.getElementById("input_height").value;
    let widthSelect = document.getElementById("input_width").value;
    // Loops adding tr and td based on user inputs from heightSelect and widthSelect
    for (let i = 0; i < heightSelect; i++) {
        const buildTr = document.createElement("tr"); // var to create a tr
        buildTr.setAttribute("id", "buildRow"); // attribute to build id buildTr for DOM access
        for (let j = 0; j < widthSelect; j++) {
            const buildTd = document.createElement("td"); // var to create a td DOM access
            buildTd.setAttribute("id", "buildTd"); // attribute to build id buildTd
            buildTr.appendChild(buildTd);
            }
       document.getElementById("pixel_canvas").append(buildTr);  // Grab element pixel_canvas and append with a tr
     }
     // Changes color of cell selected by user
    const cells = document.querySelectorAll("td");
       for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function() {
            let colorSelect = document.getElementById("colorPicker").value; // Placed in loop to change colors
            cells[i].style.backgroundColor = colorSelect;
           });
       }
};

// Clears out Pixel Drawing
function clearCanvas() {
    const pixCan = document.getElementById("pixel_canvas");  // Parent Node
        while (pixCan.firstChild) {
            pixCan.removeChild(pixCan.firstChild);  // Selects the first child in the Parent Node and removes it.
        }
};
// Made with a lot of refactoring, testing and love by Geoff
