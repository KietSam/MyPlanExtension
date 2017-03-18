setTimeout(() => {
    main();
    let buttons = document.querySelectorAll("a.fg-button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            main();
        });
    }
}, 500);

function main() {
    let courses = document.querySelectorAll("td.courseResults__item--right");
    for (let i = 0; i < courses.length; i++) {
        let child = courses[i].childNodes[0];
        let span = document.createElement("span");
        span.innerHTML = "X ";
        span.classList.add("exits");
        span.onclick = removeClass;
        courses[i].appendChild(span);
    }
}

function removeClass() {
    let table = this.parentNode.parentNode.parentNode;
    let row = this.parentNode.parentNode;
    table.removeChild(row);
}