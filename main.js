function setLimit() {
    let divContainer = document.getElementById("div-container");
    divContainer.style.width = getGridSize() + "px";
    divContainer.style.height = getGridSize() + "px";
}

function generateDivs() {
    const gridSize = getGridSize() / gridNumber;

    for (let i = 0; i < gridNumber * gridNumber; i++){
        const div = document.createElement("div");
        div.classList.add("box");
        div.style.border = "1px solid rgb(204, 204, 204)";
        div.style.width = gridSize - 2 + "px";
        div.style.height = gridSize - 2 + "px";
        
        div.addEventListener("mouseover", () => {
            div.style.background = "#" + currentColor;
            div.style.borderColor = "#" + currentBorder;
        });

        divs.push(div);

        document.getElementById("div-container").appendChild(div);
    }
}

function enableButtons() {
    document.getElementById("reset-button").addEventListener("click", () => {
        eraseGrid();
    });
    document.getElementById("color-red").addEventListener("click", () => {
        currentColor = "d33333";
        currentBorder = "d33333";
    });
    document.getElementById("color-erase").addEventListener("click", () => {
        currentColor = "ffffff";
        currentBorder = "cccccc";
    });
}

function createLayout() {
    setLimit();
    generateDivs();
    enableButtons();
}

function getGridSize() {
    if (screen.width > 1600) {
        return 720;
    }
    else {
        return 480;
    };
}

function eraseGrid() {
    divs.forEach(function(div) {
        div.style.background = "#ffffff";
        div.style.borderColor = "#cccccc";
    });
}

const divs = [];

let gridNumber = 16;
let currentColor = "ffffff";
let currentBorder = "cccccc";

createLayout();