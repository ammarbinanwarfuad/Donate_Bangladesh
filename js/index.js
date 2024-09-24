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

// Two Buttons Behavior
document.getElementById("donationButton").addEventListener("click", function () {
    document.getElementById("donationButton").classList.add("primaryButton");
    document.getElementById("historyButton").classList.remove("primaryButton");

    //safely delete hidden class from all parts
    document.getElementById("noakhali").classList.remove("hidden");
  document.getElementById("feni").classList.remove("hidden");
  document.getElementById("quota").classList.remove("hidden");
  document.getElementById("historyContainer").classList.add("hidden");
});