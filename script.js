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
const submitButton = document.querySelector("#submit");
const bookDisplay = document.querySelector("#book-display");
const newBook = document.querySelector("#add-book");
const modal = document.querySelector("#modal");

newBook.addEventListener("click", (e) => {
  modal.style.display = "block";
});

submitButton.addEventListener("click", (e) => {
  const newBook = new Book(title.value, author.value, pages.value, read.value);
  myLibrary.push(newBook);
  modal.style.display = "none";
  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.textContent = myLibrary[i].info();
    bookDisplay.appendChild(newDiv);
  }
});
