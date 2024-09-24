//totalBalance

//donateButtonNoakhali
//donateButtonFeni
//donateButtonQuota

//inputNoakhali
//inputFeni
//inputQuota

//donatedNoakhali
//donatedFeni
//donatedQuota

console.clear();

//Function to get inner text and convert it into a number
function getInnerTextById(id) {
    return parseFloat(document.getElementById(id).innerText) || 0;
}


// Function to get the value from input and convert it into a number
function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}