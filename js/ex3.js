// Exercise 3 - Visited Countries

const travelData = {
  name: "Christian Bermudez",
  countries: [
    { name: "Mexico", year: 2022 },
    { name: "Colombia", year: 2021 },
    { name: "Spain", year: 2023 }
  ]
};

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(travelData)
})
  .then(function(response) {
    return response.text();
  })
  .then(function(message) {
    console.log(message);
  })
  .catch(function(error) {
    console.error("Error sending data:", error);
  });