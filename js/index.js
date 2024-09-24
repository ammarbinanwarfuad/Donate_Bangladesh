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
//Donation Button
document.getElementById("donationButton").addEventListener("click", function () {
    document.getElementById("donationButton").classList.add("primaryButton");
    document.getElementById("historyButton").classList.remove("primaryButton");

    //safely delete hidden class from all parts
    document.getElementById("noakhali").classList.remove("hidden");
  document.getElementById("feni").classList.remove("hidden");
  document.getElementById("quota").classList.remove("hidden");
  document.getElementById("historyContainer").classList.add("hidden");
});
//History Button
document.getElementById("historyButton").addEventListener("click", function () {
    document.getElementById("donationButton").classList.remove("primaryButton");
    document.getElementById("historyButton").classList.add("primaryButton");
//safely add remove to all parts
  document.getElementById("noakhali").classList.add("hidden");
  document.getElementById("feni").classList.add("hidden");
  document.getElementById("quota").classList.add("hidden");
  document.getElementById("historyContainer").classList.remove("hidden");
});



//Donation Logic For Noakhali
document.getElementById("donateButtonNoakhali").addEventListener("click", function(event) {
    event.preventDefault();

    let totalBalance = getInnerTextById("totalBalance");
    let inputNoakhali = getInputValueById("inputNoakhali");
    let donatedNoakhali = getInnerTextById("donatedNoakhali");

    // Check if donation amount is valid or not
    if (inputNoakhali > 0 && inputNoakhali <= totalBalance) {
        let newBalance = totalBalance - inputNoakhali;
        let updateDonatedNoakhali = donatedNoakhali + inputNoakhali;
    } else {
        alert("Invalid Donation Amount");
    }
});

// Donation logic for Feni
document.getElementById("donateButtonFeni").addEventListener("click", function(event) {
    event.preventDefault();

    let totalBalance = getInnerTextById("totalBalance");
    let inputFeni = getInputValueById("inputFeni");
    let donatedFeni = getInnerTextById("donatedFeni");

    // Check if donation amount is valid
    if (inputFeni > 0 && inputFeni <= totalBalance) {
        let newBalance = totalBalance - inputFeni;
        let updateDonatedFeni = donatedFeni + inputFeni;
    } else {
        alert("Invalid Donation Amount");
    }
});

// Donation logic for Quota
document.getElementById("donateButtonQuota").addEventListener("click", function(event) {
    event.preventDefault();

    let totalBalance = getInnerTextById("totalBalance");
    let inputQuota = getInputValueById("inputQuota");
    let donatedQuota = getInnerTextById("donatedQuota");

    // Check if donation amount is valid
    if (inputQuota > 0 && inputQuota <= totalBalance) {
        let newBalance = totalBalance - inputQuota;
        let updateDonatedQuota = donatedQuota + inputQuota;
    } else {
        alert("Invalid Donation Amount");
    }
});