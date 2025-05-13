const body = document.querySelector("body");
const container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div")
    row.classList.add("row");
    row.classList.add(i);
    
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        
        square.classList.add("square")
        square.addEventListener("mouseover", () => {
            square.classList.add("hover");
        });
        row.appendChild(square);
    }
    container.appendChild(row);
}