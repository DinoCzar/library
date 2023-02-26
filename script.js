let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages.";
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
  const newBook = new Book(title.value, author.value, pages.value);

  if (read.checked == true) {
    newBook.read = "Read";
  } else {
    newBook.read = "Not Read Yet";
  }

  console.log(newBook.read);

  myLibrary.push(newBook);
  modal.style.display = "none";
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;

  const newCard = document.createElement("div");
  newCard.classList.add("new-card");
  newCard.dataset.number = myLibrary.indexOf(newBook);
  bookDisplay.appendChild(newCard);

  const newDiv = document.createElement("div");
  newDiv.textContent = newBook.info();
  newDiv.classList.add("new-div");
  newCard.appendChild(newDiv);

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove";
  newCard.appendChild(removeButton);

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
