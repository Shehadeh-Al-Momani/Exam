import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";

const CreateBook = () => {
const [title,setTitle] = useState('');
const [author,setAuthor] = useState('');

const allBooks = () => {
    axios
      .get('http://localhost:5000/tasks')
      .then((response) => {
        this.setState({ tasks: response.data });
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };
}
  return (
    <div>
    
    </div >
  );

}

export default CreateBook;

