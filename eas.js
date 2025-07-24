const projContainer = document.body.querySelector('.project-container');
etchSketch();


function etchSketch() {
  createGrid(50, projContainer);
  const button = projContainer.querySelector('.grid-button');
  button.addEventListener("click", () => resetGrid(projContainer));
}
function createGrid(gridSize) {
  const gridContainer = projContainer.querySelector('.grid-container');
  for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement('div');
    gridRow.className = "grid-row";
    for (let i = 0; i < gridSize; i++) {
      const gridBox = document.createElement('div');
      gridBox.className = "grid-box";
      gridRow.appendChild(gridBox);
      gridBox.addEventListener("mouseover", (e) => gridBox.style.backgroundColor = "white");
    }
    gridContainer.appendChild(gridRow);
  }
}

function resetGrid() {
  let gridSize = 16;
    gridSize = Number(prompt("Choose a grid size 1-100:"));
    const gridContainer = projContainer.querySelector('.grid-container');
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.lastChild);
    }
    createGrid(gridSize, projContainer);
}