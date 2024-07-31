// Function to convert Kg to Lbs and update result

function convert() {
    // Get the input - convert to float
    const kg = parseFloat(document.getElementById('kgInput').value)

    // Check if input == valid number || >0
    if(isNaN(kg) || kg <= 0) {
        document.getElementById('result').textContent = "Invalid Input. Please enter a valid number greater than zero."
        return
    }

    // Convert Kg - Lbs using (1kg == 2.20462Lbs)
    const pounds = kg * 2.20462

    // Update result paragraph == pounds
    document.getElementById('result').textContent = `${kg} kilograms is equal to ${pounds.toFixed(2)} pounds.`
}