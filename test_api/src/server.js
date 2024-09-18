const express = require('express');
const cors = require('cors');
require("dotenv").config();

const productRoutes = require('./routes/ProductRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/product', productRoutes);

const connectDatabase = require('./config/database');

connectDatabase();

app.get('/', (req, res, next) => {
    res.status(200).json({message: "Welcome to the app"});
})

app.listen(process.env.PORT, () => {
    console.log("App run on port 3000");
})

module.exports = app