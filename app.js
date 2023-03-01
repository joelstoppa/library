const container = document.getElementById("cardsContainer");
const form = document.querySelector("form");

// Array of books
let myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  //Transform string value to boolean
  this.read = JSON.parse(read);
}

// Default books
const theHobbit = new Book("The Hobbit", "Tolkien", 300, "true");
addBookToLibrary(theHobbit);

const harryPotter = new Book("Harry Potter", "J.K. Rowling", 450, "false");
addBookToLibrary(harryPotter);

// Add book to array
function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

// Display each book in the array
function displayBooks() {
  container.innerHTML = "";
  myLibrary.forEach((book, index) => {
    let card = document.createElement("div");
    card.classList.add("cards");
    container.append(card);

    let removeButton = document.createElement("button");
    removeButton.setAttribute("data-index", index);
    removeButton.classList.add("removeButton");
    removeButton.innerText = "Remove";

    let readButton = document.createElement("button");
    readButton.innerText = book.read ? "Status: Read" : "Status: Unread";
    readButton.classList.add(book.read ? "readButton" : "notReadButton");
    readButton.addEventListener("click", () => {
      book.read = !book.read;
      displayBooks();
    });

    card.innerHTML = `<p>Title: ${book.title}</p> <p>Author: ${book.author}</p> <p>Pages: ${book.pages}</p>`;
    card.append(readButton, removeButton);
  });
  // Add event listener to remove buttons
  addClickListener();
}

// Add new book to array from form values and display it
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

// Display default books
displayBooks();

// Show form when clicking Add Book button
const addBookButton = document.getElementById("addBookButton");

addBookButton.addEventListener("click", () => {
  form.style.display = "flex";
});

// Hide form when clicking Cancel button
const cancelButton = document.getElementById("cancelButton");

cancelButton.addEventListener("click", () => {
  form.style.display = "none";
});

//Remove buttons remove the card associated to it's index
function addClickListener() {
  const removeButtons = document.querySelectorAll(".removeButton");
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", () => {
      let index = removeButton.dataset.index;
      myLibrary.splice(index, 1);
      displayBooks();
      //Decrement buttons data-index
      removeButtons.forEach((removeButton) => {
        removeButton.dataset.index--;
      });
    });
  });
}

console.table(myLibrary);
