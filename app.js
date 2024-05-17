const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();

const tasks = require('./routes/tasks');

const port = process.env.PORT || 5000;


app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();