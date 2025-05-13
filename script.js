const body = document.querySelector("body");
const button = document.createElement("button");
button.textContent = "Change Size";
button.addEventListener("click", () => {
    gridPrompt(container);
});
const container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(button);
body.appendChild(container);

function createGrid(length) {
    if (length > 100) {
        length = 100;
    }
    for (let i = 0; i < length; i++) {
        const row = document.createElement("div")
        row.classList.add("row");
        row.classList.add(i);
        let rowHeight = container.offsetHeight / length;
        row.style.height = rowHeight + 'vw';
        
        for (let j = 0; j < length; j++) {
            const square = document.createElement("div");
            
            square.classList.add("square")
            square.addEventListener("mouseover", () => {
                square.classList.add("hover");
            });
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function gridPrompt(container) {
    let length = prompt("Enter the width of the new grid:");
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    createGrid(length);
}

createGrid(21);