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
                title: 'Book One',
                author: 'John Doe',
                isbn: '1234567'
            },
            {
                title: 'Book two',
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

    static deleteBook(el){
        // Nota: verifica si el e.target contiene un elemento 
        // con la class="delete". En éste caso debe ser el botón
        if(el.classList.contains('delete')){
            // Nota: Se utiliza 2 veces parentElement para seleccionar
            //     el <tr> a eliminar, ya que el botón se encuentra 
            // anidado en tr/td/a:
            //     <tr><td><a href="" class="delete">x</a></td></tr>
            el.parentElement.parentElement.remove()
        }
    }

    // **********************************
    // Continuar en minuto 36:20

    Video: JS Booklist App No Frameworks
    https://youtu.be/JaMCxVWtW58

    // ************************************
    // **********************************


    // Nota: Recibe 2 parámetros. El texto del mensaje y
    // la class de Bootstrap para background color del div
    // Se crea div desde cero
    static showFormAlert(message, bgColor) {
        const div = document.createElement('div');
        div.className = `alert alert-${bgColor}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        // Nota: Se inserta <div> antes de <form>
        container.insertBefore(div, form);
    }

    // Nota: Elimina el contenido de <form> después de hacer submit
    static clearFields(){
        // document.querySelector('title').value = '';
        // document.querySelector('author').value = '';
        // document.querySelector('isbn').value = '';
        document.querySelector('#book-form').reset();
    }
 
}


// Store Class: Handles Storage


//
// Event: Display Books
document.addEventListener('DOMContenLoaded', UI.displayBooks());

//
// Event: Add a Book
// Nota: Selecciona form, le agrega un addEventListener on submit
    // y añade arrow function
    // Se llama a: UI.addBookToList
    // Se limpia <form> después de hacer submit
document.querySelector('#book-form').addEventListener('submit', (e) => {
            
            e.preventDefault();
            // Get form values
            const title = document.querySelector("#title").value;
            const author = document.querySelector("#author").value;
            const isbn = document.querySelector("#isbn").value;

            // Validate data
            // Nota: Valida que no sean campos vacíos
            if(title ==='' || author === '' || isbn === ''){
                alert('Please fill in all fields');
            } else {
                // Instantiate book
                const book = new Book(title, author, isbn);
            }

            // Add book to UI
            UI.addBookToList(book);

            // Clear <form> fields
            // Nota: Elimina el contenido de <form> después
            // de hacer submit
            UI.clearFields();
        });


//        
// Event: Remove a Book.
//

// Nota: Se usará la técnica de event propagation, al
// seleccionar <tbody id="book-list">
document.querySelector('#book-list').addEventListener('click', (e) => {
    // Nota: e.target regresa el elemento sobre el que se realizó click
    UI.deleteBook(e.target);
    
});