const display = document.getElementById("display");

// Append values to the display
function appendValue(value) {
  display.value += value;
}

// Clear the entire display
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
  try {
    display.value = eval(display.value); // Note: 'eval' is okay here in a simple app
  } catch (error) {
    alert("Invalid Expression");
  }
}

