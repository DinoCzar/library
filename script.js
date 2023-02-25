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

const submit_Button = document.querySelector("button");

const book_Display = document.querySelector("#book-display");

submit_Button.addEventListener("click", (e) => {
  const newBook = new Book(title.value, author.value, pages.value, read.value);
  myLibrary.push(newBook.info());
  book_Display.textContent = myLibrary;
});
