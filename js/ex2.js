// Exercise 2 - GitHub Profile

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("fetchBtn").addEventListener("click", fetchProfile);
});

function fetchProfile() {
  const login = document.getElementById("loginInput").value.trim();
  const profileDiv = document.getElementById("profile");

  const url = `https://api.github.com/users/${login}`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      profileDiv.innerHTML = "";

      // Display profile picture in a paragraph
      let imgP = document.createElement("p");
      let img = document.createElement("img");
      img.src = data.avatar_url;
      img.alt = `${data.name} profile picture`;
      imgP.appendChild(img);
      profileDiv.appendChild(imgP);

      // Display name, blog, and account creation date in a table
      let table = document.createElement("table");

      // Name row
      let nameRow = document.createElement("tr");
      let nameTh = document.createElement("th");
      nameTh.textContent = "Name";
      let nameTd = document.createElement("td");
      nameTd.textContent = data.name;
      nameRow.appendChild(nameTh);
      nameRow.appendChild(nameTd);
      table.appendChild(nameRow);

      // Blog row
      let blogRow = document.createElement("tr");
      let blogTh = document.createElement("th");
      blogTh.textContent = "Blog";
      let blogTd = document.createElement("td");
      blogTd.textContent = data.blog;
      blogRow.appendChild(blogTh);
      blogRow.appendChild(blogTd);
      table.appendChild(blogRow);

      // Created at row
      let createdRow = document.createElement("tr");
      let createdTh = document.createElement("th");
      createdTh.textContent = "Account Created";
      let createdTd = document.createElement("td");
      createdTd.textContent = data.created_at;
      createdRow.appendChild(createdTh);
      createdRow.appendChild(createdTd);
      table.appendChild(createdRow);

      profileDiv.appendChild(table);
    })
    .catch(function(error) {
      console.error("Error fetching GitHub profile:", error);
    });
}
