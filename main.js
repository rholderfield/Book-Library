let myLibrary = [
  {
    title: "The Hobbit",
    pages: 310,
    author: "J. R. R. Tolkien",
    published: "21 September 1937",
    hasRead: false
  },
  {
    title: "The Fellowship of the Ring",
    pages: 423,
    author: "J. R. R. Tolkien",
    published: "29 July 1954",
    hasRead: false
  },
  {
    title: "The Two Towers",
    pages: 352,
    author: "J. R. R. Tolkien",
    published: "11 November 1954",
    hasRead: false
  },
  {
    title: "The Return of the King",
    pages: 416,
    author: "J. R. R. Tolkien",
    published: "20 October 1955",
    hasRead: false
  }
];

function Book(title, pages, author, published, hasRead = false) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.published = published;
  this.hasRead = hasRead;
}

Book.prototype.getTitle = function getTitle() {
  return this.title;
};

Book.prototype.setTitle = function setTitle(value) {
  this.title = value;
};

Book.prototype.getPages = function getPages() {
  return this.pages;
};

Book.prototype.setPages = function setPages(value) {
  this.pages = value;
};

Book.prototype.getAuthor = function getAuthor() {
  return this.author;
};

Book.prototype.setAuthor = function setAuthor(value) {
  this.author = value;
};

Book.prototype.getPublished = function getPublished() {
  return this.published;
};

Book.prototype.setPublished = function setPublished(value) {
  this.published = value;
};

Book.prototype.getHasRead = function getHasRead() {
  return this.hasRead;
};

Book.prototype.setHasRead = function setHasRead(value) {
  this.hasRead = value;
};

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function createBook(title, pages, author, hasRead) {
  let newBook = new Book(title, pages, author, hasRead);
  return newBook;
}

console.log(myLibrary);

function create(book) {
  const { title, pages, author, published, hasRead } = book;

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
  readText.textContent = "Read Yet? ";

  const readYet = document.createElement("span");
  readYet.classList.add("read-yet");
  readYet.textContent = `${hasRead}`;

  const lineBreakFour = document.createElement("br");
  //

  //bottom border
  const border = document.createElement("div");
  border.classList.add("mdl-card__actions");
  border.classList.add("mdl-card--border");

  const editButton = document.createElement("a");
  editButton.classList.add("mdl-button");
  editButton.classList.add("mdl-button--colored");
  editButton.classList.add("mdl-js-button");
  editButton.classList.add("mdl-js-ripple-effect");
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("a");
  deleteButton.classList.add("mdl-button");
  deleteButton.classList.add("mdl-button--colored");
  deleteButton.classList.add("mdl-js-button");
  deleteButton.classList.add("mdl-js-ripple-effect");
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
  border.appendChild(editButton);
  border.appendChild(deleteButton);
}

function buildUI() {
  myLibrary.forEach(function(element) {
    return create(element);
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

(function() {
  "use strict";
  var dialog = document.querySelector("#modal-example");
  var closeButton = dialog.querySelector("button");
  var showButton = document.querySelector("#show-modal-example");
  if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  var closeClickHandler = function(event) {
    dialog.close();
  };
  var showClickHandler = function(event) {
    dialog.showModal();
  };
  showButton.addEventListener("click", showClickHandler);
  closeButton.addEventListener("click", closeClickHandler);
})();

buildUI();
