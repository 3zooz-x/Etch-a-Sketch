const cont = document.querySelector(".container");
const btn = document.querySelector("button");

function makeGrid(number) {
    let square = 800 / number;
    for(i = 0; i < number * number; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = `${square}px`;
        div.style.height = `${square}px`;
        cont.appendChild(div);
    }
}
makeGrid(64);

const div = document.querySelector("div");
const divChild = document.querySelector(".square");
let opacity = 0.0;
div.addEventListener("mouseover", (event) => {
        const element = event.target;
        let red = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        element.style.backgroundColor = `rgb(${red} ${blue} ${green} / ${opacity})`;
        event.stopPropagation();
        opacity += 0.1;
})
btn.addEventListener("click", () =>{
    let size = prompt("Enter a number to rezise the canvas");
    if (size > 100) {
        do {
            size = prompt("Enter a number to rezise the canvas");
        } while(size > 100)
        cont.replaceChildren();
        makeGrid(size);    
    }
    else {
        cont.replaceChildren();
        makeGrid(size);
    }
});