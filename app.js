const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();

const port = process.env.PORT || 5000;


app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();