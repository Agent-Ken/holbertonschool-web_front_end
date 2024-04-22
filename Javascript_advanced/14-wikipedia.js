function createElement(data) {
    const paragraph = document.createElement("p");
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*")
        .then(response => response.json())
        .then(data => {
            const extract = data.query.pages[21721040].extract;
            callback(extract);
        });
}

queryWikipedia(createElement);
