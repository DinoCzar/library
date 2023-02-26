let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const submitButton = document.querySelector("#submit");
const bookDisplay = document.querySelector("#book-display");
const newBook = document.querySelector("#add-book");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");

newBook.addEventListener("click", (e) => {
  modal.style.display = "block";
  overlay.style.display = "block";
});

submitButton.addEventListener("click", (e) => {
  const newBook = new Book(title.value, author.value, pages.value);

  modal.style.display = "none";
  overlay.style.display = "none";

  const newCard = document.createElement("div");
  newCard.classList.add("new-card");
  newCard.dataset.number = myLibrary.indexOf(newBook);
  bookDisplay.appendChild(newCard);

  const titleDiv = document.createElement("div");
  titleDiv.textContent = ' " ' + newBook.title + ' " ';
  titleDiv.classList.add("title-div");
  newCard.appendChild(titleDiv);

  const authorDiv = document.createElement("div");
  authorDiv.textContent = "by " + newBook.author;
  authorDiv.classList.add("author-div");
  newCard.appendChild(authorDiv);

  const pagesDiv = document.createElement("div");
  pagesDiv.textContent = newBook.pages + " pages";
  pagesDiv.classList.add("pages-div");
  newCard.appendChild(pagesDiv);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons-div");
  newCard.appendChild(buttonsDiv);

  if (read.checked == true) {
    newBook.read = "Read";
  } else {
    newBook.read = "Not Read";
  }

  const readButton = document.createElement("button");
  readButton.classList.add("read-button");
  readButton.textContent = "Read";
  buttonsDiv.appendChild(readButton);

  readButton.addEventListener("click", (e) => {
    newBook.read = "Read";
  });

  myLibrary.push(newBook);
  title.value = "";
  author.value = "";
  pages.value = "";

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove Book";
  buttonsDiv.appendChild(removeButton);

  removeButton.addEventListener("click", (e) => {
    myLibrary.splice(newCard.dataset.number, 1);
    newCard.remove();
  });
});

for (let i = 0; i < myLibrary.length; i++) {
  const newDiv = document.createElement("div");
  newDiv.textContent = myLibrary[i].info();
  bookDisplay.appendChild(newDiv);
}
