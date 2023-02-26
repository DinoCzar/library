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
const overlay = document.querySelector("#overlay");

newBook.addEventListener("click", (e) => {
  modal.style.display = "block";
  overlay.style.display = "block";
});

submitButton.addEventListener("click", (e) => {
  const newBook = new Book(title.value, author.value, pages.value);

  const newCard = document.createElement("div");
  newCard.classList.add("new-card");
  newCard.dataset.number = myLibrary.indexOf(newBook);
  bookDisplay.appendChild(newCard);

  const leftDiv = document.createElement("div");
  leftDiv.textContent = newBook.info();
  leftDiv.classList.add("left-div");
  newCard.appendChild(leftDiv);

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("right-div");
  newCard.appendChild(rightDiv);

  const readLabel = document.createElement("label");
  readLabel.setAttribute("for", "read-checkbox");
  readLabel.textContent = "Read:";
  readLabel.classList.add("read-label");
  newCard.appendChild(readLabel);

  const readCheckbox = document.createElement("input");
  readCheckbox.setAttribute("type", "checkbox");
  readCheckbox.setAttribute("id", "read-checkbox");
  readCheckbox.setAttribute("name", "read-checkbox");
  readCheckbox.classList.add("read-checkbox");
  newCard.appendChild(readCheckbox);

  if (read.checked == true) {
    newBook.read = "Read";
    readCheckbox.checked = true;
  } else {
    newBook.read = "Not Read Yet";
  }

  const readButton = document.createElement("button");
  readButton.classList.add("read-button");
  readButton.textContent = "Mark As Read";
  rightDiv.appendChild(readButton);

  readButton.addEventListener("click", (e) => {
    newBook.read = "Read";
    readCheckbox.checked = true;
  });

  myLibrary.push(newBook);
  modal.style.display = "none";
  overlay.style.display = "none";
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove Book";
  rightDiv.appendChild(removeButton);

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
