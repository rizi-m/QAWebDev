let sendRequest = function(URL, requestType, onload) {
//    const requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
    const request = new XMLHttpRequest();
    request.open('GET', URL);
    request.responseType = 'json';
    request.send();
    request.onload = () => onload(request.response);
}

let createElement = function(element, innerHTML) {
    const domObject = document.createElement(element);
    domObject.innerHTML = innerHTML;
    return domObject;
}

let createListOfPowers = function(powers) {
    const listObj = createElement('ul', "");
    powers.forEach((power) => listObj.appendChild(createElement("li", power)));
    return listObj;
}

let createMemberElementHTML = function(member, key) {
    const data = member[key];
    if (key == "name") { return createElement("h2", data); }
    if (key == "powers") { return createListOfPowers(data); }
    return createElement("h3", data);
}

let createMemeberHTML = function(member) {
    const memberDiv = createElement('div', "");
    memberDiv.className = "members-div";
    const memberElements = Object.keys(member).map((key) => createMemberElementHTML(member, key));
    memberElements.splice(3, 0, createElement("h3", "Powers:"));
    memberElements.forEach((member) => memberDiv.appendChild(member));
    return memberDiv;
}

let createSquadInfoElement = function(data, info) {
    let label = info.replace( /([A-Z])/g, " $1" );
    label = label.charAt(0).toUpperCase() + label.slice(1);
    const squadData = data[info];
    return (info == "squadName") ? createElement("h1", squadData) : createElement("h2", label + ": " + squadData);
}

let displayJSONData = function(data) {
    const contentDiv = document.getElementById("main-content-second");
    const squadInfoElements = Object.keys(data)
        .filter((key) => key != "members")
        .map((key) => createSquadInfoElement(data, key));
    squadInfoElements.forEach((info) => contentDiv.append(info));
    const membersHeader = createElement("h1", "Members");
    membersHeader.id = "members-header";
    contentDiv.appendChild(membersHeader);
    data.members
        .map((member) => createMemeberHTML(member))
        .forEach((memberHTML) => contentDiv.appendChild(memberHTML));
}

sendRequest('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json', 'GET', displayJSONData);