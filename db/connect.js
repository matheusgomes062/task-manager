const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');

const connectDB = async (url) => {
    return mongoose.connect(url);
};

module.exports = connectDB;