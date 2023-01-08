import { multiply } from './calculations.js'

let body = document.querySelector("body");


// Headings
createAndAddElement(body, "h1", "Åsas sida");
createAndAddElement(body, "h2", "För att lära mig javascript");

createInformation(body);
createLinks(body);
createLists(body);
calculation(body);
createImageGroup(body);


// Creates and adds a div
function createAndAddElement(parent, elementType, textContent) {
    let element = document.createElement(elementType);
    element.textContent = textContent;
    parent.append(element);

    return element;
}

function createAndAddElementClass(parent, className, elementType, textContent) {
    let element = createAndAddElement(parent, elementType, textContent);
    element.className = className;
    return element;
}

function createAndAddElementId(parent, id, elementType, textContent) {
    let element = createAndAddElement(parent, elementType, textContent);
    element.id = id;
    return element;
}
function createAndAddElementClassId(parent, className, id, elementType, textContent) {
    let element = createAndAddElementClass(parent, className, elementType, textContent);
    element.id = id;
    return element;
}

// Link element
function createLinkElement(parent, href, textContent) {
    let linkElement = document.createElement("a");
    linkElement.href = href;
    linkElement.textContent = textContent;
    parent.append(linkElement);
}

// Information
function createInformation(parent) {
    let divElement = createAndAddElement(parent, "div", "");
    createAndAddElement(divElement, "p", "Denna sida är till för att jag sedan ska kunna skapa den dynamiskt i javascript");
    let text = createAndAddElement(divElement, "p", "Denna text innehåller ");
    createAndAddElement(text, "b", "fetstil");
}

// Links
function createLinks(parent) {
    let divElement = createAndAddElement(parent, "div", "");
    createAndAddElement(divElement, "h3", "Länkar");
    createLinkElement(divElement, "https://www.mozilla.org/en-US/about/manifesto/", "Mozilla Manifesto");
}

// Lists
function createLists(parent) {
    let divElement = createAndAddElement(parent, "div", "");
    createAndAddElement(divElement, "h3", "Listor");
    createUnorderedList(divElement, ["HTML", "Javascript", "CSS"]);
    createOrderedList(divElement, ["HTML", "CSS", "Javascript"]);
}

// Unordered list
function createUnorderedList(parent, itemNames) {
    let olGroup = createAndAddElement(parent, "div", "");
    createAndAddElementClass(olGroup, "link-label", "label", "Osorterad");
    let olList = createAndAddElement(olGroup, "ul", "");

    let nameArray = [...itemNames];
    nameArray.forEach(name => {
        createAndAddElement(olList, "li", name)
    });
}

// Ordered list
function createOrderedList(parent, itemNames) {
    let olGroup = createAndAddElement(parent, "div", "");
    createAndAddElementClass(olGroup, "link-label", "label", "Sorterad");
    let olList = createAndAddElement(olGroup, "ol", "");

    let nameArray = [...itemNames];
    nameArray.forEach(name => {
        createAndAddElement(olList, "li", name)
    });
}

// Calculation
function calculation(parent) {
    let calculationDivElement = createAndAddElementClass(parent, "flex-auto", "div", "");

    let divElement = createAndAddElementClass(calculationDivElement, "input-class", "div", "");
    createAndAddElement(divElement, "label", "Ange tal separerade med mellanslag:");
    createAndAddElement(divElement, "br", "");
    createAndAddElementClassId(divElement, "my-textbox", "numberString", "textarea", "");

    let buttonDivElement = createAndAddElementClass(calculationDivElement, "button-div-class", "div", "");
    createAndAddElementClassId(buttonDivElement, "my-button", "addButton", "button", "Addera alla tal");
    document.getElementById("addButton").addEventListener("click", addAllNumbers);
    createAndAddElementClassId(buttonDivElement, "my-button", "multiplyButton", "button", "Multiplicera alla tal");
    document.getElementById("multiplyButton").addEventListener("click", multiply);

    let resultDivElement = createAndAddElementClass(calculationDivElement, "result-div-class", "div", "");
    let resultElement = createAndAddElementClass(resultDivElement, "result-class", "div", "");
    createAndAddElement(resultElement, "label", "Resultat:");
    createAndAddElement(resultElement, "br", "");
    createAndAddElementClassId(resultElement, "my-textbox", "resultElement", "textarea", "");
}

// Images
function createImageGroup(parent) {
    let divElement = createAndAddElement(parent, "div", "");
    createAndAddElement(divElement, "br", "");
    createAndAddElement(divElement, "br", "");
    createImage(divElement, "images/blomma.jpeg", "En blombukett");
}

function createImage(parent, src, alt) {
    let imageItem = createAndAddElement(parent, "img", "");
    imageItem.src = src;
    imageItem.alt = alt;
    parent.append(imageItem);
}

function addAllNumbers() {
    let numberString = document.getElementById("numberString").value;
    let numberArray = numberString.split(" ");
    let result = 0;

    numberArray.forEach(element => {
        result = result + parseInt(element);
    });

    let resultItem = document.getElementById("resultElement");
    resultItem.textContent = result;
}

//function multiplyAllNumbers() {
//    let numberString = document.getElementById("numberString").value;
//    let numberArray = numberString.split(" ");
//    let result = 0;

//    if (numberArray.length > 0) result = 1;

//    numberArray.forEach(element => {
//        result = result * parseInt(element);
//    });

//    let resultItem = document.getElementById("resultElement");
//    resultItem.textContent = result;
//}