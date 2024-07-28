const mainContents = document.querySelector('.main-contents-container')


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

myLibrary.forEach(item => {
    const newCard = document.createElement('div')
    const authorName = document.createElement('div')
    const bookTitle = document.createElement('div')
    // const  = document.createElement('div')
    newCard.classList.add('book-card')


    mainContents.appendChild(newCard)
})


// addBook()