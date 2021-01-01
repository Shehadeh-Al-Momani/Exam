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


