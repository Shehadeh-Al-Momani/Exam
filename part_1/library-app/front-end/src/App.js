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

