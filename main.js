let myLibrary = [];

function Book(title, pages, author, published, lastRead) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.published = published;
  this.lastRead = lastRead;
}

Book.prototype.getTitle = function getTitle() {
  return this.title;
};

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function createBook(title, pages, author, published, lastRead) {
  let newBook = new Book(title, pages, author, published, lastRead);
  return newBook;
}

function create(book) {
  const { title, pages, author, published, lastRead } = book;

  const cell = document.createElement("div");
  cell.classList.add("mdl-cell");
  cell.classList.add("mdl-cell--3-col");
  cell.style.width = "max-content";

  const card = document.createElement("div");
  card.classList.add("mdl-card");
  card.classList.add("mdl-shadow--6dp");

  const cardTitleExpand = document.createElement("div");
  cardTitleExpand.classList.add("mdl-card__title");
  cardTitleExpand.classList.add("mdl-card--expand");

  const cardTitleText = document.createElement("h2");
  cardTitleText.classList.add("mdl-card__title-text");
  cardTitleText.textContent = `${title}`;

  const supportingText = document.createElement("div");
  supportingText.classList.add("mdl-card__supporting-text");

  //row author
  const authorLine = document.createElement("div");
  authorLine.classList.add("author-line");

  const authorText = document.createElement("span");
  authorText.textContent = "Author: ";

  const authorName = document.createElement("span");
  authorName.classList.add("author");
  authorName.textContent = `${author}`;

  const lineBreak = document.createElement("br");
  //

  //row published
  const publishedLine = document.createElement("div");
  publishedLine.classList.add("published-line");

  const publishedText = document.createElement("span");
  publishedText.textContent = "Published: ";

  const publishedDate = document.createElement("span");
  publishedDate.classList.add("published-date");
  publishedDate.textContent = `${published}`;

  const lineBreakTwo = document.createElement("br");
  //

  //row pages
  const pagesLine = document.createElement("div");
  pagesLine.classList.add("pages-line");

  const pagesText = document.createElement("span");
  pagesText.textContent = "Pages: ";

  const pagesNum = document.createElement("span");
  pagesNum.classList.add("pages");
  pagesNum.textContent = `${pages}`;

  const lineBreakThree = document.createElement("br");
  //

  //row read
  const readLine = document.createElement("div");
  readLine.classList.add("read-line");

  const readText = document.createElement("span");
  readText.textContent = "Last Read: ";

  const readYet = document.createElement("span");
  readYet.classList.add("last-read");
  readYet.textContent = `${lastRead}`;

  const lineBreakFour = document.createElement("br");
  //

  //bottom border
  const border = document.createElement("div");
  border.classList.add("mdl-card__actions");
  border.classList.add("mdl-card--border");

  const deleteButton = document.createElement("a");
  deleteButton.classList.add("mdl-button");
  deleteButton.classList.add("mdl-button--colored");
  deleteButton.classList.add("mdl-js-button");
  deleteButton.classList.add("mdl-js-ripple-effect");
  deleteButton.classList.add("delete-button");
  deleteButton.dataset.key = `${title}`;
  deleteButton.textContent = "Delete";

  const container = document.querySelector(".mdl-grid");

  container.appendChild(cell);
  cell.appendChild(card);
  card.appendChild(cardTitleExpand);

  cardTitleExpand.appendChild(cardTitleText);

  card.appendChild(supportingText);

  supportingText.appendChild(authorLine);
  authorLine.appendChild(authorText);
  authorLine.appendChild(authorName);
  authorLine.appendChild(lineBreak);

  supportingText.appendChild(publishedLine);
  publishedLine.appendChild(publishedText);
  publishedLine.appendChild(publishedDate);
  publishedLine.appendChild(lineBreakTwo);

  supportingText.appendChild(pagesLine);
  pagesLine.appendChild(pagesText);
  pagesLine.appendChild(pagesNum);
  pagesLine.appendChild(lineBreakThree);

  supportingText.appendChild(readLine);
  readLine.appendChild(readText);
  readLine.appendChild(readYet);
  readLine.appendChild(lineBreakFour);

  card.appendChild(border);
  border.appendChild(deleteButton);
}

function render() {
  myLibrary.forEach(function(element) {
    create(element);
  });
  return addEvents();
}

function addEvents() {
  let buttons = document.querySelectorAll(".delete-button");
  buttons.forEach(buttons => {
    buttons.addEventListener("click", e => {
      console.table(e.target);
    });
  });
}

function deleteUI() {
  const container = document.querySelector(".mdl-grid");
  document
    .querySelectorAll("body > div > div > main > div > div")
    .forEach(function(element) {
      container.removeChild(element);
    });
}

function clearForm() {
  document.querySelector("#myform").reset();
  let title = document.querySelector("#title-container");
  let pages = document.querySelector("#pages-container");
  let author = document.querySelector("#author-container");
  title.classList.remove("is-dirty");
  pages.classList.remove("is-dirty");
  author.classList.remove("is-dirty");
}

(function() {
  "use strict";
  let dialog = document.querySelector("#modal-example");
  let closeButton = dialog.querySelector("#close");
  let addButton = dialog.querySelector("#add");
  let showButton = document.querySelector("#show-modal-example");
  if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  let closeClickHandler = function(event) {
    dialog.close();
  };
  let showClickHandler = function(event) {
    dialog.showModal();
  };
  let addClickHandler = function() {
    let title = document.querySelector("#title").value;
    let pages = document.querySelector("#pages").value;
    let author = document.querySelector("#author").value;
    let published = document.querySelector("#published").value;
    let lastRead = document.querySelector("#lastread").value;
    addBookToLibrary(createBook(title, pages, author, published, lastRead));
    deleteUI();
    clearForm();
    render();
  };
  showButton.addEventListener("click", showClickHandler);
  closeButton.addEventListener("click", closeClickHandler);
  addButton.addEventListener("click", addClickHandler);
})();

addBookToLibrary(
  createBook("TheHobbit", 310, "J. R. R. Tolkien", "1937-09-21", "2012-01-08")
);
addBookToLibrary(
  createBook(
    "The Fellowship of the Ring",
    423,
    "J. R. R. Tolkien",
    "1954-07-29",
    "2012-04-30"
  )
);
addBookToLibrary(
  createBook(
    "The Two Towers",
    352,
    "J. R. R. Tolkien",
    "1954-07-29",
    "2012-07-10"
  )
);
addBookToLibrary(
  createBook(
    "The Return of the King",
    416,
    "J. R. R. Tolkien",
    "1954-07-29",
    "2012-10-03"
  )
);

render();
