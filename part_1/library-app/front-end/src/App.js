import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";
import './App.css';
import CreateBook from './components/CreateBooks';
import AllBooks from './components/AllBooks';
import Book from './components/Book';

const App = () => {

  return (
    <Router>
      <Route exact path='/library/create_book'> <CreateBook></CreateBook></Route>
      <Route exact path='/library'> <AllBooks></AllBooks></Route>
      <Route exact path='/library/:book_id' render={(props) => { <Book {...props}/> }} />
    </Router >
  );

}

export default App;

/*


Q9) When the `submit` button is clicked (from Q6) it should add a new book in the database, by sending a request to the correct endpoint in the backend.

Q10) When rendering the book list (from Q7) add a delete button next to each book, that when clicked will delete the corresponding book from the database and the state.

*/