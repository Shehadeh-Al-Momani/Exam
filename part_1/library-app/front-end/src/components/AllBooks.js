import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";

const CreateBook = () => {
  const [books, setBooks] = useState('');

  useEffect(() => { allBooks() }, [])
  const allBooks = () => {
    axios
      .get('http://localhost:3000/books')
      .then((res) => {
        this.setBooks({ tasks: res.data });
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };
}
return (
  <div>
    {
      books.map((item, i) => {
        return <div key={i}>
          <div>
            <div>{item.title}</div>
            <div>{item.author}</div>
          </div>
        </div>
      })
    }
  </div >
);

export default CreateBook;

