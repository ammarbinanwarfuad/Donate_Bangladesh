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
document
  .getElementById("donationButton")
  .addEventListener("click", function () {
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
document
  .getElementById("donateButtonNoakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let totalBalance = getInnerTextById("totalBalance");
    let inputNoakhali = getInputValueById("inputNoakhali");
    let donatedNoakhali = getInnerTextById("donatedNoakhali");

    // Check if donation amount is valid or not
    if (inputNoakhali > 0 && inputNoakhali <= totalBalance) {
      let newBalance = totalBalance - inputNoakhali;
      let updateDonatedNoakhali = donatedNoakhali + inputNoakhali;

      // Update the Website
      document.getElementById("totalBalance").innerText = newBalance;
      document.getElementById("donatedNoakhali").innerText =
        updateDonatedNoakhali;

      // Add to transaction history
      addToTransactionHistory(inputNoakhali, "Noakhali, Bangladesh");
      showPopUp();
    } else {
      alert("Invalid Donation Amount");
    }
  });

// Donation logic for Feni
document
  .getElementById("donateButtonFeni")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let totalBalance = getInnerTextById("totalBalance");
    let inputFeni = getInputValueById("inputFeni");
    let donatedFeni = getInnerTextById("donatedFeni");

    // Check if donation amount is valid
    if (inputFeni > 0 && inputFeni <= totalBalance) {
      let newBalance = totalBalance - inputFeni;
      let updateDonatedFeni = donatedFeni + inputFeni;

      // Update the Website
      document.getElementById("totalBalance").innerText = newBalance;
      document.getElementById("donatedFeni").innerText = updateDonatedFeni;

      // Add to transaction history
      addToTransactionHistory(inputFeni, "Feni, Bangladesh");
      showPopUp();
    } else {
      alert("Invalid Donation Amount");
    }
  });

// Donation logic for Quota
document
  .getElementById("donateButtonQuota")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let totalBalance = getInnerTextById("totalBalance");
    let inputQuota = getInputValueById("inputQuota");
    let donatedQuota = getInnerTextById("donatedQuota");

    // Check if donation amount is valid
    if (inputQuota > 0 && inputQuota <= totalBalance) {
      let newBalance = totalBalance - inputQuota;
      let updateDonatedQuota = donatedQuota + inputQuota;

      // Update the Website
      document.getElementById("totalBalance").innerText = newBalance;
      document.getElementById("donatedQuota").innerText = updateDonatedQuota;

      // Add to transaction history
      addToTransactionHistory(inputQuota, "Quota, Bangladesh");
      showPopUp();
    } else {
      alert("Invalid Donation Amount");
    }
  });

//Function for Transaction History
function addToTransactionHistory(donate, location) {
  let currentTime = new Date();
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  let formattedDate = currentTime.toLocaleString("en-US", options);

  // New Div
  const div = document.createElement("div");
  div.classList.add(
    "p-5",
    "m-5",
    "rounded-md",
    "border",
    "border-gray-300",
    "shadow-sm"
  ); // Added rounded corners

  // Inner HTML of the new div
  div.innerHTML = `
        <p class="text-2xl font-bold">${donate} Taka is donated for famine-2024 at ${location}</p>
        <p>Date: ${formattedDate} GMT+6 (Bangladesh Standard Time)</p>
    `;

  // New Div to history Container
  document.getElementById("historyContainer").appendChild(div);
}


// Function for popup thanks message
const donatePopUp = document.getElementById('popup');

// Function to show the modal
function showPopUp() {
  donatePopUp.classList.remove('hidden');
}

// Function to hide the modal
document.getElementById('closepopup').addEventListener('click', function () {
  donatePopUp.classList.add('hidden');
});