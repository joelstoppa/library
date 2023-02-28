let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

const theHobbit = new Book("The Hobbit", "Tolkien", 300, "read");
addBookToLibrary(theHobbit);

const harryPotter = new Book("Harry Potter", "J.K. Rowling", 450, "not read");
addBookToLibrary(harryPotter);

const container = document.getElementById("cardsContainer");

function displayBooks() {
  container.innerHTML = "";
  myLibrary.forEach((book) => {
    let card = document.createElement("div");
    container.append(card);
    card.innerHTML = `<p>Title: ${book.title}</p> <p>Author: ${book.author}</p> <p>Pages: ${book.pages}</p> <p>Read: ${book.read}</p>`;
  });
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.querySelector('input[name="read"]:checked').value;

  const newBook = new Book(title, author, pages, read);

  addBookToLibrary(newBook);

  form.reset();

  displayBooks();
});

displayBooks();

const addBookButton = document.getElementById("addBookButton");

addBookButton.addEventListener("click", () => {
  form.style.visibility = "visible";
});
