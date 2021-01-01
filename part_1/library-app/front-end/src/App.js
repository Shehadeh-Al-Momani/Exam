import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import axios from "axios";
import './App.css';

const App = ()=> {

  return(
      <Router>
        <Route exact path = '/library/create_book'></Route>
      </Router >
    );
 
}

export default App;

/*

Q6) Add a frontend route `/library/create_book` to render the inputs that correspond to the book's attributes 
and a `submit` button (without functionality).

Q7) Add a frontend route `/library` that will render all the books (title and author) from the database.

Q8) Add a frontend route `/library/:book_id` that will render a specific book details from the database.

Q9) When the `submit` button is clicked (from Q6) it should add a new book in the database, by sending a request to the correct endpoint in the backend.

Q10) When rendering the book list (from Q7) add a delete button next to each book, that when clicked will delete the corresponding book from the database and the state.

*/