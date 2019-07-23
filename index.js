const express = require('express');
const sequelize = require('./configs/sequelize');
const bodyParser = require('body-parser');

const app = express();

const Books = require('./models/Books');
const Categorys = require('./models/Categorys');
const Orders = require('./models/Orders');
const User = require('./models/User');

const booksRouter = require('./routes/Books');
const categorysRouter = require('./routes/Categorys');
const ordersRouter = require('./routes/Orders');
const userRouter = require('./routes/User');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(booksRouter);
app.use(categorysRouter);
app.use(ordersRouter);
app.use(userRouter);

app.use('/books',booksRouter);
app.use('/categorys',categorysRouter);
app.use('/orders', ordersRouter);
app.use('/user', userRouter);

app.listen(3101, () => {
    console.log('server started');
    sequelize.sync();
})