// Book Class: Represents  a book
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Libro Uno',
                author: 'Juan Pérez',
                isbn: '1234567'
            },
            {
                title: 'Libro Dos',
                author: 'Jane Doe',
                isbn: '7654321'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        // Nota: Selecciona el <tbody id="book-list">
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">
                x</a></td>
        `;
        list.appendChild(row);
    }
}


// Store Class: Handles Storage



// Event: Display Books
document.addEventListener('DOMContenLoaded', UI.displayBooks());


// Event: Add a Book
// Nota: Selecciona form, le agrega un addEventListener on submite
    // y añade arrow function
document.querySelector('#book-form').addEventListener('submit', (e) => {
            
            e.preventDefault();
            // Get form values
            const title = document.querySelector("#title").value;
            const author = document.querySelector("#author").value;
            const isbn = document.querySelector("#isbn").value;

            // Instantiate book
            const book = new Book(title, author, isbn);

            console.log(book);
            // Add book to UI
            UI.addBookToList(book);

        });


// Event: Remove a Book.

