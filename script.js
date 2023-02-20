let myLibrary = [];

function Book(author, title, pages, isRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
}

const book1 = new Book('J.K. Rowling', 'Harry Potter and the Deathly Hallows', 501, true)
const book2 = new Book('Stephen King', 'The Shining', 253, false)

function addBookToLibrary() {
  catalog.appendChild(book)
    
}

console.log(book1)
myLibrary.push(book1)
myLibrary.push(book2)
console.log(myLibrary)

console.log(myLibrary[1])

const button = document.querySelector('.add-book')
const catalog = document.querySelector('.book-container')
const main = document.querySelector('.main')
const book = document.createElement('div')
book.classList.add('books')

document.querySelector('.add-book').addEventListener("click", addBookToLibrary)

function getBook() {
    alert('hello world')
}