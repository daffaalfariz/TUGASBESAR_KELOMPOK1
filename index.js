const express = require('express');
const sequelize = require('./configs/sequelize');
const bodyParser = require('body-parser');

const app = express();

const Books = require('./models/Books');
const Categorys = require('./models/Categorys');

const booksRouter = require('./routes/Books');
const categorysRouter = require('./routes/Categorys');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(booksRouter);
app.use(categorysRouter);

app.use('/books',booksRouter);
app.use('/categorys',categorysRouter);

app.listen(3101, () => {
    console.log('server started');
    sequelize.sync();
})