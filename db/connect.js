const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');

const connectionString = process.env.DATABASE_URL;

mongoose.connect(connectionString, {
}).then(() => {
    console.log('Database connected');
}).catch((error) => {
    console.log(error);
});
