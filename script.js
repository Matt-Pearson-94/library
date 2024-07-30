const mainContents = document.querySelector('.main-contents-container')
const popupContainer = document.querySelector('.pop-up-container')
const popupBlockBackground = document.querySelector('.pop-up-background') 
const closeButton = document.querySelector('.close')

const myLibrary = [
    {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Deathly Hallows',
        numberOfPages: '500',
        haveRead: true
    }, {
        author: 'Stephen King',
        title: 'The Shining',
        numberOfPages: '250',
        haveRead: false
    }, {
        author: 'Michael Scott',
        title: 'Threat Level Midnight',
        numberOfPages: '350',
        haveRead: true
    },
];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function createBook() {
    myLibrary.forEach(item => {
        const newCard = document.createElement('div')
        const authorName = document.createElement('div')
        const bookTitle = document.createElement('div')
        const numPages = document.createElement('div')
        const tickbox = document.createElement('input')
        const tickboxDes = document.createElement('label')
        newCard.classList.add('book-card')
        authorName.textContent = `Author: ${item.author}`
        bookTitle.textContent = `Title: ${item.title}`
        numPages.textContent = `Number of pages: ${item.numberOfPages}`
        tickbox.setAttribute('id', 'have-read')
        tickbox.type = 'checkbox'
        tickboxDes.setAttribute('for', 'have-read')
        tickboxDes.textContent = 'Have read: '
        mainContents.appendChild(newCard)
        newCard.appendChild(authorName)
        newCard.appendChild(bookTitle)
        newCard.appendChild(numPages)
        newCard.appendChild(tickboxDes)
        newCard.appendChild(tickbox)
    })
}

function addBook() {
    popupContainer.style.display = 'block'
    popupBlockBackground.style.display = 'block'
}

closeButton.addEventListener('click', close => {
    popupContainer.style.display = 'none'
    popupBlockBackground.style.display = 'none'
})


function removeBook() {
    myLibrary.splice(0, 1)
    console.log(myLibrary)
    createBook()
}