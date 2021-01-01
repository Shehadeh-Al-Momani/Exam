const express = require("express");

const app = express();
const mainRouter = require('./routes');

const db = require('./db');

app.use(express.json());
app.use(mainRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});