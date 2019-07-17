const express = require('express');
const sequelize = require('./configs/sequelize');
const bodyParser = require('body-parser');

const app = express();

const Books = require('./models/Books');

const booksRouter = require('./routes/Books');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(booksRouter);

app.use('/books',booksRouter);

app.listen(3101, () => {
    console.log('server started');
    sequelize.sync();
})