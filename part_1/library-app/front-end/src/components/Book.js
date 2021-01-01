import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";

const CreateBook = (props) => {
  const [book, setBook] = useState('');

  useEffect(() => { allBooks() }, [props.match.params.book_id])
  const allBooks = () => {
    axios
      .get(`http://localhost:3000/books/${props.match.params.book_id}`)
      .then((res) => {
        book(res.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };
}
return (
  <Router>
    <div>{book.title}</div>
    <div>{book.author}</div>
    <div>{book.pages}</div>
    <div>{book.publisher}</div>
  </Router >
);

export default CreateBook;

