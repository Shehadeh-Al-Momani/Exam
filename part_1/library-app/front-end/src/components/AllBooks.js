import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import axios from "axios";

const CreateBook = () => {
  const [books, setBooks] = useState('');

  useEffect(() => { allBooks() }, [])
  const allBooks = () => {
    axios
      .get('http://localhost:3000/books')
      .then((res) => {
        setBooks( res.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };
}
return (
  <Router>
    {
      books.map((item, i) => {
        return <Link to={`library/${id}`} key={i}>
          <div>
            <div>{item.title}</div>
            <div>{item.author}</div>
          </div>
        </Link>
      })
    }
  </Router >
);

export default CreateBook;

