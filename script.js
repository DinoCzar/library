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

function addBookToLibrary() {
  myLibrary.push(newBook);
}

console.log(myLibrary);

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

const submit_Button = document.querySelector("button");

submit_Button.addEventListener("click", (e) => {
  console.log(title.value + author.value + pages.value + read.value);
});
