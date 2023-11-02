function saveData() {
  const dataInput = document.getElementById('data-input');
  localStorage.setItem('myData', dataInput.value);
  displayData();
}

function clearData() {
  localStorage.removeItem('myData');
  displayData();
}

function displayData() {
  const dataOutput = document.getElementById('data-output');
  dataOutput.textContent = `Local Storage Data: ${localStorage.getItem('myData') || 'No Data'}`;
}

displayData();