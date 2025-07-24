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
      gridBox.style.backgroundColor = getRandomColor();
      gridBox.style.opacity = 0;
      gridRow.appendChild(gridBox);
      gridBox.addEventListener("mouseover", (e) => {
        let currentOpacity = parseFloat(getComputedStyle(gridBox).opacity);
        if (currentOpacity < 1) {
          gridBox.style.opacity = (currentOpacity + 0.1).toString();
        }
      });
    }
    gridContainer.appendChild(gridRow);
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function resetGrid() {
  let gridSize = 101;
  while (gridSize > 100 || gridSize < 1) {
    gridSize = Number(prompt("Choose a grid size 1-100:"));
  }
    const gridContainer = projContainer.querySelector('.grid-container');
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.lastChild);
    }
    createGrid(gridSize, projContainer);
}