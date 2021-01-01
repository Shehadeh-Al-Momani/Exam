import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState();
  const [publisher, setPublisher] = useState('');

  useEffect(() => { add() }, [])


  add = () => {
    axios
      .post('http://localhost:3000/books', { title, author, pages, publisher })
      .then((response) => {
        console.log('added')
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };
  return (
    <div>
      <input
        placeholder="title"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>

      <input
        placeholder="author"
        name="author"
        onChange={(e) => setAuthor(e.target.value)}
      ></input>

      <input
        placeholder="pages"
        name="pages"
        onChange={(e) => setPages(e.target.value)}
      ></input>

      <input
        placeholder="publisher"
        name="publisher"
        onChange={(e) => setPublisher(e.target.value)}
      ></input>

      <button> submit</button>
    </div >
  );

}

export default CreateBook;

