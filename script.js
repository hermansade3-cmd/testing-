fetch("books.json")
  .then(response => response.json())
  .then(data => {
    // Chukua container ya vitabu
    const container = document.getElementById("books-container");

    // Sakinisha kila kitabu
    data.forEach(book => {
      container.innerHTML += `
        <div class="book-card">
          <div class="book-image">📘</div>
          <h3>${book.title}</h3>
          <p>${book.description}</p>
          <p class="price">${book.price}</p>

          <!-- Download Bure -->
          <a href="${book.file}" download>
            <button>Download Bure</button>
          </a>

          <!-- Somwa Bure -->
          <a href="${book.file}" target="_blank">
            <button>Somwa Bure</button>
          </a>
        </div>
      `;
    });
  })
  .catch(error => {
    console.error("Kuna tatizo kusoma books.json:", error);
  });
