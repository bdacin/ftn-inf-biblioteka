"use strict"

// fiksiran niz iznajmljenih knjiga
let rentedBooks = [
 { id: "B1234", title: "Knjiga 1" },
 { id: "B5678", title: "Knjiga 2" }
]

const table = document.querySelector("#rented-books")

for (let book of rentedBooks) {

 const tr = document.createElement("tr")

 const tdId = document.createElement("td")
 const tdTitle = document.createElement("td")
 const tdAction = document.createElement("td")

 tdId.textContent = book.id
 tdTitle.textContent = book.title

 const button = document.createElement("button")
 button.textContent = "Vrati"

 button.addEventListener("click", function () {

  rentedBooks = rentedBooks.filter(b => b.id !== book.id)

  tr.remove()
 })

 tdAction.appendChild(button)

 tr.appendChild(tdId)
 tr.appendChild(tdTitle)
 tr.appendChild(tdAction)

 table.appendChild(tr)
}