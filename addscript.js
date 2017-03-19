window.onload = function() {
    chrome.storage.sync.get({hiddenClasses: []}, (item) => {
        let list = document.getElementById("list");
        let hiddenClasses = item.hiddenClasses;
        for (let i = 0; i < hiddenClasses.length; i++) {
            let span = document.createElement("span");
            let li = document.createElement("li");
            span.innerHTML = hiddenClasses[i];
            li.appendChild(span);
            let button = document.createElement("button");
            button.innerHTML = "Remove";
            button.addEventListener("click", () => {
                hiddenClasses.splice(i, 1);
                chrome.storage.sync.set({"hiddenClasses": hiddenClasses}, () => {
                    console.log("Settings saved");
                });
                list.removeChild(li);
            });
            span.appendChild(button);
            list.appendChild(li);
        }
    });
    let button = document.getElementById("add");
    button.addEventListener("click", () => {
        chrome.storage.sync.get({hiddenClasses: []}, (item) => {
            let text = document.getElementById("hide").value;
            let hiddenClasses = item.hiddenClasses;
            hiddenClasses.push(text);
            let span = document.createElement("span");
            let li = document.createElement("li");
            span.innerHTML = text;
            li.appendChild(span);
            let button = document.createElement("button");
            button.innerHTML = "Remove";
            button.addEventListener("click", () => {
                hiddenClasses.splice(i, 1);
                chrome.storage.sync.set({"hiddenClasses": hiddenClasses}, () => {
                    console.log("Settings saved");
                });
                list.removeChild(li);
            });
            span.appendChild(button);
            list.appendChild(li);
            chrome.storage.sync.set({"hiddenClasses": hiddenClasses}, () => {
                console.log("Settings saved");
            });
            document.getElementById("hide").value = "";
        });
    });
};