import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";

const CreateBook = () => {

  return (
    <div>
      <input
        placeholder="title"
        name="title"
      ></input>

      <input
        placeholder="author"
        name="author"
        onChange={(e)}
      ></input>

      <input
        placeholder="pages"
        name="pages"
        onChange={(e)}
      ></input>

      <input
        placeholder="publisher"
        name="publisher"
        onChange={(e)}
      ></input>

      <button> submit</button>
    </div >
  );

}

export default CreateBook;

