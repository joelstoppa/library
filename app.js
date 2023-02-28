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

const container = document.querySelector("main");

myLibrary.forEach((book) => {
  let card = document.createElement("div");
  container.append(card);
  card.innerHTML = `<p>Title: ${book.title}</p> <p>Author: ${book.author}</p> <p>Pages: ${book.pages}</p> <p>Read: ${book.read}</p>`;
});
