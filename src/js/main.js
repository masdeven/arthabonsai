document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk memuat file HTML ke dalam elemen
  const loadHTML = (elementId, filePath) => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.text();
      })
      .then((data) => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch((error) => {
        console.error("Error loading HTML:", error);
        document.getElementById(
          elementId
        ).innerHTML = `<p style="color:red;">Failed to load ${filePath}</p>`;
      });
  };

  // Muat navbar dan footer
  loadHTML("navbar-placeholder", "./partials/navbar.html");
  loadHTML("footer-placeholder", "./partials/footer.html");
});
