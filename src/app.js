// Define the initial state
let value = 0;

// Function to update the displayed value
function updateDisplay() {
    document.getElementById('value').textContent = value;
}

// Function to increment the value
function increment() {
    value++;
    updateDisplay();
}

// Function to decrement the value
function decrement() {
    value--;
    updateDisplay();
}

// Attach event listeners to buttons
document.getElementById('increment').addEventListener('click', increment);
document.getElementById('decrement').addEventListener('click', decrement);

// Initialize the display
updateDisplay();
