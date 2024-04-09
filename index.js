function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
      return data; // Return the JSON-ified data
    });
}

// Call fetchBooks() when index.html is loaded
document.addEventListener('DOMContentLoaded', fetchBooks);