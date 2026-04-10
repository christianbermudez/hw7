// Exercise 4 - FormData Key/Value Pairs

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Create FormData object from the form
    const formData = new FormData(document.getElementById("myForm"));

    // Clear previous output
    const output = document.getElementById("output");
    output.innerHTML = "";

    // Build table
    let table = document.createElement("table");

    // Header row
    let headerRow = document.createElement("tr");
    let keyTh = document.createElement("th");
    keyTh.textContent = "Key";
    let valueTh = document.createElement("th");
    valueTh.textContent = "Value";
    headerRow.appendChild(keyTh);
    headerRow.appendChild(valueTh);
    table.appendChild(headerRow);

    // Data rows — loop through each key/value pair
    for (let [key, value] of formData) {
      let row = document.createElement("tr");

      let keyTd = document.createElement("td");
      keyTd.textContent = key;

      let valueTd = document.createElement("td");
      valueTd.textContent = value;

      row.appendChild(keyTd);
      row.appendChild(valueTd);
      table.appendChild(row);
    }

    output.appendChild(table);
  });
});
