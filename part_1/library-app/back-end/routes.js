const mysql = require('mysql12');
const db = require('./db')

mainRouter.post('/books', (req, res) => {
    const { title, author, pages, publisher } = req.body;
    const query = `INSERT INTO books (title, author, pages, publisher,published_at) VALUES (?,?,?,?,?)`;
    const data = [title, author, pages, publisher, new Date];
    db.query(query, data, (err, result) => {
        if (err) throw err;
        res.json("Succesfully added new book");
    })
})

mainRouter.get('/books', (req, res) => {
    const query = `SELECT * FROM books`;
    db.query(query, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

mainRouter.get('/books/:book_id', (req, res) => {
    const { book_id } = req.params;
    const query = `SELECT * FROM books WHERE id = ?`;
    const data = book_id;
    db.query(query, data, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

mainRouter.delete('/books/:book_id', (req, res) => {
    const { book_id } = req.params;
    const query = `DELETE FROM books WHERE id = ?`;
    const data = book_id;
    db.query(query, data, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

/*

Q5) Create an API `/books/:book_id` to delete a specific book from the database

Q6) Add a frontend route `/library/create_book` to render the inputs that correspond to the book's attributes and a `submit` button (without functionality).

Q7) Add a frontend route `/library` that will render all the books (title and author) from the database.

Q8) Add a frontend route `/library/:book_id` that will render a specific book details from the database.

Q9) When the `submit` button is clicked (from Q6) it should add a new book in the database, by sending a request to the correct endpoint in the backend.

Q10) When rendering the book list (from Q7) add a delete button next to each book, that when clicked will delete the corresponding book from the database and the state.

*/
