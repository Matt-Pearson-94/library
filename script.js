class newBook {
    constructor(name, author, numOfPages, isRead) {
        this.name = name
        this.author = author
        this.numOfPages = numOfPages
        this.isRead = isRead
    }
}

const book1 = new newBook('Harry Potter', 'J.K Rowling', 325, 'Yes')

console.log(book1)

const form = document.querySelector('.form')
const addBook = document.querySelector('.addbookbutton')

addBook.addEventListener('click', event => {
    form.style.display = 'block'
})