// Exercise 1 - Famous Paintings

const url = "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(paintings) {
    const table = document.getElementById("paintings");

    paintings.forEach(function(painting) {
      let row = document.createElement("tr");

      let nameTd = document.createElement("td");
      nameTd.textContent = painting.name;

      let yearTd = document.createElement("td");
      yearTd.textContent = painting.year;

      let artistTd = document.createElement("td");
      artistTd.textContent = painting.artist;

      row.appendChild(nameTd);
      row.appendChild(yearTd);
      row.appendChild(artistTd);
      table.appendChild(row);
    });
  })
  .catch(function(error) {
    console.error("Error fetching paintings:", error);
  });
