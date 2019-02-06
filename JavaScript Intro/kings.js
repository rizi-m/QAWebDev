let createDetailsDiv = function() {
    const mainContentDiv = document.getElementById("main-content-third");
    const preExistingDiv = document.getElementById("king-details");
    if (preExistingDiv) { mainContentDiv.removeChild(preExistingDiv); }
    const detailsDiv = createElement('div', "");
    detailsDiv.id = "king-details";
    mainContentDiv.appendChild(detailsDiv);
}

let showKing = function(king) {
    const detailsDiv = document.getElementById("king-details");
    detailsDiv.appendChild(createElement('h1', king.nm));
    detailsDiv.appendChild(createElement('h2', "Country: " + king.cty));
    detailsDiv.appendChild(createElement('h2', "House: " + king.hse));
    detailsDiv.appendChild(createElement('h2', "Years: " + king.yrs));
}

let showError = function(message) {
    const detailsDiv = document.getElementById("king-details");
    detailsDiv.appendChild(createElement('h1', message));
}

let showResults = function(data) {
    const query = document.getElementById("user-input-kings").value;
    createDetailsDiv();
    if (query) {
        createDetailsDiv();
        const result = data.filter((king) => king.nm.toLowerCase() == query.toLowerCase())[0];
        if (result) { showKing(result);} 
        else { showError("No Royalty Found"); }
    } else {
        showError("Please enter search query")
    }
} 

const search = function() {
    sendRequest('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json', 'GET', showResults);
};
