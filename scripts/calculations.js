let add = function addAllNumbers() {
    let numberString = document.getElementById("numberString").value;
    let numberArray = numberString.split(" ");
    let result = 0;

    numberArray.forEach(element => {
        result = result + parseInt(element);
    });

    let resultItem = document.getElementById("resultElement");
    resultItem.textContent = result;
}

let multiply = function multiplyAllNumbers() {
    let numberString = document.getElementById("numberString").value;
    let numberArray = numberString.split(" ");
    let result = 0;

    if (numberArray.length > 0) result = 1;

    numberArray.forEach(element => {
        result = result * parseInt(element);
    });

    let resultItem = document.getElementById("resultElement");
    resultItem.textContent = result;
}

export { add, multiply }