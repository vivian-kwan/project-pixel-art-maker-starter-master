// Select color input
const cellColor = document.querySelector('#colorPicker');
// Select size input
const pixelCanvas = document.querySelector('#sizePicker');
const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');

const tableDrawing = document.querySelector('#pixelCanvas');



// Your code goes here!



function updateTable(Height, Width) {
    for (var x = 0; x < (Height); x += 1) {
        var trNode = document.createElement("tr");
        tableDrawing.appendChild(trNode);
        trNode.setAttribute("id", "Row" + x);
        for (var y = 0; y < (Width); y += 1) {
            var tdNode = document.createElement("td");
            document.querySelectorAll('tr')[x].appendChild(tdNode);
            tdNode.setAttribute("class", 'hover');
            var cellIndex = ((x * (Width)) + (y + 1)) - 1;
            tdNode.setAttribute("id", cellIndex);
            tdNode.setAttribute("onclick", "updateCellColor()");
        }
    }

}

function updateCellColor() {
    if (event.target.style.background != 'white') {
        event.target.style.background = 'white';
    } else {
        event.target.style.background = cellColor.value;
    }
}


function deleteTable() {
    var tableLengh = tableDrawing.rows.length;
    for (var i = 0; i < tableLengh; i++) {
        var row = tableDrawing.rows[i];
        if (tableLengh <= 0) {
            break;
        }
        tableDrawing.deleteRow(i);
        tableLengh--;
        i--;
    }
}




pixelCanvas.addEventListener('submit', function changeColor(event) {
    deleteTable() //remove all tr and td
    tableDrawing.style.backgroundColor = 'white'; // paint the cell with the color
    updateTable((inputHeight.value), (inputWidth.value)); //updatingListening((inputHeight.value),(inputWidth.value))
    event.preventDefault();
})
