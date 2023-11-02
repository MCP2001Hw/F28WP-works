function saveData() {
  const dataInput = document.getElementById('data-input');
  sessionStorage.setItem('myData', dataInput.value);
  displayData();
}

function clearData() {
  sessionStorage.removeItem('myData');
  displayData();
}

function displayData() {
  const dataOutput = document.getElementById('data-output');
  dataOutput.textContent = `Session Storage Data: ${sessionStorage.getItem('myData') || 'No Data'}`;
}

displayData();