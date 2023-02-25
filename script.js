let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + read;
  };
}

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const submit_Button = document.querySelector("#submit");
const book_Display = document.querySelector("#book-display");
const newBook = document.querySelector("#add-book");
const modal = document.querySelector("#modal");

newBook.addEventListener("click", (e) => {
  modal.style.display = "block";
});

submit_Button.addEventListener("click", (e) => {
  const newBook = new Book(title.value, author.value, pages.value, read.value);
  myLibrary.push(newBook.info());
  book_Display.textContent = myLibrary;
});

for (let i = 0; i < myLibrary.length; i++) {
  book_Display.textContent += myLibrary[i];
}
