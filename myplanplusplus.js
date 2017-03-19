"use strict";

let searched = false;
let initialized = false;

setInterval(() => {
    let courses = document.querySelectorAll("td.courseResults__item--right");
    if (!searched && courses.length > 0) {
        main();
        searched = true;
        if (!initialized) {
            let buttons = document.querySelectorAll("a.fg-button");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("click", main);
            }
            let search = document.getElementById("searchForCourses");
            search.addEventListener("click", () => {
                searched = false;
            });
            initialized = true;
        }
    }
}, 500);

function main() {
    chrome.storage.sync.get({hiddenClasses: []}, function(item) {
        let hiddenClasses = item.hiddenClasses;
        let courses = document.querySelectorAll("td.courseResults__item--right");
        for (let i = 0; i < courses.length; i++) {
            let name = courses[i].parentNode.childNodes[0].innerHTML;
            if (hiddenClasses.includes(name)) {
                let table = courses[i].parentNode.parentNode;
                let row = courses[i].parentNode;
                table.removeChild(row);
            }
        }
    });
    let courses = document.querySelectorAll("td.courseResults__item--right");
    for (let i = 0; i < courses.length; i++) {
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