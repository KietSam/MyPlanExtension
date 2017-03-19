window.onload = function() {
    let button = document.getElementById("add");
    button.addEventListener("click", () => {
        chrome.storage.sync.get({hiddenClasses: []}, (item) => {
            let text = document.getElementById("hide").value;
            let hiddenClasses = item.hiddenClasses;
            hiddenClasses.push(text);
            chrome.storage.sync.set({"hiddenClasses": hiddenClasses}, () => {
                console.log("Settings saved");
            });
            document.getElementById("hide").value = "";
        });
    });
};