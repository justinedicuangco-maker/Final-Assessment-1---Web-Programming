const costInput = document.getElementById("cost");
const litresInput = document.getElementById("litres");
const totalOutput = document.getElementById("total");
const calculateBtn = document.getElementById("calculateBtn");

/**
 * Function to calculate petrol cost
 */
function calculateTotal() {
    // Get values and convert to numbers
    const costPerLitre = parseFloat(costInput.value);
    const litres = parseFloat(litresInput.value);

    // Calculate total cost
    const total = costPerLitre * litres;

    // Display result with 2 decimal places
    totalOutput.textContent = total.toFixed(2);
}

calculateBtn.addEventListener("click", calculateTotal);