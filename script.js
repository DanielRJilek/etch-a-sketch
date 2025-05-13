const body = document.querySelector("body");
const container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

// container.style.display = "flex";
// container.style.flexDirection = "column";
// container.style.width = "75vw";
// container.style.height = "75vw";
// container.style.min

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div")
    row.classList.add("row");
    row.classList.add(i);
    // row.style.height = "6.25%";
    // row.style.minHeight = "6.25%";
    // row.style.width = "100%";              
    // row.style.display = "flex";
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        // square.style.border = "solid black 2px";
        square.classList.add("square")
        // square.style.height = "100%";
        // square.style.flex = "1";
        // square.style.backgroundColor = "red";
        row.appendChild(square);
    }
    container.appendChild(row);
}