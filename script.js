const mainContents = document.querySelector('.main-contents-container')
const popupContainer = document.querySelector('.pop-up-container')
const popupBlockBackground = document.querySelector('.pop-up-background') 
const closeButton = document.querySelector('.close')
const totalBooks = document.querySelector('#total-books')
const  totalReadBooks = document.querySelector('#read-books')
const totalNotReadBooks = document.querySelector('#not-read-count')
let totalBookCount = 0
let totalReadCount = 0
let totalNotReadCount = 0

const myLibrary = [
    // {
    //     author: 'J.K. Rowling',
    //     title: 'Harry Potter and the Deathly Hallows',
    //     numberOfPages: '500',
    //     haveRead: 'on'
    // }, {
    //     author: 'Stephen King',
    //     title: 'The Shining',
    //     numberOfPages: '250',
    //     haveRead: 'on'
    // }, {
    //     author: 'Michael Scott',
    //     title: 'Threat Level Midnight',
    //     numberOfPages: '350',
    //     haveRead: 'on'
    // },
];

let myLibraryLength = myLibrary.length

function createBook() {
    if (myLibrary.length >= 11) {
        alert('Maximum books added! Go touch some grass...')
    } else {
        for (let i = myLibraryLength; i < myLibrary.length; i++) {
                const newCard = document.createElement('div')
                const authorName = document.createElement('div')
                const bookTitle = document.createElement('div')
                const numPages = document.createElement('div')
                const haveRead = document.createElement('div')
                const removeButton = document.createElement('button')
                removeButton.textContent = 'X'
                removeButton.classList.add('remove-button')
                newCard.classList.add('book-card')
                myLibrary[i].index = i
                authorName.textContent = `Author: ${myLibrary[i].author}`
                bookTitle.textContent = `Title: ${myLibrary[i].title}`
                numPages.textContent = `Number of pages: ${myLibrary[i].numberOfPages}`
                haveRead.setAttribute('id', 'haveRead')
                haveRead.classList.add('have-read')
                removeButton.setAttribute('index', i)
                myLibrary[i].haveRead === 'on' ? haveRead.textContent = 'Read' : haveRead.textContent = 'Not Read'
                myLibrary[i].haveRead === 'on' ? haveRead.style.backgroundColor = 'rgb(123, 255, 123)' : haveRead.style.backgroundColor = 'rgb(255, 94, 94)'
                mainContents.appendChild(newCard)
                newCard.append(removeButton)
                newCard.appendChild(authorName)
                newCard.appendChild(bookTitle)
                newCard.appendChild(numPages)
                newCard.appendChild(haveRead)
                myLibraryLength ++
                readButton = document.querySelectorAll('.have-read')
                readButtonArray = Array.from(readButton)
                totalBookCount ++
                totalBooks.textContent = totalBookCount
                console.log(myLibrary)
                readBooksCount()
        }
    }
}

createBook()

function addBook() {
    popupContainer.style.display = 'block'
    popupBlockBackground.style.display = 'block'
}

closeButton.addEventListener('click', close => {
    popupContainer.style.display = 'none'
    popupBlockBackground.style.display = 'none'
})

document.getElementById('form-data').addEventListener('submit', function(event) {
    event.preventDefault()
    console.log(event.target)
    const formData = new FormData(event.target)
    const formObject = Object.fromEntries(formData.entries())
    myLibrary.push(formObject)
    popupContainer.style.display = 'none'
    popupBlockBackground.style.display = 'none'
    createBook()
})

document.addEventListener('click', e => {
    console.log(e.target)
    if (e.target.matches('.have-read')) {
        e.target.textContent === 'Read' ? (e.target.textContent = 'Not Read') && (e.target.style.backgroundColor = 'rgb(255, 94, 94)') : (e.target.textContent = 'Read' ) && (e.target.style.backgroundColor = 'rgb(123, 255, 123)')
        readBooksCount()
    } else if (e.target.getAttribute('index')) {
        console.log(e.target.getAttribute('index'))
        myLibrary.splice(Number(e.target.getAttribute('index')),1)
        console.log(myLibrary)
        myLibraryLength--
        totalBookCount--
        e.target.parentElement.style.display = 'none'

    }
})

function readBooksCount() {
    totalReadCount = 0
    myLibrary.forEach(item => {
        item.haveRead === 'on' ? totalReadCount ++ : console.log('no')
        totalReadBooks.textContent = totalReadCount
        totalNotReadCount = totalBookCount - totalReadCount
        totalNotReadBooks.textContent = totalNotReadCount
    })
}
