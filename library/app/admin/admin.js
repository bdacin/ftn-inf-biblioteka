"use strict"

class Book {
    constructor(id, title, date, url, description, popularity) {
        this.id = id
        this.title = title
        this.date = date
        this.url = url
        this.description = description
        this.popularity = popularity
    }
}

// Niz knjiga 
let books = []

if (localStorage.getItem("books")) {

    books = JSON.parse(localStorage.getItem("books"))

} else {

    books = [
        new Book("B1234","Knjiga 1","2022","assets/images/book1.jpg","Opis knjige 1",4),
        new Book("B5678","Knjiga 2","2021","assets/images/book2.jpg","Opis knjige 2",5),
        new Book("B9101","Knjiga 3","2020","assets/images/book3.jpg","Opis knjige 3",3),
        new Book("B1121","Knjiga 4","2019","assets/images/book4.jpg","Opis knjige 4",2),
        new Book("B3141","Knjiga 5","2018","assets/images/book5.jpg","Opis knjige 5",5)
    ]

    localStorage.setItem("books", JSON.stringify(books))
}

// Selektor
const bookList = document.querySelector("#book-list")

// Render knjiga
for (let book of books) {

    const div = document.createElement("div")

    const img = document.createElement("img")
    img.src = book.url

    const title = document.createElement("h2")
    title.textContent = book.title

    const desc = document.createElement("p")
    desc.textContent = book.description

    const date = document.createElement("small")
    date.textContent = "Datum štampanja: " + book.date

    const pop = document.createElement("p")
    pop.textContent = "Popularnost: " + "★".repeat(book.popularity)

    const button = document.createElement("button")
    button.textContent = "Obriši"

    button.addEventListener("click", function () {

        books = books.filter(b => b.id !== book.id)

        localStorage.setItem("books", JSON.stringify(books))

        location.reload()
    })

    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(desc)
    div.appendChild(date)
    div.appendChild(pop)
    div.appendChild(button)

    bookList.appendChild(div)
}