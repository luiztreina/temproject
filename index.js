function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById('inputTemp').value);
  const unitSelect = document.getElementById('unitSelect').value;
  let result = '';

  if (isNaN(inputTemp)) {
    result = 'Please enter a valid number';
  } else {
    if (unitSelect === 'CtoF') {
      result = (inputTemp * 9/5) + 32;
      result = `${inputTemp}°C is equal to ${result.toFixed(2)}°F`;
    } else {
      result = (inputTemp - 32) * 5/9;
      result = `${inputTemp}°F is equal to ${result.toFixed(2)}°C`;
    }
  }

  document.getElementById('result').innerText = result;
}
