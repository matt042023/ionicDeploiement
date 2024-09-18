const mongoose = require('mongoose');
require("dotenv").config();

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("Connect to the database"))
        .catch(err => console.log("Error: " + err.message));
}

module.exports = connectDatabase;